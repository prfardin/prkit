import { expect, test } from 'vitest'
import { sum } from '../../scripts/Composable/sum'

test('add 1 + 2 to equal 3', () => {
  expect(sum(8, 18)).toBe(26)
})
