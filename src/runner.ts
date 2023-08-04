import { program } from "commander";
import chalk from "chalk";
import { create } from "./commands";
import { BRAND_LOGO, VERSION } from "./const";

const runner = () => {
  program
    .name(chalk.cyan("angel"))
    .usage(`${chalk.yellow("<command>")} [options]`);

  program.version(
    `\r\n  ${chalk.cyan.bold(VERSION)}
    ${chalk.cyan.bold(BRAND_LOGO)}`
  );

  program
    .command("new <project-name>")
    .alias("n")
    .description(chalk.cyan("创建新项目"))
    .option(
      "-f, --force",
      chalk.red(
        "如果目录已存在将覆盖原目录，请谨慎使用，这会先删除你已存在的项目再进行创建，可能会存在意外情况"
      )
    )
    .action(create);

  program.on("--help", function () {
    console.log(
      `\r\n终端执行 ${chalk.cyan.bold(
        "angel <command> --help"
      )} 获取更多命令详情\r\n`
    );
  });

  program.parse(process.argv);
};

export default runner;
