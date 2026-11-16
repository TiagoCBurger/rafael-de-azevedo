import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { Suspense } from "react";
import ConsentBanner from "@/components/ConsentBanner";
import MotionRoot from "@/components/motion/MotionRoot";
import { PageViewTracker } from "@/components/tracking/PageViewTracker";
import { GtmNoscript, TrackingHead } from "@/components/tracking/TrackingScripts";
import WhatsAppClickTracker from "@/components/tracking/WhatsAppClickTracker";
import "./globals.css";

// Só o subconjunto "latin": já cobre todos os acentos do português.
// O "latin-ext" dobrava os arquivos de fonte baixados no carregamento.
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  // O site só usa 400 (logo) e 500 (títulos e <em>).
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Raphael de Azevedo — Advogado Trabalhista",
  description:
    "Fale diretamente com um advogado trabalhista e explique o que aconteceu. Demissão, horas extras, acidente de trabalho, assédio, salário atrasado, FGTS e outros direitos.",
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
    : undefined,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${outfit.variable} ${cormorant.variable} h-full antialiased`}
    >
      <head>
        <TrackingHead />
      </head>
      <body className="min-h-full bg-ink">
        <GtmNoscript />
        <Suspense fallback={null}>
          <PageViewTracker />
        </Suspense>
        <WhatsAppClickTracker />
        <noscript>
          <style>{`
            .js-motion [data-split],
            .js-motion [data-reveal]:not([data-reveal="clip"]),
            .js-motion [data-reveal-stagger] > * { opacity: 1 !important; }
          `}</style>
        </noscript>
        <MotionRoot>{children}</MotionRoot>
        <ConsentBanner />
      </body>
    </html>
  );
}
