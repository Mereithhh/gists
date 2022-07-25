---
title: css 设置滚动条样式
---

```css
/* 滚动槽 */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
::-webkit-scrollbar-track {
  /* border-radius: 4px; */
  background: rgba(0, 0, 0, 0.06);
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.08);
}
/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  /* border-radius: 4px; */
  background: #ccc;
  -webkit-box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
}
```
