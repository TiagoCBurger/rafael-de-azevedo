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
      {/* Retrato sangrando na borda direita, com degradê para o texto respirar */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[52%] lg:block">
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

      <Container className="relative py-16 sm:py-20 lg:pt-20 lg:pb-28">
        <div className="max-w-xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-light">
            Advogado Trabalhista
          </p>

          <h1 className="mt-5 font-serif text-[34px] leading-[1.12] text-cream sm:text-[46px] lg:text-[52px]">
            Está com algum
            <br />
            problema no trabalho?
          </h1>

          <p className="mt-6 max-w-lg text-[14.5px] leading-[1.75] text-cream/60">
            Fale diretamente com um advogado trabalhista e explique o que
            aconteceu. Atendimento para demissão, horas extras, acidente de
            trabalho, doença causada pelo trabalho, assédio, salário atrasado,
            FGTS e outros direitos trabalhistas.
          </p>

          <ul className="mt-9 flex flex-wrap gap-x-9 gap-y-5">
            {highlights.map(({ icon: Icon, lines }) => (
              <li key={lines.join(" ")} className="flex items-center gap-3">
                <Icon className="size-[22px] shrink-0 text-gold-light" />
                <span className="text-[12.5px] leading-[1.4] text-cream/80">
                  {lines[0]}
                  <br />
                  {lines[1]}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <Button href={whatsappUrl()} size="lg">
              Contar meu problema no WhatsApp
              <WhatsAppIcon className="size-[18px]" />
            </Button>
          </div>

          <p className="mt-8 flex max-w-md items-start gap-3 text-[12px] leading-[1.6] text-cream/45">
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
