"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    title: "MikroTik PPPoE Server — Step by Step Configuration Guide",
    date: "July 2026",
  },
  {
    title: "VLAN কী এবং কেন Enterprise Network এ দরকার?",
    date: "July 2026",
  },
  {
    title: "OSI Model — Real World Network Troubleshooting এ কিভাবে কাজে লাগে?",
    date: "July 2026",
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-24 px-6" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
            Blog
          </h2>
          <p style={{ color: "var(--text-muted)" }}>
            Technical articles on networking and infrastructure
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="rounded-xl p-6 border flex flex-col"
              style={{ background: "var(--bg-card)", borderColor: "var(--border-color)" }}
            >
              <span className="inline-flex w-fit px-3 py-1 text-xs font-medium text-sky-400 bg-sky-400/10 border border-sky-400/30 rounded-full mb-4">
                Coming Soon
              </span>
              <h3 className="text-lg font-semibold mb-2 leading-snug" style={{ color: "var(--text-primary)" }}>
                {post.title}
              </h3>
              <p className="text-sm mb-6" style={{ color: "var(--text-muted)" }}>{post.date}</p>
              <button
                type="button"
                disabled
                className="mt-auto inline-flex items-center gap-2 text-sm cursor-not-allowed"
                style={{ color: "var(--text-muted)" }}
              >
                Read More
                <ArrowRight size={16} />
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
