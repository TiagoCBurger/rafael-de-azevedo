const plans = [
  {
    name: "Starter",
    price: "R$ 0",
    period: "/mês",
    description: "Para começar a organizar seu fluxo de trabalho.",
    features: ["Até 3 usuários", "Automações básicas", "Suporte por e-mail"],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "R$ 79",
    period: "/mês",
    description: "Para equipes que precisam de mais produtividade.",
    features: [
      "Usuários ilimitados",
      "Automações avançadas",
      "Integrações completas",
      "Suporte prioritário",
    ],
    highlighted: true,
  },
  {
    name: "Empresarial",
    price: "Sob consulta",
    period: "",
    description: "Para empresas com necessidades específicas.",
    features: [
      "Tudo do plano Pro",
      "SSO e segurança avançada",
      "Gerente de conta dedicado",
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="precos" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Planos para todo tamanho de equipe
        </h2>
        <p className="mt-4 text-lg text-muted text-balance">
          Comece grátis e evolua conforme sua equipe cresce.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`flex flex-col rounded-2xl border p-8 ${
              plan.highlighted
                ? "border-brand bg-brand/5 shadow-sm"
                : "border-border bg-surface"
            }`}
          >
            <h3 className="font-semibold">{plan.name}</h3>
            <p className="mt-2 text-sm text-muted">{plan.description}</p>
            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-3xl font-semibold tracking-tight">
                {plan.price}
              </span>
              <span className="text-sm text-muted">{plan.period}</span>
            </div>

            <ul className="mt-6 flex flex-1 flex-col gap-3">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2 text-sm text-muted"
                >
                  <span className="text-brand">✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href="#"
              className={`mt-8 rounded-full px-4 py-2.5 text-center text-sm font-medium transition-colors ${
                plan.highlighted
                  ? "bg-brand text-white hover:bg-brand-dark"
                  : "border border-border hover:bg-background"
              }`}
            >
              Escolher {plan.name}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
