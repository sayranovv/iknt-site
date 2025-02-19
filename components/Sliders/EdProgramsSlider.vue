<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectCoverflow, Pagination } from 'swiper/modules'
import EdProgramsCard from '~/components/Cards/EdProgramsCard.vue'
import { useEdProgramsStore } from '@/stores/edPrograms.store'

const edProgramsStore = useEdProgramsStore()
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
    <SwiperSlide
      class="w-1/3 h-[900px]"
      v-for="program in edProgramsStore.edPrograms"
      :key="program.id"
    >
      <EdProgramsCard
        :letters3="program.letters3"
        :title="program.title"
        :programName="program.programName"
        :link="program.link"
        :degree="program.degree"
        :programCode="program.programCode"
        :industries="program.industries"
        :maxScore="program.maxScore"
        :averageScore="program.averageScore"
        :minScore="program.minScore"
        :budgetPlaces="program.budgetPlaces"
      />
    </SwiperSlide>
  </Swiper>
</template>

<style scoped></style>
