/**
 * 二叉树的后序遍历
 * 别 名： 后根遍历
 * 二叉树的后序遍历顺序 左子树 -> 右子树 -> 根节点
 */

import { BTreeNode } from './create'

/**
 * 递归
 * @param root
 */
export function postorderTraversal<T>(root: BTreeNode) {
  const list: NonNullable<T>[] = []
  const fn = (node: BTreeNode | undefined, arr: NonNullable<T>[]) => {
    if (!node) {
      return arr
    }

    fn(node.right, fn(node.left, arr)).push(node.val)
    return arr
  }
  return fn(root, list)
}

/**
 * 非递归
 * @param root
 */
export function postorderTraversal2<T>(root?: BTreeNode) {
  const list: NonNullable<T>[] = []
  const stack: BTreeNode[] = []
  // 在左子树为空 右子树存在的情况下记录前置节点
  let preNode = null
  while (root || stack.length > 0) {
    if (root) {
      // 直达左子树的叶子节点，将经过的父节点压入栈
      stack.push(root)
      root = root.left
    } else {
      // 到达叶子节点 查看栈顶的父节点是否存在右子节点
      const node = stack[stack.length - 1]
      if (node.right && node.right !== preNode) {
        root = node.right
      } else {
        // 右子节点也不存在
        preNode = stack.pop()!
        list.push(preNode.val)
        root = undefined
      }
    }
  }
  return list
}
