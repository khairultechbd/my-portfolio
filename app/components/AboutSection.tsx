"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Briefcase, Shield } from "lucide-react";

// ---------- STATS ----------
const stats = [
  { label: "CGPA", value: 3.82, suffix: "", decimals: 2, sub: "" },
  { label: "Work Experience", value: 6, suffix: " Months", decimals: 0, sub: "IT Bangladesh" },
  { label: "Training Delivered", value: 40, suffix: " Days", decimals: 0, sub: "Rajarbagh Police HQ" },
  { label: "IsDB Scholarship", value: 6, suffix: " Months", decimals: 0, sub: "Network & System Administrator" },
];

// ---------- EDUCATION DATA ----------
type EducationItem = {
  type: "academic" | "training" | "work";
  title: string;
  institution: string;
  location?: string;
  duration?: string;
  badge?: string;
  cgpa?: string;
  highlight?: string;
  focus?: string[];
  details?: string[];
  note?: string;
  impact?: string;
};

const educationItems: EducationItem[] = [
  {
    type: "academic",
    title: "B.Sc. in Computer Science & Engineering (CSE)",
    institution: "Bangladesh University of Business and Technology (BUBT)",
    cgpa: "3.82 / 4.00",
    highlight: "Strong focus on networking, security, and AI research",
  },
  {
    type: "academic",
    title: "Diploma in Computer Technology",
    institution: "HABHIT (Haji Abul Hossain Institute of Technology)",
    cgpa: "3.71 / 4.00",
    highlight: "Computer Engineering fundamentals",
  },
  // ── Professional Training / Work (shown in Professional Training tab) ──
  {
    type: "work",
    title: "Jr. System & Network Engineer",
    institution: "IT Bangladesh",
    location: "Dhaka, Bangladesh",
    duration: "6 Months (Professional Employment)",
    badge: "💼 Full-time Job",
    details: [
      "Managed and maintained enterprise network infrastructure",
      "Configured and troubleshot MikroTik routers and switches",
      "Administered Windows Server 2019 (AD, DNS, DHCP)",
      "Provided system support and ensured network uptime",
      "Worked on real-world client network deployments",
      "Troubleshoot and resolved network connectivity issues ",
      "Provided technical support and resolved hardware and software issues ",
    ],
  },
    {
    type: "training",
    title: "Field Experience — Assistant Trainer",
    institution: "Rajarbagh Police Headquarters, Dhaka",
    duration: "40 Days",
    focus: [
      "Computer Hardware fundamentals",
      "Network setup and troubleshooting",
      "Cybersecurity awareness",
      "Hands-on lab sessions",
    ],
    impact: "Trained 40+ police personnel in essential IT operations for secure digital infrastructure",
  },
  {
    type: "training",
    title: "IT Scholarship — Network & System Administration",
    institution:
      "IsDB-BISEW (Islamic Development Bank — Bangladesh Institute of Skills Enhancement & Workforce)",
    duration: "6 Months(460 Hours) Training",
    focus: [
      "Completed intensive hands-on training in Network Design & Administration",
      "Practiced MikroTik Router & Switch configuration in lab environment",
      "Trained on Cisco Routing & Switching — OSPF, EIGRP, VLANs",
      "Hands-on labs: Windows Server 2019 (AD, DNS, DHCP, GPO)",
      "Virtualization labs: VMware, Hyper-V, VirtualBox",
      "Studied Network Security & Firewall Management concepts",
    ],
    note: "Competitive government-backed scholarship — selected from national applicants across Bangladesh",
  },

];

// ---------- ANIMATED COUNTER ----------
function AnimatedCounter({
  value,
  suffix,
  decimals,
  inView,
}: {
  value: number;
  suffix: string;
  decimals: number;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 1500;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = value * eased;
      setCount(start);
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [inView, value]);

  const formatted =
    decimals > 0 ? count.toFixed(decimals) : Math.round(count).toString();

  return (
    <span>
      {formatted}
      {suffix}
    </span>
  );
}

