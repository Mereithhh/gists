import { defineUserConfig } from "vuepress";
import theme from "./theme";
import { searchPlugin } from "@vuepress/plugin-search";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";
export default defineUserConfig({
  lang: "zh-CN",
  title: "Mereith's Gists",
  description: "Mereith's 代码片段&笔记",
  head: [
    ["link", { rel: "icon", href: "/logo.svg" }],
    [
      "script",
      {},
      `
  var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?6a8e73f35934ab5e7ed7403af9a8042b";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
  `,
    ],
  ],
  base: "/",
  plugins: [
    googleAnalyticsPlugin({
      // 配置项
      id: "G-0T48CDNXDR",
    }),
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
