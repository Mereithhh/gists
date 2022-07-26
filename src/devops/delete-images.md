---
title: 批量删除镜像
---

## k8s

```bash
crictl images|grep none|awk '{print $3}'|xargs crictl rmi
```

## docker

```bash
docker images | awk 'NR!=1{print $1":"$2}' | xargs docker rmi
```

## docker 删除缓存

```bash
docker system prune --all
```
