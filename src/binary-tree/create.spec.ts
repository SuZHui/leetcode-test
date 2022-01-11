import { create } from './create'

describe('二叉树的创建', () => {
  test('迭代器执行的次数与传入的节点数量保持一致', () => {
    const iterFn = jest.fn()
    create([1, null, 2, 3], iterFn)
    expect(iterFn).toHaveBeenCalledTimes(3)
  })

  test('根节点的左子节点是空的', () => {
    const node = create([1, null, 2, 3])
    expect(node.left).toBeUndefined()
  })

  test('根节点的右子节点是2', () => {
    const node = create([1, null, 2, 3])
    expect(node.right).not.toBeUndefined()
    expect(node.right.val).toBe(2)
  })
})
