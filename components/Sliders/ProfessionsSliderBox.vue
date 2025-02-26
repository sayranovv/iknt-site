<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { FreeMode, Autoplay } from 'swiper/modules'

const professions = [
  {
    id: 0,
    direction: 'development',
    list: ['Frontend', 'Backend', 'Fullstack', 'Mobile', 'Game']
  },
  {
    id: 1,
    direction: 'data&analytics',
    list: ['Data Scientist', 'Data Engineer', 'Bl-analyst', 'ML Engineer', 'ML Engineer']
  },
  {
    id: 2,
    direction: 'devops',
    list: ['DevOps Engineer', 'System Admin', 'Ethical Hacker', 'Security Engineer']
  },
  {
    id: 3,
    direction: 'qa',
    list: ['QA Engineer', 'Automation QA', 'UI/UX', 'SOC Analyst']
  },
  {
    id: 4,
    direction: 'management',
    list: ['Product Manager', 'Project Manager', 'Scrum Master', 'Business Analyst']
  }
]

const getAutoplay = (index: number) => {
  return {
    delay: 0,
    disableOnInteraction: false,
    reverseDirection: index % 2 === 1 // для нечётного индекса — прокрутка в обратную сторону
  }
}
</script>

<template>
  <div class="overflow-hidden w-full py-5">
    <div class="overflow-hidden w-full py-5">
      <Swiper
        v-for="(direction, index) in professions"
        :key="direction.id"
        :slides-per-view="1.5"
        :space-between="5"
        :loop="true"
        :loopedSlides="direction.list.length"
        :autoplay="getAutoplay(index)"
        :speed="6000"
        :free-mode="false"
        :allowTouchMove="false"
        :modules="[Autoplay, FreeMode]"
        :breakpoints="{
          470: { slidesPerView: 2, speed: 4000 },
          768: { slidesPerView: 3, speed: 4000 }
        }"
        class="swiper-container"
      >
        <SwiperSlide
          v-for="profession in direction.list"
          :key="profession"
          class="mb-2 whitespace-nowrap"
        >
          <Badge :title="profession" />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<style scoped>
.swiper-container :deep(.swiper-wrapper) {
  transition-timing-function: linear !important; /* Делаем плавную прокрутку */
}
</style>
