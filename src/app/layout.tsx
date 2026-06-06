// src/app/layout.tsx
import "./globals.css";
import React from "react";
import Link from "next/link";
import { Github as LucideGithub } from "lucide-react";
import { FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";
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
                  <LucideGithub size={20} />
                </a>
                <ThemeToggle />
              </div>
            </div>
          </header>

          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full min-h-screen">{children}</main>

          
          <footer className="border-t border-white/5 bg-[#09090b] mt-12 py-8 flex justify-center items-center gap-6">
            <a
              href="[INSERT_X_LINK_HERE]"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-teal-400 transition-colors"
              aria-label="X (Twitter)"
            >
              <FaXTwitter size={24} />
            </a>
            <a
              href="https://github.com/Mortarion002"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-teal-400 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/aman-kumar-537a73296"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-teal-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
