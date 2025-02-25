<script setup lang="ts">
import * as THREE from 'three'
import Stats from 'three/addons/libs/stats.module.js'
import { FBXLoader } from 'three/addons/loaders/FBXLoader.js'
import { defineEmits, onMounted, ref } from 'vue'

const manager = new THREE.LoadingManager()

let camera, scene, renderer, stats, object, loader, guiMorphsFolder
let mixer

let windowHalfX: number
let windowHalfY: number
const isClient = ref(false)

const clock = new THREE.Clock()

const params = {
  asset: 'Samba Dancing'
}

const assets = ['Samba Dancing', 'morph_test']

const container = ref<HTMLElement | null>(null) // создаем реф для контейнера

onMounted(() => {
  isClient.value = true

  if (typeof window === 'undefined') return

  windowHalfX = window.innerWidth / 2
  windowHalfY = window.innerHeight / 2

  init()
})

function init() {
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000)
  camera.position.set(100, 200, 300)

  scene = new THREE.Scene()
  scene.background = null
  scene.fog = new THREE.Fog(0xa0a0a0, 200, 1000)

  const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 5)
  hemiLight.position.set(0, 200, 0)
  scene.add(hemiLight)

  const dirLight = new THREE.DirectionalLight(0xffffff, 5)
  dirLight.position.set(0, 200, 100)
  dirLight.castShadow = true
  dirLight.shadow.camera.top = 180
  dirLight.shadow.camera.bottom = -100
  dirLight.shadow.camera.left = -120
  dirLight.shadow.camera.right = 120
  scene.add(dirLight)

  loader = new FBXLoader(manager)
  loadAsset(params.asset)

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setAnimationLoop(animate)
  renderer.shadowMap.enabled = true

  if (container.value) {
    container.value.appendChild(renderer.domElement)
  }

  window.addEventListener('resize', onWindowResize)

  stats = new Stats()
}

function loadAsset(asset) {
  loader.load(
    'models/Samba_Dancing.fbx',
    function (group) {
      if (object) {
        object.traverse(function (child) {
          if (child.material) {
            const materials = Array.isArray(child.material) ? child.material : [child.material]
            materials.forEach(material => {
              if (material.map) material.map.dispose()
              material.dispose()
            })
          }

          if (child.geometry) child.geometry.dispose()
        })

        scene.remove(object)
      }

      object = group

      object.position.set(190, 80, 0)
      object.scale.set(1.2, 1.2, 1.2)

      if (object.animations && object.animations.length) {
        mixer = new THREE.AnimationMixer(object)
        const action = mixer.clipAction(object.animations[0])
        action.play()
      } else {
        mixer = null
      }

      object.traverse(function (child) {
        if (child.isMesh) {
          child.material.color.set(0x150080)
          child.castShadow = true
          child.receiveShadow = true

          if (child.morphTargetDictionary) {
            guiMorphsFolder.show()
            const meshFolder = guiMorphsFolder.addFolder(child.name || child.uuid)
            Object.keys(child.morphTargetDictionary).forEach(key => {
              meshFolder.add(
                child.morphTargetInfluences,
                child.morphTargetDictionary[key],
                0,
                1,
                0.01
              )
            })
          }
        }
      })

      scene.add(object)
    },
    undefined,
    function (error) {
      console.error('Error loading model:', error)
    }
  )
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()

  renderer.setSize(window.innerWidth, window.innerHeight)
}

function animate() {
  const delta = clock.getDelta()

  if (mixer) mixer.update(delta)

  renderer.render(scene, camera)

  stats.update()
}
</script>

<template>
  <div ref="container" class="absolute hidden tablet:block top-0 left-0 w-full h-full z-0"></div>
</template>

<style scoped></style>
