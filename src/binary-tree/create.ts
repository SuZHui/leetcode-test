/**
 * 二叉树的生成
 */
type BTreeNodeVal = NonNullable<any>

export type BTreeNode = {
  val: BTreeNodeVal
  left?: BTreeNode
  right?: BTreeNode
}

type InnerIterator = (a?: BTreeNodeVal) => void

export function create<T>(
  arr: Array<T | null>,
  iterator: InnerIterator = () => {}
): BTreeNode | null {
  if (arr.length <= 0 || arr[0] === null) return null
  const one = arr[0] as BTreeNodeVal
  iterator(one)
  const root: BTreeNode = { val: one }
  const queue: BTreeNode[] = []
  queue.push(root)
  let cur: BTreeNode
  let [lineNodeNumber, index, length] = [2, 1, arr.length - 1]
  while (length > 0) {
    for (let i = index; i < index + lineNodeNumber; i = i + 2) {
      if (i === arr.length) return root
      cur = queue.shift() as BTreeNode
      if (!cur) return root
      if (arr[i] !== null) {
        cur.left = { val: arr[i] as NonNullable<T> }
        iterator(arr[i]!)
        queue.push(cur.left)
      }
      if (i + 1 === arr.length) return root
      if (arr[i + 1] !== null) {
        cur.right = { val: arr[i + 1] as NonNullable<T> }
        iterator(arr[i + 1]!)
        queue.push(cur.right)
      }
    }
    index += lineNodeNumber
    length -= lineNodeNumber
    lineNodeNumber = queue.length * 2
  }
  return root
}
