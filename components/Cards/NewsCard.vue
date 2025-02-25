<script setup lang="ts">
defineProps<{
  title: string
  category: string
  description: string
  descriptionFull: string
  img: string
}>()
</script>

<template>
  <div class="flex flex-col justify-center">
    <img loading="lazy" :src="img" alt="news" class="rounded-lg w-full h-1/2 object-cover" />
    <div class="mt-3 h-1/3 flex flex-col justify-between items-start">
      <p class="opacity-50 font-light">{{ category }}</p>
      <h2 class="text-3xl font-bold">{{ title }}</h2>
      <p class="opacity-50 font-light">{{ description }}</p>
      <NewsModal
        :title="title"
        :category="category"
        :descriptionFull="descriptionFull"
        :img="img"
      />
    </div>
  </div>
</template>

<style scoped></style>
