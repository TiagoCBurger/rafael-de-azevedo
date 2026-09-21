import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import MotionRoot from "@/components/motion/MotionRoot";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Raphael de Azevedo — Advogado Trabalhista",
  description:
    "Fale diretamente com um advogado trabalhista e explique o que aconteceu. Demissão, horas extras, acidente de trabalho, assédio, salário atrasado, FGTS e outros direitos.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${outfit.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ink">
        <noscript>
          <style>{`
            .js-motion [data-split],
            .js-motion [data-hero-copy],
            .js-motion [data-hero-item],
            .js-motion [data-hero-cta],
            .js-motion [data-hero-note],
            .js-motion [data-hero-visual],
            .js-motion [data-hero-kicker],
            .js-motion [data-reveal]:not([data-reveal="clip"]),
            .js-motion [data-reveal-stagger] > * { opacity: 1 !important; }
          `}</style>
        </noscript>
        <MotionRoot>{children}</MotionRoot>
      </body>
    </html>
  );
}
