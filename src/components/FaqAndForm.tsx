import ContactForm from "@/components/ContactForm";
import Button from "@/components/ui/Button";
import { PlusIcon } from "@/components/icons";
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
      {/* Perguntas frequentes */}
      <div className="flex justify-center bg-ink px-5 py-16 sm:px-8 sm:py-20 lg:justify-end">
        <div className="w-full max-w-[590px] lg:pr-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-light">
            Dúvidas comuns
          </p>
          <h2 className="mt-4 font-serif text-[28px] leading-[1.2] text-cream sm:text-[33px]">
            Perguntas frequentes
          </h2>

          <div className="mt-8 flex flex-col gap-3">
            {faqs.map(({ question, answer }) => (
              <details
                key={question}
                className="group border border-white/10 bg-ink-soft transition-colors open:border-gold/35 hover:border-white/20"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-[13px] text-cream/85 marker:content-none">
                  {question}
                  <PlusIcon className="size-4 shrink-0 text-gold-light transition-transform duration-200 group-open:rotate-45" />
                </summary>
                <p className="border-t border-white/[0.07] px-5 py-4 text-[12.5px] leading-[1.7] text-cream/55">
                  {answer}
                </p>
              </details>
            ))}
          </div>

          <Button href="#" variant="outlineDark" size="sm" className="mt-8">
            Ver mais perguntas
          </Button>
        </div>
      </div>

      {/* Formulário */}
      <div className="flex justify-center bg-cream px-5 py-16 text-ink sm:px-8 sm:py-20 lg:justify-start">
        <div className="w-full max-w-[590px] lg:pl-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-ink">
            Conte sua situação
          </p>
          <h2 className="mt-4 font-serif text-[28px] leading-[1.2] text-ink sm:text-[33px]">
            Conte brevemente o que aconteceu
          </h2>
          <p className="mt-3 text-[13px] text-ink/55">
            Preencha somente as informações que souber.
          </p>

          <ContactForm />

          <p className="sr-only">
            Prefere conversar direto?{" "}
            <a href={whatsappUrl()}>Fale pelo WhatsApp</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
