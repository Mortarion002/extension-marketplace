// src/components/HowToDownloadSection.tsx
"use client";

import React from "react";
import { DownloadCloud, FileArchive, Puzzle } from "lucide-react";

export default function HowToDownloadSection() {
  const steps = [
    {
      icon: <DownloadCloud size={20} className="text-teal-500" />,
      title: "1. Download ZIP",
      desc: "Grab the latest release from the repository.",
    },
    {
      icon: <FileArchive size={20} className="text-teal-500" />,
      title: "2. Unzip Files",
      desc: "Extract the contents to a safe local directory.",
    },
    {
      icon: <Puzzle size={20} className="text-teal-500" />,
      title: "3. Load Unpacked",
      desc: "Enable Developer Mode in Chrome and load the folder.",
    },
  ];

  return (
    <section className="mb-12" aria-labelledby="howto-heading">
      <div className="bg-zinc-900/40 border border-zinc-800/50 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
        <h2 id="howto-heading" className="sr-only">How to Install</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-zinc-800/50">
          {steps.map((step, idx) => (
            <div key={idx} className="flex items-start gap-4 pt-4 md:pt-0 md:px-6 first:pt-0 first:px-0">
              <div className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-800/50 shadow-sm shrink-0">
                {step.icon}
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-100 mb-1">{step.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
