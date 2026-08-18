const faqs = [
  {
    question: "Preciso instalar algo para usar?",
    answer:
      "Não. A plataforma é 100% web e funciona direto no navegador, sem instalação.",
  },
  {
    question: "Posso cancelar quando quiser?",
    answer:
      "Sim, não há fidelidade. Você pode cancelar ou trocar de plano a qualquer momento.",
  },
  {
    question: "Existe período de teste gratuito?",
    answer:
      "Sim, o plano Starter é gratuito para sempre e os planos pagos têm 14 dias de teste.",
  },
  {
    question: "Como funciona o suporte?",
    answer:
      "Oferecemos suporte por e-mail para todos os planos e suporte prioritário no plano Pro.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="bg-surface py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Perguntas frequentes
          </h2>
        </div>

        <dl className="mt-12 flex flex-col gap-6">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-border bg-background p-6"
            >
              <dt className="font-semibold">{faq.question}</dt>
              <dd className="mt-2 text-sm text-muted">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
