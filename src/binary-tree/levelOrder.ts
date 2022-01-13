/**
 * 二叉树的层序遍历
 * 输入：root = [3,9,20,null,null,15,7]
 * 输出：[[3],[9,20],[15,7]]
 *
 * 输入：root = [1]
 * 输出：[[1]]
 *
 * 输入：root = []
 * 输出：[]
 */

import { BTreeNode } from './create'

export function levelOrder<T>(root?: BTreeNode): Array<T[]> {
  const result = []
  if (!root) return result
  const queue = [root]
  while (queue.length > 0) {
    const length = queue.length
    // 当前层级数据
    const temp = []
    for (let i = 0; i < length; i++) {
      const node = queue.shift()
      temp.push(node.val)
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
    result.push(temp)
  }
  return result
}
