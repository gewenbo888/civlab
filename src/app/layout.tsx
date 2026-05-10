import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { Providers } from "@/contexts/Providers";
import Chrome from "@/components/Chrome";

export const metadata: Metadata = {
  metadataBase: new URL("https://civlab.psyverse.fun"),
  title: "civlab · Civilization-Scale Lab · 文明级实验室",
  description:
    "Ten interactive bilingual platforms for AI-era civilization: knowledge compression, future simulation, AI replacement maps, materials graphs, failure museums, human memory.",
  keywords: ["civlab","civilization lab","AI-native platforms","knowledge compression","future simulator","AI replacement","materials graph","failure museum","human memory","文明实验室","AI 优先"],
  authors: [{ name: "Gewenbo", url: "https://psyverse.fun" }],
  alternates: { canonical: "/", languages: { en: "/", "zh-CN": "/", "x-default": "/" } },
  openGraph: {
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "civlab · Civilization-Scale Lab · 文明级实验室" }],
    title: "civlab · Civilization-Scale Lab",
    description: "Ten interactive bilingual platforms for AI-era civilization.",
    url: "https://civlab.psyverse.fun/",
    siteName: "Psyverse",
    type: "website",
    locale: "en_US",
    alternateLocale: ["zh_CN"],
  },
  twitter: {
    images: ["/twitter-image.png"], card: "summary_large_image", title: "civlab · 文明级实验室", description: "Ten platforms. AI-era. Bilingual." },
  robots: { index: true, follow: true },
  other: { "theme-color": "#3a6e62" },
};

export const viewport: Viewport = {
  width: "device-width", initialScale: 1,
  themeColor: [{ media: "(prefers-color-scheme: light)", color: "#f6f7f7" }, { media: "(prefers-color-scheme: dark)", color: "#06070b" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("civlab.theme");var d=window.matchMedia("(prefers-color-scheme: dark)").matches;var dark=t?t==="dark":d;if(dark)document.documentElement.classList.add("dark");var l=localStorage.getItem("civlab.lang");if(l==="zh"||l==="en")document.documentElement.lang=l==="zh"?"zh-CN":"en";}catch(e){}})();`,
          }}
        />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </head>
      <body>
        <Providers>
          <Chrome>{children}</Chrome>
        </Providers>
        <Script src="https://analytics-dashboard-two-blue.vercel.app/tracker.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
