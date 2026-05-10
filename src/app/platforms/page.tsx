"use client";

import { useApp, t } from "@/contexts/Providers";
import { PLATFORMS } from "@/data/spec";
import { SUBDOMAIN_FOR } from "@/components/Chrome";

export default function PlatformsPage() {
  const { lang } = useApp();
  return (
    <>
      <header className="max-w-4xl mx-auto px-4 md:px-8 pt-16 md:pt-24 pb-10">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--accent)] mb-4">{lang === "zh" ? "平台" : "Platforms"}</div>
        <h1 className="font-display text-4xl md:text-6xl leading-tight">
          {lang === "zh" ? "十个独立的实验。" : "Ten independent experiments."}
        </h1>
        <p className="font-body text-[var(--ink-soft)] mt-5 max-w-3xl text-base md:text-lg leading-relaxed">
          {lang === "zh" ? "每个平台呈现：愿景、模块、数据模型、可交互演示、关键功能。" : "Each platform shows: vision, modules, data model, interactive demo, key features."}
        </p>
        <div className="dotted-rule mt-8" />
      </header>

      <section className="max-w-5xl mx-auto px-4 md:px-8 pb-24 space-y-px bg-[var(--rule)]">
        {PLATFORMS.map((p, i) => (
          <a key={p.id} href={SUBDOMAIN_FOR[p.id]} target="_blank" rel="noreferrer" className="block bg-[var(--bg)] hover:bg-[var(--bg-alt)] transition-colors p-6 md:p-8 group">
            <div className="grid md:grid-cols-[60px_1fr_220px] gap-6 items-baseline">
              <div className="font-display text-5xl" style={{ color: p.hue }}>{p.glyph}</div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-[var(--ink-soft)]">{String(i+1).padStart(2,"0")} / 10</div>
                <h2 className="font-display text-2xl md:text-3xl mt-1 leading-tight">{t(p.name, lang)}</h2>
                <p className="font-body text-sm md:text-base text-[var(--ink-soft)] mt-3 leading-relaxed">{t(p.oneLine, lang)}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.modules.slice(0, 5).map((m) => (
                    <span key={m.id} className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 border border-[var(--rule)] text-[var(--ink-soft)]">
                      {t(m.name, lang)}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-right">
                <div className="font-mono text-[11px] uppercase tracking-wider text-[var(--accent)] group-hover:underline">
                  {p.slug}.psyverse.fun
                </div>
                <div className="font-mono text-[10px] tracking-wider text-[var(--ink-soft)] mt-1">
                  {p.modules.length} mod · {p.features.length} feat · {p.interactiveKind} demo
                </div>
              </div>
            </div>
          </a>
        ))}
      </section>
    </>
  );
}
