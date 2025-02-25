<template>
  <div class="loader flex flex-col gap-3">
    <svg
      width="240"
      height="200"
      viewBox="0 0 240 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M160 0H80V40C80 62.0914 97.9086 80 120 80C142.091 80 160 62.0914 160 40V0ZM90 10H120V20H110V30H100V40H90V10ZM110 30H120V40H110V30Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 100H20V143.636L50 100H70V130H84.375L105 100L145 100V130H175V100H195V180H175V150H145V180H105L84.375 150H70V180H50V136.364L20 180H0V100ZM125 172.727L102.5 140L125 107.273V172.727Z"
        fill="white"
      />
      <path d="M200 100H240L240 180H220V120H200V100Z" fill="white" />
    </svg>
    <div class="spinner"></div>
  </div>
</template>

<script setup></script>

<style scoped>
.loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* Высокий z-index, чтобы быть поверх остальных элементов */
}

.spinner {
  border: 8px solid rgba(255, 255, 255, 0.3);
  border-top: 8px solid #fff; /* Цвет верхней части */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite; /* Анимация вращения */
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
