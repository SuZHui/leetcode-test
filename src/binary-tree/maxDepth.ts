/**
 * 求二叉树的最大深度
 * 输入 [3,9,20,null,null,15,7]
 * 输出 3
 */

import { BTreeNode } from './create'

/**
 * 自顶向下
 * @param root
 */
export function maxDepth(root?: BTreeNode) {
  let depth = 0
  const fn = (node?: BTreeNode, level = 1) => {
    if (!node) return
    if (!node.left && !node.right) {
      depth = Math.max(depth, level)
    }
    fn(node.left, level + 1)
    fn(node.right, level + 1)
  }
  fn(root)
  return depth
}

/**
 * 自底向上
 * @param root
 */
export function maxDepth2(root?: BTreeNode) {
  const fn = (node?: BTreeNode): number => {
    if (!node) return 0
    const leftDepth = fn(node.left)
    const rightDepth = fn(node.right)
    return Math.max(leftDepth, rightDepth) + 1
  }
  return fn(root)
}
