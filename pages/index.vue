<script setup lang="ts">
import WhySection from '~/components/WhySection.vue'
</script>

<template>
  <div>
    <div class="w-screen h-screen bg-gradient-to-br from-[#150080] via-[#991F99] to-[#FFCC00]">
      <section
        class="max-w-screen-laptop-l mx-auto px-3 tablet:px-5 laptop-l:px-0 h-screen pt-52 pb-32"
      >
        <div class="max-w-[730px] h-full flex flex-col justify-between">
          <h1 class="text-4xl leading-none tablet:text-7xl">
            <span class="font-black tracking-wide text-5xl tablet:text-7xl"
              >Будущее начинается здесь:</span
            ><br />
            Институт Компьютерных Наук и Технологий
          </h1>
          <p class="text-xl tablet:text-2xl max-w-3xl mt-6 font-normal">
            Инновации, передовые технологии, лучшие преподаватели и перспективы для каждого студента
          </p>
          <div class="flex gap-2 tablet:gap-6 tablet:w-1/2">
            <Button_P class="w-1/2 px-2 py-1 tablet:py-2 tablet:px-9">О нас</Button_P>
            <Button_P class="w-1/2 px-2 py-1 tablet:py-2 tablet:px-9">Поступить</Button_P>
          </div>
        </div>
      </section>
    </div>
    <div class="max-w-screen-laptop-l mx-auto px-3 tablet:px-5 laptop-l:px-0">
      <section class="mt-24 text-white">
        <h2 class="text-4xl tablet:text-5xl font-black drop-shadow-[0_0_10px_rgba(31,48,255,0.9)]">
          Об институте
        </h2>
        <div class="mt-7 flex flex-wrap laptop-s:flex-nowrap justify-between gap-10">
          <div class="w-full laptop-s:w-1/2 flex flex-col gap-7 font-light text-2xl leading-tight">
            <p>
              <span class="font-bold">Институт Компьютерных Наук и Технологий ПГНИУ</span> — это
              центр передовых IT-решений и инноваций. Мы готовим специалистов в области
              программирования, искусственного интеллекта, кибербезопасности и разработки
              высокотехнологичных систем.
            </p>
            <p>
              Наши студенты получают не только фундаментальные знания, но и практический опыт,
              работая над реальными проектами и стажируясь в ведущих IT-компаниях. Современные
              лаборатории, сильный преподавательский состав и активное сообщество студентов делают
              обучение увлекательным и перспективным.
            </p>
            <p class="font-bold">Будущее технологий создаётся здесь! 🚀</p>
          </div>

          <div class="w-full laptop-s:w-1/2">
            <SlidersProfessionsSliderBox />
          </div>
        </div>
      </section>
      <!--      <section class="mt-40 text-white">-->
      <!--        <h2 class="text-4xl tablet:text-5xl font-black drop-shadow-[0_0_10px_rgba(189,7,181,0.9)]">-->
      <!--          Последние новости-->
      <!--        </h2>-->
      <!--        <div>-->
      <!--                  <NewsCarousel />-->
      <!--        </div>-->
      <!--      </section>-->
      <section class="mt-40 text-white">
        <h2
          class="text-4xl tablet:text-5xl font-black text-center drop-shadow-[0_0_10px_rgba(255,150,0,0.9)]"
        >
          Почему ИКНТ?
        </h2>
        <div class="mt-32 flex flex-col gap-y-80 tablet:gap-y-[500px]">
          <WhySection
            title="Высококвалифицированный преподавательский состав"
            position="right"
            description="Наш институт состоит из опытных профессионалов, увлеченных преподаванием"
            color="blue"
          />
        </div>
      </section>
      <section class="mt-52 text-white">
        <h2
          class="text-4xl tablet:text-5xl font-black text-center drop-shadow-[0_0_16px_rgba(255,0,255,0.9)]"
        >
          Образовательные программы
        </h2>
        <SlidersEdProgramsSlider />
      </section>
      <section class="mt-12 text-white">
        <h2
          class="text-4xl tablet:text-5xl text-center font-black drop-shadow-[0_0_10px_rgba(189,7,181,0.9)]"
        >
          Наши партнеры
        </h2>
        <SlidersPartnersSlider class="mt-10" />
      </section>
    </div>
  </div>
</template>

<style scoped></style>
