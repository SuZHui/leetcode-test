/**
 * 二叉树的前序遍历
 * 二叉树的前序遍历顺序是：根节点→左子树→右子树
 */

import { BTreeNode } from './create'

/**
 * 二叉树递归前序遍历
 * @param root
 */
export function preorderTraversal<T>(root: BTreeNode) {
  const list: NonNullable<T>[] = []
  const fn = (
    node: BTreeNode | undefined,
    arr: NonNullable<T>[]
  ): NonNullable<T>[] => {
    if (node) {
      arr.push(node.val)
      return fn(node.right, fn(node.left, arr))
    } else {
      return arr
    }
  }
  return fn(root, list)
}

/**
 * 二叉树非递归前序遍历
 * @param root
 */
export function preorderTraversal2<T>(root: BTreeNode) {
  const list: NonNullable<T>[] = []
  if (!root) {
    return list
  }
  const stack: BTreeNode[] = []
  stack.push(root)
  while (stack.length > 0) {
    const node = stack.pop() as BTreeNode
    list.push(node.val)
    // 利用栈的后进先出特性，先压右再压左，出栈时会先取左子节点，从而达到 中 -> 左 -> 右的顺序
    if (node.right) {
      stack.push(node.right)
    }
    if (node.left) {
      stack.push(node.left)
    }
  }
  return list
}
