import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "首页-企业官网",
  description: "江西洁士佳环保科技有限公司官网",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className="antialiased bg-white text-foreground" style={{ fontFamily: "'Microsoft YaHei', '微软雅黑', Arial, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
