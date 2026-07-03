"use client";

import { Header, Footer, Atlas } from "@/components/site-layout";

const SGAL_IMAGES = [
  "/images/sgal-1.jpg", "/images/sgal-2.jpg", "/images/sgal-3.jpg", "/images/sgal-4.jpg",
  "/images/sgal-5.jpg", "/images/sgal-6.jpg", "/images/sgal-7.jpg", "/images/sgal-8.jpg",
  "/images/sgal-9.jpg", "/images/sgal-10.jpg", "/images/sgal-11.jpg", "/images/sgal-12.jpg",
];

export default function SgalPage() {
  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      <Header />
      <section className="container-1000" style={{ padding: "30px 0" }}>
        <div style={{ textAlign: "center", marginBottom: 30 }}>
          <p style={{ margin: 0, fontFamily: "'Microsoft YaHei', 微软雅黑" }}>
            <span style={{ color: "#000000", fontSize: 30 }}>施工案例</span>
            <span style={{ color: "#000000", fontSize: 24 }}>/</span>
            <span style={{ color: "#27ae60", fontSize: 22 }}>NEWS CENTER</span>
          </p>
        </div>
        <Atlas images={SGAL_IMAGES} cols={4} />
      </section>
      <Footer />
    </div>
  );
}
