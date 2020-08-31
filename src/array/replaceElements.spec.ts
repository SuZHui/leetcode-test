import { replaceElements } from './replaceElements'

test('将每个元素替换为右侧最大元素', () => {
  expect(replaceElements([17,18,5,4,6,1]))
    .toStrictEqual([18,6,6,6,1,-1])
  expect(replaceElements([6,5,4,3,2,3]))
    .toStrictEqual([5,4,3,3,3,-1])
})