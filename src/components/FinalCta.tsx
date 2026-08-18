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
    <section className="border-t border-white/[0.07] bg-ink py-14 sm:py-16">
      <Container className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-14">
        <div className="flex items-start gap-6">
          <ScalesIcon className="hidden size-11 shrink-0 text-gold-light sm:block" />
          <div className="max-w-lg">
            <h2 className="font-serif text-[26px] leading-[1.25] text-cream sm:text-[31px]">
              Não tome uma decisão importante sem entender seus direitos
            </h2>
            <p className="mt-4 text-[13px] leading-[1.75] text-cream/55">
              Antes de pedir demissão, assinar um acordo ou deixar o problema
              para depois, fale com um advogado trabalhista.
            </p>
          </div>
        </div>

        <div className="flex shrink-0 flex-col gap-7">
          <Button
            href={whatsappUrl("Olá! Quero contar meu problema para um advogado trabalhista.")}
            size="lg"
          >
            Contar meu problema agora
            <WhatsAppIcon className="size-[18px]" />
          </Button>

          <ul className="flex flex-wrap gap-x-7 gap-y-4">
            {assurances.map(({ icon: Icon, lines }) => (
              <li key={lines.join(" ")} className="flex items-center gap-2.5">
                <Icon className="size-5 shrink-0 text-gold-light" />
                <span className="text-[11.5px] leading-[1.4] text-cream/65">
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
