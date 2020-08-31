/**
 * 给你一个数组 arr ，请你将每个元素用它右边最大的元素替换，如果是最后一个元素，用 -1 替换。

  完成所有替换操作后，请你返回这个数组。
  输入：arr = [17,18,5,4,6,1]
  
  输出：[18,6,6,6,1,-1]

 * @param {array} arr 
 */
export function replaceElements (arr: number[]): number[] {
  const result = []
  let temp = -1
  for (let i = arr.length - 1; i >= 0; i--) {
    result[i] = temp
    arr[i] > temp && (temp = arr[i])
  }
  return result
}