"use client";

import { motion } from "framer-motion";
import { ArrowUp, Linkedin, Github, Facebook } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 px-6 border-t" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
        <p className="text-sm text-center" style={{ color: "var(--text-muted)" }}>
          © 2026 Md. Khairul Islam. Built with Next.js & ❤️
        </p>

        <div className="flex items-center gap-5">
          <motion.a
            href="https://www.linkedin.com/in/khairultechbd"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, color: "#2563eb" }}
            className="transition-colors"
            style={{ color: "var(--text-muted)" }}
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </motion.a>
          <motion.a
            href="https://github.com/khairultechbd"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, color: "#2563eb" }}
            className="transition-colors"
            style={{ color: "var(--text-muted)" }}
            aria-label="GitHub"
          >
            <Github size={20} />
          </motion.a>
          <motion.a
            href="https://www.facebook.com/khairultechbd"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, color: "#2563eb" }}
            className="transition-colors"
            style={{ color: "var(--text-muted)" }}
            aria-label="Facebook"
          >
            <Facebook size={20} />
          </motion.a>
        </div>

        <motion.button
          type="button"
          onClick={scrollToTop}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="p-3 rounded-full border hover:text-blue-400 hover:border-blue-600/50 transition-colors"
          style={{ background: "var(--bg-card)", color: "var(--text-muted)", borderColor: "var(--border-color)" }}
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </motion.button>
      </div>
    </footer>
  );
}
