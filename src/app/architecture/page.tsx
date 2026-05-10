"use client";

import { useApp, t } from "@/contexts/Providers";
import { PLATFORMS } from "@/data/spec";

export default function ArchitecturePage() {
  const { lang } = useApp();
  return (
    <>
      <header className="max-w-4xl mx-auto px-4 md:px-8 pt-16 md:pt-24 pb-10">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--accent)] mb-4">{lang === "zh" ? "架构" : "Architecture"}</div>
        <h1 className="font-display text-4xl md:text-6xl leading-tight">{lang === "zh" ? "栈是什么。" : "What's in the stack."}</h1>
        <p className="font-body text-[var(--ink-soft)] mt-5 max-w-3xl text-base md:text-lg leading-relaxed">
          {lang === "zh"
            ? "本实验室所有平台共享同一份技术地基与同一份内容地基——以求长期之复利。"
            : "Every platform in this lab shares one technical foundation and one content foundation — to compound over time."}
        </p>
        <div className="dotted-rule mt-8" />
      </header>

      <section className="max-w-4xl mx-auto px-4 md:px-8 mb-16 grid md:grid-cols-2 gap-px bg-[var(--rule)]">
        <article className="bg-[var(--bg)] p-6 md:p-7">
          <h2 className="font-display text-2xl mb-3">{lang === "zh" ? "技术地基" : "Technical foundation"}</h2>
          <ul className="font-mono text-[12px] leading-relaxed space-y-1.5 text-[var(--ink-soft)]">
            <li>· Next.js 14 App Router · TypeScript · Tailwind</li>
            <li>· Framer Motion · D3-style SVG visualizations</li>
            <li>· Bilingual context (EN ⇄ 中文 instant toggle)</li>
            <li>· Light/dark theme · localStorage personalization</li>
            <li>· Static deploy on Vercel · CDN-first</li>
            <li>· Open-source repos under github.com/gewenbo888</li>
            <li>· Per-platform interactive component (D3 graph, simulator, agent runtime, browseable DB, etc.)</li>
          </ul>
        </article>
        <article className="bg-[var(--bg)] p-6 md:p-7">
          <h2 className="font-display text-2xl mb-3">{lang === "zh" ? "内容地基" : "Content foundation"}</h2>
          <ul className="font-mono text-[12px] leading-relaxed space-y-1.5 text-[var(--ink-soft)]">
            <li>· Shared spec.ts type system across 11 sites</li>
            <li>· Per-platform Module / Feature / DataModel structures</li>
            <li>· Sample data shipped with each interactive demo</li>
            <li>· Source-cited claims throughout</li>
            <li>· CC0 / CC-BY where applicable (Human Memory Project)</li>
            <li>· Forkable: clone the repo, fork the spec, ship your own scoring</li>
          </ul>
        </article>
      </section>

      <section className="max-w-4xl mx-auto px-4 md:px-8 pb-24">
        <h2 className="font-display text-2xl mb-6">{lang === "zh" ? "每个平台的可交互组件" : "Interactive component per platform"}</h2>
        <div className="border border-[var(--rule)]">
          <div className="grid grid-cols-[200px_140px_1fr] font-mono text-[10px] uppercase tracking-wider bg-[var(--bg-alt)] border-b border-[var(--rule)]">
            <div className="px-4 py-3 text-[var(--ink-soft)]">{lang === "zh" ? "平台" : "platform"}</div>
            <div className="px-4 py-3 text-[var(--ink-soft)] border-l border-[var(--rule)]">{lang === "zh" ? "组件" : "component"}</div>
            <div className="px-4 py-3 text-[var(--ink-soft)] border-l border-[var(--rule)]">{lang === "zh" ? "做什么" : "does"}</div>
          </div>
          {PLATFORMS.map((p) => (
            <div key={p.id} className="grid grid-cols-[200px_140px_1fr] border-b border-[var(--rule)] last:border-b-0">
              <div className="px-4 py-3 font-display text-base flex items-baseline gap-2"><span style={{ color: p.hue }}>{p.glyph}</span> {t(p.name, lang)}</div>
              <div className="px-4 py-3 font-mono text-[11px] text-[var(--accent)] border-l border-[var(--rule)] uppercase">{p.interactiveKind}</div>
              <div className="px-4 py-3 font-body text-sm text-[var(--ink-soft)] border-l border-[var(--rule)]">{t(p.oneLine, lang)}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
