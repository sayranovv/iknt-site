<script setup lang="ts">
defineProps<{
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
  <div class="max-w-96 min-h-[450px] flex flex-col justify-between items-start gap-3">
    <img :src="img" alt="123" class="rounded-lg h-52 w-full object-cover" />
    <p class="opacity-50 font-light">{{ category }}</p>
    <h3 class="text-3xl font-bold leading-none">{{ title }}</h3>
    <p class="opacity-50 font-light leading-tight">{{ description }}</p>
    <button @click="onClickMoreButton" class="underline mt-5">Подробнее</button>
  </div>
</template>

<style scoped></style>
