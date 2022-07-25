---
title: git 修改 commit 信息
---
```
# 修改最近提交的 commit 信息
git commit --amend --message="modify message" --author="mereith wanglu@mereith.com"

# 仅修改 message 信息
git commit --amend --message="modify message"

# 仅修改 author 信息
git commit --amend --author="mereith wanglu@mereith.com"
```