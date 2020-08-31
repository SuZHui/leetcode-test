import { majorityElement } from './majorityElement'

test('找出数组中出现次数最多的那个数', () => {
  expect(majorityElement([1, 2, 3, 2, 2, 2, 5, 4, 2]))
    .toEqual(2)
})