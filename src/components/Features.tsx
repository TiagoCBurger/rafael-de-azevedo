const features = [
  {
    title: "Automação inteligente",
    description:
      "Elimine tarefas repetitivas com fluxos automáticos que se adaptam ao seu processo.",
    icon: "⚡",
  },
  {
    title: "Dados em tempo real",
    description:
      "Acompanhe métricas importantes em dashboards atualizados a cada instante.",
    icon: "📊",
  },
  {
    title: "Colaboração em equipe",
    description:
      "Trabalhe junto com seu time em um só espaço, sem perder o contexto.",
    icon: "🤝",
  },
  {
    title: "Integrações prontas",
    description:
      "Conecte com as ferramentas que você já usa em poucos cliques.",
    icon: "🔌",
  },
  {
    title: "Segurança de ponta",
    description:
      "Seus dados protegidos com criptografia e controle de acesso granular.",
    icon: "🔒",
  },
  {
    title: "Suporte dedicado",
    description:
      "Time de especialistas pronto para ajudar sempre que você precisar.",
    icon: "💬",
  },
];

export default function Features() {
  return (
    <section id="recursos" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Tudo que você precisa, em um só lugar
        </h2>
        <p className="mt-4 text-lg text-muted text-balance">
          Recursos pensados para acelerar cada etapa do seu fluxo de
          trabalho.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl border border-border bg-surface p-6"
          >
            <div className="flex size-10 items-center justify-center rounded-full bg-brand/10 text-xl">
              {feature.icon}
            </div>
            <h3 className="mt-4 font-semibold">{feature.title}</h3>
            <p className="mt-2 text-sm text-muted">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
