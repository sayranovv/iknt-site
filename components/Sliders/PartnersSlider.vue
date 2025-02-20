<script setup lang="ts">
const logos = [
  '1s.png',
  'alfa_bank.png',
  'drugoye_delo.png',
  'er-telekom.png',
  'fsp.png',
  'ibs.png',
  'informzashita.png',
  'kaspersky.png',
  'morion_digital.png',
  'parma.png',
  'reksoft_c.png',
  'rostelecom.png',
  'softline.png',
  'tbank.png',
  'uavprof.png',
  'ucsb.png',
  'ujin.png',
  'vk.png'
]

import { Swiper, SwiperSlide } from 'swiper/vue'
import { FreeMode, Autoplay } from 'swiper/modules'
</script>

<template>
  <div class="overflow-hidden w-full py-5">
    <Swiper
      :slides-per-view="3"
      :space-between="10"
      :loop="true"
      :autoplay="{
        delay: 0,
        disableOnInteraction: false
      }"
      :speed="2000"
      :free-mode="true"
      :modules="[Autoplay, FreeMode]"
      class="swiper-container"
    >
      <SwiperSlide v-for="logo in logos" :key="logo">
        <div
          class="w-full h-24 rounded-lg bg-white opacity-60 hover:opacity-100 transition-opacity bg-opacity-100 flex justify-center items-center"
        >
          <img :src="'/logo/' + logo" :alt="logo" class="h-1/2 object-cover mx-auto" />
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
