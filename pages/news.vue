<script setup lang="ts">
import { useNewsStore } from '@/stores/news.store'
import NewsCard from '~/components/Cards/NewsCard.vue'

const newsStore = useNewsStore()

const someNews = newsStore.news
</script>

<template>
  <div class="mt-24 text-white">
    <h1 class="text-center text-5xl font-black">Новости</h1>
    <div
      class="mx-auto mt-12 rounded-lg border border-white border-opacity-30 bg-white bg-opacity-10 px-4 py-2 flex gap-5 w-fit"
    >
      <p>Все</p>
      <p>Исследования</p>
      <p>Стажировки</p>
    </div>
    <div class="flex justify-between items-center flex-wrap mt-16">
      <NewsCard
        v-for="news in someNews"
        :key="news.id"
        :title="news.title"
        :category="news.tag"
        :description="news.description"
        :img="news.img"
      />
    </div>
  </div>
</template>

<style scoped></style>
