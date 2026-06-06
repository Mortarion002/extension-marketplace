// src/components/ExtensionGallery.tsx
"use client";

import React from "react";
import ExtensionCard from "./ExtensionCard";

type Ext = {
  title: string;
  slug: string;
  shortDesc: string;
  longDesc?: string;
  tags: string[];
  screenshots?: string[];
  githubUrl?: string;
  downloadUrl?: string;
};

export default function ExtensionGallery({ extensions }: { extensions: Ext[] }) {
  return (
    <section id="gallery" className="section">
      <div className="section-head">
        <div>
          <h2 className="section-title">All extensions</h2>
          <p className="section-sub">Curated, open source, and ready to load.</p>
        </div>
        <span className="section-count">
          {extensions.length} {extensions.length === 1 ? "result" : "results"}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {extensions.map((ext, i) => (
          <ExtensionCard key={ext.slug} ext={ext} index={i} />
        ))}
      </div>
    </section>
  );
}
