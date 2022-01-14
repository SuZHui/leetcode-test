import { create } from './create'
import { isSymmetric, isSymmetric2 } from './isSymmetric'

describe('二叉树是否对称', () => {
  const nodeT = create([1, 2, 2, 3, 4, 4, 3])!
  const nodeF = create([1, 2, 2, null, 3, null, 3])!

  test('递归', () => {
    expect(isSymmetric(nodeT)).toBeTruthy()
    expect(isSymmetric(nodeF)).toBeFalsy()
  })

  test('非递归', () => {
    expect(isSymmetric2(nodeT)).toBeTruthy()
    expect(isSymmetric2(nodeF)).toBeFalsy()
  })
})
