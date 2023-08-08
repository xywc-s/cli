import prompt from './prompt'

/**
 * 询问是否覆盖已存在的目录或文件
 */
export default async () => {
  const { isOverwrite } = await prompt([
    // 返回值为 Promise
    // 具体配置参见：https://www.npmjs.com/package/inquirer#questions
    {
      type: 'list',
      name: 'isOverwrite',
      message: '原目录(文件)已经存在，请选择是否覆盖',
      choices: [
        { name: '覆盖', value: true },
        { name: '取消', value: false }
      ]
    }
  ])

  return isOverwrite
}
