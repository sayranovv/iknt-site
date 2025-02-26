<script setup lang="ts">
import * as THREE from 'three'
import Stats from 'three/addons/libs/stats.module.js'
import { onMounted, ref, defineEmits } from 'vue'

let camera: THREE.PerspectiveCamera
let scene: THREE.Scene
let renderer: THREE.WebGLRenderer
let stats: Stats | null = null
let material: THREE.PointsMaterial
let mouseX = 0,
  mouseY = 0
let windowHalfX: number
let windowHalfY: number
const isClient = ref(false)

const emit = defineEmits(['loading', 'loaded'])
const isLoading = ref(true)

onMounted(() => {
  emit('loading', true)
  isClient.value = true

  if (typeof window === 'undefined') return

  windowHalfX = window.innerWidth / 2
  windowHalfY = window.innerHeight / 2

  init()
  isLoading.value = false
  emit('loaded')
})

function init() {
  camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 2, 2000)
  camera.position.z = 1000

  scene = new THREE.Scene()
  scene.fog = new THREE.FogExp2(0x000000, 0.001)

  const geometry = new THREE.BufferGeometry()
  const vertices = []

  const sprite = new THREE.TextureLoader().load('three/crystal.png')

  for (let i = 0; i < 10000; i++) {
    const x = 2000 * Math.random() - 1000
    const y = 2000 * Math.random() - 1000
    const z = 2000 * Math.random() - 1000
    vertices.push(x, y, z)
  }

  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))

  material = new THREE.PointsMaterial({
    size: 35,
    sizeAttenuation: true,
    map: sprite,
    alphaTest: 0.5,
    transparent: true
  })
  material.color.setHSL(1.0, 0.3, 0.7)

  const particles = new THREE.Points(geometry, material)
  scene.add(particles)

  renderer = new THREE.WebGLRenderer({ alpha: true })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setAnimationLoop(animate)

  renderer.domElement.style.position = 'fixed'
  renderer.domElement.style.top = '0'
  renderer.domElement.style.left = '0'
  renderer.domElement.style.width = '100%'
  renderer.domElement.style.height = '100%'
  renderer.domElement.style.zIndex = '-11' // Делаем фоном
  renderer.domElement.style.pointerEvents = 'none'
  document.body.appendChild(renderer.domElement)

  stats = new Stats()

  document.body.style.touchAction = 'none'
  document.body.addEventListener('pointermove', onPointerMove)

  window.addEventListener('resize', onWindowResize)
}

function onWindowResize() {
  windowHalfX = window.innerWidth / 2
  windowHalfY = window.innerHeight / 2

  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()

  renderer.setSize(window.innerWidth, window.innerHeight)
}

function onPointerMove(event: PointerEvent) {
  if (!isClient.value || event.isPrimary === false) return
  mouseX = event.clientX - windowHalfX
  mouseY = event.clientY - windowHalfY
}

function animate() {
  render()
  if (stats) stats.update()
}

function render() {
  const time = Date.now() * 0.00005

  camera.position.x += (mouseX - camera.position.x) * 0.05
  camera.position.y += (-mouseY - camera.position.y) * 0.05

  camera.lookAt(scene.position)

  const h = ((360 * (1.0 + time)) % 360) / 360
  material.color.setHSL(h, 0.5, 0.5)

  renderer.render(scene, camera)
}
</script>

<template>
  <div
    class="fixed top-0 left-0 w-full h-full -z-10 bg-black bg-opacity-75 pointer-events-none"
  ></div>
</template>

<style scoped></style>
