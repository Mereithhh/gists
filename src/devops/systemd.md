---
title: Systemd 服务
---

参考文章: [Systemd 定时器教程](https://www.ruanyifeng.com/blog/2018/03/systemd-timer.html)

## 路径

```
/lib/systemd/system：系统默认的单元文件
/etc/systemd/system：用户安装的软件的单元文件
/usr/lib/systemd/system：用户自己定义的单元文件
```

## 模板

### 服务

```
[Unit]
Description=MyTimer

[Service]
ExecStart=/bin/bash /path/to/mail.sh
```

### 定时器

```
[Unit]
Description=Runs mytimer every hour

[Timer]
OnUnitActiveSec=1h
Unit=mytimer.service

[Install]
WantedBy=multi-user.target
```
