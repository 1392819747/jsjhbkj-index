"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback } from "react";

const NAV_ITEMS = [
  { label: "公司简介", href: "/sy" },
  { label: "施工案例", href: "/sgal" },
  { label: "企业资质", href: "/qyzz" },
  { label: "设备展示", href: "/sbzs" },
  { label: "关于我们", href: "/gywm" },
];

/**
 * 顶部导航 —— 响应式
 * 桌面：5 项横排 1000px 居中
 * 手机：汉堡菜单 + 折叠下拉
 */
export function TopNav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={{ width: "100%", background: "#fff", borderBottom: "1px solid #eeeeee" }}>
      <div className="container-1000" style={{ height: 57, position: "relative", display: "flex", alignItems: "center" }}>
        {/* 桌面导航 */}
        <ul className="nav-desktop" style={{ width: "100%", height: "100%" }}>
          {NAV_ITEMS.map((item) => {
            const isCurrent = pathname === item.href;
            return (
              <li
                key={item.label}
                style={{
                  width: "20%",
                  height: 57,
                  lineHeight: "57px",
                  textAlign: "center",
                }}
                className="nav-item"
              >
                <Link
                  href={item.href}
                  style={{
                    display: "block",
                    height: "100%",
                    color: isCurrent ? "#27ae60" : "#666",
                    fontSize: 14,
                    fontFamily: "'Microsoft YaHei', 微软雅黑, Arial",
                    textDecoration: "none",
                    transition: "color 0.3s",
                  }}
                  className="nav-link"
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* 手机汉堡按钮 */}
        <button
          className="nav-mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="菜单"
          style={{ marginLeft: "auto" }}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* 手机下拉菜单 */}
      {menuOpen && (
        <div className="nav-mobile-menu open">
          {NAV_ITEMS.map((item) => {
            const isCurrent = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={isCurrent ? "current" : ""}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}

      <style jsx>{`
        .nav-item:hover .nav-link {
          color: #27ae60 !important;
        }
      `}</style>
    </div>
  );
}

/**
 * 头部容器 —— 响应式
 * 导航 + 全宽幻灯片
 */
export function Header({ slides }: { slides?: { image: string }[] }) {
  const slideList = slides || [
    { image: "/images/banner.jpg" },
    { image: "/images/banner2.jpg" },
  ];

  return (
    <header style={{ width: "100%", position: "relative" }}>
      <TopNav />
      {/* 幻灯片 - 全宽铺满，高度响应式 */}
      <div style={{ position: "relative", width: "100%", height: "clamp(240px, 50vw, 600px)" }}>
        <Slideshow slides={slideList} />
      </div>
    </header>
  );
}

function Slideshow({ slides }: { slides: { image: string }[] }) {
  const [idx, setIdx] = useState(0);
  const next = useCallback(() => setIdx((i) => (i + 1) % slides.length), [slides.length]);
  const prev = () => setIdx((i) => (i - 1 + slides.length) % slides.length);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
      {slides.map((s, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            inset: 0,
            opacity: i === idx ? 1 : 0,
            transition: "opacity 1s ease-in-out",
          }}
        >
          <img src={s.image} alt="轮播图" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      ))}

      <button
        onClick={prev}
        style={{
          position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)",
          width: 36, height: 36, background: "rgba(0,0,0,0.3)", border: "none",
          color: "#fff", fontSize: 22, cursor: "pointer", zIndex: 10,
          display: "flex", alignItems: "center", justifyContent: "center",
        }}
        aria-label="上一张"
      >‹</button>
      <button
        onClick={next}
        style={{
          position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)",
          width: 36, height: 36, background: "rgba(0,0,0,0.3)", border: "none",
          color: "#fff", fontSize: 22, cursor: "pointer", zIndex: 10,
          display: "flex", alignItems: "center", justifyContent: "center",
        }}
        aria-label="下一张"
      >›</button>

      <div
        style={{
          position: "absolute", bottom: 16, left: "50%", transform: "translateX(-50%)",
          display: "flex", gap: 8, zIndex: 10,
        }}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            style={{
              width: i === idx ? 24 : 10, height: 10, borderRadius: 5,
              background: i === idx ? "#27ae60" : "rgba(255,255,255,0.6)",
              border: "none", cursor: "pointer", transition: "all 0.3s", padding: 0,
            }}
            aria-label={`第${i + 1}张`}
          />
        ))}
      </div>
    </div>
  );
}

/**
 * 底部 - 全宽绿色背景，内容居中
 */
export function Footer() {
  return (
    <footer style={{ background: "rgb(39, 174, 96)", width: "100%" }}>
      <div className="container-1000" style={{ position: "relative", height: 50, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div
          style={{
            textAlign: "center",
            color: "#ffffff",
            fontSize: 12,
            fontFamily: "Tahoma, Arial",
            lineHeight: 1.5,
          }}
        >
          版权所有：江西洁士佳环保科技有限公司
        </div>
      </div>
    </footer>
  );
}

/**
 * 图集组件 - 响应式：桌面 4 列 / 平板 2 列 / 手机 1 列
 */
export function Atlas({
  images,
  cols = 4,
}: {
  images: string[];
  cols?: 3 | 4;
}) {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <>
      <div className="atlas-grid">
        {images.map((src, i) => (
          <div
            key={i}
            style={{
              width: 235,
              height: 140,
              position: "relative",
              overflow: "hidden",
              cursor: "pointer",
            }}
            className="atlas-item"
            onClick={() => setLightbox(src)}
          >
            <img
              src={src}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.4s",
              }}
            />
            <div className="atlas-mask" />
          </div>
        ))}
      </div>

      {/* 分页器 */}
      <div
        style={{
          textAlign: "center",
          marginTop: 16,
          fontSize: 12,
          color: "#999",
          fontFamily: "Tahoma, Arial",
        }}
      >
        共 {images.length} 条 {Math.ceil(images.length / 8)} 页{" "}
        <span style={{ color: "#27ae60" }}>1</span>/{Math.ceil(images.length / 8)} 页
      </div>

      <style jsx>{`
        .atlas-item:hover img {
          transform: scale(1.08);
        }
        .atlas-mask {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(39,174,96,0.6), transparent);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .atlas-item:hover .atlas-mask {
          opacity: 1;
        }
      `}</style>

      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)",
            zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", padding: 20,
          }}
        >
          <img
            src={lightbox}
            alt="预览"
            style={{ maxWidth: "90vw", maxHeight: "85vh", objectFit: "contain" }}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={() => setLightbox(null)}
            style={{
              position: "absolute", top: 20, right: 30,
              background: "rgba(255,255,255,0.1)", border: "none", color: "#fff",
              fontSize: 32, cursor: "pointer", width: 44, height: 44, borderRadius: "50%",
            }}
          >×</button>
        </div>
      )}
    </>
  );
}
