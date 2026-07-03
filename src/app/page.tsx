"use client";

import { Header, Footer, Atlas } from "@/components/site-layout";

/* ---------------- 原网站数据（完全保留原文） ---------------- */

const CORE_BUSINESS = [
  { icon: "/images/icon-1.png", iconHover: "/images/icon-1-hover.png", title: "甲醛处理", desc: "专业研究和从事甲醛处理" },
  { icon: "/images/icon-2.png", iconHover: "/images/icon-2-hover.png", title: "开荒保洁", desc: "专业研究和从事开荒保洁" },
  { icon: "/images/icon-3.png", iconHover: "/images/icon-3-hover.png", title: "家庭保洁", desc: "专业研究和从事家庭保洁" },
  { icon: "/images/icon-4.png", iconHover: "/images/icon-4-hover.png", title: "解决方案", desc: "针对环保方面解决方案" },
];

const COMPANY_INTRO_FULL = `洁士佳环保科技 您身边的环保管家 江西省洁士佳环保科技有限公司，是一家专注室内空气检测治理（甲醛、苯、甲苯、二甲苯、总挥发性有机物TVOC等）；公共卫生消杀；四害防治；全屋定制家电；保洁服务；中央空调、家用空调清洗；油烟机清洗等综合性的服务公司。 南昌市室内环境保护监测行业协会第一届理事会理事，江西省室内环境卫生行业协会单位，本企业通过三体系认证，荣获个人AAA级信用认证，企业AAA级信用认证，目前公司拥有技术人员12人，其中室内环境治理高级工程师2人，环境治理员6人。 自公司成立以来，坚持以"诚信铸就卓越，专业打造口碑"的经营理念，以客户要求做为第一服务理念，围绕客户体验的营销模式为支点撬开市场大门，制定了一套完整的家庭服务，涉及装修后空气检测、家电选择、保洁清理、家电清洗的方案。为全市住房、酒店、超市、餐饮、企业、厂房、社区、医院、学校、金融机构、办公场所等提供高效率、高标准、高质量的服务；以雄厚的技术力量，规划的管理操作，严谨的施工方案，和完善的复查回访制度，赢得了广大合作单位的一致好评和大力支持。 公司具备向多场所提供空气检测治理能力，并具备保洁、家电、清洗等配套方案。洁士佳公司始终秉承"利他利民，专业诚信"这一企业核心理念，并通过持续不断的创新，是客户获得最大满意。 公司具有专业的服务团队，并长期参加国内知名室内环境卫生培训，国家级卫生城市病媒生物防治培训等，也在实际工作中得到多名专家的技术指导。`;

const CERT_PHOTOS = [
  "/images/case1.jpg", "/images/case2.jpg", "/images/case3.jpg", "/images/case4.jpg",
  "/images/case5.jpg", "/images/case6.jpg", "/images/case7.jpg", "/images/case8.jpg",
];

const INDUSTRY_SUMMIT = [
  "/images/cert1.jpg", "/images/cert2.jpg", "/images/cert3.jpg", "/images/cert4.jpg",
  "/images/cert5.jpg", "/images/cert6.jpg", "/images/cert7.jpg", "/images/cert8.jpg",
];

/* ---------------- 业务卡片 ---------------- */
function BizCard({
  position, icon, iconHover, title, desc,
}: {
  position: { left: number; top: number };
  icon: string; iconHover: string; title: string; desc: string;
}) {
  const [hover, setHover] = useState(false);
  return (
    <div style={{ position: "absolute", left: position.left, top: position.top, width: 186, height: 188 }}>
      <button
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          position: "absolute", left: 38, top: 0, width: 110, height: 110,
          border: `1px solid ${hover ? "#27b244" : "#eeeeee"}`,
          borderRadius: "50%",
          background: `url("${hover ? iconHover : icon}") no-repeat center center`,
          backgroundColor: hover ? "transparent" : "#fff",
          cursor: "pointer", transition: "border-color 0.3s", padding: 0, outline: "none",
        }}
        aria-label={title}
      />
      <div style={{ position: "absolute", left: 43, top: 130, width: 99, height: 26, textAlign: "center", color: "#27ae60", fontFamily: "'Microsoft YaHei', 微软雅黑", fontSize: 18, fontWeight: "bold", lineHeight: "26px" }}>{title}</div>
      <div style={{ position: "absolute", left: 0, top: 166, width: 186, height: 22, textAlign: "center", color: "#bdc3c7", fontFamily: "'Microsoft YaHei', 微软雅黑", fontSize: 14, lineHeight: "22px" }}>{desc}</div>
    </div>
  );
}

