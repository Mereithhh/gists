---
title: nginx 反代模板
---

## 80

```nginx
map $http_upgrade $connection_upgrade {
default upgrade;
'' close;
}

server {
    listen 80;
    server_name netdata.home.com;
    absolute_redirect off;
    location / {
        proxy_pass http://192.168.5.4:19999;
        proxy_redirect off;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        #添加长链接支持。
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection $connection_upgrade;
    }
}
```

## 443

````
```nginx
map $http_upgrade $connection_upgrade {
default upgrade;
'' close;
}
server {
  listen 80;
  server_name example.com;
  return 301 https://$host$request_uri;

}
server {
  listen 443 ssl http2;
  server_name example.com;
  ssl_certificate /path/to/public.crt;
  ssl_certificate_key /path/to/private.key;
  absolute_redirect off;
  location / {
    proxy_pass http://192.168.5.4:19999;
    proxy_redirect off;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    #添加长链接支持。
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection $connection_upgrade;
  }
}
````

## 反代 rewrite

```nginx
location /test/ {
        rewrite ^/test/?(.*)$ /$1 break;
        proxy_pass http://strapi;
        proxy_http_version 1.1;
        proxy_set_header X-Forwarded-Host $host;
        proxy_set_header X-Forwarded-Server $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Host $http_host;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";
        proxy_pass_request_headers on;
    }
```
