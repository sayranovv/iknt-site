<script setup lang="ts"></script>

<template>
  <div class="relative text-white mt-24">
    <h1 class="text-center text-5xl font-black">Наши преподаватели</h1>
    <section class="flex flex-wrap justify-between items-center mt-16">
      <div class="max-w-72" v-for="_ in 4" :key="_">
        <img src="/assets/img/knutova.jpg" alt="knutova" class="w-full rounded-lg" />
        <h3 class="font-bold text-2xl leading-none mt-6">Кнутова Наталия Сергеевна</h3>
        <p class="opacity-50 mt-3 font-light">Преподаватель ЯП Python</p>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
