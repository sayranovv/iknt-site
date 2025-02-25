<script setup lang="ts"></script>

<template>
  <div>
    <div class="absolute h-screen w-screen">
      <img
        src="/bg/bg3.png"
        alt="bg"
        class="absolute -z-10 w-full h-2/5 tablet:h-3/5 object-cover object-bottom left-1/2 -translate-x-1/2"
      />
    </div>
    <div class="max-w-screen-laptop-l mx-auto px-3 tablet:px-5 laptop-l:px-0 pt-40 tablet:pt-52">
      <h1 class="text-center text-5xl tablet:text-7xl font-bold">Контакты</h1>
      <div
        class="mt-12 flex flex-col-reverse tablet:flex-row justify-between items-start gap-5 tablet:h-[410px]"
      >
        <iframe
          src="https://yandex.ru/map-widget/v1/-/CHurb6J5/"
          class="w-full tablet:w-1/2 rounded-lg h-96 tablet:h-full"
        ></iframe>
        <div
          class="w-full p-4 rounded-lg border border-white border-opacity-20 backdrop-blur-2xl transition-all hover:shadow-[0px_0px_50px_20px_rgba(255,255,255,0.2)] hover:border-white before:absolute before:inset-0 before:bg-white before:opacity-0 hover:before:opacity-20 before:rounded-lg before:-z-10 cursor-pointer tablet:w-1/2 space-y-8 h-full"
        >
          <div>
            <h2 class="text-3xl font-bold">Контакты института</h2>
            <br />
            <ul>
              <li><span class="font-bold">Адрес: </span>г. Пермь, ул. Генкеля, корп. 8, ауд.410</li>
              <li><span class="font-bold">Телефон: </span>+7 (342) 239-67-20</li>
              <li><span class="font-bold">Электронная почта: </span>iknt@psu.ru</li>
            </ul>
          </div>
          <div>
            <h2 class="text-3xl font-bold">По вопросам поступления</h2>
            <br />
            <ul>
              <li>
                <span class="font-bold">Адрес: </span>г. Пермь, ул. Дзержинского, корп. 5, ауд. 229
              </li>
              <li><span class="font-bold">Телефон: </span>+7 (342) 215-16-14</li>
              <li><span class="font-bold">Электронная почта: </span>ict_pk@psu.ru</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
