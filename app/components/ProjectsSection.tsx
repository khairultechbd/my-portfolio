"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Images } from "lucide-react";

const projects = [
  {
    title: "GAN-Based Image Denoising & View Generation",
    tags: ["Python", "GAN", "Deep Learning", "Kaggle"],
    description:
      "University capstone project using Generative Adversarial Networks on the CelebA dataset. Achieved above-threshold PSNR and SSIM scores for denoising module. Built entirely on Kaggle GPU.",
    links: [
      { label: "GitHub", href: "#", icon: "github" },
      { label: "Live Demo", href: "#", icon: "external" },
    ],
  },
  {
    title: "Network Infrastructure Lab — MikroTik & Cisco",
    tags: ["MikroTik", "Cisco", "GNS3", "VLAN", "OSPF"],
    description:
      "Designed and simulated enterprise network topology with VLAN segmentation, OSPF routing, and MikroTik PPPoE server configuration.",
    links: [{ label: "GitHub", href: "#", icon: "github" }],
  },
  {
    title: "Police IT Training Program",
    tags: ["Training", "Networking", "Hardware", "Security"],
    description:
      "Designed and delivered 40-day hands-on IT training curriculum for law enforcement personnel at Rajarbagh Police HQ, covering hardware, networking, and cybersecurity fundamentals.",
    links: [{ label: "View Photos", href: "#training", icon: "photos" }],
  },
];

function ProjectLink({
  label,
  href,
  icon,
}: {
  label: string;
  href: string;
  icon: string;
}) {
  const handleClick = (e: React.MouseEvent) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const Icon =
    icon === "github" ? Github : icon === "photos" ? Images : ExternalLink;

  return (
    <a
      href={href}
      onClick={handleClick}
      className="inline-flex items-center gap-1.5 text-sm text-blue-400 hover:text-sky-400 transition-colors"
    >
      <Icon size={16} />
      {label}
    </a>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
            Projects
          </h2>
          <p style={{ color: "var(--text-muted)" }}>
            Selected work in networking, AI, and training
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="rounded-xl p-6 border-t-4 border-blue-600 border shadow-lg hover:shadow-blue-900/20 transition-shadow flex flex-col"
              style={{ background: "var(--bg-card)", borderColor: "var(--border-color)" }}
            >
              <h3 className="text-lg font-semibold mb-3" style={{ color: "var(--text-primary)" }}>
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs rounded-full"
                    style={{
                      color: "var(--skill-badge-text)",
                      border: "1px solid var(--skill-badge-border)",
                      background: "var(--skill-badge-bg)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: "var(--text-muted)" }}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-4 pt-4 border-t" style={{ borderColor: "var(--border-color)" }}>
                {project.links.map((link) => (
                  <ProjectLink key={link.label} {...link} />
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
