import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDarkModeStore = defineStore('lightMode', () => {
  const light = ref('uk-light')

  function changeMode() {
    if (light.value === 'uk-light') {
      light.value = 'uk-dark'
    } else light.value = 'uk-light'
  }

  return { light, changeMode }
})
