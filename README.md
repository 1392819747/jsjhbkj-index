# 江西洁士佳环保科技有限公司 - 企业官网

基于 Next.js 16 复刻的企业官网，完全本地化，无外部依赖。

## 技术栈

- **框架**: Next.js 16 (App Router)
- **语言**: TypeScript 5
- **样式**: Tailwind CSS 4 + 内联样式（还原原站像素级布局）
- **UI 组件**: shadcn/ui (New York style)
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
# 安装依赖（推荐使用 bun，也可用 npm/yarn/pnpm）
bun install

# 启动开发服务器
bun run dev
# 访问 http://localhost:3000

# 构建生产版本
bun run build

# 启动生产服务器
bun run start
```

## 部署方式

### 方式 1: Vercel（推荐）
1. 将代码推送到 GitHub
2. 在 Vercel 导入仓库，自动部署

### 方式 2: 自建服务器（standalone 模式）
```bash
bun run build
# 生成 .next/standalone 独立运行包
node .next/standalone/server.js
```

### 方式 3: Docker
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY . .
RUN npm install && npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 项目结构

```
.
├── public/
│   ├── favicon.ico              # 网站图标
│   └── images/                  # 47 张图片（共 16MB，全部本地）
│       ├── banner.jpg           # 首页轮播图
│       ├── case1-8.jpg          # 资质照片图集
│       ├── cert1-8.jpg          # 行业峰会图集
│       ├── icon-1~4.png         # 业务按钮图标（normal）
│       ├── icon-1~4-hover.png   # 业务按钮图标（hover）
│       ├── sgal-1~12.jpg        # 施工案例图集
│       ├── sbzs-1~6.jpg         # 设备展示图集
│       ├── gywm-1~2.jpg         # 关于我们图集
│       └── code.png             # 验证码图片
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
│       ├── site-layout.tsx      # 共享组件（TopNav/Header/Footer/Atlas）
│       └── ui/                  # shadcn/ui 组件库
├── package.json
├── next.config.ts               # output: "standalone"
└── tsconfig.json
```

## 特性

- ✅ **完全本地化**：所有图片、字体、图标均从本地加载，无外部依赖
- ✅ **响应式设计**：适配桌面/平板/手机
- ✅ **客户端路由**：Next.js Link 实现页面无刷新跳转
- ✅ **导航高亮**：当前所在页面的导航项显示绿色
- ✅ **图片灯箱**：点击图集图片可放大预览
- ✅ **轮播组件**：首页、设备展示、关于我们均含自动轮播
- ✅ **留言表单**：设备展示页含完整留言表单（标题/内容/邮箱/验证码）
- ✅ **像素级还原**：所有元素坐标、配色、字体与原站完全一致

## 配色（与原站一致）

- 主色：`#27ae60` / `#27b244`（绿色）
- 关于我们 banner 背景：`rgb(39, 174, 96)`
- 标题黑：`#000000`
- 描述灰：`#bdc3c7`
- 导航字：`#666`
- 分割线：`#6aa84f`

## 字体（与原站一致）

- 中文标题：Microsoft JhengHei / 微软雅黑
- 中文正文：Microsoft YaHei / 微软雅黑
- 标语和图集标题：Source Han Sans, Geneva, sans-serif

## 许可

本网站源码归江西洁士佳环保科技有限公司所有。
