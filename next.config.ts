import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 静态导出模式 - 生成纯 HTML/CSS/JS 到 out/ 目录
  output: "export",
  // 每个路由生成独立目录 (如 /sgal/index.html)，支持无 .html 后缀访问
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
