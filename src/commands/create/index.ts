import path from "path";
import fs from "fs-extra";
import dirExistCall from "./dirExistCall";
import chalk from "chalk";
import downloadRepo from "./downloadRepo";
import { askCreateType, askTemplateChoose } from "./askUser";

/**
 * 创建新项目
 * @param projectName - 项目名
 * @param options - 命令参数
 */
export default async (projectName: string, options: any) => {
  // 获取当前工作目录
  const cwd = process.cwd();
  // 拼接得到项目目录
  const targetDirectory = path.join(cwd, projectName);
  // 判断目录是否存在
  if (fs.existsSync(targetDirectory)) {
    await dirExistCall(options, targetDirectory);
  }
  console.log(
    chalk.red.bold(`\r\n  模板采用 vite 构建，node 版本需要 14.18+ 或更高\r\n`)
  );

  const projectType = await askCreateType();
  const templateType = await askTemplateChoose(projectType);
  console.log("🚀 ~ file: index.ts:29 ~ projectType:", projectType);
  console.log("🚀 ~ file: index.ts:31 ~ templateType:", templateType);

  await downloadRepo(templateType, projectName, targetDirectory);
};
