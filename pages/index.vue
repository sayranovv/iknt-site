<script setup lang="ts">
import { useHead } from '#imports'

useHead({
  title: 'Институт Компьютерных Наук и Технологий ПГНИУ',
  meta: [
    {
      name: 'description',
      content:
        'Официальный сайт ИКНТ ПГНИУ. Новости, информация для абитуриентов, преподаватели и контакты.'
    },
    {
      name: 'keywords',
      content: 'ИКНТ, ПГНИУ, институт компьютерных наук, IT, абитуриент, преподаватели'
    },
    { name: 'author', content: 'ИКНТ ПГНИУ' },
    { property: 'og:title', content: 'ИКНТ ПГНИУ' },
    {
      property: 'og:description',
      content:
        'Добро пожаловать на официальный сайт Института Компьютерных Наук и Технологий ПГНИУ!'
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://iknt.site.vercel.app/' }
  ]
})
</script>

<template>
  <div class="overflow-x-hidden">
    <div class="relative">
      <ThreeDancingRobot />
    </div>
    <div
      class="w-screen tablet:h-screen -pb-12 bg-gradient-to-br from-[#0A0084] via-[#BF07A0] to-[#F88208]"
    >
      <section
        class="max-w-screen-laptop-l mx-auto px-3 tablet:px-5 laptop-l:px-0 h-screen tablet:h-full pt-36 pb-20 tablet:pt-40 tablet:pb-32"
      >
        <CurrentDate class="mb-2" />
        <div class="max-w-[730px] h-full flex flex-col gap-10 justify-between">
          <h1 class="text-4xl leading-none tablet:text-7xl">
            <span class="font-black tracking-wide text-5xl tablet:text-7xl">
              Будущее начинается здесь:
            </span>
            <br />
            Институт Компьютерных Наук и Технологий
          </h1>
          <p class="text-xl tablet:text-2xl max-w-3xl mt-6 font-normal">
            Инновации, передовые технологии, лучшие преподаватели и перспективы для каждого студента
          </p>
          <div class="flex gap-2 tablet:gap-6 tablet:w-1/2">
            <ButtonPrimary class="w-1/2 px-2 py-1 tablet:py-2 tablet:px-9">О нас</ButtonPrimary>
            <ButtonPrimary class="w-1/2 px-2 py-1 tablet:py-2 tablet:px-9">Поступить</ButtonPrimary>
          </div>
        </div>
      </section>
    </div>
    <div class="max-w-screen-laptop-l mx-auto px-3 tablet:px-5 laptop-l:px-0">
      <section class="mt-24 text-white">
        <h2 class="text-4xl tablet:text-5xl font-black drop-shadow-[0_0_6px_rgba(0,0,255,0.9)]">
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

          <div class="w-[108%] -ml-3 tablet:w-full tablet:-ml-0 laptop-s:w-1/2">
            <SlidersProfessionsSliderBox />
          </div>
        </div>
      </section>
      <section class="mt-40 text-white">
        <h2
          class="text-4xl tablet:text-5xl font-black text-center drop-shadow-[0_0_6px_rgba(255,150,0,0.9)]"
        >
          Почему ИКНТ?
        </h2>
        <div class="mt-32 flex flex-col gap-y-80 tablet:gap-y-[500px]">
          <WhySection
            title="Высококвалифицированный преподавательский состав"
            position="right"
            description="Наш институт состоит из опытных профессионалов, увлеченных преподаванием"
            color="blue"
            icon="phd"
          />
          <WhySection
            title="Современное оборудование"
            position="left"
            description="Наши студенты имеют доступ к современному оборудованию, включая компьютерные лаборатории и удобные зоны для совместной работы"
            color="fuchsia"
            icon="computer"
          />
          <WhySection
            title="Надежные связи с отраслью"
            position="right"
            description="Мы имеем надежные связи с ИТ-индустрией, что дает нашим студентам возможности для прохождения стажировок, участия в исследовательских проектах и трудоустройства"
            color="orange"
            icon="team"
          />
          <WhySection
            title="Индивидуальный подход и практика"
            position="left"
            description="Вы сами формируете четверть учебной программы, подстраивая её под свои интересы. Половина учебного времени посвящена практическим занятиям и стажировкам"
            color="blue"
            icon="work"
          />
          <WhySection
            title="Базовые знания и карьерное планирование"
            position="right"
            description="Фундамент, состоящий из навыков и умений, необходимых для любого ИТ-направления. Индивидуальные карьерные рекомендации и сборка портфолио"
            color="fuchsia"
            icon="portfolio"
          />
          <WhySection
            title="Адаптация к рынку и профессиональное развитие"
            position="left"
            description="Учебные планы составлены на основе вакансий при участии ведущих ИТ-компаний. Участие в командных проектах с первого курса под руководством опытных менторов"
            color="orange"
            icon="goal"
          />
        </div>
      </section>
      <section class="mt-52 text-white">
        <h2
          class="text-4xl tablet:text-5xl font-black leading-none text-center drop-shadow-[0_0_6px_rgba(255,0,255,0.9)]"
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
        <div class="my-10 backdrop-blur-sm flex flex-col w-[108%] -ml-3 tablet:w-full tablet:-ml-0">
          <SlidersPartnersSlider :min-id="0" :max-id="6" />
          <SlidersPartnersSlider :min-id="7" :max-id="13" :reversed="true" />
          <SlidersPartnersSlider :min-id="14" :max-id="19" />
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped></style>
