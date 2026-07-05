"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Download, Linkedin, Github, Facebook } from "lucide-react";

const titles = [
  "Network & System Engineer",
  "Network Security Enthusiast",
  "MikroTik Specialist",
  "Computer Hardware & Networking Engineer",
  "CCTV Installation Specialist",
];

export default function HeroSection() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIndex];
    const speed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.slice(0, displayText.length + 1));
        if (displayText.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(current.slice(0, displayText.length - 1));
        if (displayText.length - 1 === 0) {
          setIsDeleting(false);
          setTitleIndex((i) => (i + 1) % titles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 pb-12 px-6"
     style={{ background: 'var(--bg-primary)' }}>
      {/*
        .hero-grid is defined in globals.css:
          - mobile: single column
          - 768px+: 45% photo | 55% text
      */}
      <div className="hero-grid max-w-7xl mx-auto w-full">

        {/* ── LEFT: Photo column (45%) ── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          style={{
            display: "flex",
            justifyContent: "flex-end", // right-align within the column
            order: 1,
          }}
        >
          {/* Image wrapper — 3:4 aspect, max-height 580px, no rotation */}
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "420px",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 25px 60px rgba(37, 99, 235, 0.25)",
              /* explicit height derived from aspect-ratio so Next.js fill works */
              height: "min(580px, calc(100vw * 4 / 3))",
              marginLeft: "auto",
            }}
          >
            <Image
              src="/all-photo/Formal Photo/court tie body half.png"
              alt="Md. Khairul Islam"
              fill
              priority
              style={{
                objectFit: "cover",
                objectPosition: "top center",
              }}
              sizes="(max-width: 768px) 90vw, 420px"
            />
          </div>
        </motion.div>

        {/* ── RIGHT: Text column (55%) ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            order: 2,
          }}
        >
          <span
            className="inline-flex w-fit items-center gap-2 px-4 py-1.5 rounded-full border text-sm mb-6"
            style={{ background: "var(--bg-card)", color: "var(--text-muted)", borderColor: "var(--border-color)" }}
          >
            🟢 Open to Opportunities
          </span>

          <h1
            className="font-bold text-4xl sm:text-5xl mb-3"
            style={{ color: "var(--text-primary)" }}
          >
            Md. Khairul Islam
          </h1>

          <p className="text-xl sm:text-2xl text-blue-400 mb-1 min-h-[2.5rem]">
            {displayText}
            <span className="animate-pulse">|</span>
          </p>

          <p className="italic mb-6" style={{ color: "var(--text-muted)" }}>
            Designing secure networks. Delivering reliable infrastructure.
          </p>

          <div className="w-16 h-0.5 bg-blue-600 mb-6" />

          <p className="leading-relaxed mb-8 max-w-lg" style={{ color: "var(--text-muted)" }}>
            Jr. System &amp; Network Engineer at IT Bangladesh with hands-on expertise
            in MikroTik, Cisco, and Windows Server. Completed IsDB-BISEW&apos;s
            competitive 6-month IT Scholarship in Network &amp; System Administration.
            Trained 40 Days law enforcement personnel at Rajarbagh Police Headquarters.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <motion.a
              href="/cv/khairul-islam-cv.pdf"
              download
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-theme-text font-medium rounded-lg hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/25"
            >
              <Download size={18} />
              Download CV
            </motion.a>
            <motion.button
              type="button"
              onClick={scrollToContact}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 font-medium rounded-lg hover:border-blue-500 hover:text-blue-400 transition-colors"
              style={{ border: "1px solid var(--border-color)", color: "var(--text-primary)", background: "transparent" }}
            >
              Contact Me
            </motion.button>
          </div>

          <div className="flex items-center gap-4">
            <motion.a
              href="https://www.linkedin.com/in/khairultechbd"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, color: "#38bdf8" }}
              className="hover:text-sky-400 transition-colors"
              style={{ color: "var(--text-muted)" }}
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </motion.a>
            <motion.a
              href="https://github.com/khairultechbd"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, color: "#38bdf8" }}
              className="hover:text-sky-400 transition-colors"
              style={{ color: "var(--text-muted)" }}
              aria-label="GitHub"
            >
              <Github size={22} />
            </motion.a>
            <motion.a
              href="https://www.facebook.com/khairultechbd"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, color: "#38bdf8" }}
              className="hover:text-sky-400 transition-colors"
              style={{ color: "var(--text-muted)" }}
              aria-label="Facebook"
            >
              <Facebook size={22} />
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
