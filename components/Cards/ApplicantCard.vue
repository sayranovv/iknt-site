<script setup lang="ts">
import { onMounted } from 'vue'
import VanillaTilt from 'vanilla-tilt'

onMounted(() => {
  VanillaTilt.init(document.querySelectorAll('.card'), {
    max: 25,
    speed: 400,
    glare: true,
    'max-glare': 0.5
  })
})
</script>

<template>
  <div class="container">
    <div class="card">
      <div class="imgBx">
        <div class="bg-blue-900 w-full h-full flex items-end">
          <span class="text-3xl font-bold ml-2 mb-2">Госуслуги</span>
        </div>
      </div>
      <div class="content">
        <h2 class="text-xl font-bold">Госуслуги</h2>
        <p class="my-2">
          Если заявление подано через Госуслуги, то СНИЛС, Паспорт и аттестат подгрузятся сами
        </p>
        <a href="https://www.gosuslugi.ru/vuzonline" class="border-b">Перейти</a>
      </div>
    </div>
    <div class="card">
      <div class="imgBx">
        <div class="bg-rose-900 w-full h-full flex items-end">
          <span class="text-3xl font-bold ml-2 mb-2">ЛК ПГНИУ</span>
        </div>
      </div>
      <div class="content">
        <h2 class="text-xl font-bold">Личный кабинет ПГНИУ</h2>
        <p class="my-2">
          Зарегистрируйтесь в личном кабинете абитуриента и загрузите сканы ваших документов
        </p>
        <a href="https://abiturient.psu.ru/etis/abiturient/lock.html" class="border-b">Перейти</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 50px 50px;
  transform-style: preserve-3d;
}

.container .card {
  width: 300px;
  height: 260px;
  margin: 50px 30px;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  border-radius: 4px;
  flex-direction: column;
  transform-style: preserve-3d;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  transition: height 0.5s ease-in-out;
}

.container .card:hover {
  height: 440px;
}

.container .card .imgBx {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  min-width: initial;
  width: 300px;
  height: 260px;
  border-radius: 4px;
  overflow: hidden;
  z-index: 1;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  transform-style: preserve-3d;
  transition: 0.5s;
}

.container .card:hover .imgBx {
  top: -60px;
  left: 20px;
  right: 20px;
  width: 260px;
  height: 260px;
  transform: translate3d(0, 0, 75px);
}

.js-tilt-glare {
  border-radius: 4px;
}

.container .card .imgBx div {
  max-width: 100%;
  border-radius: 4px;
}

.container .card .content {
  position: relative;
  padding: 0 15px;
  left: 135px;
  text-align: center;
  color: #fff;
  display: none;
  transition: 0.5s;
  transform: translate(-140px) scale(1);
}

.container .card:hover .content {
  display: block;
  opacity: 1;
  transform: translate(-140px) scale(1);
}
</style>
