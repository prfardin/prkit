import type { RefElement } from '@u/util.ts'
import { onBeforeUnmount, onMounted, type Ref } from 'vue'

export function useComponentEmit(
  el: Readonly<Ref<RefElement>>,
  handler: EventListener,
  componentEmits: readonly string[],
) {
  onMounted(() => {
    componentEmits.forEach((eventName) => {
      el.value!.addEventListener(eventName, handler)
    })
  })

  onBeforeUnmount(() => {
    componentEmits.forEach((eventName) => {
      el.value!.removeEventListener(eventName, handler)
    })
  })
}
