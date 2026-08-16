"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

const images = [
  "/all-photo/police-training-photo/1.jpg",
  "/all-photo/police-training-photo/2.jpg",
  "/all-photo/police-training-photo/3.jpeg",
  "/all-photo/police-training-photo/4.jpeg",
  "/all-photo/police-training-photo/5.jpeg",
  "/all-photo/police-training-photo/6.jpeg",
];

export default function TrainingSlideshow() {
  return (
    <section id="training" className="py-16 px-6" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          {/* Eyebrow: location */}
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm mb-4"
            style={{ background: "var(--bg-card)", color: "var(--text-muted)", borderColor: "var(--border-color)" }}
          >
            📍 Rajarbagh Police Lines, Dhaka
          </span>

          <h2 className="text-2xl sm:text-3xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
            Field Experience: Assistant Trainer
          </h2>

          {/* Detail pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span
              style={{
                background: "rgba(124,58,237,0.15)",
                color: "var(--accent-purple)",
                borderRadius: "999px",
                padding: "4px 12px",
                fontSize: "0.82rem",
                fontWeight: 600,
              }}
            >
              ⏱ 40 Days
            </span>
            <span
              style={{
                background: "rgba(37,99,235,0.12)",
                color: "var(--accent-blue)",
                borderRadius: "999px",
                padding: "4px 12px",
                fontSize: "0.82rem",
                fontWeight: 600,
              }}
            >
              💻 Computer Hardware &amp; Networking
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <Swiper
            modules={[Autoplay, Pagination, EffectFade, Navigation]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation
            loop
            className="training-swiper w-full max-w-[800px] mx-auto rounded-2xl overflow-hidden"
          >
            {images.map((src, i) => (
              <SwiperSlide key={src}>
                {/* All 6 source photos are exactly 4:3 (checked with `sips`),
                    so locking the box to aspect-[4/3] instead of a fixed
                    px height per breakpoint means the box always matches
                    the photo's real ratio — no cropping at ANY viewport
                    width, including odd cases like "Desktop site" mode on
                    a phone (which previously picked a breakpoint height
                    meant for a much wider box and cropped heads off). */}
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={src}
                    alt={`Police training session ${i + 1}`}
                    fill
                    style={{ objectFit: "cover", objectPosition: "top center" }}
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
