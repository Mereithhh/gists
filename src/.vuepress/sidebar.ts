import { sidebar } from "vuepress-theme-hope";
import fs from "fs";
import path from "path";
export function getAllArticles(p: string) {
  return fs.readdirSync(path.join(process.cwd(), "src", p));
}

export default sidebar([
  "/",
  {
    text: "DevOps",
    icon: "ci",
    prefix: "/devops/",
    children: getAllArticles("devops"),
  },
  {
    text: "JavaScript",
    icon: "javascript",
    prefix: "/js/",
    children: getAllArticles("js"),
  },
  {
    text: "CSS",
    icon: "css",
    prefix: "/css/",
    children: getAllArticles("css"),
  },
]);
