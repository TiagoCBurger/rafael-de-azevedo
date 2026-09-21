import ContactForm from "@/components/ContactForm";
import FaqItem from "@/components/FaqItem";
import Button from "@/components/ui/Button";
import { whatsappUrl } from "@/lib/site";

const faqs = [
  {
    question: "Preciso saber o nome do meu problema?",
    answer:
      "Não. Basta contar o que aconteceu com suas próprias palavras. Identificar o nome jurídico da situação é trabalho do advogado.",
  },
  {
    question: "Ainda trabalho na empresa. Posso procurar um advogado?",
    answer:
      "Sim. É possível buscar orientação enquanto o contrato está em vigor, inclusive para entender os riscos antes de tomar qualquer decisão.",
  },
  {
    question: "Não tenho todos os documentos. Posso entrar em contato?",
    answer:
      "Pode. Envie o que tiver em mãos. Durante a conversa o advogado indica quais documentos ajudam a esclarecer a situação.",
  },
  {
    question: "O atendimento pode ser feito pela internet?",
    answer:
      "Sim. O primeiro contato acontece on-line, por WhatsApp ou videochamada, sem necessidade de deslocamento.",
  },
  {
    question: "Meu chefe vai saber que procurei um advogado?",
    answer:
      "Não. A conversa é sigilosa e nada é comunicado à empresa sem a sua autorização expressa.",
  },
  {
    question: "O advogado pode garantir que vou ganhar?",
    answer:
      "Não. Nenhum advogado pode garantir resultado. O que se faz é analisar a situação com honestidade e explicar as possibilidades de forma clara.",
  },
];

export default function FaqAndForm() {
  return (
    <section id="duvidas" className="grid grid-cols-1 lg:grid-cols-2">
      <div className="flex justify-center bg-ink px-5 py-20 sm:px-8 sm:py-24 lg:justify-end">
        <div className="w-full max-w-[590px] lg:pr-10">
          <div data-reveal="up" className="flex items-center gap-3">
            <span data-draw className="inline-block h-px w-8 origin-left bg-gold" />
            <p className="eyebrow text-gold-light">Dúvidas comuns</p>
          </div>
          <h2
            data-split="chars"
            className="section-title mt-5 text-[1.85rem] text-cream sm:text-[2.25rem]"
          >
            Perguntas frequentes
          </h2>

          <div data-reveal-stagger className="mt-10 flex flex-col gap-3">
            {faqs.map(({ question, answer }) => (
              <FaqItem key={question} question={question} answer={answer} />
            ))}
          </div>

          <div data-reveal="up">
            <Button href="#" variant="outlineDark" size="sm" className="mt-8">
              Ver mais perguntas
            </Button>
          </div>
        </div>
      </div>

      <div className="flex justify-center bg-cream px-5 py-20 text-ink sm:px-8 sm:py-24 lg:justify-start">
        <div className="w-full max-w-[590px] lg:pl-10">
          <div data-reveal="up" className="flex items-center gap-3">
            <span data-draw className="inline-block h-px w-8 origin-left bg-gold" />
            <p className="eyebrow text-gold-ink">Conte sua situação</p>
          </div>
          <h2
            data-split="words"
            className="section-title mt-5 text-[1.85rem] text-ink sm:text-[2.25rem]"
          >
            Conte brevemente o que aconteceu
          </h2>
          <p data-reveal="up" className="mt-4 text-[0.95rem] text-ink/55">
            Preencha somente as informações que souber.
          </p>

          <div data-reveal="up">
            <ContactForm />
          </div>

          <p className="sr-only">
            Prefere conversar direto?{" "}
            <a href={whatsappUrl()}>Fale pelo WhatsApp</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
