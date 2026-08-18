const columns = [
  {
    title: "Produto",
    links: ["Recursos", "Preços", "Integrações", "Novidades"],
  },
  {
    title: "Empresa",
    links: ["Sobre", "Carreiras", "Blog", "Contato"],
  },
  {
    title: "Legal",
    links: ["Privacidade", "Termos de uso", "Cookies"],
  },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <span className="text-lg font-semibold tracking-tight">
              SuaMarca
            </span>
            <p className="mt-3 text-sm text-muted">
              Simplifique seu fluxo de trabalho e cresça mais rápido.
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h4 className="text-sm font-semibold">{column.title}</h4>
              <ul className="mt-4 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-border pt-8 text-sm text-muted">
          © {new Date().getFullYear()} SuaMarca. Todos os direitos
          reservados.
        </div>
      </div>
    </footer>
  );
}
