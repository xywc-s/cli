import { loading } from "./loading";
import { TemplateRepoType } from "../const";
import { downloadTemplate } from "giget";
export type DownloadRepoParams = {
  /** 仓库地址 */
  repoURL: TemplateRepoType;
  /** 项目名称(相对路径) */
  projectName: string;
  /** 项目路径(绝对路径) */
  dir: string;
};

/**
 * 下载仓库
 */
export const downloadRepo = async ({
  repoURL,
  projectName,
  dir,
}: DownloadRepoParams) => {
  await loading(
    "正在下载模板，请稍后...",
    () =>
      downloadTemplate(repoURL, {
        dir,
      }),
    projectName
  );
};
