import fs from "fs-extra";
import path from "path";
export type ValuesToUnion<T> = {
  [P in keyof T]: T[P];
}[keyof T];

/** 当前根目录 */
export const ROOT_DIR = path.resolve(__dirname, "../");

const { version } = fs.readJSONSync(path.resolve(ROOT_DIR, "package.json"));

/** https://tooltt.com/art-ascii/ */
export const BRAND_LOGO = `
░█▀█░█▀█░█▀▀░█▀▀░█░░░█░█░█▀▀░█▀█░█▀▀░▀█▀
░█▀█░█░█░█░█░█▀▀░█░░░░█░░█▀▀░█▀█░▀▀█░░█░
░▀░▀░▀░▀░▀▀▀░▀▀▀░▀▀▀░░▀░░▀▀▀░▀░▀░▀▀▀░░▀░
`;

/** 当前版本号 */
export const VERSION = version;

export const templateMap = {
  microApp: "gh:xywc-s/vue-template-angel",
  react: "react-template",
  uniapp: "uniapp",
  nest: "nest",
  library: "library",
} as const;
export type TemplateMap = typeof templateMap;
export type TemplateType = keyof TemplateMap;
export type TemplateRepoType = ValuesToUnion<TemplateMap>;
