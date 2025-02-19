<script setup lang="ts">
const prop = defineProps<{
  title: string
  category: string
  description: string
  img: string
}>()

const onClickMoreButton = (): void => {
  console.log('yup')
}
</script>

<template>
  <div class="max-w-96 min-h-[420px] flex flex-col justify-between items-start">
    <img src="/assets/img/news/news1.jpg" alt="123" class="rounded-lg h-48 w-full object-cover" />
    <p class="opacity-50">{{ prop.category }}</p>
    <h3 class="text-3xl font-bold">{{ prop.title }}</h3>
    <p class="opacity-50">{{ prop.description }}</p>
    <button @click="onClickMoreButton" class="underline mt-5">Подробнее</button>
  </div>
</template>

<style scoped></style>
