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
      <section>
        <h1 class="text-center text-7xl font-bold">Абитуриенту</h1>
        <h2 class="text-center text-2xl font-light mt-1">
          Поступай в ИКНТ – стань частью будущего!
        </h2>
      </section>
      <section>
        <h2 class="text-center text-5xl font-bold drop-shadow-[0_0_10px_rgba(0,0,255,0.4)]">
          Образовательные программы
        </h2>
        <SlidersEdProgramsSlider />
      </section>
      <section class="mt-24">
        <h2 class="text-center text-5xl font-bold drop-shadow-[0_0_5px_rgba(0,0,255,1.0)]">
          Как поступить?
        </h2>
        <Steps class="mt-16" />
      </section>
    </div>
  </div>
</template>

<style scoped></style>
