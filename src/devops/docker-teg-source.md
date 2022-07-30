---
title: docker 换源
---

先去自己的`阿里云容器镜像服务`获取自己的镜像加速地址，然后

```bash
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://llo2uxa1.mirror.aliyuncs.com"]
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker
```
