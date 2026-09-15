import type { RefElement } from '@u/util.ts'
import { onBeforeUnmount, onMounted } from 'vue'

export function useRefElement(el: Readonly<RefElement>, refElement?: RefElement) {
  onMounted(() => {
      refElement.value = el.value
  })

  onBeforeUnmount(() => {
      refElement.value = null
  })
}
