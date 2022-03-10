import { hasPathSum } from './hasPathSum'
import { create } from './create'

describe('判断该树中是否存在 根节点到叶子节点 的路径', () => {
  const nodeT = create([1, 2, 3])!
  const nodeF = create([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1])!

  test('路径不存在', () => {
    expect(hasPathSum(nodeT, 5)).toBeFalsy()
  })

  test('路径存在', () => {
    expect(hasPathSum(nodeF, 22)).toBeTruthy()
  })

  test('空树', () => {
    expect(hasPathSum(null, 0)).toBeFalsy()
  })
})
