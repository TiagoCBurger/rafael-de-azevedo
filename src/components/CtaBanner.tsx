export default function CtaBanner() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="flex flex-col items-center rounded-3xl bg-brand px-6 py-16 text-center text-white sm:py-20">
        <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          Pronto para simplificar seu fluxo de trabalho?
        </h2>
        <p className="mt-4 max-w-xl text-white/80 text-balance">
          Comece hoje mesmo, gratuitamente. Sem cartão de crédito.
        </p>
        <a
          href="#"
          className="mt-8 rounded-full bg-white px-6 py-3 text-sm font-medium text-brand transition-colors hover:bg-white/90"
        >
          Criar minha conta grátis
        </a>
      </div>
    </section>
  );
}
