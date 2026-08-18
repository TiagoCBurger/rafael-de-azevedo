const testimonials = [
  {
    quote:
      "Reduzimos em 40% o tempo gasto em tarefas manuais no primeiro mês de uso.",
    name: "Marina Costa",
    role: "COO na Aurora Tech",
  },
  {
    quote:
      "A implementação foi rápida e o suporte é excelente. Recomendo para qualquer time em crescimento.",
    name: "Diego Ferreira",
    role: "Head de Operações na Nimbus",
  },
  {
    quote:
      "Finalmente uma ferramenta que centraliza tudo sem complicar o dia a dia da equipe.",
    name: "Ana Beatriz",
    role: "Fundadora da Vertex Studio",
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="bg-surface py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Times que já transformaram sua rotina
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex flex-col justify-between rounded-2xl border border-border bg-background p-6"
            >
              <blockquote className="text-sm leading-relaxed">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-6">
                <div className="text-sm font-semibold">
                  {testimonial.name}
                </div>
                <div className="text-sm text-muted">{testimonial.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
