<script setup lang="ts">
const professors = [
  {
    id: 0,
    name: 'Городилов Алексей Юрьевич',
    description: 'Преподаватель предметов "Алгоритмы и структуры данных" и "Дискретная математика"',
    img: '/img/professors/городилов.jpg'
  },
  {
    id: 1,
    name: 'Кетова Валерия Дмитриевна',
    description:
      'Преподаватель предметов "Основы IT-технологий" и "Основы проектной деятельности в IT-сфере"',
    img: '/img/professors/кетова.jpg'
  },
  {
    id: 2,
    name: 'Кнутова Наталия Сергеевна',
    description: 'Преподаватель предмета "Язык программирования Python"',
    img: '/img/professors/кнутова.jpg'
  },
  {
    id: 3,
    name: 'Лабутин Иван Александрович',
    description:
      'Преподаватель предметов "Алгоритмы и структуры данных" и "Язык программирования Python"',
    img: '/img/professors/лабутин.jpg'
  },
  {
    id: 4,
    name: 'Шеина Татьяна Юрьевна',
    description: 'Преподаватель предмета "Основы web-технологий"',
    img: '/img/professors/шеина.jpg'
  },
  {
    id: 5,
    name: 'Гоберман Наталья Харисовна',
    description: 'Преподаватель предмета "Прикладная физическая культура"',
    img: '/img/professors/гоберман.jpg'
  },
  {
    id: 6,
    name: 'Дураков Андрей Викторович',
    description: 'Преподаватель предмета "Введение в математику"',
    img: '/img/professors/дураков.jpg'
  },
  {
    id: 7,
    name: 'Койкова Елена Семеновна',
    description: 'Преподаватель предмета "Английский язык"',
    img: '/img/professors/койкова.jpg'
  },
  {
    id: 8,
    name: 'Аверин Сергей Игоревич',
    description: 'Преподаватель предмета "История России"',
    img: '/img/professors/аверин.jpg'
  }
]
</script>

<template>
  <div>
    <div class="absolute h-screen w-screen">
      <img
        src="/bg/bg2_e.png"
        alt="bg"
        class="absolute -z-10 w-full h-3/5 object-cover object-bottom left-1/2 -translate-x-1/2"
      />
    </div>
    <div class="max-w-screen-laptop-l mx-auto px-3 tablet:px-5 laptop-l:px-0 pt-40 tablet:pt-52">
      <h1 class="text-center text-5xl tablet:text-7xl font-bold">Наши преподаватели</h1>
      <div class="mt-20 grid grid-cols-2 tablet:grid-cols-3 laptop-s:grid-cols-4 gap-x-8 gap-y-16">
        <div v-for="professor in professors" :key="professor.id">
          <img :src="professor.img" alt="professor" class="w-full rounded-lg" />
          <h3 class="font-bold text-2xl leading-none mt-6">{{ professor.name }}</h3>
          <p class="opacity-50 mt-3 font-light">{{ professor.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
