"use client";

import { useApp } from "@/contexts/Providers";

export default function ManifestoPage() {
  const { lang } = useApp();
  return (
    <>
      <header className="max-w-3xl mx-auto px-4 md:px-8 pt-16 md:pt-24 pb-10">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--accent)] mb-4">{lang === "zh" ? "宣言" : "Manifesto"}</div>
        <h1 className="font-display text-4xl md:text-6xl leading-tight">
          {lang === "zh" ? "为整个文明做产品。" : "Build for civilization."}
        </h1>
      </header>

      <article className="max-w-3xl mx-auto px-4 md:px-8 pb-24 font-body text-base md:text-lg leading-relaxed space-y-6">
        <p>
          <strong>{lang === "zh" ? "01 — 文明级缺口存在。" : "01 — Civilization-scale gaps exist."}</strong><br/>
          {lang === "zh"
            ? "其中一些缺口的影响远超任何一家公司、任何一个产品。它们之所以仍开放，并非因为难——而是因为没有人看到它们就是在他们的视野之内。我们恰好看见了。"
            : "Some gaps matter more than any single company or product. They remain open not because they're hard, but because no one in a position to fill them sees them as in scope. We see them as in scope."}
        </p>
        <p>
          <strong>{lang === "zh" ? "02 — 规范先于代码。" : "02 — Specification before code."}</strong><br/>
          {lang === "zh"
            ? "若你不能用一段话讲清这套系统对世界许下了什么、以及拿什么换——那你不该开始写它。每一个 civlab 平台都先把这件事写下来。"
            : "If you can't say in a paragraph what the system promises the world and what it asks in return, you shouldn't be writing the code yet. Every civlab platform writes this down first."}
        </p>
        <p>
          <strong>{lang === "zh" ? "03 — 可交互优于演示视频。" : "03 — Interactive over demo video."}</strong><br/>
          {lang === "zh"
            ? "每一个 civlab 平台都附一个可点击、可拖动、可探索的实物。即便底层只是种子数据——人手得以伸进去模拟器、图谱、矩阵之中。"
            : "Every civlab platform ships with something you can click, drag, and explore. Even when the underlying data is seeded, the hand reaches into the simulator, the graph, the matrix."}
        </p>
        <p>
          <strong>{lang === "zh" ? "04 — 双语作为基本要求。" : "04 — Bilingual as default."}</strong><br/>
          {lang === "zh"
            ? "civlab 的目标读者是世界——不是英语世界。每一行内容皆中英两版。这件事本身已是工作的一部分；它强迫规范变得更清晰。"
            : "civlab's audience is the world, not the English-speaking world. Every line of content lives in both English and 中文. The translation itself is part of the work; it forces specifications to be clearer."}
        </p>
        <p>
          <strong>{lang === "zh" ? "05 — 真实的 AI 运行时是未来工作。" : "05 — Real AI runtimes are future work."}</strong><br/>
          {lang === "zh"
            ? "本实验室不假装它在这个版本中已实现真实的多代理编排或 RAG 检索。它把这些当作每一个平台的下一阶段。今天交付的，是设计——以及在浏览器里跑得起来的可交互演示。"
            : "This lab does not pretend it has shipped real multi-agent orchestration or production RAG in this version. It treats those as the next stage for each platform. What ships today is the design — and an interactive demo that runs in the browser."}
        </p>
        <p>
          <strong>{lang === "zh" ? "06 — 来源比观点重要。" : "06 — Sources over opinions."}</strong><br/>
          {lang === "zh"
            ? "Humanity Problem Database 与 Failure Museum 各自的每一条目都附原始来源。AI Replacement Map 的评分公开假设。Future Simulator 的方程开放给检视。一个平台所主张的——若不能被反驳——它就值得不多。"
            : "Every entry in the Humanity Problem Database and Failure Museum comes with primary sources. The AI Replacement Map publishes its assumptions. The Future Simulator's equations are inspectable. A platform whose claims cannot be falsified is not worth much."}
        </p>
      </article>
    </>
  );
}
