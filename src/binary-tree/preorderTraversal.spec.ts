import { BTreeNode, create } from './create'
import { preorderTraversal, preorderTraversal2 } from './preorderTraversal'

let node: BTreeNode | null

beforeEach(() => {
  node = create([1, null, 2, 3, 5, 4])
})

describe('', () => {
  test('二叉树递归前序遍历', () => {
    expect(preorderTraversal(node!)).toStrictEqual([1, 2, 3, 4, 5])
  })
  test('二叉树非递归前序遍历', () => {
    expect(preorderTraversal2(node!)).toStrictEqual([1, 2, 3, 4, 5])
  })
})
