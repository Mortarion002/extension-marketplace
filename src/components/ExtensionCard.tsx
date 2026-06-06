// src/components/ExtensionCard.tsx
"use client";

import React from "react";
import {
  Download,
  Github,
  Highlighter,
  Copy,
  Terminal,
  FileText,
  Timer,
  QrCode,
  History,
  Puzzle,
} from "lucide-react";

type Ext = {
  title: string;
  slug: string;
  shortDesc?: string;
  tags?: string[];
  screenshots?: string[];
  githubUrl?: string;
  downloadUrl?: string;
};

const ICONS: Record<string, React.ReactNode> = {
  "article-highlighter": <Highlighter size={26} />,
  "copy-code-cleaner": <Copy size={26} />,
  "logtailer": <Terminal size={26} />,
  "notebooklm-pdf-exporter": <FileText size={26} />,
  "pomodoro-focus-timer": <Timer size={26} />,
  "quick-qr-generator": <QrCode size={26} />,
  "terminal-history": <History size={26} />,
};

function platformOf(tags: string[] = []) {
  const t = tags.map((s) => s.toLowerCase());
  if (t.includes("vscode")) return "VS Code";
  if (t.includes("chrome")) return "Chrome";
  return "Extension";
}

export default function ExtensionCard({ ext, index = 0 }: { ext: Ext; index?: number }) {
  const icon = ICONS[ext.slug] || <Puzzle size={26} />;
  const platform = platformOf(ext.tags);

  return (
    <article
      className="ext-card fade-up"
      style={{ animationDelay: `${Math.min(index * 60, 360)}ms` }}
      aria-labelledby={`ext-${ext.slug}-title`}
    >
      <div className="ext-card-media">
        <span className="ext-card-badge">{platform}</span>
        <div className="ext-card-media-art">
          <div className="ext-card-glyph">{icon}</div>
        </div>
      </div>

      <div className="ext-card-body">
        <h3 id={`ext-${ext.slug}-title`} className="ext-card-title">
          {ext.title}
        </h3>
        <p className="ext-card-desc">{ext.shortDesc}</p>
        {ext.tags && ext.tags.length > 0 && (
          <div className="ext-card-tags">
            {ext.tags.slice(0, 3).map((t) => (
              <span key={t} className="ext-tag">
                {t}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="ext-card-actions">
        <a
          href={ext.downloadUrl || ext.githubUrl || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
          aria-label={`Install ${ext.title}`}
        >
          <Download size={14} />
          Install
        </a>
        {ext.githubUrl && (
          <a
            href={ext.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
            aria-label={`${ext.title} on GitHub`}
          >
            <Github size={14} />
            Source
          </a>
        )}
      </div>
    </article>
  );
}
