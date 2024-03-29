/**
 * 斐波那契数，通常用 F(n) 表示，形成的序列称为斐波那契数列。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：
 * 
 * F(0) = 0,   F(1) = 1
 * 
  F(N) = F(N - 1) + F(N - 2), 其中 N > 1.

  给定 N，计算 F(N)。

  输入：2

  输出：1

  解释：F(2) = F(1) + F(0) = 1 + 0 = 1.
 */
export function fibonacci (n: number): number {
  if (n === 0) {
    return 0
  }
  if (n === 1 || n === 2) {
    return 1
  }

  let prev = 1, curr = 1
  for (let i = 3; i <= n; i++) {
    const sum = prev + curr
    prev = curr
    curr = sum
  }
  return curr
}