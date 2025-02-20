<script setup lang="ts">
import { computed } from 'vue'
const prop = defineProps<{
  letters3: string
  title: string
  programName: string
  link: string
  degree: string
  programCode: string
  industries: string
  maxScore: number
  averageScore: number
  minScore: number
  budgetPlaces: number
}>()

const hoverColor = computed(() => ({
  'before:to-blue-500 hover:border-blue-400 hover:shadow-[0px_0px_30px_5px_rgba(0,0,255,0.4)]':
    prop.degree === 'Бакалавриат',
  'before:to-fuchsia-500 hover:border-fuchsia-400 hover:shadow-[0px_0px_30px_5px_rgba(255,0,255,0.4)]':
    prop.degree === 'Специалитет',
  'before:to-orange-500 hover:border-orange-400 hover:shadow-[0px_0px_30px_5px_rgba(255,150,0,0.4)]':
    prop.degree === 'Магистратура'
}))
</script>

<template>
  <div
    class="relative p-5 pt-10 flex flex-col h-full items-center justify-between gap-8 border border-white border-opacity-20 rounded-xl bg-white bg-opacity-10 backdrop-blur-lg transition-all hover:shadow-[0px_0px_30px_5px_rgba(0,0,255,0.4)] hover:border-blue-400 before:absolute before:inset-0 before:bg-gradient-to-br before:from-transparent before:to-blue-500 before:opacity-0 hover:before:opacity-30 before:rounded-xl"
    :class="hoverColor"
  >
    <h2 class="text-8xl font-black my-10 hover:drop-shadow hover:shadow-blue-500">
      {{ letters3 }}
    </h2>
    <h3 class="text-3xl text-center">{{ title }}</h3>
    <h4 class="font-light text-center text-xl">{{ programName }}</h4>
    <a :href="link" class="relative z-10 bg-white text-center rounded-full w-full p-4 text-black"
      >Учебный план</a
    >
    <ul class="font-light text-lg w-full">
      <li>
        <span class="font-bold">{{ degree }}</span>
      </li>
      <li><span class="font-bold">Код направления:</span> {{ programCode }}</li>
      <li><span class="font-bold">Отрасли:</span> {{ industries }}</li>
    </ul>
    <div class="w-full">
      <h4 class="text-lg font-bold">Баллы:</h4>
      <table class="w-full text-center mt-4">
        <thead>
          <tr class="border-b">
            <td class="p-1 border-r last:border-r-0 w-1/3">Минимум</td>
            <td class="p-1 border-r last:border-r-0 w-1/3">Средний</td>
            <td class="p-1 border-r last:border-r-0 w-1/3">Максимум</td>
          </tr>
        </thead>
        <tbody>
          <tr class="font-light">
            <td class="p-1 border-r last:border-r-0 w-1/3">{{ minScore }}</td>
            <td class="p-1 border-r last:border-r-0 w-1/3">{{ averageScore }}</td>
            <td class="p-1 border-r last:border-r-0 w-1/3">{{ maxScore }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="w-full text-lg">
      <span class="font-bold">Бюджетных мест: </span>{{ budgetPlaces }}
    </div>
  </div>
</template>

<style scoped></style>
