---
title: github actions 获取 tag
---

在使用 `github actions` 有时候会希望获取到 `tag` 名。

```yaml
name: Release

on:
  push:
    tags:
      - "v*"

jobs:
  release:
    name: Release
    runs-on: ubuntu-latest
    steps:
      - name: Get version
        id: get_version
        run: echo ::set-output name=VERSION::${GITHUB_REF/refs\/tags\//}
      - name: Echo Version
        run: echo ${{ steps.get_version.outputs.VERSION }}
```