// ---------- EDUCATION CARD ----------
function EducationCard({ item }: { item: EducationItem }) {
  const isWork = item.type === "work";
  const isTraining = item.type === "training";
  const isAcademic = item.type === "academic";

  // Per-type colour tokens
  const borderColor = isWork ? "#22c55e" : isTraining ? "#7c3aed" : "#2563eb";
  const iconBg = isWork
    ? "rgba(34, 197, 94, 0.15)"
    : isTraining
    ? "rgba(124, 58, 237, 0.15)"
    : "rgba(37, 99, 235, 0.15)";
  const iconColor = isWork ? "#4ade80" : isTraining ? "#a78bfa" : "#60a5fa";
  const institutionColor = isWork ? "#4ade80" : isTraining ? "#a78bfa" : "#60a5fa";
  const shadowColor = isWork
    ? "0 4px 20px rgba(34, 197, 94, 0.14)"
    : isTraining
    ? "0 4px 20px rgba(124, 58, 237, 0.12)"
    : "0 4px 20px rgba(37, 99, 235, 0.10)";
  const durationBg = isWork
    ? "rgba(34,197,94,0.12)"
    : isTraining
    ? "rgba(124,58,237,0.15)"
    : "rgba(37,99,235,0.12)";
  const durationColor = isWork ? "#86efac" : isTraining ? "#c4b5fd" : "#93c5fd";
  const bulletColor = isWork ? "#22c55e" : isTraining ? "#a78bfa" : "#3b82f6";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      style={{
        background: "var(--bg-card)",
        borderRadius: "12px",
        borderLeft: `4px solid ${borderColor}`,
        padding: "1.25rem 1.5rem",
        marginBottom: "1rem",
        boxShadow: "var(--card-shadow)",
      }}
    >
      {/* Header row */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", marginBottom: "0.5rem" }}>
        <div
          style={{
            flexShrink: 0,
            width: "36px",
            height: "36px",
            borderRadius: "8px",
            background: iconBg,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "2px",
          }}
        >
          {isWork ? (
            <Briefcase size={18} color={iconColor} />
          ) : isTraining ? (
            <Shield size={18} color={iconColor} />
          ) : (
            <GraduationCap size={18} color={iconColor} />
          )}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" as const, marginBottom: "0.1rem" }}>
            <h3 style={{ color: "var(--text-primary)", fontWeight: 700, fontSize: "1rem", lineHeight: 1.4, margin: 0 }}>
              {item.title}
            </h3>
            {/* Green badge for work entries */}
            {item.badge && (
              <span
                style={{
                  background: "rgba(34,197,94,0.15)",
                  color: "#4ade80",
                  border: "1px solid rgba(34,197,94,0.3)",
                  borderRadius: "999px",
                  padding: "1px 9px",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.02em",
                }}
              >
                {item.badge}
              </span>
            )}
          </div>
          <p style={{ color: institutionColor, fontSize: "0.85rem", fontWeight: 600, margin: 0 }}>
            {item.institution}
            {item.location && (
              <span style={{ color: "var(--text-muted)", fontWeight: 400, marginLeft: "6px" }}>📍 {item.location}</span>
            )}
          </p>
        </div>
      </div>

      {/* Meta row — duration / cgpa badges */}
      <div style={{ paddingLeft: "48px", display: "flex", flexWrap: "wrap" as const, gap: "0.5rem", marginBottom: "0.5rem" }}>
        {item.duration && (
          <span
            style={{
              background: durationBg,
              color: durationColor,
              borderRadius: "999px",
              padding: "2px 10px",
              fontSize: "0.78rem",
              fontWeight: 600,
            }}
          >
            ⏱ {item.duration}
          </span>
        )}
        {item.cgpa && (
          <span
            style={{
              background: "rgba(37,99,235,0.12)",
              color: "#93c5fd",
              borderRadius: "999px",
              padding: "2px 10px",
              fontSize: "0.78rem",
              fontWeight: 600,
            }}
          >
            🎓 CGPA: {item.cgpa}
          </span>
        )}
      </div>

      {/* Work details bullets */}
      {item.details && item.details.length > 0 && (
        <ul style={{ paddingLeft: "64px", marginTop: "0.5rem", marginBottom: "0.5rem" }}>
          {item.details.map((d) => (
            <li
              key={d}
              style={{
                color: "var(--text-muted)",
                fontSize: "0.82rem",
                lineHeight: 1.6,
                listStyle: "none",
                paddingLeft: "0.25rem",
              }}
            >
              <span style={{ color: bulletColor, marginRight: "6px" }}>•</span>
              {d}
            </li>
          ))}
        </ul>
      )}

      {/* Training focus bullets */}
      {item.focus && item.focus.length > 0 && (
        <ul style={{ paddingLeft: "64px", marginTop: "0.5rem", marginBottom: "0.5rem" }}>
          {item.focus.map((f) => (
            <li
              key={f}
              style={{
                color: "var(--text-muted)",
                fontSize: "0.82rem",
                lineHeight: 1.6,
                listStyle: "none",
                paddingLeft: "0.25rem",
              }}
            >
              <span style={{ color: bulletColor, marginRight: "6px" }}>•</span>
              {f}
            </li>
          ))}
        </ul>
      )}

      {/* Highlight (academic) */}
      {item.highlight && (
        <p style={{ paddingLeft: "48px", color: "var(--text-muted)", fontSize: "0.82rem", fontStyle: "italic", marginTop: "0.25rem" }}>
          {item.highlight}
        </p>
      )}
      {/* Note (scholarship) */}
      {item.note && (
        <p
          style={{
            paddingLeft: "48px",
            color: "#fbbf24",
            fontSize: "0.8rem",
            fontStyle: "italic",
            marginTop: "0.5rem",
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          ⭐ {item.note}
        </p>
      )}
      {/* Impact (police training) */}
      {item.impact && (
        <p
          style={{
            paddingLeft: "48px",
            color: "#34d399",
            fontSize: "0.8rem",
            marginTop: "0.5rem",
            display: "flex",
            alignItems: "flex-start",
            gap: "4px",
          }}
        >
          ✅ {item.impact}
        </p>
      )}
    </motion.div>
  );
}


// ---------- MAIN SECTION ----------
export default function AboutSection() {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });
  const [activeTab, setActiveTab] = useState<"academic" | "training">("training");

  const academicItems = educationItems.filter((e) => e.type === "academic");
  // Professional Training tab shows work first, then training (order preserved from data array)
  const trainingItems = educationItems.filter((e) => e.type === "training" || e.type === "work");

  return (
    <section id="about" className="py-24 px-6" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-7xl mx-auto">

        {/* ── About Me: Photo + Bio ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* FIX 2 — About Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-start"
          >
            <div style={{ position: "relative" }}>
              {/* Glow ring */}
              <div
                style={{
                  position: "absolute",
                  inset: "-4px",
                  borderRadius: "14px",
                  background: "rgba(37, 99, 235, 0.35)",
                  filter: "blur(10px)",
                }}
              />
              {/* Photo container — 220px wide × 293px tall (approx 3:4) */}
              <div
                style={{
                  position: "relative",
                  width: "220px",
                  height: "293px",
                  borderRadius: "12px",
                  overflow: "hidden",
                  border: "2px solid #2563EB",
                  boxShadow: "0 8px 32px rgba(37, 99, 235, 0.3)",
                }}
              >
                <Image
                  src="/all-photo/Formal Photo/passport_photo_near_1mb.jpg"
                  alt="Md. Khairul Islam passport photo"
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "top center",
                  }}
                  sizes="220px"
                />
              </div>
            </div>
          </motion.div>

          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
              About Me
            </h2>
            <p className="leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>
              I am a System &amp; Network Engineer with a strong foundation in
              computer science and practical experience building enterprise IT
              infrastructure. From configuring MikroTik routers to training law
              enforcement personnel, I bring a hands-on approach to every
              challenge.
            </p>
            <p className="leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Completed a competitive 6-month IsDB-BISEW IT Scholarship in
              Network &amp; System Administration, and delivered 40-day hands-on
              IT training at Rajarbagh Police HQ, Dhaka.
            </p>
          </motion.div>
        </div>

        {/* ── Stats (FIX 4) ── */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -4 }}
              className="rounded-xl p-6 text-center"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border-color)", boxShadow: "var(--card-shadow)" }}
            >
              <p className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                  inView={statsInView}
                />
              </p>
              <p className="text-sm font-medium" style={{ color: "var(--text-muted)" }}>{stat.label}</p>
              {stat.sub && (
                <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>{stat.sub}</p>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* ── Education & Professional Training (FIX 3) ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ marginTop: "5rem" }}
        >
          {/* Section heading */}
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <h2
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                fontWeight: 800,
                color: "var(--text-primary)",
                marginBottom: "0.5rem",
              }}
            >
              Education &amp; Professional Qualification
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>
              Academic background and industry-level professional development
            </p>
          </div>

          {/* Tab switcher */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "0.75rem",
              marginBottom: "2rem",
            }}
          >
            {/* Professional Qualification — LEFT */}
            <button
              type="button"
              onClick={() => setActiveTab("training")}
              style={{
                padding: "0.5rem 1.5rem",
                borderRadius: "999px",
                fontWeight: 600,
                fontSize: "0.9rem",
                cursor: "pointer",
                border: "none",
                transition: "all 0.25s",
                background: activeTab === "training" ? "#7c3aed" : "var(--bg-card)",
                color: activeTab === "training" ? "#fff" : "var(--text-muted)",
                boxShadow: activeTab === "training" ? "0 4px 14px rgba(124,58,237,0.4)" : "none",
              }}
            >
              🛡️ Professional Qualification
            </button>
            {/* Academic — RIGHT */}
            <button
              type="button"
              onClick={() => setActiveTab("academic")}
              style={{
                padding: "0.5rem 1.5rem",
                borderRadius: "999px",
                fontWeight: 600,
                fontSize: "0.9rem",
                cursor: "pointer",
                border: "none",
                transition: "all 0.25s",
                background: activeTab === "academic" ? "#2563eb" : "var(--bg-card)",
                color: activeTab === "academic" ? "#fff" : "var(--text-muted)",
                boxShadow: activeTab === "academic" ? "0 4px 14px rgba(37,99,235,0.4)" : "none",
              }}
            >
              🎓 Academic
            </button>
          </div>

          {/* Cards */}
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            {activeTab === "academic"
              ? academicItems.map((item) => (
                  <EducationCard key={item.title} item={item} />
                ))
              : trainingItems.map((item) => (
                  <EducationCard key={item.title} item={item} />
                ))}
          </div>

          {/* Both tabs shown for quick context (always visible summary) */}
          <div
            style={{
              maxWidth: "860px",
              margin: "1.5rem auto 0",
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap" as const,
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                color: "#a78bfa",
                fontSize: "0.8rem",
              }}
            >
              <Briefcase size={14} /> Professional Experience &amp; Training: {trainingItems.length} entries
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                color: "#60a5fa",
                fontSize: "0.8rem",
              }}
            >
              <GraduationCap size={14} /> Academic: {academicItems.length} entries
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
