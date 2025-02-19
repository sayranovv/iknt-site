<script setup lang="ts">
import NewsCard from '~/components/Cards/NewsCard.vue'

const someNews = [
  {
    id: 1,
    title: 'Первый выпуск специалистов',
    category: '#newsIKNT',
    description:
      'Они были первыми: в Институте компьютерных наук и технологий состоялся первый выпуск специалистов',
    img: '/assets/img/news/news1.jpg'
  },
  {
    id: 2,
    title: 'Первый выпуск специалистов',
    category: '#newsIKNT',
    description:
      'Они были первыми: в Институте компьютерных наук и технологий состоялся первый выпуск специалистов',
    img: '/assets/img/news/news1.jpg'
  },
  {
    id: 3,
    title: 'Первый выпуск специалистов',
    category: '#newsIKNT',
    description:
      'Они были первыми: в Институте компьютерных наук и технологий состоялся первый выпуск специалистов',
    img: '/assets/img/news/news1.jpg'
  }
]
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
        :category="news.category"
        :description="news.description"
        :img="news.img"
      />
    </div>
  </div>
</template>

<style scoped></style>
