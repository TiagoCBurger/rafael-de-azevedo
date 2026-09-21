import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import {
  CheckCircleIcon,
  ChatIcon,
  QuestionUserIcon,
  SearchIcon,
  UploadIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { whatsappUrl } from "@/lib/site";

const steps = [
  {
    icon: ChatIcon,
    title: "Você conta o que aconteceu",
    description: "Explique com suas próprias palavras.",
  },
  {
    icon: QuestionUserIcon,
    title: "O advogado faz algumas perguntas",
    description: "Para entender melhor a situação.",
  },
  {
    icon: UploadIcon,
    title: "Você envia o que tiver",
    description: "Documentos, mensagens, fotos ou outros arquivos.",
  },
  {
    icon: SearchIcon,
    title: "A situação é analisada",
    description: "O advogado avalia seus direitos e possibilidades.",
  },
  {
    icon: CheckCircleIcon,
    title: "Você decide o próximo passo",
    description: "Tudo de forma clara e sem pressão.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-cream py-20 text-ink sm:py-24">
      <Container>
        <div className="text-center">
          <div data-reveal="up" className="flex items-center justify-center gap-3">
            <span data-draw className="inline-block h-px w-8 origin-left bg-gold" />
            <p className="eyebrow text-gold-ink">Como funciona</p>
            <span data-draw className="inline-block h-px w-8 origin-right bg-gold" />
          </div>
          <h2
            data-split="chars"
            className="section-title mt-5 text-[1.85rem] text-ink sm:text-[2.25rem]"
          >
            Veja como funciona
          </h2>
        </div>

        <div className="relative mt-16">
          <div
            data-draw
            className="pointer-events-none absolute top-[15px] right-8 left-8 hidden h-px origin-left bg-gold/30 lg:block"
          />
          <ol
            data-steps
            data-reveal-stagger
            className="relative grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6"
          >
            {steps.map(({ icon: Icon, title, description }, index) => (
              <li key={title}>
                <div className="flex items-center gap-3">
                  <span
                    data-step-num
                    className="flex size-[30px] shrink-0 items-center justify-center rounded-full bg-gold font-sans text-[0.75rem] font-semibold text-white"
                  >
                    {index + 1}
                  </span>
                  <Icon className="size-[26px] text-gold-ink" />
                </div>

                <h3 className="section-title mt-5 text-[1.12rem] leading-[1.35] text-ink">
                  {title}
                </h3>

                <p className="mt-2.5 text-[0.9rem] leading-[1.7] text-ink/55">
                  {description}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div data-reveal="up" className="mt-16 flex justify-center">
          <Button href={whatsappUrl()} size="lg">
            Começar pelo WhatsApp
            <WhatsAppIcon className="size-[18px]" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
