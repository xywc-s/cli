import { loading } from "./loading";
import { downloadGitRepo, RepoURL, TemplateRepoType } from "../const";

export type DownloadRepoParams = {
  repoURL: RepoURL<TemplateRepoType>;
  projectName: string;
  targetDirectory: string;
};

/**
 * 下载仓库
 * @param repoURL - 仓库地址
 * @param targetDirectory - 目标存储路径
 * @param projectName - 项目名称
 */
export const downloadRepo = async ({
  repoURL,
  projectName,
  targetDirectory,
}: DownloadRepoParams) => {
  await loading(
    "正在下载模板，请稍后...",
    () =>
      downloadGitRepo(
        `direct:${repoURL}`,
        targetDirectory,
        { clone: true },
        (err: any) => {
          console.log(err);
        }
      ),
    projectName
  );
};