/* ---------------- 核心业务板块（1000px 居中） ---------------- */
function CoreBusiness() {
  return (
    <section style={{ width: 1000, margin: "0 auto", position: "relative", height: 340 }}>
      {/* 标题 */}
      <div style={{ position: "absolute", left: 414, top: 24, width: 171, height: 36, textAlign: "center" }}>
        <div style={{ fontFamily: "'Microsoft JhengHei', 微软雅黑", fontSize: 36, color: "#000000", fontWeight: "bold", lineHeight: 1.2 }}>核心业务</div>
        <div style={{ fontFamily: "'Microsoft YaHei', 微软雅黑", fontSize: 16, color: "#bdc3c7", marginTop: 8 }}>Core Business</div>
        <div style={{ width: 35, height: 3, background: "#6aa84f", margin: "12px auto 0" }} />
      </div>
      {/* 4 业务按钮 */}
      <div style={{ position: "absolute", left: 78, top: 152, width: 401, height: 188 }}>
        <BizCard position={{ left: 0, top: 0 }} {...CORE_BUSINESS[0]} />
        <BizCard position={{ left: 215, top: 0 }} {...CORE_BUSINESS[1]} />
      </div>
      <div style={{ position: "absolute", left: 510, top: 152, width: 408, height: 188 }}>
        <BizCard position={{ left: 0, top: 0 }} {...CORE_BUSINESS[2]} />
        <BizCard position={{ left: 222, top: 0 }} {...CORE_BUSINESS[3]} />
      </div>
    </section>
  );
}

/* ---------------- 关于我们 banner（全宽绿色背景，内部 1000px 居中） ---------------- */
function AboutBanner() {
  return (
    <section style={{ background: "rgb(39, 174, 96)", width: "100%" }}>
      <div style={{ width: 1000, margin: "0 auto", position: "relative", height: 783 }}>
        <div style={{ position: "absolute", left: 414, top: 29, width: 171, height: 38, textAlign: "center", color: "#fff", fontFamily: "'Microsoft JhengHei', 微软雅黑", fontSize: 36, fontWeight: "bold", lineHeight: "38px" }}>关于我们</div>
        <div style={{ position: "absolute", left: 416, top: 78, width: 167, height: 20, textAlign: "center", color: "#ecf0f1", fontFamily: "'Microsoft YaHei', 微软雅黑", fontSize: 16, lineHeight: "20px" }}>Typical Case</div>
        <div style={{ position: "absolute", left: 482, top: 98, width: 35, height: 3, background: "#fff" }} />
        <div style={{ position: "absolute", left: 2, top: 122, width: 995, height: 676, color: "#fff", fontFamily: "'Source Han Sans', Geneva, sans-serif", fontSize: 22, lineHeight: 2.0, textAlign: "justify", padding: "0 20px", overflow: "hidden" }}>{COMPANY_INTRO_FULL}</div>
      </div>
    </section>
  );
}

/* ---------------- 图集板块（1000px 居中） ---------------- */
function AtlasSection({ title, images }: { title: string; images: string[] }) {
  return (
    <section style={{ width: 1000, margin: "0 auto", padding: "30px 0" }}>
      <div style={{ textAlign: "center", marginBottom: 30 }}>
        <div style={{ fontFamily: "'Source Han Sans', Geneva, sans-serif", fontSize: 36, color: "#000", fontWeight: "bold" }}>{title}</div>
        <div style={{ width: 35, height: 3, background: "#6aa84f", margin: "12px auto 0" }} />
      </div>
      <Atlas images={images} cols={4} />
    </section>
  );
}

import { useState } from "react";

export default function Home() {
  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      <Header withSlogan={true} />
      <CoreBusiness />
      <AboutBanner />
      <AtlasSection title="资质照片" images={CERT_PHOTOS} />
      <AtlasSection title="行业峰会" images={INDUSTRY_SUMMIT} />
      <Footer />
    </div>
  );
}
