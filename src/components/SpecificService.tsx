import Container from "@/components/ui/Container";
import MediaSlot from "@/components/ui/MediaSlot";
import { ArrowRightIcon, BankIcon, OilRigIcon } from "@/components/icons";
import { media, whatsappUrl } from "@/lib/site";

const segments = [
  {
    icon: BankIcon,
    title: "Você trabalha ou trabalhou em banco?",
    description: "Horas extras, cargo de confiança, metas, comissões e assédio.",
    cta: "Sou bancário e quero falar",
    message: "Olá! Trabalho (ou trabalhei) em banco e queria conversar sobre meus direitos.",
  },
  {
    icon: OilRigIcon,
    title: "Você trabalha ou trabalhou no setor de petróleo?",
    description: "Escalas, embarques, horas extras, periculosidade e acidentes.",
    cta: "Trabalho no setor de petróleo",
    message: "Olá! Trabalho (ou trabalhei) no setor de petróleo e queria conversar.",
  },
];

export default function SpecificService() {
  return (
    <section className="relative isolate overflow-hidden bg-ink-deep">
      {/* Cenário de fundo bem esmaecido */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.18]">
        <MediaSlot
          src={media.specialties}
          alt=""
          label="Cenário bancos e petróleo"
          sizes="100vw"
          className="h-full w-full"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,var(--color-ink-deep)_0%,rgba(9,13,16,0.6)_45%,var(--color-ink-deep)_100%)]" />

      <Container className="py-16 sm:py-20">
        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-light">
            Atendimento específico
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl font-serif text-[28px] leading-[1.2] text-cream sm:text-[33px]">
            Bancários e trabalhadores do setor de petróleo
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[13px] leading-relaxed text-cream/50">
            Algumas profissões possuem regras diferentes sobre horário,
            pagamento, adicionais e condições de trabalho.
          </p>
        </div>

        <ul className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-5 md:grid-cols-2">
          {segments.map(({ icon: Icon, title, description, cta, message }) => (
            <li
              key={title}
              className="flex flex-col border border-gold/25 bg-ink/70 p-7 backdrop-blur-sm transition-colors hover:border-gold/55"
            >
              <Icon className="size-8 text-gold-light" />

              <h3 className="mt-5 font-serif text-[18px] leading-[1.3] text-cream">
                {title}
              </h3>

              <p className="mt-3 flex-1 text-[12.5px] leading-[1.65] text-cream/50">
                {description}
              </p>

              <a
                href={whatsappUrl(message)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-[12px] font-medium text-gold-light transition-colors hover:text-cream"
              >
                {cta}
                <ArrowRightIcon className="size-3.5" />
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
