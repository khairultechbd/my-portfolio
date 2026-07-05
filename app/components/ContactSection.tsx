"use client";

import { FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Facebook, MapPin, Send } from "lucide-react";

export default function ContactSection() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const subject = data.get("subject") as string;
    const message = data.get("message") as string;

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:your.email@example.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 px-6" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
            Let&apos;s Connect
          </h2>
          <p style={{ color: "var(--text-muted)" }}>
            Have a project or opportunity? Reach out anytime.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg border" style={{ background: "var(--bg-card)", borderColor: "var(--border-color)" }}>
                <Mail size={20} className="text-blue-400" />
              </div>
              <div>
                <p className="text-sm mb-1" style={{ color: "var(--text-muted)" }}>Email</p>
                <a
                  href="mailto:your.email@example.com"
                  className="hover:text-blue-400 transition-colors"
                  style={{ color: "var(--text-primary)" }}
                >
                  your.email@example.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg border" style={{ background: "var(--bg-card)", borderColor: "var(--border-color)" }}>
                <Linkedin size={20} className="text-blue-400" />
              </div>
              <div>
                <p className="text-sm mb-1" style={{ color: "var(--text-muted)" }}>LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/khairultechbd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                  style={{ color: "var(--text-primary)" }}
                >
                  linkedin.com/in/khairultechbd
                </a>
              </div>
            </div>

            {/* Facebook */}
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg border" style={{ background: "var(--bg-card)", borderColor: "var(--border-color)" }}>
                <Facebook size={20} className="text-blue-400" />
              </div>
              <div>
                <p className="text-sm mb-1" style={{ color: "var(--text-muted)" }}>Facebook</p>
                <a
                  href="https://www.facebook.com/khairultechbd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                  style={{ color: "var(--text-primary)" }}
                >
                  facebook.com/khairultechbd
                </a>
              </div>
            </div>
            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg border" style={{ background: "var(--bg-card)", borderColor: "var(--border-color)" }}>
                <MapPin size={20} className="text-blue-400" />
              </div>
              <div>
                <p className="text-sm mb-1" style={{ color: "var(--text-muted)" }}>Location</p>
                <p style={{ color: "var(--text-primary)" }}>Dhaka, Bangladesh</p>
              </div>
            </div>
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm"
              style={{ background: "var(--bg-card)", color: "var(--text-muted)", borderColor: "var(--border-color)" }}
            >
              🟢 Available for opportunities
            </span>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="rounded-xl p-6 sm:p-8 border space-y-5"
            style={{ background: "var(--bg-card)", borderColor: "var(--border-color)" }}
          >
            <div>
              <label htmlFor="name" className="block text-sm mb-2" style={{ color: "var(--text-muted)" }}>
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full px-4 py-3 rounded-lg border placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                style={{ background: "var(--bg-secondary)", color: "var(--text-primary)", borderColor: "var(--border-color)" }}
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm mb-2" style={{ color: "var(--text-muted)" }}>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-4 py-3 rounded-lg border placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                style={{ background: "var(--bg-secondary)", color: "var(--text-primary)", borderColor: "var(--border-color)" }}
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm mb-2" style={{ color: "var(--text-muted)" }}>
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                className="w-full px-4 py-3 rounded-lg border placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                style={{ background: "var(--bg-secondary)", color: "var(--text-primary)", borderColor: "var(--border-color)" }}
                placeholder="Subject"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm mb-2" style={{ color: "var(--text-muted)" }}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full px-4 py-3 rounded-lg border placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                style={{ background: "var(--bg-secondary)", color: "var(--text-primary)", borderColor: "var(--border-color)" }}
                placeholder="Your message..."
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-theme-text font-medium rounded-lg hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/25"
            >
              <Send size={18} />
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
