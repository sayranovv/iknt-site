<script setup lang="ts"></script>

<template>
  <div>
    <img
      src="/assets/img/bg-gradient-img.png"
      alt="bg gradient"
      class="absolute w-screen h-screen left-0 top-0 object-cover z-0"
    />
    <section class="relative z-10 pt-56 pb-20 text-white h-screen flex flex-col justify-between">
      <h1 class="max-w-[730px] text-7xl">
        <span class="font-black tracking-wide">Будущее начинается здесь:</span><br />
        Институт Компьютерных Наук и Технологий
      </h1>
      <p class="text-2xl max-w-3xl mt-6 font-normal">
        Инновации, передовые технологии, лучшие преподаватели и перспективы для каждого студента
      </p>
      <div class="flex gap-6">
        <Button>О нас</Button>
        <Button>Поступить</Button>
      </div>
    </section>
    <section class="mt-24 text-white">
      <h2 class="text-5xl font-black drop-shadow-[0_0_10px_rgba(31,48,255,0.9)]">Об институте</h2>
      <div class="mt-7 flex justify-between gap-10">
        <div class="w-1/2 flex flex-col gap-7 font-light text-2xl leading-tight">
          <p>
            <span class="font-bold">Институт Компьютерных Наук и Технологий ПГНИУ</span> — это центр
            передовых IT-решений и инноваций. Мы готовим специалистов в области программирования,
            искусственного интеллекта, кибербезопасности и разработки высокотехнологичных систем.
          </p>
          <p>
            Наши студенты получают не только фундаментальные знания, но и практический опыт, работая
            над реальными проектами и стажируясь в ведущих IT-компаниях. Современные лаборатории,
            сильный преподавательский состав и активное сообщество студентов делают обучение
            увлекательным и перспективным.
          </p>
          <p class="font-bold">Будущее технологий создаётся здесь! 🚀</p>
        </div>

        <div class="w-1/2">
          <Badge />
          <Badge />
          <Badge />
        </div>
      </div>
    </section>
    <section class="mt-40 text-white">
      <h2 class="text-5xl font-black drop-shadow-[0_0_10px_rgba(189,7,181,0.9)]">
        Последние новости
      </h2>
      <div>
        <!--        <NewsCarousel />-->
      </div>
    </section>
    <section class="mt-40 text-white">
      <h2 class="text-5xl font-black drop-shadow-[0_0_10px_rgba(189,7,181,0.9)]">Почему ИКНТ?</h2>
      <div class="mt-16">
        <div class="flex gap-10 px-10">
          <div class="w-1/2">
            <h4 class="text-2xl font-bold tracking-wide">
              Высококвалифицированный преподовательский состав
            </h4>
            <div
              class="mt-1 w-full h-1 rounded-lg bg-gradient-to-r from-orange-600 via-pink-600 to-blue-600"
            ></div>
            <p class="mt-5 text-xl font-light leading-tight">
              Наш институт состоит из опытных профессионалов, увлеченных преподаванием
            </p>
          </div>
          <div class="relative w-1/2">
            <img src="/assets/img/blue.png"
              class="absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 z-50"
            ></img>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
