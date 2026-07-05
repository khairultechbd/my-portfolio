"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Networking",
    skills: [
      "MikroTik",
      "Cisco",
      "IP Addressing & Subnetting",
      "VLSM / FLSM / Supernetting",
      "OSPF",
      "EIGRP",
      "RIP / RIPv2",
      "VLAN",
      "VPN Tunnel",
      "PPPoE",
      "Hotspot & Radius",
      "NAT / ACLs",
      "NLB & Fault Tolerance",
      "Bridging",
      "LAN / WAN",
      "Network Troubleshooting",
    ],
  },
  {
    title: "Windows Server",
    skills: [
      "Windows Server 2019",
      "ADDS & AD-Certificate",
      "DNS & DHCP",
      "GPO",
      "IIS (Web Server)",
      "FTP & SMTP",
      "iSCSI Storage",
      "SMB & NFS Share",
      "WSUS",
      "Proxy Server",
      "Clustering",
      "EFS & Bitlocker",
      "LAPS & IPAM",
      "WDS",
      "Windows Firewall & IPsec",
    ],
  },
  {
    title: "Virtualization",
    skills: [
      "VMware vSphere",
      "Microsoft Hyper-V",
      "VirtualBox",
      "KVM / QEMU",
      "Virt-Manager",
      "Proxmox VE",
    ],
  },
  {
    title: "Hardware & OS",
    skills: [
      "PC Assembling",
      "Windows / MAC / Linux Os Installation & Troubleshooting",
      "Hardware Troubleshooting",
      "Printers & Scanners Setup",
      "CCTV Installation",
      "Linux CLI (Ubuntu/CentOS)",
      "Kali Linux",
    ],
  },
  {
    title: "Ethical Hacking & Security",
    skills: [
      "Steganography",
      "Cryptography",
      "Password Cracking",
      "Footprinting & Reconnaissance",
      "Network Scanning",
      "Vulnerability Analysis",
      "DDoS Concepts",
      "Firewall Configuration",
      "Windows & Linux Password Reset",
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      "Winbox",
      "Wireshark",
      "GNS3",
      "Packet Tracer",
      "Git",
      "Python (Scripting)",
      "Adobe Photoshop",
      "Canva",
      "MS Office Suite",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6" style={{ background: 'var(--section-alt-bg)' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
            Technical Skills
          </h2>
          <p style={{ color: "var(--text-muted)" }}>
            Expertise across networking, infrastructure, and security
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="rounded-xl p-6 hover:border-blue-600/40 transition-colors"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border-color)" }}
            >
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2" style={{ color: "var(--text-primary)" }}>
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      padding: "4px 12px",
                      fontSize: "0.8rem",
                      color: "var(--skill-badge-text)",
                      border: "1px solid var(--skill-badge-border)",
                      borderRadius: "999px",
                      background: "var(--skill-badge-bg)",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
