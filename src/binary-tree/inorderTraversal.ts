/**
 * 二叉树的中序遍历
 * 二叉树的中序遍历顺序是：左子树→根节点→右子树
 * @url https://pic.leetcode-cn.com/1616683029-DFVaAV-image.png
 */
import { BTreeNode } from './create'

/**
 * 递归形式的遍历
 * @param root
 */
export function inorderTraversal<T>(root: BTreeNode) {
  const list: NonNullable<T>[] = []
  const fn = (node: BTreeNode | undefined, arr: NonNullable<T>[]) => {
    if (!node) return arr
    fn(node.left, arr).push(node.val)
    return fn(node.right, arr)
  }

  return fn(root, list)
}

/**
 * 非递归
 * @param root
 */
export function inorderTraversal2<T>(root: BTreeNode) {
  const list: NonNullable<T>[] = []
  const stack: BTreeNode[] = []
  while (root || stack.length > 0) {
    // 循环查找左子树的最叶子节点 同时将过程中所查找的节点压入栈中
    while (root) {
      stack.push(root)
      root = root.left
    }
    // 如果当前节点的左右子节点已经出栈 则从栈中弹出父节点继续遍历其右节点
    if (stack.length > 0) {
      root = stack.pop()
      list.push(root.val)
      root = root.right
    }
  }

  return list
}
