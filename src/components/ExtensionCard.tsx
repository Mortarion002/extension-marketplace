// src/components/ExtensionCard.tsx
"use client";

import React from "react";
import { Terminal, ChevronRight } from "lucide-react";
import VideoPlayer from "./VideoPlayer";

type Ext = {
  title: string;
  slug: string;
  shortDesc?: string;
  screenshots?: string[];
  githubUrl?: string;
  downloadUrl?: string;
  videoUrl?: string;
  poster?: string;
};

export default function ExtensionCard({ ext }: { ext: Ext }) {
  return (
    <article 
      className="group flex flex-col rounded-xl bg-zinc-900/40 border border-white/5 transition-colors duration-300 hover:bg-zinc-800/60 hover:border-white/10 overflow-hidden"
      aria-labelledby={`ext-${ext.slug}-title`}
    >
      {ext.videoUrl && (
        <div className="w-full">
          <VideoPlayer
            src={ext.videoUrl}
            poster={ext.poster || ""}
            title={ext.title}
          />
        </div>
      )}

      <a 
        href={ext.downloadUrl || ext.githubUrl || "#"}
        className="flex items-center gap-4 p-4 flex-1"
      >
        {/* Icon Container */}
        <div className="w-10 h-10 shrink-0 rounded-lg bg-white/5 flex items-center justify-center text-teal-400">
          <Terminal size={20} />
        </div>

        {/* Content Stack */}
        <div className="flex flex-col min-w-0">
          <h3 id={`ext-${ext.slug}-title`} className="text-gray-100 font-medium text-base truncate">
            {ext.title}
          </h3>
          <p className="text-xs text-zinc-500 truncate">
            {ext.shortDesc ?? ""}
          </p>
        </div>

        {/* Action Icon */}
        <div className="ml-auto shrink-0 text-zinc-600 group-hover:text-teal-400 transition-colors duration-300">
          <ChevronRight size={18} />
        </div>
      </a>
    </article>
  );
}
