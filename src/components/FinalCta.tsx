import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { ChatIcon, LockIcon, ScalesIcon, UserIcon, WhatsAppIcon } from "@/components/icons";
import { whatsappUrl } from "@/lib/site";

const assurances = [
  { icon: ChatIcon, lines: ["Atendimento", "on-line"] },
  { icon: UserIcon, lines: ["Contato", "direto"] },
  { icon: LockIcon, lines: ["Conversa com", "sigilo"] },
];

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.07] bg-ink py-16 sm:py-20">
      <div
        className="pointer-events-none absolute right-[-8%] top-[-40%] size-[28rem] rounded-full bg-[radial-gradient(circle,rgba(176,138,70,0.14),transparent_68%)]"
        aria-hidden
      />
      <Container className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-14">
        <div className="flex items-start gap-6">
          <ScalesIcon className="hidden size-11 shrink-0 text-gold-light sm:block" />
          <div className="max-w-lg">
            <h2
              data-split="chars"
              className="section-title text-[1.7rem] text-cream sm:text-[2.1rem]"
            >
              Não tome uma decisão importante{" "}
              <em className="text-gold-light">sem entender seus direitos</em>
            </h2>
            <p
              data-reveal="up"
              className="mt-5 text-[0.95rem] leading-[1.75] text-cream/55"
            >
              Antes de pedir demissão, assinar um acordo ou deixar o problema
              para depois, fale com um advogado trabalhista.
            </p>
          </div>
        </div>

        <div data-reveal="right" className="flex shrink-0 flex-col gap-7">
          <Button
            href={whatsappUrl("Olá! Quero contar meu problema para um advogado trabalhista.")}
            size="lg"
          >
            Contar meu problema agora
            <WhatsAppIcon className="size-[18px]" />
          </Button>

          <ul data-reveal-stagger className="flex flex-wrap gap-x-7 gap-y-4">
            {assurances.map(({ icon: Icon, lines }) => (
              <li key={lines.join(" ")} className="flex items-center gap-2.5">
                <Icon className="size-5 shrink-0 text-gold-light" />
                <span className="text-[0.75rem] leading-[1.4] text-cream/65">
                  {lines[0]}
                  <br />
                  {lines[1]}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
