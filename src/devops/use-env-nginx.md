---
title: 在 nginx 配置中使用环境变量
---

打包`nginx`容器时，想在运行容器的时候使用环境变量传入配置。

可以通过加一个启动脚本完成，类似这种：

```bash
echo "upstream otherserver {" > /usr/local/nginx/conf/upstream.conf
echo " server $OTHER_SERVER1;" >> /usr/local/nginx/conf/upstream.conf
echo " server $OTHER_SERVER2;" >> /usr/local/nginx/conf/upstream.conf
echo "}" >> /usr/local/nginx/conf/upstream.conf
```
