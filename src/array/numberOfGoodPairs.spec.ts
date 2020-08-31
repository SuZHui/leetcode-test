import { numberOfGoodPairs } from './numberOfGoodPairs'

test('获得好数对的数目', () => {
  expect(numberOfGoodPairs([1,2,3,1,1,3]))
    .toEqual(4)
  expect(numberOfGoodPairs([1,1,1,1]))
    .toEqual(6)
  expect(numberOfGoodPairs([1,2,3]))
    .toEqual(0)
})