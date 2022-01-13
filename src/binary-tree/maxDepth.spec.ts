import { create } from './create'
import { maxDepth, maxDepth2 } from './maxDepth'

describe('计算二叉树的最大深度', () => {
  const node = create([3, 9, 20, null, null, 15, 7])!

  test('自顶向下', () => {
    expect(maxDepth(node)).toEqual(3)
  })
  test('自底向上', () => {
    expect(maxDepth2(node)).toEqual(3)
  })
})
