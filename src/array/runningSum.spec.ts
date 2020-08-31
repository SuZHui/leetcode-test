import { dynamicSummation } from './runningSum'

test('数组动态求和', () => {
  expect(dynamicSummation([3,1,2,10,1]))
    .toStrictEqual([3,4,6,16,17])
  expect(dynamicSummation([1,2,3,4]))
    .toStrictEqual([1,3,6,10])
  expect(dynamicSummation([1]))
    .toStrictEqual([1])
})