<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectCoverflow, Pagination } from 'swiper/modules'
import EdProgramsCard from '~/components/Cards/EdProgramsCard.vue'
</script>

<template>
  <Swiper
    :modules="[EffectCoverflow, Pagination]"
    effect="coverflow"
    :grabCursor="true"
    :centeredSlides="true"
    slidesPerView="auto"
    :coverflowEffect="{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false
    }"
    class="mySwiper"
  >
    <SwiperSlide class="w-1/3">
      <EdProgramsCard />
    </SwiperSlide>
    <SwiperSlide class="w-1/3">
      <EdProgramsCard />
    </SwiperSlide>
    <SwiperSlide class="w-1/3">
      <EdProgramsCard />
    </SwiperSlide>
    <SwiperSlide class="w-1/3">
      <EdProgramsCard />
    </SwiperSlide>
    <!-- Можешь добавить дополнительные <SwiperSlide> с другими карточками -->
  </Swiper>
</template>

<style scoped></style>
