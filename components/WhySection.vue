<script setup lang="ts">
defineProps<{
  position: 'right' | 'left'
  title: string
  description: string
  color: 'blue' | 'fuchsia' | 'orange'
}>()
</script>

<template>
  <div
    class="flex tablet:gap-10 tablet:px-10 flex-nowrap"
    :class="position === 'left' ? 'flex-row-reverse' : 'flex-row'"
  >
    <div class="tablet:w-1/2 tablet:pr-10">
      <h4 class="text-2xl font-bold tracking-wide leading-tight">
        {{ title }}
      </h4>
      <div
        class="mt-1 w-full h-1 rounded-lg bg-gradient-to-r from-orange-600 via-pink-600 to-blue-600"
      ></div>
      <p class="mt-5 text-xl font-light leading-tight">
        {{ description }}
      </p>
    </div>
    <div class="relative w-full tablet:w-1/2 -z-10">
      <div
        class="absolute w-[400px] h-[400px] blur-[150px] rounded-full top-1/2 -translate-y-1/2 right-1/2 tablet:right-44"
        :class="[
          `bg-${color}-600`,
          position === 'right' ? 'translate-x-1/2' : '-translate-x-1/2',
          position === 'left' ? 'left-28' : ''
        ]"
      ></div>
    </div>
  </div>
</template>

<style scoped></style>
