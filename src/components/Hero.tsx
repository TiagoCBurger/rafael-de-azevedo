export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 flex justify-center blur-3xl"
      >
        <div className="h-72 w-[36rem] rounded-full bg-brand/20" />
      </div>

      <div className="mx-auto flex max-w-4xl flex-col items-center px-6 py-24 text-center sm:py-32">
        <a
          href="#recursos"
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-muted"
        >
          🚀 Novo: automações com IA
        </a>

        <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
          Simplifique seu fluxo de trabalho e cresça mais rápido
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-muted text-balance">
          A plataforma que reúne planejamento, automação e dados em um só
          lugar — para sua equipe focar no que realmente importa.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            id="comecar"
            href="#"
            className="rounded-full bg-brand px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-brand-dark"
          >
            Começar grátis
          </a>
          <a
            href="#recursos"
            className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-surface"
          >
            Ver como funciona
          </a>
        </div>

        <p className="mt-6 text-sm text-muted">
          Sem cartão de crédito · Cancele quando quiser
        </p>
      </div>
    </section>
  );
}
