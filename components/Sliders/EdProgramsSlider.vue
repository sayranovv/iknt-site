<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectCoverflow, Pagination } from 'swiper/modules'
import { useEdProgramsStore } from '@/stores/edPrograms.store'
import EdProgramsCard from '~/components/Cards/EdProgramsCard.vue'
import { ref } from 'vue'

const activeTab = ref<null | 'Бакалавриат' | 'Специалитет' | 'Магистратура'>(null)
const isTransitioning = ref(false)

const edProgramsStore = useEdProgramsStore()
const buttonClick = (tab: string): void => {
  isTransitioning.value = true
  activeTab.value = tab
  setTimeout(() => {
    edProgramsStore.selectedDegree = tab
    isTransitioning.value = false
  }, 300)
}
</script>

<template>
  <div>
    <div class="mx-auto mt-12 rounded-lg bg-white bg-opacity-10 w-fit hidden tablet:flex">
      <p
        @click="buttonClick(null)"
        class="cursor-pointer border-t border-b border-l rounded-l-lg px-4 py-2 hover:border-teal-400 hover:shadow-[0px_0px_30px_10px_rgba(0,255,150,0.4)] backdrop-blur-2xl transition-all before:absolute before:inset-0 before:bg-teal-500 before:rounded-l-lg before:opacity-0 hover:before:opacity-20"
        :class="
          activeTab === null
            ? [
                'z-10',
                'border-teal-400',
                'shadow-[0px_0px_30px_10px_rgba(0,255,150,0.4)]',
                'before:absolute',
                'before:inset-0',
                'before:bg-teal-500',
                'before:opacity-20'
              ]
            : [
                'relative',
                'z-20',
                'hover:z-0',
                'before:opacity-0',
                'border-white',
                'border-opacity-20'
              ]
        "
      >
        Все
      </p>
      <p
        @click="buttonClick('Бакалавриат')"
        class="cursor-pointer border-t border-b py-2 px-2.5 hover:border-blue-400 hover:shadow-[0px_0px_30px_10px_rgba(0,0,255,0.4)] backdrop-blur-2xl transition-all before:absolute before:inset-0 before:bg-blue-500 before:opacity-0 hover:before:opacity-20"
        :class="
          activeTab === 'Бакалавриат'
            ? [
                'z-10',
                'border-blue-400',
                'shadow-[0px_0px_30px_10px_rgba(0,0,255,0.4)]',
                'before:absolute',
                'before:inset-0',
                'before:bg-blue-500',
                'before:opacity-20'
              ]
            : [
                'relative',
                'z-20',
                'hover:z-0',
                'before:opacity-0',
                'border-white',
                'border-opacity-20'
              ]
        "
      >
        Бакалавриат
      </p>
      <p
        @click="buttonClick('Специалитет')"
        class="cursor-pointer border-t border-b py-2 px-2.5 hover:border-fuchsia-400 hover:shadow-[0px_0px_30px_10px_rgba(255,0,255,0.4)] backdrop-blur-2xl transition-all before:absolute before:inset-0 before:bg-fuchsia-500 hover:before:opacity-20"
        :class="
          activeTab === 'Специалитет'
            ? [
                'z-10',
                'border-fuchsia-400',
                'shadow-[0px_0px_30px_10px_rgba(255,0,255,0.4)]',
                'before:absolute',
                'before:inset-0',
                'before:bg-fuchsia-500',
                'before:opacity-20'
              ]
            : [
                'relative',
                'z-20',
                'hover:z-0',
                'before:opacity-0',
                'border-white',
                'border-opacity-20'
              ]
        "
      >
        Специалитет
      </p>
      <p
        @click="buttonClick('Магистратура')"
        class="cursor-pointer border-t border-b border-r rounded-r-lg px-4 py-2 hover:border-orange-400 hover:shadow-[0px_0px_30px_10px_rgba(255,150,0,0.4)] backdrop-blur-2xl transition-all before:absolute before:inset-0 before:bg-orange-500 before:rounded-r-lg before:opacity-0 hover:before:opacity-20"
        :class="
          activeTab === 'Магистратура'
            ? [
                'z-10',
                'border-orange-400',
                'shadow-[0px_0px_30px_10px_rgba(255,150,0,0.4)]',
                'before:absolute',
                'before:inset-0',
                'before:bg-orange-500',
                'before:opacity-20'
              ]
            : [
                'relative',
                'z-20',
                'hover:z-0',
                'before:opacity-0',
                'border-white',
                'border-opacity-20'
              ]
        "
      >
        Магистратура
      </p>
    </div>
    <div
      class="mt-12 text-center rounded-lg bg-white bg-opacity-10 flex tablet:hidden flex-col w-1/2 mx-auto"
    >
      <p
        @click="buttonClick(null)"
        class="cursor-pointer border-t border-l border-r rounded-t-lg px-4 py-2 hover:border-teal-400 hover:shadow-[0px_0px_30px_10px_rgba(0,255,150,0.4)] backdrop-blur-2xl transition-all before:absolute before:inset-0 before:bg-teal-500 before:rounded-t-lg before:opacity-0 hover:before:opacity-20"
        :class="
          activeTab === null
            ? [
                'z-10',
                'border-teal-400',
                'shadow-[0px_0px_30px_10px_rgba(0,255,150,0.4)]',
                'before:absolute',
                'before:inset-0',
                'before:bg-teal-500',
                'before:opacity-20'
              ]
            : [
                'relative',
                'z-20',
                'hover:z-0',
                'before:opacity-0',
                'border-white',
                'border-opacity-20'
              ]
        "
      >
        Все
      </p>
      <p
        @click="buttonClick('Бакалавриат')"
        class="cursor-pointer border-r border-l py-2 px-2.5 hover:border-blue-400 hover:shadow-[0px_0px_30px_10px_rgba(0,0,255,0.4)] backdrop-blur-sm transition-all before:absolute before:inset-0 before:bg-blue-500 before:opacity-0 hover:before:opacity-20"
        :class="
          activeTab === 'Бакалавриат'
            ? [
                'z-10',
                'border-blue-400',
                'shadow-[0px_0px_30px_10px_rgba(0,0,255,0.4)]',
                'before:absolute',
                'before:inset-0',
                'before:bg-blue-500',
                'before:opacity-20'
              ]
            : [
                'relative',
                'z-20',
                'hover:z-0',
                'before:opacity-0',
                'border-white',
                'border-opacity-20'
              ]
        "
      >
        Бакалавриат
      </p>
      <p
        @click="buttonClick('Специалитет')"
        class="cursor-pointer border-l border-r py-2 px-2.5 hover:border-fuchsia-400 hover:shadow-[0px_0px_30px_10px_rgba(255,0,255,0.4)] backdrop-blur-sm transition-all before:absolute before:inset-0 before:bg-fuchsia-500 hover:before:opacity-20"
        :class="
          activeTab === 'Специалитет'
            ? [
                'z-10',
                'border-fuchsia-400',
                'shadow-[0px_0px_30px_10px_rgba(255,0,255,0.4)]',
                'before:absolute',
                'before:inset-0',
                'before:bg-fuchsia-500',
                'before:opacity-20'
              ]
            : [
                'relative',
                'z-20',
                'hover:z-0',
                'before:opacity-0',
                'border-white',
                'border-opacity-20'
              ]
        "
      >
        Специалитет
      </p>
      <p
        @click="buttonClick('Магистратура')"
        class="cursor-pointer border-b border-l border-r rounded-b-lg px-4 py-2 hover:border-orange-400 hover:shadow-[0px_0px_30px_10px_rgba(255,150,0,0.4)] backdrop-blur-sm transition-all before:absolute before:inset-0 before:bg-orange-500 before:rounded-b-lg before:opacity-0 hover:before:opacity-20"
        :class="
          activeTab === 'Магистратура'
            ? [
                'z-10',
                'border-orange-400',
                'shadow-[0px_0px_30px_10px_rgba(255,150,0,0.4)]',
                'before:absolute',
                'before:inset-0',
                'before:bg-orange-500',
                'before:opacity-20'
              ]
            : [
                'relative',
                'z-20',
                'hover:z-0',
                'before:opacity-0',
                'border-white',
                'border-opacity-20'
              ]
        "
      >
        Магистратура
      </p>
    </div>
    <div>
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
        class="mySwiper py-10"
      >
        <SwiperSlide
          class="w-full tablet:w-1/2 laptop-s:w-1/3 h-[900px]"
          v-for="program in edProgramsStore.filteredPrograms"
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
            class="fade"
            :class="{ 'fade-out': isTransitioning }"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<style scoped>
.fade {
  opacity: 0;
  transform: translateY(10px);
  animation: fadeIn 0.3s forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-out {
  opacity: 0;
  transform: translateY(10px);
  animation: fadeOut 0.3s forwards;
}

@keyframes fadeOut {
  from {
    opacity: 1;
    transform: translateY(0px);
  }
  to {
    opacity: 0;
    transform: translateY(10px);
  }
}
</style>
