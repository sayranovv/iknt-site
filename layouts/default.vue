<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Loader from '~/components/Loader.vue'

const loading = ref(true)
const fontsLoaded = ref(false)

function setLoading(value) {
  loading.value = value
}

async function checkFontsLoaded() {
  if (document.fonts) {
    await document.fonts.ready
  }
  fontsLoaded.value = true
}

onMounted(() => {
  checkFontsLoaded()
})
</script>

<template>
  <div class="w-full font-custom text-white overflow-y-auto overflow-x-hidden">
    <ThreePointsBg @loading="setLoading(true)" @loaded="setLoading(false)" />
    <Loader v-if="loading" />
    <div v-else>
      <Header class="mt-5 tablet:mt-12" />
      <div>
        <slot />
      </div>
      <Footer class="z-50 mt-32" />
    </div>
  </div>
</template>

<style scoped></style>
