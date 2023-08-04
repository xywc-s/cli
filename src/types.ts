export type ValuesToUnion<T> = {
  [P in keyof T]: T[P];
}[keyof T];

export type LoadingOther = {
  projectName: string;
};

export type RepoURL<T extends string> = `https://github.com/xywc-s/${T}.git`;

export interface RepoURLTag {
  vue: "vue-template";
  vueTypescript: "vue-template-typescript";
  microApp: "vue-template-for-micro-app";
  react: "react-template";
  reactTypescript: "react-template-typescript";
  nest: "nest";
  library: "library";
  libraryTypescript: "library-typescript";
}

export type RepoURLTagValues = ValuesToUnion<RepoURLTag>;

export type ProjectType =
  | "library"
  | "vue"
  | "react"
  | "uniapp"
  | "koa"
  | "nest";

export type PromptType =
  | "input"
  | "number"
  | "confirm"
  | "list"
  | "rawlist"
  | "expand"
  | "checkbox"
  | "password"
  | "editor";

export type PromptListItem = {
  type: PromptType;
  name: string;
  message: string;
  choices: { name: string; value: string | number | boolean }[];
  prefix?: string;
  suffix?: string;
  pageSize?: number;
  loop?: boolean;
  askAnswered?: boolean;
  waitUserInput?: boolean;
};

export type DownloadRepoParams = {
  repoURL: RepoURL<RepoURLTagValues>;
  projectName: string;
  targetDirectory: string;
};
