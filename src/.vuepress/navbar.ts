import { navbar } from "vuepress-theme-hope";
import fs from "fs";
import path from "path";
export function getFirstArticle(p: string) {
  const results = fs.readdirSync(path.join(process.cwd(), "src", p));
  if (results.length) {
    return results[0];
  } else {
    return "/";
  }
}
export default navbar([
  { text: "博客站", icon: "creative", link: "/get-started" },
  { text: "工具站", link: "/intro", icon: "advance" },
  {
    text: "分类",
    icon: "note",
    children: [
      {
        text: "DevOps",
        icon: "ci",
        link: getFirstArticle("devops"),
        activeMatch: "^/devops",
      },
      {
        text: "JavaScript",
        icon: "javascript",
        link: getFirstArticle("js"),
        activeMatch: "^/js",
      },
      {
        text: "CSS",
        icon: "css",
        link: getFirstArticle("css"),
        activeMatch: "^/css",
      },
    ],
  },
]);
