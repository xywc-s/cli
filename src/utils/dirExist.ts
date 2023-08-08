import fs from 'fs-extra'
import askOverwrite from './askOverwrite'

/**
 * 如果目录已经存在时调用
 * @param options - 命令参数
 * @param targetDirectory - 目标路径
 */
export default async (options: Record<string, boolean>, targetDirectory: string) => {
  // 判断是否使用 --force 参数
  if (options.force) {
    await fs.remove(targetDirectory)
  } else {
    // 主动选择是否覆盖
    const isOverwrite = await askOverwrite()
    if (isOverwrite) {
      await fs.remove(targetDirectory)
    } else {
      console.log('❌ 操作取消...')
      process.exit(1)
    }
  }
}
