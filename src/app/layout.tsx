// src/app/layout.tsx
import "./globals.css";
import React from "react";
import Link from "next/link";
import { Github as LucideGithub, Sparkles } from "lucide-react";
import { FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";
import { ThemeProvider } from "../components/ThemeProvider";

export const metadata = {
  title: "EXT.CORE — Precision Engineered Extensions",
  description: "Hand-crafted, privacy-first browser and editor extensions for the modern operator.",
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
          {/* Header */}
          <header className="site-header">
            <div className="container h-16 flex items-center justify-between">
              <Link href="/" className="brand-mark">
                <span className="brand-glyph">
                  <Sparkles size={14} />
                </span>
                <span className="text-base">EXT<span style={{ color: "var(--accent)" }}>.</span>CORE</span>
              </Link>

              <nav className="hidden md:flex items-center gap-7">
                <a href="#gallery" className="nav-link">Extensions</a>
                <a href="#install" className="nav-link">Install Guide</a>
                <a
                  href="https://github.com/Mortarion002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                >
                  Open Source
                </a>
              </nav>

              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/Mortarion002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-btn"
                  aria-label="GitHub Repository"
                >
                  <LucideGithub size={16} />
                </a>
                <a
                  href="#gallery"
                  className="hidden sm:inline-flex btn btn-primary"
                  style={{ padding: "8px 14px", fontSize: "0.82rem" }}
                >
                  Browse
                </a>
              </div>
            </div>
          </header>

          <main className="container w-full">{children}</main>

          {/* Footer */}
          <footer className="site-footer">
            <div className="container footer-bottom">
              <div>© {new Date().getFullYear()} EXT.CORE — Built with care.</div>
              <div className="footer-social">
                <a
                  href="https://x.com/CloudKnight002"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                >
                  <FaXTwitter size={15} />
                </a>
                <a
                  href="https://github.com/Mortarion002"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub size={15} />
                </a>
                <a
                  href="https://www.linkedin.com/in/aman-kumar-537a73296"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={15} />
                </a>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
