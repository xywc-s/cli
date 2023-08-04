import { TemplateType } from "../../const";
import prompt from "../../utils/prompt";

// ========== overwrite ==========
/** 询问要创建的项目类型 */
export const askOverwrite = async () => {
  const { isOverwrite } = await prompt([
    // 返回值为 Promise
    // 具体配置参见：https://www.npmjs.com/package/inquirer#questions
    {
      type: "list",
      name: "isOverwrite",
      message: "原目录已经存在，请选择是否覆盖",
      choices: [
        { name: "覆盖", value: true },
        { name: "取消", value: false },
      ],
    },
  ]);

  return isOverwrite;
};

// ========== library ==========
/** 询问要创建的项目(框架)类型 */
export const askCreateType = async () => {
  const { projectType } = await prompt([
    // 返回值为 Promise
    // 具体配置参见：https://www.npmjs.com/package/inquirer#questions
    {
      type: "list",
      name: "projectType",
      message: "请选择你要创建的项目(框架)类型",
      choices: [
        { name: "vue", value: "vue" },
        { name: "react", value: "react" },
        { name: "uniapp", value: "uniapp" },
        { name: "express", value: "express" },
        { name: "koa", value: "koa" },
        { name: "nest", value: "nest" },
        { name: "library", value: "library" },
      ],
    },
  ]);

  return projectType;
};

/** 询问要选择的模板 */
export const askTemplateChoose = async (type: string) => {
  const templateMap = new Map();
  templateMap.set("vue", [
    { name: "独立应用模板", value: "vue" },
    { name: "中台子应用模板", value: "microApp" },
  ]);
  const { tempalteType } = await prompt([
    // 返回值为 Promise
    // 具体配置参见：https://www.npmjs.com/package/inquirer#questions
    {
      type: "list",
      name: "tempalteType",
      message: "请选择项目模板",
      choices: templateMap.get(type),
    },
  ]);

  return tempalteType as TemplateType;
};
