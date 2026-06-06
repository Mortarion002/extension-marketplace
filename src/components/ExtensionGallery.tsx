// src/components/ExtensionGallery.tsx
"use client";

import React from "react";
import { Search } from "lucide-react";
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
  const [query, setQuery] = React.useState("");
  const [filter, setFilter] = React.useState<string>("All");

  // Build dynamic filter set from tags
  const filters = React.useMemo(() => {
    const set = new Set<string>();
    extensions.forEach((e) =>
      e.tags?.forEach((t) => set.add(t.charAt(0).toUpperCase() + t.slice(1)))
    );
    // Stable ordering — push common groups first if present
    const priority = ["Chrome", "Vscode", "Developer", "Productivity", "Utility"];
    const ordered = [
      ...priority.filter((p) => set.has(p)),
      ...Array.from(set).filter((t) => !priority.includes(t)),
    ];
    return ["All", ...ordered];
  }, [extensions]);

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    return extensions.filter((e) => {
      const matchesQ =
        !q ||
        e.title.toLowerCase().includes(q) ||
        e.shortDesc?.toLowerCase().includes(q) ||
        e.tags?.some((t) => t.toLowerCase().includes(q));
      const matchesFilter =
        filter === "All" ||
        e.tags?.some((t) => t.toLowerCase() === filter.toLowerCase());
      return matchesQ && matchesFilter;
    });
  }, [extensions, query, filter]);

  return (
    <section id="gallery" className="section">
      {/* Search */}
      <div className="search-wrap">
        <Search className="search-icon" size={18} />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search extensions, tools, or tags..."
          className="search-input"
          aria-label="Search extensions"
        />
        <span className="search-kbd hidden sm:inline-flex">⌘ K</span>
      </div>

      {/* Filter Chips */}
      <div className="chip-row" role="tablist" aria-label="Filter extensions">
        {filters.map((f) => (
          <button
            key={f}
            className="chip"
            data-active={filter === f}
            onClick={() => setFilter(f)}
            role="tab"
            aria-selected={filter === f}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Section heading */}
      <div className="section-head" style={{ marginTop: "3rem" }}>
        <div>
          <h2 className="section-title">
            {filter === "All" ? "All extensions" : filter}
          </h2>
          <p className="section-sub">
            Curated, open source, and ready to load.
          </p>
        </div>
        <span className="section-count">
          {filtered.length} {filtered.length === 1 ? "result" : "results"}
        </span>
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div
          className="text-center py-16"
          style={{
            border: "1px dashed var(--border)",
            borderRadius: 16,
            color: "var(--muted)",
          }}
        >
          No extensions match — try a different keyword or filter.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((ext, i) => (
            <ExtensionCard key={ext.slug} ext={ext} index={i} />
          ))}
        </div>
      )}
    </section>
  );
}
