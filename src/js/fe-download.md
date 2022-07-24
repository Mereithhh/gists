---
title: 纯前端下载文件
---

参考文档： [前端利用 Blob 对象创建指定文件并下载](https://segmentfault.com/a/1190000015026760)

代码：

```js
const handleExport = (toExport) => {
  const data = JSON.stringify(toExport, undefined, 4);
  const blob = new Blob([data], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `备份-${moment().format("YYYY-MM-DD")}.json`;
  link.click();
};
```
