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
      {media.specialties && (
        <div
          data-parallax="8"
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.18]"
        >
          <MediaSlot
            src={media.specialties}
            alt=""
            label="Cenário bancos e petróleo"
            sizes="100vw"
            className="h-full w-full"
          />
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,var(--color-ink-deep)_0%,rgba(9,13,16,0.6)_45%,var(--color-ink-deep)_100%)]" />

      <Container className="py-20 sm:py-24">
        <div className="text-center">
          <div data-reveal="up" className="flex items-center justify-center gap-3">
            <span data-draw className="inline-block h-px w-8 origin-left bg-gold" />
            <p className="eyebrow text-gold-light">Atendimento específico</p>
            <span data-draw className="inline-block h-px w-8 origin-right bg-gold" />
          </div>
          <h2
            data-split="words"
            className="section-title mx-auto mt-5 max-w-3xl text-[1.85rem] text-cream sm:text-[2.25rem]"
          >
            Bancários e trabalhadores do setor de petróleo
          </h2>
          <p
            data-reveal="up"
            className="mx-auto mt-5 max-w-2xl text-[0.95rem] leading-relaxed text-cream/50"
          >
            Algumas profissões possuem regras diferentes sobre horário,
            pagamento, adicionais e condições de trabalho.
          </p>
        </div>

        <ul
          data-reveal-stagger
          className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-6 md:grid-cols-2"
        >
          {segments.map(({ icon: Icon, title, description, cta, message }) => (
            <li
              key={title}
              className="lift-card-dark flex flex-col border border-gold/25 bg-ink/70 p-8 backdrop-blur-sm transition-colors hover:border-gold/55"
            >
              <Icon className="size-8 text-gold-light" />

              <h3 className="section-title mt-6 text-[1.3rem] leading-[1.3] text-cream">
                {title}
              </h3>

              <p className="mt-3 flex-1 text-[0.9rem] leading-[1.7] text-cream/50">
                {description}
              </p>

              <a
                href={whatsappUrl(message)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 text-[0.8125rem] font-medium text-gold-light transition-colors hover:text-cream"
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
