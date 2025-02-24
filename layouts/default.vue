<script setup lang="ts"></script>

<template>
  <div class="w-full font-custom text-white">
    <ThreePointsBg />

    <Header class="mt-5 tablet:mt-12" />
    <div>
      <slot />
    </div>
    <Footer class="mt-32" />
  </div>
</template>

<style scoped></style>
