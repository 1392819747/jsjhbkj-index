"use client";

import { useState, useEffect, useRef } from "react";
import { Header, Footer } from "@/components/site-layout";

// /sbzs 设备展示 - 6 张设备图，原站为多图横向滚动（同时显示5张，自动滚动）
const SBZS_SLIDES = [
  { src: "/images/sbzs-1.jpg" },
  { src: "/images/sbzs-4.jpg" },
  { src: "/images/sbzs-5.jpg" },
  { src: "/images/sbzs-6.jpg" },
  { src: "/images/sbzs-2.jpg" },
  { src: "/images/sbzs-3.jpg" },
];

function MultiSlide() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  // 自动滚动
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    let raf = 0;
    let pos = 0;
    const step = () => {
      pos += 0.5;
      // 滚动到末尾后回到开头（无缝循环：复制了一份内容）
      const half = el.scrollWidth / 2;
      if (pos >= half) pos = 0;
      el.scrollLeft = pos;
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  // 双份内容实现无缝循环
  const items = [...SBZS_SLIDES, ...SBZS_SLIDES];

  return (
    <div
      ref={scrollerRef}
      style={{
        width: "100%",
        height: 200,
        overflow: "hidden",
        background: "#f5f5f5",
        whiteSpace: "nowrap",
      }}
    >
      {items.map((s, i) => (
        <div
          key={i}
          style={{
            display: "inline-block",
            width: 210,
            height: 200,
            marginRight: 10,
            verticalAlign: "top",
            overflow: "hidden",
          }}
        >
          <img
            src={s.src}
            alt={`设备展示 ${(i % SBZS_SLIDES.length) + 1}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>
      ))}
    </div>
  );
}

function LeaveForm() {
  const [form, setForm] = useState({ Subject: "", Message: "", Email: "", Captcha: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ Subject: "", Message: "", Email: "", Captcha: "" });
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", height: 36, padding: "0 12px", border: "1px solid #dddddd",
    fontSize: 14, fontFamily: "'Microsoft YaHei', 微软雅黑", outline: "none", boxSizing: "border-box",
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: "100%" }}>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <tbody>
          <tr>
            <td style={{ width: 100, padding: "8px 0", verticalAlign: "middle" }}>
              <label style={{ fontSize: 14, color: "#666", fontFamily: "'Microsoft YaHei', 微软雅黑" }}>留言标题</label>
            </td>
            <td style={{ padding: "8px 0" }}>
              <input type="text" style={inputStyle} value={form.Subject} onChange={(e) => setForm({ ...form, Subject: e.target.value })} />
            </td>
          </tr>
          <tr>
            <td style={{ padding: "8px 0", verticalAlign: "top" }}>
              <label style={{ fontSize: 14, color: "#666", fontFamily: "'Microsoft YaHei', 微软雅黑" }}>留言内容</label>
            </td>
            <td style={{ padding: "8px 0" }}>
              <textarea style={{ ...inputStyle, height: 100, padding: "8px 12px", resize: "vertical" }} value={form.Message} onChange={(e) => setForm({ ...form, Message: e.target.value })} />
            </td>
          </tr>
          <tr>
            <td style={{ padding: "8px 0", verticalAlign: "middle" }}>
              <label style={{ fontSize: 14, color: "#666", fontFamily: "'Microsoft YaHei', 微软雅黑" }}>联系邮箱</label>
            </td>
            <td style={{ padding: "8px 0" }}>
              <input type="text" style={inputStyle} value={form.Email} onChange={(e) => setForm({ ...form, Email: e.target.value })} />
            </td>
          </tr>
          <tr>
            <td style={{ padding: "8px 0", verticalAlign: "middle" }}>
              <label style={{ fontSize: 14, color: "#666", fontFamily: "'Microsoft YaHei', 微软雅黑" }}>验证码</label>
            </td>
            <td style={{ padding: "8px 0" }}>
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <input type="text" style={{ ...inputStyle, width: 150 }} value={form.Captcha} onChange={(e) => setForm({ ...form, Captcha: e.target.value })} />
                <img src="/images/code.png" alt="验证码" style={{ height: 36, cursor: "pointer" }} />
              </div>
            </td>
          </tr>
          <tr>
            <td style={{ padding: "8px 0" }}></td>
            <td style={{ padding: "8px 0" }}>
              <button type="submit" style={{ padding: "8px 30px", background: "#27ae60", color: "#fff", border: "none", fontSize: 14, fontFamily: "'Microsoft YaHei', 微软雅黑", cursor: "pointer", borderRadius: 2 }}>提交</button>
              {submitted && <span style={{ marginLeft: 16, color: "#27ae60", fontSize: 14 }}>提交成功</span>}
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default function SbzsPage() {
  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      <Header withSlogan={false} />
      <section style={{ width: 1000, margin: "0 auto", padding: "30px 0" }}>
        <div style={{ textAlign: "center", marginBottom: 30 }}>
          <p style={{ margin: 0, fontFamily: "'Microsoft YaHei', 微软雅黑" }}>
            <span style={{ color: "#000000", fontSize: 30 }}>设备展示</span>
            <span style={{ color: "#000000", fontSize: 24 }}>/</span>
            <span style={{ color: "#27ae60", fontSize: 22 }}>CONTACT</span>
          </p>
        </div>
        <div style={{ marginBottom: 30 }}>
          <MultiSlide />
        </div>
        <LeaveForm />
      </section>
      <Footer />
    </div>
  );
}
