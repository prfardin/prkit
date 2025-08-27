import { expect, describe, it } from 'vitest'
import { useToggle } from '../../scripts/Composable/useToggle'

describe('toggle test', () => {
  it('should be false', () => {
    const { value } = useToggle()
    expect(value.value).toBe(false)
  })
  it('should be toggle value', () => {
    const { value, toggle } = useToggle()

    toggle()
    expect(value.value).toBe(true)
  })
})
