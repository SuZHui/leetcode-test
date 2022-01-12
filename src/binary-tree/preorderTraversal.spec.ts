import { BTreeNode, create } from './create'
import { preorderTraversal, preorderTraversal2 } from './preorderTraversal'

let node: BTreeNode | null

beforeEach(() => {
  node = create([1, null, 2, 3, 5, 4])
})

describe('二叉树的前序遍历', () => {
  test('递归', () => {
    expect(preorderTraversal(node!)).toStrictEqual([1, 2, 3, 4, 5])
  })
  test('非递归', () => {
    expect(preorderTraversal2(node!)).toStrictEqual([1, 2, 3, 4, 5])
  })
})
