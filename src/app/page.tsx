// src/app/page.tsx
import React from "react";
import fs from "fs";
import path from "path";
import AnimatedHero from "../components/AnimatedHero";
import ExtensionGallery from "../components/ExtensionGallery";
import HowToDownloadSection from "../components/HowToDownloadSection";

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

async function getExtensions(): Promise<Ext[]> {
  const dataPath = path.join(process.cwd(), "data", "extensions.json");
  try {
    if (!fs.existsSync(dataPath)) return [];
    const raw = fs.readFileSync(dataPath, "utf-8");
    return JSON.parse(raw) as Ext[];
  } catch (err) {
    console.error("Error reading extensions.json:", err);
    return [];
  }
}

export default async function HomePage() {
  const extensions = await getExtensions();

  return (
    <>
      <AnimatedHero totalCount={extensions.length} />
      <ExtensionGallery extensions={extensions} />
      <HowToDownloadSection />
    </>
  );
}
