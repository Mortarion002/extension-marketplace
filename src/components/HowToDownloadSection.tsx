// src/components/HowToDownloadSection.tsx
"use client";

import React from "react";
import { DownloadCloud, FileArchive, Puzzle } from "lucide-react";
import VideoPlayer from "./VideoPlayer";

const steps = [
  {
    icon: <DownloadCloud size={18} />,
    title: "Download the release",
    desc: "Grab the latest .zip from each extension's GitHub releases page.",
  },
  {
    icon: <FileArchive size={18} />,
    title: "Unzip locally",
    desc: "Extract the archive somewhere stable — you'll point Chrome at this folder.",
  },
  {
    icon: <Puzzle size={18} />,
    title: "Load unpacked",
    desc: "Visit chrome://extensions, enable Developer Mode, and load the unzipped folder.",
  },
];

const demos = [
  {
    src: "/videos/article_highlighter.mp4",
    poster: "/videos/article_highlighter-poster.jpg",
    title: "Article Highlighter — install walkthrough",
  },
  {
    src: "/videos/Terminal_history.mp4",
    poster: "/videos/terminal-history-poster.jpg",
    title: "Terminal History — install walkthrough",
  },
];

export default function HowToDownloadSection() {
  return (
    <section id="install" className="howto" aria-labelledby="howto-heading">
      <div className="howto-card">
        <h2 id="howto-heading" className="howto-title">
          Install in three quick steps
        </h2>
        <p className="howto-sub">
          No signups, no marketplace gates — these load as unpacked extensions.
        </p>

        <div className="howto-grid">
          {steps.map((step, idx) => (
            <div key={idx} className="howto-step">
              <span className="howto-step-num">{idx + 1}</span>
              <div className="howto-step-icon">{step.icon}</div>
              <div className="howto-step-title">{step.title}</div>
              <p className="howto-step-desc">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="howto-divider" />

        <h3 className="howto-demos-heading">See it in action</h3>
        <p className="howto-demos-sub">
          Watch how to load an unpacked extension in under a minute.
        </p>

        <div className="howto-demos-grid">
          {demos.map((demo) => (
            <div key={demo.src} className="howto-demo-item">
              <VideoPlayer src={demo.src} poster={demo.poster} title={demo.title} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
