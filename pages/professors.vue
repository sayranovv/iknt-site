<script setup lang="ts"></script>

<template>
  <div>
    <div class="absolute h-screen w-screen">
      <img
        src="/bg/bg2_e.jpg"
        alt="bg"
        class="absolute -z-10 w-full h-3/5 object-cover object-bottom left-1/2 -translate-x-1/2"
      />
    </div>
    <div class="max-w-screen-laptop-l mx-auto px-3 tablet:px-5 laptop-l:px-0 pt-52">
      <h1 class="text-center text-7xl font-bold">Наши преподаватели</h1>
      <div class="mt-20 grid grid-cols-1 tablet:grid-cols-2 laptop-s:grid-cols-4 gap-x-8 gap-y-16">
        <div class="" v-for="_ in 7" :key="_">
          <img src="/assets/img/knutova.jpg" alt="knutova" class="w-full rounded-lg" />
          <h3 class="font-bold text-2xl leading-none mt-6">Кнутова Наталия Сергеевна</h3>
          <p class="opacity-50 mt-3 font-light">Преподаватель ЯП Python</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
