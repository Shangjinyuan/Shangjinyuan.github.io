# 未完稿

记录大学生活、数学与编程的个人博客。首页是 `index.html`，文章在 `posts/`，共用样式在 `assets/site.css`。

## 本地预览

```sh
python -m http.server 8000
```

打开 http://localhost:8000/。无需安装任何构建依赖。

## 添加文章

1. 复制 `posts/` 下的一篇文章，更新标题、日期、摘要和正文。
2. 在首页归档中添加对应条目，使用 `campus`、`math` 或 `code` 作为 `data-category`。
3. 如需更换首页推荐，同时更新推荐区域的标题、摘要、日期和文章链接。

## GitHub Pages

在仓库的 **Settings → Pages** 中选择 **Deploy from a branch**，来源设为 **main / (root)**。站点地址为 https://shangjinyuan.github.io/。
