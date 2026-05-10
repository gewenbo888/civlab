"use client";

import { useApp } from "@/contexts/Providers";

export default function AboutPage() {
  const { lang } = useApp();
  return (
    <>
      <header className="max-w-3xl mx-auto px-4 md:px-8 pt-16 md:pt-24 pb-10">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--accent)] mb-4">{lang === "zh" ? "关于" : "About"}</div>
        <h1 className="font-display text-4xl md:text-6xl leading-tight">{lang === "zh" ? "civlab 是什么" : "What is civlab"}</h1>
      </header>

      <article className="max-w-3xl mx-auto px-4 md:px-8 pb-24 font-body text-base md:text-lg leading-relaxed space-y-5">
        <p>
          {lang === "zh"
            ? "civlab 是一组十个独立部署的、可交互的双语平台——每一个针对一个文明级的认知缺口。它们由 Gewenbo 在 psyverse.fun 这个组合下作为研究实验编纂。"
            : "civlab is a set of ten independently-deployed, interactive, bilingual platforms — each targeted at a civilization-scale cognitive gap. They are curated by Gewenbo as research experiments under the psyverse.fun portfolio."}
        </p>
        <p>
          {lang === "zh"
            ? "本中枢列出全部十个平台。每个平台位于自己的子域：civilization-tree.psyverse.fun、how-the-world-works.psyverse.fun、humanity-problem-database.psyverse.fun，以此类推。每个平台都是开源的（github.com/gewenbo888 下相应仓库）；任何人皆可 fork、修改、再部署。"
            : "This hub lists all ten. Each platform lives at its own subdomain: civilization-tree.psyverse.fun, how-the-world-works.psyverse.fun, humanity-problem-database.psyverse.fun, and so on. Each platform is open-source (under github.com/gewenbo888); anyone can fork, modify, and re-deploy."}
        </p>
        <p>
          {lang === "zh"
            ? "本实验室不替代你的真实工作工具。它给你一种关于『还应该建什么』的直觉——以及关于『为什么没人在建』的清醒。"
            : "This lab does not replace your real working tools. It gives you intuition for what else should be built — and clarity about why no one is building it."}
        </p>
        <p className="font-mono text-sm text-[var(--ink-soft)] mt-10">
          civlab · v0.1 · {lang === "zh" ? "由 Gewenbo 编纂 · psyverse.fun 项目集" : "curated by Gewenbo · part of the psyverse.fun portfolio"}
        </p>
      </article>
    </>
  );
}
