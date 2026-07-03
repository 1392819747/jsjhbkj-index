"use client";

import { useState, useEffect, useCallback } from "react";
import { Header, Footer } from "@/components/site-layout";

const GYWM_SLIDES = [
  { src: "/images/gywm-1.jpg" },
  { src: "/images/gywm-2.jpg" },
];

const GYWM_TEXT = `专业 诚信 贴心 共赢

洁士佳环保科技 您身边的环保管家

江西省洁士佳环保科技有限公司，是一家专注室内空气检测治理（甲醛、苯、甲苯、二甲苯、总挥发性有机物TVOC等）；公共卫生消杀；四害防治；全屋定制家电；保洁服务；中央空调、家用空调清洗；油烟机清洗等综合性的服务公司。`;

function GywmSlide() {
  const [idx, setIdx] = useState(0);
  const next = useCallback(() => setIdx((i) => (i + 1) % GYWM_SLIDES.length), []);
  const prev = () => setIdx((i) => (i - 1 + GYWM_SLIDES.length) % GYWM_SLIDES.length);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
      {GYWM_SLIDES.map((s, i) => (
        <img
          key={i}
          src={s.src}
          alt={`关于我们 ${i + 1}`}
          style={{
            position: "absolute", inset: 0, width: "100%", height: "100%",
            objectFit: "cover", opacity: i === idx ? 1 : 0, transition: "opacity 1s ease-in-out",
          }}
        />
      ))}
      <button onClick={prev} style={{ position: "absolute", left: 8, top: "50%", transform: "translateY(-50%)", width: 30, height: 30, background: "rgba(0,0,0,0.3)", border: "none", color: "#fff", fontSize: 18, cursor: "pointer", zIndex: 10 }} aria-label="上一张">‹</button>
      <button onClick={next} style={{ position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)", width: 30, height: 30, background: "rgba(0,0,0,0.3)", border: "none", color: "#fff", fontSize: 18, cursor: "pointer", zIndex: 10 }} aria-label="下一张">›</button>
    </div>
  );
}

export default function GywmPage() {
  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      <Header />
      <section className="container-1000" style={{ padding: "30px 0" }}>
        <div style={{ textAlign: "center", marginBottom: 30 }}>
          <p style={{ margin: 0, fontFamily: "'Source Han Sans', 微软雅黑" }}>
            <span style={{ color: "#000000", fontSize: 30 }}>关于我们</span>
            <span style={{ color: "#000000", fontSize: 24 }}>/</span>
            <span style={{ color: "#27ae60", fontSize: 22 }}>ABOUT US</span>
          </p>
        </div>
        {/* 桌面端左右布局，手机端上下布局 */}
        <div className="gywm-flex" style={{ display: "flex", gap: 13, alignItems: "flex-start" }}>
          <div className="gywm-slide" style={{ width: 525, height: 323, flexShrink: 0 }}>
            <GywmSlide />
          </div>
          <div className="gywm-text" style={{ flex: 1, padding: "10px 0", color: "#333", fontFamily: "宋体, SimSun, serif", fontSize: 16, lineHeight: 1.8 }}>
            {GYWM_TEXT.split("\n\n").map((p, i) => {
              if (i === 0) {
                return (
                  <div key={i} style={{ fontSize: 22, fontWeight: "bold", color: "#27ae60", marginBottom: 12, textAlign: "center" }}>{p}</div>
                );
              }
              return <p key={i} style={{ margin: "0 0 12px", textAlign: "justify" }}>{p}</p>;
            })}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
