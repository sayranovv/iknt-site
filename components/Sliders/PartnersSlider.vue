<script setup lang="ts">
import { computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { FreeMode, Autoplay } from 'swiper/modules'
import { usePartnersStore } from '@/stores/partners.store.ts'

const partnersStore = usePartnersStore()

const props = defineProps<{
  minId: number
  maxId: number
  reversed?: boolean
}>()

const currentPartners = computed(
  () => partnersStore.getPartnersByRange(props.minId, props.maxId).value
)

const colors = {
  red: '239, 68, 68',
  blue: '59, 130, 246',
  green: '34, 197, 94',
  yellow: '234, 179, 8',
  emerald: '16, 185, 129',
  cyan: '6, 182, 212',
  indigo: '67, 56, 202',
  violet: '139, 92, 246',
  purple: '168, 85, 247',
  pink: '236, 72, 153',
  rose: '244, 63, 94',
  amber: '255, 193, 7',
  sky: '6, 182, 212'
}

// Tailwind-классы для hover-эффекта
const colorClasses = {
  red: 'border-red-400 before:bg-red-500',
  blue: 'border-blue-400 before:bg-blue-500',
  green: 'border-green-400 before:bg-green-500',
  yellow: 'border-yellow-400 before:bg-yellow-500',
  emerald: 'border-emerald-400 before:bg-emerald-500',
  cyan: 'border-cyan-400 before:bg-cyan-500',
  indigo: 'border-indigo-400 before:bg-indigo-500',
  violet: 'border-violet-400 before:bg-violet-500',
  purple: 'border-purple-400 before:bg-purple-500',
  pink: 'border-pink-400 before:bg-pink-500',
  rose: 'border-rose-400 before:bg-rose-500',
  amber: 'border-amber-400 before:bg-amber-500',
  sky: 'border-sky-400 before:bg-sky-500'
}
</script>

<template>
  <div class="overflow-hidden w-full">
    <Swiper
      :slides-per-view="1.5"
      :space-between="30"
      :loop="true"
      :autoplay="{
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: reversed
      }"
      :speed="4000"
      :free-mode="true"
      :modules="[Autoplay, FreeMode]"
      :breakpoints="{ 768: { slidesPerView: 4 } }"
      class="swiper-container flex py-5 items-center justify-center"
    >
      <SwiperSlide v-for="(partner, index) in currentPartners" :key="`slider-${minId}-${index}`">
        <div
          class="w-full h-24 rounded-lg bg-white bg-opacity-10 border border-opacity-80 backdrop-blur-lg transition-all before:absolute before:inset-0 before:rounded-lg before:opacity-20 flex justify-center items-center cursor-pointer"
          :class="[colorClasses[partner.color]]"
          :style="{
            boxShadow: `0px 0px 20px 5px rgba(${colors[partner.color] || '255,255,255'}, 0.5)`
          }"
        >
          <img
            :src="'/partners_logo/' + partner.name + '.png'"
            :alt="partner.name"
            class="relative z-10 h-full object-cover mx-auto"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style scoped>
.swiper-container :deep(.swiper-wrapper) {
  transition-timing-function: linear !important; /* Делаем плавную прокрутку */
}
</style>
