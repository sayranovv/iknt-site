<script setup lang="ts">
const slider1Logos = [
  '1c.png',
  'alfa_bank.png',
  'drugoye_delo.png',
  'fsp.png',
  'ibs.png',
  'inform_security.png',
  'kaspersky.png'
]

const slider2Logos = [
  'r-telecom.png',
  'reksoft.png',
  'rostelecom.png',
  'sber.png',
  'softline.png',
  'tbank.png',
  'uavprof.png'
]

const slider3Logos = [
  'ucsb.png',
  'ujin.png',
  'vk.png',
  'morion_digital.png',
  'parma.png',
  'positive_technologies.png'
]

import { Swiper, SwiperSlide } from 'swiper/vue'
import { FreeMode, Autoplay } from 'swiper/modules'
</script>

<template>
  <div class="overflow-hidden w-full py-5">
    <Swiper
      :slides-per-view="1.5"
      :space-between="30"
      :loop="true"
      :autoplay="{
        delay: 0,
        disableOnInteraction: false
      }"
      :speed="4000"
      :free-mode="true"
      :modules="[Autoplay, FreeMode]"
      ,
      :breakpoints="{
        768: { slidesPerView: 4 }
      }"
      class="swiper-container py-5 flex items-center justify-center"
    >
      <SwiperSlide v-for="logo in slider1Logos" :key="logo">
        <div
          class="w-full h-24 rounded-lg bg-white bg-opacity-10 border border-white border-opacity-80 shadow-[0px_0px_20px_5px_rgba(255,255,255,0.4)] backdrop-blur-lg transition-all before:absolute before:inset-0 before:bg-white before:rounded-lg before:opacity-20 flex justify-center items-center hover:shadow-[0px_0px_20px_5px_rgba(255,0,0,0.5)] hover:border-red-400 hover:before:bg-red-500 cursor-pointer"
        >
          <img
            :src="'/partners_logo/' + logo"
            :alt="logo"
            class="relative z-10 h-full object-cover mx-auto"
          />
        </div>
      </SwiperSlide>
    </Swiper>
    <Swiper
      :slides-per-view="1.5"
      :space-between="30"
      :loop="true"
      :autoplay="{
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: true
      }"
      :speed="4000"
      :free-mode="true"
      :modules="[Autoplay, FreeMode]"
      ,
      :breakpoints="{
        768: { slidesPerView: 4 }
      }"
      class="swiper-container py-5"
    >
      <SwiperSlide v-for="logo in slider2Logos" :key="logo">
        <div
          class="w-full h-24 rounded-lg bg-white bg-opacity-10 border border-white border-opacity-80 shadow-[0px_0px_20px_5px_rgba(255,255,255,0.4)] backdrop-blur-lg transition-all before:absolute before:inset-0 before:bg-white before:rounded-lg before:opacity-20 flex justify-center items-center hover:shadow-[0px_0px_20px_5px_rgba(255,255,0,0.5)] hover:border-yellow-400 hover:before:bg-yellow-500 cursor-pointer"
        >
          <img
            :src="'/partners_logo/' + logo"
            :alt="logo"
            class="relative z-10 h-full object-cover mx-auto"
          />
        </div>
      </SwiperSlide>
    </Swiper>
    <Swiper
      :slides-per-view="1.5"
      :space-between="30"
      :loop="true"
      :autoplay="{
        delay: 0,
        disableOnInteraction: false
      }"
      :speed="4000"
      :free-mode="true"
      :modules="[Autoplay, FreeMode]"
      ,
      :breakpoints="{
        768: { slidesPerView: 4 }
      }"
      class="swiper-container py-5 flex items-center justify-center"
    >
      <SwiperSlide v-for="logo in slider3Logos" :key="logo">
        <div
          class="w-full h-24 rounded-lg bg-white bg-opacity-10 border border-white border-opacity-80 shadow-[0px_0px_20px_5px_rgba(255,255,255,0.4)] backdrop-blur-lg transition-all before:absolute before:inset-0 before:bg-white before:rounded-lg before:opacity-20 flex justify-center items-center hover:shadow-[0px_0px_20px_5px_rgba(0,0,255,0.5)] hover:border-violet-400 hover:before:bg-violet-500 cursor-pointer"
        >
          <img
            :src="'/partners_logo/' + logo"
            :alt="logo"
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
