<script setup lang="ts"></script>

<template>
  <div class="flex justify-between items-center">
    <!--        <div class="flex gap-5 justify-between items-center">-->
    <!--          <div-->
    <!--            class="relative w-full max-w-sm md:max-w-lg lg:max-w-xl rounded-lg overflow-hidden shadow-lg"-->
    <!--          >-->
    <!--            &lt;!&ndash; Фоновое изображение &ndash;&gt;-->
    <!--            <div class="relative">-->
    <!--              <img :src="imageSrc" alt="Фоновое изображение" class="w-full h-80 object-cover" />-->
    <!--              <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80"></div>-->
    <!--            </div>-->

    <!--            &lt;!&ndash; Текстовый блок &ndash;&gt;-->
    <!--            <div class="absolute bottom-0 p-4 text-white">-->
    <!--              <p class="text-sm uppercase tracking-wide opacity-80">{{ tag }}</p>-->
    <!--              <h2 class="text-xl font-bold">{{ title }}</h2>-->
    <!--            </div>-->

    <!--            &lt;!&ndash; Логотип &ndash;&gt;-->
    <!--            <div class="absolute bottom-4 right-4 flex items-center space-x-2">-->
    <!--              <div class="bg-gradient-to-r from-orange-400 to-red-600 px-3 py-1 rounded-md">-->
    <!--                <p class="text-white font-semibold text-sm">{{ logoText }}</p>-->
    <!--              </div>-->
    <!--              <p class="text-white text-sm opacity-80">{{ footerText }}</p>-->
    <!--            </div>-->
    <!--          </div>-->
    <NewsItem />
    <NewsItem />
    <NewsItem />
    <UiCard class="relative w-full h-80">
      <img
        src="/assets/img/150.jpg"
        alt="Фоновое изображение"
        class="relative w-full h-80 object-cover"
      />
      <UiCardHeader>
        <UiCardTitle>Card Title</UiCardTitle>
        <UiCardDescription>Card Description</UiCardDescription>
      </UiCardHeader>
      <UiCardContent> Card Content </UiCardContent>
      <UiCardFooter> Card Footer </UiCardFooter>
    </UiCard>
    <!--      <UiCard class="w-full">-->
    <!--        <UiCardHeader>-->
    <!--          <UiCardTitle>Card Title</UiCardTitle>-->
    <!--          <UiCardDescription>Card Description</UiCardDescription>-->
    <!--        </UiCardHeader>-->
    <!--        <UiCardContent> Card Content </UiCardContent>-->
    <!--        <UiCardFooter> Card Footer </UiCardFooter>-->
    <!--      </UiCard>-->
    <!--      <UiCard class="w-full">-->
    <!--        <UiCardHeader>-->
    <!--          <UiCardTitle>Card Title</UiCardTitle>-->
    <!--          <UiCardDescription>Card Description</UiCardDescription>-->
    <!--        </UiCardHeader>-->
    <!--        <UiCardContent> Card Content </UiCardContent>-->
    <!--        <UiCardFooter> Card Footer </UiCardFooter>-->
    <!--      </UiCard>-->
    <!--      <div class="w-6 h-6 bg-blue-800"></div>-->
    <!--    </div>-->
  </div>
</template>

<style scoped></style>
