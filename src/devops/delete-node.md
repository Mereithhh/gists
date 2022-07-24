---
title: k8s 删除节点
---

```bash
kubectl drain k8s-node1 --delete-local-data --force --ignore-daemonsets
kubectl delete node  k8s-node1
```
