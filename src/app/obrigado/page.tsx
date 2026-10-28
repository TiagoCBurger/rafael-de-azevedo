import type { Metadata } from "next";
import Link from "next/link";
import Logo from "@/components/Logo";
import Container from "@/components/ui/Container";
import ContinueOnWhatsApp from "./ContinueOnWhatsApp";

export const metadata: Metadata = {
  title: "Recebemos seu contato — Raphael de Azevedo",
  robots: { index: false },
};

// O Lead já foi disparado no envio do formulário — esta página NÃO dispara conversão,
// para não contar em dobro quando alguém recarrega ou volta nela.
export default function Obrigado() {
  return (
    <main className="flex min-h-screen flex-col bg-ink">
      <Container className="py-8">
        <Link href="/" aria-label="Raphael de Azevedo — início" className="inline-block">
          <Logo />
        </Link>
      </Container>

      <Container className="flex flex-1 items-center pb-24">
        <section data-testid="thank-you" className="max-w-xl">
          <div className="flex items-center gap-3">
            <span className="inline-block h-px w-9 bg-gold" />
            <p className="eyebrow text-gold-light">Contato recebido</p>
          </div>

          <h1 className="display-title mt-5 text-[2.2rem] text-cream sm:text-[2.8rem]">
            Recebemos o seu <em className="text-gold-light">relato</em>
          </h1>

          <p className="mt-6 text-[1.05rem] leading-[1.75] text-cream/62">
            O advogado vai analisar as informações e falar com você em breve.
            Se preferir adiantar a conversa, continue pelo WhatsApp: a mensagem
            já vai pronta com o que você escreveu.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-6">
            <ContinueOnWhatsApp />
            <Link
              href="/"
              className="text-[0.875rem] text-cream/55 transition-colors hover:text-gold-light"
            >
              Voltar ao site
            </Link>
          </div>
        </section>
      </Container>
    </main>
  );
}
