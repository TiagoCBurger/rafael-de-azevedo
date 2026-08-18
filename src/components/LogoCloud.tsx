const logos = ["Aurora", "Nimbus", "Vertex", "Kaleido", "Orbit", "Zephyr"];

export default function LogoCloud() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <p className="text-center text-sm text-muted">
          Empresas que confiam na SuaMarca
        </p>
        <div className="mt-6 grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-6">
          {logos.map((logo) => (
            <div
              key={logo}
              className="flex items-center justify-center text-sm font-semibold text-muted/70"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
