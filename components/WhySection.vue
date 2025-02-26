<script setup lang="ts">
import { onMounted } from 'vue'
import VanillaTilt from 'vanilla-tilt'

onMounted(() => {
  VanillaTilt.init(document.querySelectorAll('.img'), {
    max: 35,
    speed: 400,
    glare: true,
    'max-glare': 0.5
  })
})

defineProps<{
  position: 'right' | 'left'
  title: string
  description: string
  color: 'blue' | 'fuchsia' | 'orange'
  icon: string
}>()
</script>

<template>
  <div
    class="flex tablet:gap-10 tablet:px-10 flex-nowrap"
    :class="position === 'left' ? 'flex-row-reverse' : 'flex-row'"
  >
    <div class="relative w-2/3 tablet:w-1/2 tablet:pr-10 z-10">
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
    <div class="relative w-1/3 tablet:w-1/2">
      <div
        class="absolute w-[450px] h-[450px] -z-10 blur-[60px] rounded-full top-1/2 -translate-y-1/2 right-1/2 tablet:right-52"
        :class="[
          `bg-${color}-600`,
          position === 'right' ? 'translate-x-1/2' : '-translate-x-1/2',
          position === 'left' ? 'left-36' : ''
        ]"
      ></div>
      <div>
        <img
          loading="lazy"
          :src="'/icons/' + icon + '.svg'"
          alt="sdf"
          class="img absolute w-[100px] tablet:w-[320px] h-[100px] tablet:h-[320px] right-3 tablet:right-12 top-10 tablet:-top-24 drop-shadow-[0_0_8px_rgba(0,0,0,0.6)]"
          :class="[
            position === 'right' ? 'translate-x-1/2' : '-translate-x-1/2',
            position === 'left' ? 'left-1 tablet:-left-7 ' : ''
          ]"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
