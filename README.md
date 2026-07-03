# 江西洁士佳环保科技有限公司 - 企业官网

基于 Next.js 16 + TypeScript + Tailwind CSS 4 的企业官网，完全本地化，无外部依赖。

## 技术栈

- **框架**: Next.js 16 (App Router, 静态导出模式)
- **语言**: TypeScript 5
- **样式**: Tailwind CSS 4
- **图标**: Lucide React

## 页面结构

| 路径 | 说明 |
|------|------|
| `/` | 首页（核心业务 + 关于我们 + 资质照片 + 行业峰会） |
| `/sy` | 公司简介 |
| `/sgal` | 施工案例（12 张图集） |
| `/qyzz` | 企业资质（8 张证书图集） |
| `/sbzs` | 设备展示（6 张设备图轮播 + 留言表单） |
| `/gywm` | 关于我们（2 张轮播图 + 公司介绍） |

## 本地开发

```bash
npm install
npm run dev
# 访问 http://localhost:3000
```

## 构建生产版本（静态导出）

```bash
npm run build
# 生成 out/ 目录，包含纯静态 HTML/CSS/JS
```

## 部署到 Cloudflare Pages（推荐）

### 方法 1: 通过 Cloudflare Dashboard 配置

1. 登录 https://dash.cloudflare.com → Workers & Pages → Create
2. 连接 GitHub 仓库 `1392819747/jsjhbkj-index`
3. **关键配置**（必须按以下填写）:

| 配置项 | 值 |
|--------|-----|
| Framework preset | `None` (不要选 Next.js) |
| Build command | `npm run build` |
| Build output directory | `out` |
| Root directory | (留空) |
| Environment variables | `NODE_VERSION` = `20` |

4. 点击 **Save and Deploy**

### 方法 2: 通过 Wrangler CLI

```bash
npm install -g wrangler
wrangler pages deploy out --project-name=jsjhbkj-index
```

## 部署到 Vercel（最简单）

1. 访问 https://vercel.com/new
2. Import GitHub 仓库 `1392819747/jsjhbkj-index`
3. 直接点击 **Deploy**（Vercel 自动识别 Next.js 静态导出）

## 部署到 Netlify

1. 访问 https://app.netlify.com/start
2. 连接 GitHub 仓库
3. 配置:
   - Build command: `npm run build`
   - Publish directory: `out`

## 项目结构

```
.
├── public/
│   ├── favicon.ico
│   └── images/                  # 47 张本地图片
├── src/
│   ├── app/
│   │   ├── layout.tsx           # 根布局
│   │   ├── page.tsx             # 首页
│   │   ├── sy/page.tsx          # 公司简介
│   │   ├── sgal/page.tsx        # 施工案例
│   │   ├── qyzz/page.tsx        # 企业资质
│   │   ├── sbzs/page.tsx        # 设备展示
│   │   └── gywm/page.tsx        # 关于我们
│   └── components/
│       └── site-layout.tsx      # 共享组件
├── next.config.ts               # output: "export" 静态导出
├── package.json
└── tsconfig.json
```

## 特性

- ✅ **完全本地化**：所有图片、字体、图标均从本地加载
- ✅ **静态导出**：生成纯 HTML，可部署到任意静态托管平台
- ✅ **响应式设计**：适配桌面/平板/手机
- ✅ **客户端路由**：Next.js Link 实现页面无刷新跳转
- ✅ **导航高亮**：当前所在页面的导航项显示绿色
- ✅ **图片灯箱**：点击图集图片可放大预览

## 配色

- 主色：`#27ae60` / `#27b244`（绿色）
- 关于我们 banner 背景：`rgb(39, 174, 96)`
- 标题黑：`#000000`
- 描述灰：`#bdc3c7`
- 导航字：`#666`
- 分割线：`#6aa84f`

## 字体

- 中文标题：Microsoft JhengHei / 微软雅黑
- 中文正文：Microsoft YaHei / 微软雅黑
- 标语和图集标题：Source Han Sans, Geneva, sans-serif

## 许可

本网站源码归江西洁士佳环保科技有限公司所有。
