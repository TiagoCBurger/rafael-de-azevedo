import Link from "next/link";

const navLinks = [
  { href: "#recursos", label: "Recursos" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#precos", label: "Preços" },
  { href: "#faq", label: "Perguntas" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#" className="text-lg font-semibold tracking-tight">
          SuaMarca
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#"
            className="hidden text-sm font-medium text-muted transition-colors hover:text-foreground sm:inline-block"
          >
            Entrar
          </a>
          <a
            href="#comecar"
            className="rounded-full bg-brand px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
          >
            Começar grátis
          </a>
        </div>
      </div>
    </header>
  );
}
