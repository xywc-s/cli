import chalk from "chalk";
import { downloadRepo } from "../../utils/downloadRepo";
import { getRepoURL, templateMap, TemplateType } from "../../const";
import { exec } from "child_process";
import util from "util";

const execScript = util.promisify(exec);
const createVueApp = async (projectName: string) => {
  console.log("执行创建 vue app");
  const { stderr, stdout } = await execScript(
    `npm create vue@latest ${projectName}`
  );
  console.log({ stderr, stdout });
};
/**
 * 下载项目模板
 * @param template - 模板名称
 * @param projectName - 项目名称
 * @param targetDirectory - 目标存储路径
 */
const downloadTemplate = async (
  template: TemplateType | "vue",
  projectName: string,
  targetDirectory: string
) => {
  switch (template) {
    case "microApp":
      await downloadRepo({
        repoURL: getRepoURL(templateMap.microApp),
        projectName,
        targetDirectory,
      });
      break;
    case "vue":
      await createVueApp(projectName);
      break;
    default:
      console.log(
        chalk.red.bold(`\r\n 模板『${template}』还在建设中...  \r\n`)
      );
  }
};

export default downloadTemplate;
