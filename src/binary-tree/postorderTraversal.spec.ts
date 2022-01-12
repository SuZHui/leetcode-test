import { BTreeNode, create } from './create'
import { postorderTraversal, postorderTraversal2 } from './postorderTraversal'

let node: BTreeNode

beforeAll(() => {
  node = create([1, null, 2, 3, 4, 5, 6, 7, 8, null, 9])!
})
describe('二叉树的后序遍历', () => {
  test('递归', () => {
    expect(postorderTraversal(node)).toStrictEqual([9, 5, 6, 3, 7, 8, 4, 2, 1])
  })
  test('非递归', () => {
    expect(postorderTraversal2(node)).toStrictEqual([9, 5, 6, 3, 7, 8, 4, 2, 1])
  })
})
