/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

export type TreeNode = {
  val: number
  left: TreeNode | null
  right: TreeNode | null
}

export function preorderTraversal(root: TreeNode) {
  const list = []
  const fn = (node, arr) => {
    if (node) {
      arr.push(node.val)
      return fn(node.right, fn(node.left, arr))
    } else {
      return arr
    }
  }
  return fn(root, list)
}
