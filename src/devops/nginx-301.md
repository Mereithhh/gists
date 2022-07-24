---
title: Nginx 301问题总结
---

在起项目用`nginx`反代的时候，会发现出现意料之外的`301`，把需要或者不需要的端口号带上。

## 现象

使用 `vanblog` 的镜像时使用`-p 2333:80`,那么：

1. 使用 http://域名:2333 可以正常访问
2. 使用 http://域名:2333/admin 无法访问，具体体现为：该请求会返回 301 重定向，Location 为 http://域名/admin

## 原因分析

[官方文档](http://www.5190m.top/note/2020/7/8/2020-07-08-install-elastic-and-kibana.html#%E4%BD%BF%E7%94%A8nginx%E5%8F%8D%E5%90%91%E4%BB%A3%E7%90%86Kibana)

```nginx
If a location is defined by a prefix string that ends with the slash character,
 and requests are processed by one of proxy_pass, fastcgi_pass, uwsgi_pass, scgi_pass, or memcached_pass,
 then the special processing is performed.
 In response to a request with URI equal to this string, but without the trailing slash,
 a permanent redirect with the code 301 will be returned to the requested URI with the slash appended.
 If this is not desired, an exact match of the URI and location could be defined like this:

location /user/ {
    proxy_pass http://user.example.com;
}

location = /user {
    proxy_pass http://login.example.com;
}
```

## 解决方案

配置文件增加：

```nginx
absolute_redirect off;
```
