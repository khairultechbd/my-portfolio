"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Home",     id: "home"     },
  { label: "About",    id: "about"    },
  { label: "Skills",   id: "skills"   },
  { label: "Projects", id: "projects" },
  { label: "Blog",     id: "blog"     },
  { label: "Contact",  id: "contact"  },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen]       = useState(false);

  /* ── Active-section tracking via IntersectionObserver ── */
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  /* ── Smooth scroll helper ── */
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <header
      style={{
        position:       "fixed",
        top:            0,
        left:           0,
        right:          0,
        zIndex:         50,
        height:         "64px",
        background:     "var(--nav-bg)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom:   "1px solid var(--border-color)",
      }}
    >
      {/* ── Inner container ── */}
      <div
        style={{
          maxWidth:       "1200px",
          margin:         "0 auto",
          padding:        "0 24px",
          height:         "100%",
          display:        "flex",
          alignItems:     "center",
          justifyContent: "space-between",
        }}
      >


        {/* ── Desktop nav links (right, hidden on mobile) ── */}
        <nav aria-label="Main navigation" className="hidden md:flex" style={{ gap: "32px", alignItems: "center" }}>
          {navLinks.map(({ label, id }) => {
            const isActive = activeSection === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => scrollToSection(id)}
                style={{
                  background:    "none",
                  border:        "none",
                  cursor:        "pointer",
                  padding:       "4px 0",
                  position:      "relative",
                  color:         isActive ? "#2563EB" : "var(--text-muted)",
                  fontSize:      "0.9rem",
                  fontWeight:    500,
                  transition:    "color 0.2s ease",
                  fontFamily:    "inherit",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.color = "var(--text-primary)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = isActive ? "#2563EB" : "var(--text-muted)";
                }}
              >
                {label}
                {/* Animated underline for active link */}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    style={{
                      position:     "absolute",
                      bottom:       "-2px",
                      left:         0,
                      right:        0,
                      height:       "2px",
                      background:   "#2563EB",
                      borderRadius: "2px",
                      display:      "block",
                    }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <ThemeToggle />

          {/* ── Mobile hamburger (right, visible only < 768px) ── */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((o) => !o)}
            className="md:hidden"
            style={{
              background: "none",
              border:     "none",
              cursor:     "pointer",
              color:      "var(--text-muted)",
              display:    "flex",
              alignItems: "center",
              padding:    "4px",
            }}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            style={{
              overflow:    "hidden",
              background:  "var(--bg-card)",
              borderBottom: "1px solid var(--border-color)",
            }}
            className="md:hidden"
          >
            <div
              style={{
                padding:       "16px 24px",
                display:       "flex",
                flexDirection: "column",
                gap:           "4px",
              }}
            >
              {navLinks.map(({ label, id }) => {
                const isActive = activeSection === id;
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => scrollToSection(id)}
                    style={{
                      background:   isActive ? "rgba(37,99,235,0.12)" : "none",
                      border:       "none",
                      cursor:       "pointer",
                      textAlign:    "left",
                      padding:      "12px 16px",
                      borderRadius: "8px",
                      color:        isActive ? "#2563EB" : "var(--text-muted)",
                      fontSize:     "1rem",
                      fontWeight:   500,
                      fontFamily:   "inherit",
                      transition:   "all 0.2s ease",
                      borderLeft:   isActive ? "2px solid #2563EB" : "2px solid transparent",
                    }}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
