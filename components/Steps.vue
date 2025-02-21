<script setup>
const steps = [
  {
    id: 1,
    title: 'Выбери специальность',
    desc: 'Определись с программой, которая тебе подходит'
  },
  {
    id: 2,
    title: 'Подай заявление онлайн',
    desc: 'Заполни форму заявки через госуслуги или через личный кабинет ПГНИУ'
  },
  {
    id: 3,
    title: 'Вступительные для СПО',
    desc: 'Сдай вступительные испытания по русскому, матанализу и программированию'
  },
  {
    id: 4,
    title: 'Зачислись к нам!',
    desc: 'Предоставь в приемную комиссию оригиналы документов'
  }
]
</script>

<template>
  <div class="relative flex justify-between items-start gap-5">
    <div
      class="absolute top-14 left-1/2 -translate-x-1/2 w-5/6 h-1 bg-white bg-opacity-30 z-0"
    ></div>
    <div
      class="relative flex flex-col gap-4 items-center w-1/4"
      v-for="step in steps"
      :key="step.id"
    >
      <div
        class="w-28 h-28 text-6xl font-black flex justify-center items-center rounded-full relative border-4 border-white border-opacity-20 bg-white bg-opacity-10 backdrop-blur-lg transition-all hover:shadow-[0px_0px_50px_20px_rgba(255,150,0,0.4)] hover:border-orange-500 before:absolute before:inset-0 before:bg-gradient-to-br before:from-transparent before:to-orange-500 before:opacity-0 hover:before:opacity-30 before:rounded-full cursor-pointer"
      >
        {{ step.id }}
      </div>
      <div class="text-center">
        <h3 class="text-2xl font-bold">{{ step.title }}</h3>
        <p>{{ step.desc }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
