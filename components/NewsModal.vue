<script setup lang="ts">
defineProps<{
  img: string
  category: string
  title: string
  descriptionFull: string
}>()
</script>

<template>
  <UiDialog>
    <UiDialogTrigger as-child>
      <button class="border-b mt-4">Подробнее</button>
    </UiDialogTrigger>
    <UiDialogContent class="h-full tablet:h-auto tablet:max-w-[700px] text-white">
      <UiScrollArea class="h-full tablet:h-[700px] pt-10 px-5 pb-5 rounded-md">
        <img :src="img" alt="news" class="rounded-lg w-full object-cover" />
        <div class="mt-3 h-1/2 flex flex-col justify-between items-start gap-5">
          <p class="opacity-50 font-light">{{ category }}</p>
          <h2 class="text-3xl font-bold">{{ title }}</h2>
          <p class="opacity-50 font-light">{{ descriptionFull }}</p>
        </div>
      </UiScrollArea>
    </UiDialogContent>
  </UiDialog>
</template>

<style scoped></style>
