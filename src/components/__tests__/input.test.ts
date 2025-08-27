import { mount } from '@vue/test-utils'
import PrInput from '../core/form/PrInput.vue'
import { expect, test } from 'vitest'

test('sets the value', async () => {
  const wrapper = mount(PrInput, {
    props: {
      disabled: true,
    },
  })
  const input = wrapper.find('input')

  await input.setValue('')

  expect(input.attributes('disabled')).toBeDefined

  expect(input.element.value).toBe('')
})
