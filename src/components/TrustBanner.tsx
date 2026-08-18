import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { ScalesIcon, WhatsAppIcon } from "@/components/icons";
import { whatsappUrl } from "@/lib/site";

export default function TrustBanner() {
  return (
    <section className="border-y border-white/[0.07] bg-ink-soft">
      <Container className="flex flex-col items-start gap-7 py-9 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-5">
          <ScalesIcon className="size-9 shrink-0 text-gold-light" />
          <div>
            <p className="font-serif text-[19px] leading-snug text-cream sm:text-[21px]">
              Você acha que algo está errado no seu trabalho?
            </p>
            <p className="mt-1.5 text-[13px] text-cream/55">
              Conte o que aconteceu e veja quais informações serão necessárias.
            </p>
          </div>
        </div>

        <Button
          href={whatsappUrl("Olá! Acho que algo está errado no meu trabalho e queria conversar.")}
          variant="outlineDark"
          className="shrink-0"
        >
          Quero falar com o advogado
          <WhatsAppIcon className="size-4" />
        </Button>
      </Container>
    </section>
  );
}
