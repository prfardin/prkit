import { ref } from 'vue'

export function useToggle() {
  const value = ref<boolean>(false)
  function toggle() {
    value.value = !value.value
  }

  return { value, toggle }
}
