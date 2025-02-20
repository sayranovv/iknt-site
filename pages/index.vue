<script setup lang="ts">
import Test from '~/components/Three/test.vue'
import EdProgramsCard from '~/components/Cards/EdProgramsCard.vue'
import EdProgramsSlider from '~/components/Sliders/EdProgramsSlider.vue'
import PartnersSlider from '~/components/Sliders/PartnersSlider.vue'
import ProfessionsSliderBox from '~/components/Sliders/ProfessionsSliderBox.vue'
import ChooseEdProgram from '~/components/ChooseEdProgram.vue'
</script>

<template>
  <div>
    <div class="w-screen h-screen bg-gradient-to-br from-[#150080] via-[#991F99] to-[#FFCC00]">
      <section
        class="max-w-screen-laptop-l mx-auto px-3 tablet:px-5 laptop-l:px-0 flex flex-col h-screen justify-between pt-52 pb-32"
      >
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
    </div>
  </div>
  <div class="max-w-screen-laptop-l mx-auto px-3 tablet:px-5 laptop-l:px-0">
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
          <ProfessionsSliderBox />
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
      <h2 class="text-5xl font-black text-center drop-shadow-[0_0_10px_rgba(255,150,0,0.9)]">
        Почему ИКНТ?
      </h2>
      <div class="mt-32 flex flex-col gap-y-[500px]">
        <div class="flex gap-10 px-10 flex-nowrap">
          <div class="w-1/2 pr-10">
            <h4 class="text-2xl font-bold tracking-wide leading-tight">
              Высококвалифицированный преподавательский состав
            </h4>
            <div
              class="mt-1 w-full h-1 rounded-lg bg-gradient-to-r from-orange-600 via-pink-600 to-blue-600"
            ></div>
            <p class="mt-5 text-xl font-light leading-tight">
              Наш институт состоит из опытных профессионалов, увлеченных преподаванием
            </p>
          </div>
          <div class="w-1/2 relative">
            <div
              class="absolute w-[400px] h-[400px] bg-blue-600 blur-[150px] rounded-full -right-12 top-1/2 -translate-y-1/2"
            ></div>
            <Test class="absolute -right-12 top-1/2 -translate-y-1/2" />
          </div>
        </div>
        <div class="flex gap-20 px-10 flex-nowrap">
          <div class="w-1/2 relative">
            <div
              class="absolute w-[400px] h-[400px] bg-fuchsia-600 blur-[150px] rounded-full -left-12 top-1/2 -translate-y-1/2"
            ></div>
          </div>
          <div class="w-1/2">
            <h4 class="text-2xl font-bold leading-tight tracking-wide">Современное оборудование</h4>
            <div
              class="mt-1 w-full h-1 rounded-lg bg-gradient-to-r from-orange-600 via-pink-600 to-blue-600"
            ></div>
            <p class="mt-5 text-xl font-light leading-tight">
              Наши студенты имеют доступ к современному оборудованию, включая компьютерные
              лаборатории и удобные зоны для совместной работы
            </p>
          </div>
        </div>
        <div class="flex gap-10 px-10 flex-nowrap">
          <div class="w-1/2">
            <h4 class="text-2xl font-bold tracking-wide leading-tight">
              Надежные связи с отраслью
            </h4>
            <div
              class="mt-1 w-full h-1 rounded-lg bg-gradient-to-r from-orange-600 via-pink-600 to-blue-600"
            ></div>
            <p class="mt-5 text-xl font-light leading-tight">
              Мы имеем надежные связи с ИТ-индустрией, что дает нашим студентам возможности для
              прохождения стажировок, участия в исследовательских проектах и трудоустройства
            </p>
          </div>
          <div class="w-1/2 relative">
            <div
              class="absolute w-[400px] h-[400px] bg-orange-400 blur-[150px] rounded-full -right-12 top-1/2 -translate-y-1/2"
            ></div>
          </div>
        </div>
        <div class="flex gap-20 px-10 flex-nowrap">
          <div class="w-1/2 relative">
            <div
              class="absolute w-[400px] h-[400px] bg-blue-600 blur-[150px] rounded-full -left-12 top-1/2 -translate-y-1/2"
            ></div>
          </div>
          <div class="w-1/2">
            <h4 class="text-2xl font-bold leading-tight tracking-wide">
              Индивидуальный подход и практика
            </h4>
            <div
              class="mt-1 w-full h-1 rounded-lg bg-gradient-to-r from-orange-600 via-pink-600 to-blue-600"
            ></div>
            <p class="mt-5 text-xl font-light leading-tight">
              Вы сами формируете четверть учебной программы, подстраивая её под свои интересы.
              Половина учебного времени посвящена практическим занятиям и стажировкам
            </p>
          </div>
        </div>
        <div class="flex gap-10 px-10 flex-nowrap">
          <div class="w-1/2">
            <h4 class="text-2xl font-bold tracking-wide leading-tight">
              Базовые знания и карьерное планирование
            </h4>
            <div
              class="mt-1 w-full h-1 rounded-lg bg-gradient-to-r from-orange-600 via-pink-600 to-blue-600"
            ></div>
            <p class="mt-5 text-xl font-light leading-tight">
              Фундамент, состоящий из навыков и умений, необходимых для любого
              ИТ-направления.Индивидуальные карьерные рекомендации и сборка портфолио
            </p>
          </div>
          <div class="w-1/2 relative">
            <div
              class="absolute w-[400px] h-[400px] bg-fuchsia-600 blur-[150px] rounded-full -right-12 top-1/2 -translate-y-1/2"
            ></div>
          </div>
        </div>
        <div class="flex gap-20 px-10 flex-nowrap">
          <div class="w-1/2 relative">
            <div
              class="absolute w-[400px] h-[400px] bg-orange-400 blur-[150px] rounded-full -left-12 top-1/2 -translate-y-1/2"
            ></div>
          </div>
          <div class="w-1/2">
            <h4 class="text-2xl font-bold leading-tight tracking-wide">
              Адаптация к рынку и профессиональное развитие
            </h4>
            <div
              class="mt-1 w-full h-1 rounded-lg bg-gradient-to-r from-orange-600 via-pink-600 to-blue-600"
            ></div>
            <p class="mt-5 text-xl font-light leading-tight">
              Учебные планы составлены на основе вакансий при участии ведущих ИТ-компаний. Участие в
              командных проектах с первого курса под руководством опытных менторов
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="mt-52 text-white">
      <h2 class="text-5xl font-black text-center drop-shadow-[0_0_16px_rgba(255,0,255,0.9)]">
        Образовательные программы
      </h2>
      <EdProgramsSlider />
    </section>
    <section class="mt-12 text-white">
      <h2 class="text-5xl font-black drop-shadow-[0_0_10px_rgba(189,7,181,0.9)]">Наши партнеры</h2>
      <PartnersSlider class="mt-10" />
    </section>
  </div>
</template>

<style scoped></style>
