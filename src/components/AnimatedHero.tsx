// src/components/AnimatedHero.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

type Props = {
  totalCount?: number;
};

export default function AnimatedHero({ totalCount = 0 }: Props) {
  return (
    <section className="hero">
      <div className="hero-grid-bg" aria-hidden />
      <div className="hero-glow" aria-hidden />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex"
        >
          <span className="hero-eyebrow">
            <span className="dot" />
            <Sparkles size={12} style={{ color: "var(--accent)" }} />
            Privacy-first · Open source · Manifest V3
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
          className="hero-title"
        >
          Tools that <span className="grad">sharpen</span> the way you build &amp; browse.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.18, duration: 0.5 }}
          className="hero-sub"
        >
          A curated set of browser and editor extensions — lightweight, local-first, and free.
          Drop them into Chrome or VS Code and get back to the work that matters.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.5 }}
          className="hero-stats"
        >
          <div className="hero-stat">
            <div className="hero-stat-num">{totalCount || "7"}+</div>
            <div className="hero-stat-label">Extensions</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-num">100%</div>
            <div className="hero-stat-label">Open source</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-num">0</div>
            <div className="hero-stat-label">Trackers</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
