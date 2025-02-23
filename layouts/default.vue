<script setup lang="ts"></script>

<template>
  <div v-auto-animate class="w-full font-custom text-white overflow-x-hidden">
    <Header class="mt-12" />
    <div>
      <slot />
    </div>
    <Footer class="mt-32" />
  </div>
</template>

<style scoped></style>
