---
title: ant design pro 部署非根路径
---

比如我想部署到 `/admin` 路径下，那么我需要在`config.js` 中设置：

```js
base: "/admin/",
publicPath: '/admin/'
```

`nginx` 必须复制到 root 路径下的`admin` 子目录下，nginx 反代中设置：

```nginx
  root /usr/share/nginx/html;
  absolute_redirect off;
  location ^~ /admin{
      alias /usr/share/nginx/html/admin;
      index index.html;
      try_files $uri $uri/ /admin/index.html;
    }
```
