/**
 * 二叉树是否对称
 * 输入：root = [1,2,2,3,4,4,3]
 * 输出：true
 *
 * 输入：root = [1,2,2,null,3,null,3]
 * 输出：false
 */
import { BTreeNode } from './create'

export function isSymmetric(root?: BTreeNode) {
  // 如果根节点为空 则为true
  if (!root) return true
  const fn = (left?: BTreeNode, right?: BTreeNode): boolean => {
    if (!left && !right) return true
    if (!left || !right || left.val !== right.val) return false
    return fn(left.left, right.right) && fn(left.right, right.left)
  }
  return fn(root.left, root.right)
}

/**
 * 非递归
 * @param root
 */
export function isSymmetric2(root?: BTreeNode) {
  if (!root) return true
  const queue: Array<BTreeNode | undefined> = []
  queue.push(root.left, root.right)
  while (queue.length > 0) {
    const left = queue.shift()
    const right = queue.shift()
    // 如果都为空继续循环
    if (!left && !right) continue
    if (!left !== !right) return false
    if (left?.val !== right?.val) return false
    // 每次比较会从queue取出两个 所以插入队列的顺序必须两两对称 否则比较将出错
    queue.push(left?.left, right?.right, left?.right, right?.left)
  }
  return true
}
