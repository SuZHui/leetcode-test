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

export function levelOrder<T>(root?: BTreeNode) {
  const result: Array<T[]> = []
  if (!root) return result
  const queue = [root]
  while (queue.length > 0) {
    // 缓存当前层级的长度，不能直接使用`queue.length`
    const length = queue.length
    // 当前层级数据
    const temp = []
    // 遍历当前层级的节点
    for (let i = 0; i < length; i++) {
      const node = queue.shift()!
      temp.push(node.val)
      // 遍历父层级的节点时 提前塞入子层级的节点
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
