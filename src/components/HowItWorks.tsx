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
    <section id="como-funciona" className="bg-cream py-16 text-ink sm:py-20">
      <Container>
        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-ink">
            Como funciona
          </p>
          <h2 className="mt-4 font-serif text-[28px] leading-[1.2] text-ink sm:text-[33px]">
            Veja como funciona
          </h2>
        </div>

        <ol className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {steps.map(({ icon: Icon, title, description }, index) => (
            <li key={title}>
              <div className="flex items-center gap-3">
                <span className="flex size-[30px] shrink-0 items-center justify-center rounded-full bg-gold text-[12px] font-semibold text-white">
                  {index + 1}
                </span>
                <Icon className="size-[26px] text-gold-ink" />
              </div>

              <h3 className="mt-5 font-serif text-[16px] leading-[1.35] text-ink">
                {title}
              </h3>

              <p className="mt-2.5 text-[12.5px] leading-[1.65] text-ink/55">
                {description}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-14 flex justify-center">
          <Button href={whatsappUrl()} size="lg">
            Começar pelo WhatsApp
            <WhatsAppIcon className="size-[18px]" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
