"use client";

import { Header, Footer, Atlas } from "@/components/site-layout";

const QYZZ_IMAGES = [
  "/images/cert1.jpg", "/images/cert2.jpg", "/images/cert3.jpg", "/images/cert4.jpg",
  "/images/cert5.jpg", "/images/cert6.jpg", "/images/cert7.jpg", "/images/cert8.jpg",
];

export default function QyzzPage() {
  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      <Header />
      <section className="container-1000" style={{ padding: "30px 0" }}>
        <div style={{ textAlign: "center", marginBottom: 30 }}>
          <p style={{ margin: 0, fontFamily: "'Microsoft YaHei', 微软雅黑" }}>
            <span style={{ color: "#000000", fontSize: 30 }}>企业资质</span>
            <span style={{ color: "#000000", fontSize: 24 }}>/</span>
            <span style={{ color: "#27ae60", fontSize: 22 }}>TYPICAL CASE</span>
          </p>
        </div>
        <Atlas images={QYZZ_IMAGES} cols={4} />
      </section>
      <Footer />
    </div>
  );
}
