<script setup lang="ts">
import { useNewsStore } from '@/stores/news.store'

const newsStore = useNewsStore()

const someNews = newsStore.news
</script>

<template>
  <div>
    <div class="absolute h-screen w-full">
      <img
        src="/bg/bg2_e.png"
        alt="bg"
        class="absolute -z-10 w-full h-2/5 tablet:h-3/5 object-cover object-bottom left-1/2 -translate-x-1/2"
      />
    </div>

    <div class="max-w-screen-laptop-l mx-auto px-3 tablet:px-5 laptop-l:px-0 pt-40 tablet:pt-52">
      <h1 class="text-center text-5xl tablet:text-7xl font-bold">Новости</h1>
      <div
        class="mx-auto mt-12 rounded-lg border border-white border-opacity-30 bg-white bg-opacity-10 px-4 py-2 flex gap-5 w-fit"
      >
        <p>Все</p>
        <p>Исследования</p>
        <p>Стажировки</p>
      </div>
      <div class="mt-16 grid grid-cols-1 tablet:grid-cols-2 laptop-s:grid-cols-3 gap-x-5 gap-y-2">
        <CardsNewsCard
          v-for="news in someNews"
          :key="news.id"
          :title="news.title"
          :category="news.tag"
          :description="news.description"
          :descriptionFull="news.descriptionFull"
          :img="news.img"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
