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
      <section>
        <h1 class="text-center text-5xl tablet:text-7xl font-bold">Абитуриенту</h1>
        <h2 class="text-center text-xl tablet:text-2xl font-light mt-4">
          Поступай в ИКНТ – стань частью будущего!
        </h2>
      </section>
      <section class="mt-24">
        <h2
          class="text-center text-4xl tablet:text-5xl font-bold drop-shadow-[0_0_2px_rgba(255,255,255,0.9)]"
        >
          Как поступить?
        </h2>
        <Steps class="mt-16" />
      </section>
      <section class="mt-24">
        <h2
          class="text-center text-4xl tablet:text-5xl font-bold drop-shadow-[0_0_10px_rgba(0,0,255,0.4)]"
        >
          Образовательные программы
        </h2>
        <SlidersEdProgramsSlider />
      </section>
      <section class="mt-24 mb-[500px] tablet:mb-0">
        <h2
          class="text-center text-4xl tablet:text-5xl font-bold drop-shadow-[0_0_10px_rgba(0,0,255,0.4)]"
        >
          Подача заявлений
        </h2>
        <h2 class="text-center text-xl tablet:text-2xl font-light mt-3">
          Выберите любой удобный для себя способ подачи заявления
        </h2>
        <CardsApplicantCard class="h-[450px]" />
      </section>
    </div>
  </div>
</template>

<style scoped></style>
