import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 静态导出，生成纯 HTML/CSS/JS，可部署到任意静态托管平台
  // (Cloudflare Pages, Vercel, Netlify, GitHub Pages, 自建服务器等)
  output: "export",
  images: {
    // 静态导出时禁用 Next.js 图片优化（直接使用原始图片）
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  // 显式指定 Turbopack 根目录为运行命令时所在的当前工作目录
  // 避免误把父级目录（如用户主目录）的 package-lock.json / proxy.js 当成工作区
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
