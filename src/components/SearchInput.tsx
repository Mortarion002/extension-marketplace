// src/components/SearchInput.tsx
"use client";

import React from "react";
import { Search } from "lucide-react";

export default function SearchInput({ placeholder = "Search extensions by name or tag..." }: { placeholder?: string }) {
  const [value, setValue] = React.useState("");

  return (
    <div className="relative w-full max-w-2xl mx-auto group">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 transition-colors group-focus-within:text-teal-400" />
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md text-gray-100 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500/50 transition-all duration-300 shadow-sm"
        aria-label="Search extensions"
        role="search"
      />
    </div>
  );
}
