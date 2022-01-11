/**
 * 二叉树的生成
 */

export type BTreeNode<T> = {
  val: T
  left?: BTreeNode<T>
  right?: BTreeNode<T>
}

type InnerIterator<T> = (a?: T) => void

export function create<T>(
  arr: T[],
  iterator: InnerIterator<T> = () => {}
): BTreeNode<T> | null {
  if (arr.length <= 0) return null
  iterator(arr[0])
  const root: BTreeNode<T> = { val: arr[0] }
  const queue = []
  queue.push(root)

  let [cur, lineNodeNumber, index, length] = [undefined, 2, 1, arr.length - 1]
  while (length > 0) {
    for (let i = index; i < index + lineNodeNumber; i = i + 2) {
      if (i === arr.length) return root
      cur = queue.shift()
      if (arr[i] !== null) {
        cur.left = { val: arr[i] }
        iterator(arr[i])
        queue.push(cur.left)
      }
      if (i + 1 === arr.length) return root
      if (arr[i + 1] !== null) {
        cur.right = { val: arr[i + 1] }
        iterator(arr[i + 1])
        queue.push(cur.right)
      }
    }
    index += lineNodeNumber
    length -= lineNodeNumber
    lineNodeNumber = queue.length * 2
  }
  return root
}
