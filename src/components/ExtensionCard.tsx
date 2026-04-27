// src/components/ExtensionCard.tsx
"use client";

import React from "react";
import { Terminal, Star } from "lucide-react";

type Ext = {
  title: string;
  slug: string;
  shortDesc?: string;
  screenshots?: string[];
  githubUrl?: string;
  downloadUrl?: string;
};

export default function ExtensionCard({ ext }: { ext: Ext }) {
  return (
    <article 
      className="relative flex flex-col justify-between p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700 hover:shadow-2xl hover:shadow-teal-500/10 group"
      aria-labelledby={`ext-${ext.slug}-title`}
    >
      {/* Teal Dot */}
      <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-teal-500" aria-hidden="true" />

      <div>
        {/* Icon */}
        <div className="w-12 h-12 rounded-xl bg-zinc-800/80 border border-zinc-700/50 flex items-center justify-center mb-5 text-teal-400 group-hover:scale-105 transition-transform duration-300">
          <Terminal size={24} />
        </div>

        {/* Content */}
        <h3 id={`ext-${ext.slug}-title`} className="text-xl font-semibold text-gray-100 mb-2 group-hover:text-white transition-colors duration-300">
          {ext.title}
        </h3>
        <p className="text-sm text-zinc-400 leading-relaxed mb-8 line-clamp-2">
          {ext.shortDesc ?? ""}
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-5 border-t border-zinc-800/50">
        <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-medium">
          <Star size={14} className="fill-current text-zinc-400" />
          <span className="text-zinc-300">4.9</span>
          <span className="mx-1">•</span>
          <span>12k Users</span>
        </div>

        <a
          href={ext.downloadUrl || ext.githubUrl || "#"}
          className="px-4 py-1.5 rounded-lg bg-transparent border border-zinc-700 text-sm text-gray-100 font-medium hover:bg-zinc-800 hover:border-zinc-600 transition-colors"
          aria-label={`Install ${ext.title}`}
        >
          Install
        </a>
      </div>
    </article>
  );
}
