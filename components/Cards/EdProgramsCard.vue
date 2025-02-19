<script setup lang="ts">
// defineProps<{
//   title3: string
//   title: string
//   programName: string
//   degree: string
//   programNumber: string
//   industries: string
//   points: {
//     maxPoint: number
//     avPoint: number
//     minPoint: number
//   }
//   budgetPlaces: number
// }>()
</script>

<template>
  <div
    class="p-5 pt-10 flex flex-col items-center justify-between gap-8 border border-white border-opacity-40 rounded-xl bg-white bg-opacity-5 hover:relative hover:bottom-2.5 transition-all hover:shadow-2xl hover:shadow-blue-600"
  >
    <h2 class="text-8xl font-black my-20 hover:drop-shadow hover:shadow-blue-500">ПМИ</h2>
    <h3 class="text-3xl text-center">Прикладная математика и информатика</h3>
    <h4 class="font-light text-center text-xl">"Искусственный интеллект и большие данные"</h4>
    <button class="bg-white rounded-full w-full p-4 text-black">Учебный план</button>
    <ul class="font-light text-lg">
      <li><span class="font-bold">Бакалавриат</span></li>
      <li><span class="font-bold">Код направления:</span> 01.03.02</li>
      <li><span class="font-bold">Отрасли:</span> Машинное обучение, Data Science</li>
    </ul>
    <div class="w-full h-px rounded-full bg-white bg-opacity-50"></div>
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
            <td class="p-1 border-r last:border-r-0 w-1/3">163</td>
            <td class="p-1 border-r last:border-r-0 w-1/3">216</td>
            <td class="p-1 border-r last:border-r-0 w-1/3">280</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="w-full text-lg"><span class="font-bold">Бюджетных мест: </span>160</div>
  </div>
</template>

<style scoped></style>
