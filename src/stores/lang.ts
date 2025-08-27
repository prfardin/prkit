import { defineStore } from 'pinia'
import { i18nGlobal } from '@sc/i18n'
import { ref } from 'vue'

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useDirectionStore = defineStore('direction', () => {
  const direction = ref(i18nGlobal.locale === 'fa' ? 'right' : 'left')

  function change() {
    direction.value = 'right'
  }

  return { direction, change }
})
