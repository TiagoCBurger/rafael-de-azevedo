import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import MediaSlot from "@/components/ui/MediaSlot";
import { ChatIcon, LockIcon, ShieldIcon, UserIcon, WhatsAppIcon } from "@/components/icons";
import { media, whatsappUrl } from "@/lib/site";

const highlights = [
  { icon: ChatIcon, lines: ["Atendimento", "on-line"] },
  { icon: UserIcon, lines: ["Contato direto", "com o advogado"] },
  { icon: ShieldIcon, lines: ["Conversa com", "sigilo e respeito"] },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-ink">
      <div
        className="pointer-events-none absolute left-[-12%] top-[8%] size-[34rem] rounded-full bg-[radial-gradient(circle,rgba(176,138,70,0.18),transparent_68%)]"
        aria-hidden
      />

      <div
        data-hero-visual
        data-parallax="10"
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[52%] lg:block"
      >
        <MediaSlot
          src={media.hero}
          alt="Raphael de Azevedo, advogado trabalhista, em seu escritório"
          label="Foto do advogado"
          priority
          sizes="52vw"
          className="h-full w-full"
          imageClassName="object-cover object-[30%_center]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--color-ink)_0%,rgba(14,19,23,0.82)_20%,rgba(14,19,23,0.1)_50%,rgba(14,19,23,0.3)_100%)]" />
      </div>

      <Container className="relative py-16 sm:py-20 lg:py-20">
        <div className="max-w-xl">
          <div data-hero-kicker className="flex items-center gap-3">
            <span data-draw className="inline-block h-px w-9 origin-left bg-gold" />
            <p className="eyebrow text-gold-light">Advogado Trabalhista</p>
          </div>

          <h1
            data-split="chars"
            data-split-play="load"
            className="display-title mt-5 text-[2.45rem] text-cream sm:text-[3.2rem] lg:text-[3.75rem]"
          >
            Está com algum
            <br />
            <em className="text-gold-light">problema</em> no trabalho?
          </h1>

          <p
            data-hero-copy
            className="mt-6 max-w-lg text-[1.05rem] leading-[1.75] text-cream/62"
          >
            Fale diretamente com um advogado trabalhista e explique o que
            aconteceu. Atendimento para demissão, horas extras, acidente de
            trabalho, doença causada pelo trabalho, assédio, salário atrasado,
            FGTS e outros direitos trabalhistas.
          </p>

          <ul className="mt-8 flex flex-wrap gap-x-9 gap-y-5">
            {highlights.map(({ icon: Icon, lines }) => (
              <li
                key={lines.join(" ")}
                data-hero-item
                className="flex items-center gap-3"
              >
                <Icon className="size-[22px] shrink-0 text-gold-light" />
                <span className="text-[0.8125rem] leading-[1.45] text-cream/80">
                  {lines[0]}
                  <br />
                  {lines[1]}
                </span>
              </li>
            ))}
          </ul>

          <div data-hero-cta className="mt-9">
            <Button href={whatsappUrl()} size="lg">
              Contar meu problema no WhatsApp
              <WhatsAppIcon className="size-[18px]" />
            </Button>
          </div>

          <p
            data-hero-note
            className="mt-8 flex max-w-md items-start gap-3 text-[0.8125rem] leading-[1.65] text-cream/45"
          >
            <LockIcon className="mt-0.5 size-4 shrink-0 text-gold-light/80" />
            <span>
              Você não precisa entender de leis ou saber o nome do problema.
              Basta explicar a situação com suas próprias palavras.
            </span>
          </p>
        </div>
      </Container>
    </section>
  );
}
