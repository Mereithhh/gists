---
title: 清除 git 远端与本地的 tag
---

## 删除某条

```bash
# 本地
git tag -d <your_tag_name>
# 远程
git push --delete origin <your_tag_name>
```

## 全部删除

```bash
# 删除全部远程 tag
git tag -l | xargs -n 1 git push --delete origin
# 删除全部本地 tag
git tag -l | xargs git tag -d
```
