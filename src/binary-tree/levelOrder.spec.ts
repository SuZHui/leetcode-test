import { create } from './create'
import { levelOrder } from './levelOrder'

describe('二叉树的层序遍历', () => {
  const node = create([3, 9, 20, null, null, 15, 7])!

  test('遍历', () => {
    expect(levelOrder(node)).toStrictEqual([[3], [9, 20], [15, 7]])
  })
})
