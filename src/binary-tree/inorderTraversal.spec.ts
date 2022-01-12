import { BTreeNode, create } from './create'
import { inorderTraversal, inorderTraversal2 } from './inorderTraversal'

let node: BTreeNode | null

beforeEach(() => {
  node = create([1, null, 2, 3, 5, 4])
})

describe('二叉树的中序遍历', () => {
  test('递归', () => {
    expect(inorderTraversal(node)).toStrictEqual([1, 4, 3, 2, 5])
  })
  test('非递归', () => {
    expect(inorderTraversal2(node)).toStrictEqual([1, 4, 3, 2, 5])
  })
})
