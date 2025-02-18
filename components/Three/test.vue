<script setup>
import { onMounted, ref } from 'vue'
import * as THREE from 'three'

const sceneContainer = ref(null)

onMounted(() => {
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
  const renderer = new THREE.WebGLRenderer({ alpha: true })

  renderer.setSize(400, 400)
  renderer.setClearColor(0x000000, 0) // Прозрачный фон
  sceneContainer.value.appendChild(renderer.domElement)

  // Создаем 3D-объект (тор)
  const geometry = new THREE.TorusKnotGeometry(8, 2, 100, 16)
  const material = new THREE.MeshStandardMaterial({
    color: 0x007bff,
    metalness: 0.8,
    roughness: 0.2
  })
  const torusKnot = new THREE.Mesh(geometry, material)
  scene.add(torusKnot)

  // Свет
  const light = new THREE.PointLight(0xffffff, 1)
  light.position.set(10, 10, 10)
  scene.add(light)

  camera.position.z = 30

  function animate() {
    requestAnimationFrame(animate)
    torusKnot.rotation.x += 0.01
    torusKnot.rotation.y += 0.01
    renderer.render(scene, camera)
  }

  animate()
})
</script>

<template>
  <div ref="sceneContainer" class="absolute w-[400px] h-[400px]"></div>
</template>
