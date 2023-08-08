/**
 * 睡眠函数
 * @param {Number} delay 睡眠时间(ms)
 */
export default async (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(false)
    }, delay)
  })
}
