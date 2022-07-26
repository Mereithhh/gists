---
title: css 绘制三角形
---

```css
div:after {
  position: absolute;
  width: 0px;
  height: 0px;
  content: " ";
  border-right: 100px solid transparent;
  border-top: 100px solid #ff0;
  border-left: 100px solid transparent;
  border-bottom: 100px solid transparent;
}
```
