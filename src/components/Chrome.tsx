"use client";

import { useApp, t } from "@/contexts/Providers";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PLATFORMS } from "@/data/spec";

export const SUBDOMAIN_FOR: Record<string, string> = Object.fromEntries(
  PLATFORMS.map((p) => [p.id, `https://${p.slug}.psyverse.fun`])
);

const NAV: { href: string; label: { en: string; zh: string } }[] = [
  { href: "/",          label: { en: "Lab",            zh: "实验室" } },
  { href: "/platforms", label: { en: "Platforms",      zh: "平台" } },
  { href: "/manifesto", label: { en: "Manifesto",      zh: "宣言" } },
  { href: "/architecture", label: { en: "Architecture",zh: "架构" } },
  { href: "/about",     label: { en: "About",          zh: "关于" } },
];

export default function Chrome({ children }: { children: React.ReactNode }) {
  const { lang, setLang, theme, toggleTheme } = useApp();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 backdrop-blur-md bg-[var(--bg)]/80 border-b border-[var(--rule)]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 md:py-4 flex items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-3 group">
            <span className="relative inline-block w-7 h-7">
              <svg viewBox="0 0 28 28" className="w-full h-full">
                <circle cx="14" cy="14" r="11" fill="none" stroke="var(--accent)" strokeWidth="1" opacity="0.5"/>
                <circle cx="14" cy="14" r="6"  fill="none" stroke="var(--accent)" strokeWidth="1" opacity="0.7"/>
                <circle cx="14" cy="14" r="2"  fill="var(--accent)"/>
              </svg>
            </span>
            <span className="hidden sm:flex flex-col leading-tight">
              <span className="font-display text-base tracking-tight">civlab</span>
              <span className="font-mono text-[10px] text-[var(--ink-soft)]">civilization-scale lab</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-5 font-mono text-[12px] uppercase tracking-wider">
            {NAV.slice(1).map((it) => (
              <a key={it.href} href={it.href} className="text-[var(--ink-soft)] hover:text-[var(--accent)] transition-colors">
                {t(it.label, lang)}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button onClick={() => setLang(lang === "en" ? "zh" : "en")} className="font-mono text-[11px] tracking-wider px-2.5 py-1 border border-[var(--rule)] hover:border-[var(--accent)] uppercase">
              {lang === "en" ? "中文" : "EN"}
            </button>
            <button onClick={toggleTheme} className="font-mono text-[11px] px-2.5 py-1 border border-[var(--rule)] hover:border-[var(--accent)]">
              {theme === "dark" ? "☾" : "☀"}
            </button>
            <button onClick={() => setOpen(true)} className="lg:hidden font-mono text-[11px] px-2.5 py-1 border border-[var(--rule)]">☰</button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[var(--bg)]/95 backdrop-blur-lg" onClick={() => setOpen(false)}>
            <div className="max-w-md mx-auto px-8 pt-24" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setOpen(false)} className="absolute top-4 right-4 px-3 py-1 border border-[var(--rule)] font-mono text-xs">✕</button>
              <ul className="space-y-3">
                {NAV.map((it) => (
                  <li key={it.href}>
                    <a href={it.href} onClick={() => setOpen(false)} className="block py-2 font-display text-2xl border-b border-[var(--rule)]">{t(it.label, lang)}</a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="min-h-[80vh]">{children}</main>

      <footer className="border-t border-[var(--rule)] mt-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 font-mono text-[11px] text-[var(--ink-soft)] grid md:grid-cols-3 gap-4">
          <div>
            <div className="font-display text-base text-[var(--ink)]">civlab · civilization-scale lab · 文明级实验室</div>
            <div className="opacity-70 mt-1">10 platforms · open-source · bilingual</div>
          </div>
          <div className="text-[10px] leading-relaxed opacity-80 max-w-md">
            {lang === "zh"
              ? "本实验室所有平台皆为开放规范与可交互演示。它们示范设计——其底层 AI 运行时为各平台未来的实现工作。"
              : "Every platform in this lab is an open specification and an interactive demo. They demonstrate the design; the underlying AI runtimes are future work for each platform."}
          </div>
          <div className="md:text-right">
            <a href="https://psyverse.fun" target="_blank" rel="noreferrer" className="hover:text-[var(--accent)]">psyverse.fun</a>
          </div>
        </div>
      </footer>
    </>
  );
}
