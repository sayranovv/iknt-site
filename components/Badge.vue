<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div
    class="w-full relative inline-flex items-center justify-center px-4 py-1 text-2xl font-bold text-white bg-black rounded-full"
  >
    <span
      class="absolute inset-0 rounded-full p-[3px] bg-gradient-to-br from-orange-500 via-pink-500 to-blue-500"
    ></span>
    <span
      class="absolute inset-0 rounded-full p-[3px] bg-gradient-to-b from-white to-transparent opacity-60"
    ></span>
    <span class="absolute inset-[3px] bg-black rounded-full"></span>
    <span class="relative font-black text-white drop-shadow-[0_0_7px_rgb(31,48,255)]">
      {{ title }}
    </span>
  </div>
</template>

<style scoped></style>
