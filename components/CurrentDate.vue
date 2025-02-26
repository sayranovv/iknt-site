<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const currentDate = ref('')

const updateDate = () => {
  currentDate.value = new Date().toLocaleString()
}

let interval

onMounted(() => {
  updateDate()
  interval = setInterval(updateDate, 1000)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<template>
  <p class="text-xl text-white">Сейчас: {{ currentDate }}</p>
</template>
