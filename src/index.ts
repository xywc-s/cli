import { program } from 'commander'
import chalk from 'chalk'
import { create } from './commands'
import { BRAND_LOGO, VERSION } from './const'
const bootstrap = () => {
  program
    .name(chalk.cyan('angel'))
    .usage(`${chalk.yellow('<command>')} [options]`)
    .option('-h, --help', '显示所有指令信息')
    .description(`${chalk.cyan.bold(BRAND_LOGO)}`)

  program.version(
    `${chalk.cyan.bold(VERSION)}
    ${chalk.cyan.bold(BRAND_LOGO)}`,
    '-v, --version',
    '显示版本号'
  )

  program
    .command('new <project-name>')
    .alias('n')
    .description('创建新项目')
    .option(
      '-f, --force',
      chalk.red(
        '如果目录已存在将覆盖原目录，请谨慎使用，这会先删除你已存在的项目再进行创建，可能会存在意外情况'
      )
    )
    .action(create)

  program.command('help [command]').description('显示帮助信息')

  program.on('--help', function () {
    console.log(`\r\n终端执行 ${chalk.cyan.bold('angel <command> --help')} 获取更多命令详情\r\n`)
  })

  program.parseAsync(process.argv)
}
bootstrap()
