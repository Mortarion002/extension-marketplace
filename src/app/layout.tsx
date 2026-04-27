// src/app/layout.tsx
import "./globals.css";
import React from "react";
import Link from "next/link";
import { Github } from "lucide-react";
import ThemeToggle from "../components/ThemeToggle";
import { ThemeProvider } from "../components/ThemeProvider";

import fs from "fs";
import path from "path";

export const metadata = {
  title: "EXT.CORE — Precision Engineered",
  description: "Precision engineered tools for the confident operator.",
  metadataBase: new URL("http://localhost:3000"),
  openGraph: {
    images: ["/og-image.png"],
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <header className="border-b border-white/10 bg-zinc-950/70 backdrop-blur-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
              <Link href="/" className="flex items-center">
                <span className="text-xl font-bold tracking-tight text-gray-100">
                  EXT.CORE
                </span>
              </Link>

              <div className="flex items-center gap-6">
                <a
                  href="https://github.com/EternalKnight002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="GitHub Repository"
                >
                  <Github size={20} />
                </a>
                <ThemeToggle />
              </div>
            </div>
          </header>

          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full min-h-screen">{children}</main>

          
          <footer className="border-t border-zinc-800/50 bg-[#09090b] py-8 mt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                <span className="text-gray-100 text-base font-bold tracking-tight normal-case">EXT.CORE</span>
                <span>© 2024 EXT.CORE. PRECISION ENGINEERED FOR THE CONFIDENT OPERATOR.</span>
              </div>
              <div className="flex items-center gap-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                <Link href="/security" className="hover:text-white transition-colors">Security</Link>
                <Link href="/docs" className="hover:text-white transition-colors">API Documentation</Link>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
