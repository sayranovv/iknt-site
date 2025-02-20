<script setup>
import { onMounted, ref } from 'vue'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const container = ref(null)

onMounted(() => {
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setSize(450, 450)
  container.value.appendChild(renderer.domElement)

  const light = new THREE.DirectionalLight(0xffffff, 1)
  const lightHelper = new THREE.DirectionalLightHelper(light, 1, 0xffffff)
  light.position.set(-30, 30, 10)
  scene.add(light)

  const directionalLight = new THREE.DirectionalLight(0x0000ff, 1)
  const lightHelper1 = new THREE.DirectionalLightHelper(directionalLight, 1, 0xffffff)

  directionalLight.position.set(0, 16, -16)
  scene.add(directionalLight)

  const loader = new GLTFLoader()
  let model
  loader.load(
    '/model.glb',
    gltf => {
      model = gltf.scene
      model.scale.set(28, 28, 28)
      scene.add(model)
    },
    undefined,
    error => {
      console.error('Ошибка загрузки модели', error)
    }
  )

  camera.position.z = 30
  camera.position.y = 14

  function animate() {
    requestAnimationFrame(animate)
    if (model) {
      model.rotation.y += 0.01
    }
    renderer.render(scene, camera)
  }
  animate()
})
</script>

<template>
  <div ref="container" class="overflow-hidden"></div>
</template>

<style></style>
