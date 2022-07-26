---
title: css 实现悬停下划线动画
---

```css
.ua {
  position: relative;
  text-decoration: none;
  font-size: 20px;
  color: #333;
}
.ua:before {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -2px;
  width: 0;
  height: 2px;
  background: #4285f4;
  transition: all 0.3s;
}
.ua:hover:before {
  width: 100%;
  left: 0;
  right: 0;
}
```
