"use client";

import { useApp, t } from "@/contexts/Providers";
import { PLATFORMS, PILLARS } from "@/data/spec";
import { SUBDOMAIN_FOR } from "@/components/Chrome";
import { motion } from "framer-motion";

export default function CivlabHub() {
  const { lang } = useApp();
  return (
    <>
      {/* HERO */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 md:pt-28 pb-16">
          <div className="font-mono text-[11px] tracking-[0.3em] text-[var(--accent)] uppercase mb-5">
            civlab · v0.1 · {lang === "zh" ? "10 个 AI 时代平台" : "10 platforms for the AI era"}
          </div>
          <h1 className="font-display text-5xl md:text-7xl xl:text-8xl leading-[1.02] tracking-tight max-w-5xl">
            {lang === "zh"
              ? "如果你今天为整个文明做产品——这十件你会先做。"
              : "If you were shipping for civilization today — ten things you'd build first."}
          </h1>
          <p className="mt-8 max-w-2xl font-body text-base md:text-lg text-[var(--ink-soft)] leading-relaxed">
            {lang === "zh"
              ? "不是创业指南。不是 AI 演示。十个独立部署的、可交互的平台——每一个针对一个文明级的认知缺口：知识压缩、未来直觉、AI 替代地图、材料图谱、失败档案、人类记忆。"
              : "Not a startup guide. Not an AI demo. Ten independently deployed, interactive platforms — each targeted at a civilization-scale cognitive gap: knowledge compression, future intuition, AI replacement maps, materials graphs, failure archives, human memory."}
          </p>
          <div className="mt-10 flex flex-wrap gap-3 font-mono text-xs">
            <a href="/platforms" className="px-5 py-2.5 border border-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--bg)] uppercase tracking-wider transition-colors">
              {lang === "zh" ? "全部平台 →" : "All platforms →"}
            </a>
            <a href="/manifesto" className="px-5 py-2.5 border border-[var(--rule)] hover:border-[var(--accent)] uppercase tracking-wider transition-colors">
              {lang === "zh" ? "方法论" : "Manifesto"}
            </a>
          </div>
        </div>
      </section>

      {/* PLATFORM GRID */}
      <section className="border-y border-[var(--rule)]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--accent)] mb-3">{lang === "zh" ? "平台" : "Platforms"}</div>
          <h2 className="font-display text-3xl md:text-4xl mb-10">
            {lang === "zh" ? "每个独立部署。每个可交互。每个双语。" : "Each independently deployed. Each interactive. Each bilingual."}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-px bg-[var(--rule)]">
            {PLATFORMS.map((p, i) => (
              <motion.a
                key={p.id}
                href={SUBDOMAIN_FOR[p.id]}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="bg-[var(--bg)] hover:bg-[var(--bg-alt)] transition-colors p-6 flex flex-col gap-3 min-h-[15rem] group"
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-3xl" style={{ color: p.hue }}>{p.glyph}</span>
                  <span className="font-mono text-[10px] tracking-wider uppercase text-[var(--ink-soft)]">{String(i+1).padStart(2,"0")}</span>
                </div>
                <h3 className="font-display text-lg leading-tight">{t(p.name, lang)}</h3>
                <p className="font-body text-[12.5px] leading-relaxed text-[var(--ink-soft)]">{t(p.oneLine, lang)}</p>
                <div className="mt-auto font-mono text-[10px] uppercase tracking-wider text-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity">
                  {p.slug}.psyverse.fun →
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="max-w-5xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--accent)] mb-3">{lang === "zh" ? "原则" : "Principles"}</div>
        <h2 className="font-display text-3xl md:text-4xl mb-10">
          {lang === "zh" ? "每个平台共享的五个承诺。" : "Five commitments shared across every platform."}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-[var(--rule)]">
          {PILLARS.map((p, i) => (
            <div key={i} className="bg-[var(--bg)] p-5">
              <div className="font-mono text-[10px] uppercase tracking-wider text-[var(--accent)]">0{i+1}</div>
              <div className="font-display text-lg mt-2">{t(p, lang)}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
