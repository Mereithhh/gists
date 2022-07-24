import { defineUserConfig } from "vuepress";
import theme from "./theme";
import { searchPlugin } from "@vuepress/plugin-search";
export default defineUserConfig({
  lang: "zh-CN",
  title: "Mereith's Gists",
  description: "Mereith's 代码片段&笔记",
  head: [["link", { rel: "icon", href: "/logo.svg" }]],
  base: "/",
  plugins: [
    searchPlugin({
      locales: {
        "/": {
          placeholder: "搜索",
        },
      },
    }),
  ],
  theme,
});
