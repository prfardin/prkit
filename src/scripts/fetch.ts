import { ref } from 'vue'
import { FormData } from '@u/types'

// must review in future
function formData(data: object) {
  return ref<FormData>({
    busy: false,
    data,
  })
}

export { formData }
