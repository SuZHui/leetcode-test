import { kidsWithCandies } from './kidsWithCandies'

test('检查孩子手上的糖果是否能变成最多', () => {
  expect(kidsWithCandies([2,3,5,1,3], 3))
    .toStrictEqual([true,true,true,false,true])
})