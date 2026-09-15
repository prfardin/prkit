import type { RefElement } from '@u/util.ts'
import { onBeforeUnmount, onMounted } from 'vue'
import { addComponentEmit, removeComponentEmit } from '@u/emits.ts'

export function useComponentEmit(
  el: Readonly<RefElement>,
  handler: EventListener,
  componentEmits: readonly string[]
) {
  onMounted(() => {
    addComponentEmit(el.value, handler, componentEmits)
  })

  onBeforeUnmount(() => {
    removeComponentEmit(el.value, componentEmits, handler)
  })
}
