<script setup lang="ts"></script>

<template>
  <button
    class="text-xl tracking-wide font-bold bg-white bg-opacity-10 border-2 border-white border-opacity-20 py-2 px-9 rounded-lg hover:border-opacity-80 relative z-0 hover:z-10 hover:border-white hover:shadow-[0px_0px_30px_10px_rgba(255,255,255,0.2)] backdrop-blur-2xl transition-all before:absolute before:inset-0 before:bg-white before:rounded-lg before:opacity-0 hover:before:opacity-20"
  >
    <slot />
  </button>
</template>

<style scoped></style>
