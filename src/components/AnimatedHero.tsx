// src/components/AnimatedHero.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import SearchInput from "./SearchInput";

export default function AnimatedHero() {
  return (
    <section className="relative mb-16 pt-20 pb-12 overflow-hidden flex flex-col items-center justify-center min-h-[40vh]">
      {/* Subtle Background Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-teal-500/10 blur-3xl rounded-full pointer-events-none" aria-hidden="true" />
      
      <div className="container text-center relative z-10 max-w-4xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-gray-100 tracking-tight"
        >
          Supercharge Your Workflow
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.08, duration: 0.6 }}
          className="mt-6 mx-auto text-base md:text-xl text-gray-400 font-medium max-w-2xl"
        >
          Precision engineered tools for the confident operator. Install vetted extensions to
          optimize your browser environment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.6 }}
          className="mt-12 w-full"
        >
          <SearchInput placeholder="Search extensions, tools, or developers..." />
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {["Developer Tools", "Productivity", "Security"].map((tag) => (
              <span key={tag} className="px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 text-sm text-gray-400 cursor-pointer hover:border-zinc-600 hover:text-gray-300 transition-colors">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
