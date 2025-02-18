import * as THREE from 'three'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      three: THREE
    }
  }
})
