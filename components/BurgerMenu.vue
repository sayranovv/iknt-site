<script setup lang="ts"></script>

<template>
  <UiSheet>
    <UiSheetTrigger as-child>
      <div class="w-14 h-12 flex flex-col justify-between cursor-pointer">
        <div class="h-2.5 w-full bg-white"></div>
        <div class="h-2.5 w-full bg-white"></div>
        <div class="h-2.5 w-full bg-white"></div>
      </div>
    </UiSheetTrigger>
    <UiSheetContent class="bg-opacity-20 backdrop-blur-2xl">
      <nav class="mt-16 flex flex-col text-white gap-8 text-2xl items-start mb-0.5">
        <div class="flex flex-col gap-3 items-start">
          <UiSheetClose as-child>
            <NuxtLink to="/">Главная</NuxtLink>
          </UiSheetClose>
          <UiSheetClose as-child>
            <NuxtLink to="/news">Новости</NuxtLink>
          </UiSheetClose>
          <UiSheetClose as-child>
            <NuxtLink to="/applicant">Абитуриенту</NuxtLink>
          </UiSheetClose>
          <UiSheetClose as-child>
            <NuxtLink to="/professors">Преподаватели</NuxtLink>
          </UiSheetClose>
          <UiSheetClose as-child>
            <NuxtLink to="/about">Об институте</NuxtLink>
          </UiSheetClose>
          <UiSheetClose as-child>
            <NuxtLink to="/contact">Контакты</NuxtLink>
          </UiSheetClose>
        </div>

        <FormModal />
      </nav>
    </UiSheetContent>
  </UiSheet>
</template>

<style scoped></style>
