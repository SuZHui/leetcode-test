import { fibonacci } from './fibonacci'

test('斐波那契数列', () => {
  expect(fibonacci(30))
    .toEqual(832040)
  expect(fibonacci(29))
    .toEqual(514229)
})