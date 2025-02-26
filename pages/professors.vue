<script setup lang="ts">
import { useProfessorsStore } from '@/stores/professors.store'

const professorsStore = useProfessorsStore()
</script>

<template>
  <div>
    <div class="absolute h-screen w-screen">
      <img
        src="/bg/bg2_e.png"
        alt="bg"
        class="absolute -z-10 w-full h-2/5 tablet:h-3/5 object-cover object-bottom left-1/2 -translate-x-1/2"
      />
    </div>
    <div class="max-w-screen-laptop-l mx-auto px-3 tablet:px-5 laptop-l:px-0 pt-40 tablet:pt-52">
      <h1 class="text-center text-5xl tablet:text-7xl font-bold">Наши преподаватели</h1>
      <div class="mt-20 grid grid-cols-2 tablet:grid-cols-3 laptop-s:grid-cols-4 gap-x-8 gap-y-16">
        <div v-for="professor in professorsStore.professors" :key="professor.id">
          <img :src="professor.img" alt="professor" class="w-full rounded-lg" />
          <h3 class="font-bold text-2xl leading-none mt-6">{{ professor.name }}</h3>
          <p class="opacity-50 mt-3 font-light">{{ professor.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
