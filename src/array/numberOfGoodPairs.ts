/**
 * 
 * 给你一个整数数组 nums 。
  如果一组数字 (i,j) 满足 nums[i] == nums[j] 且 i < j ，就可以认为这是一组 好数对 。
  返回好数对的数目。

  输入：nums = [1,2,3,1,1,3]

  输出：4

  解释：有 4 组好数对，分别是 (0,3), (0,4), (3,4), (2,5) ，下标从 0 开始
 */
export function numberOfGoodPairs (nums: number[]) {
  if (!nums.length) return 0
  let result = 0
  let j = 0
  for (let i = 0; i < nums.length; j++) {
    /**
     * 循环实际是变量j自增
     * 如果j达到数组上限 再将i自增 同时j归零
     * 以达到和嵌套循环相同的效果
     *  */ 
    if (j === nums.length) {
      i++
      j = 0
    }
    i < j && nums[i] === nums[j] && result++
  }
  return result
}