import Logo from "@/components/Logo";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { WhatsAppIcon } from "@/components/icons";
import { whatsappUrl } from "@/lib/site";

const nav = [
  { href: "#inicio", label: "Início" },
  { href: "#problemas", label: "Problemas atendidos" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#sobre", label: "Sobre o advogado" },
  { href: "#duvidas", label: "Dúvidas" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-ink/95 backdrop-blur">
      <Container className="flex h-20 items-center justify-between gap-6">
        <a href="#inicio" aria-label={`${"Raphael de Azevedo"} — início`}>
          <Logo />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] text-cream/70 transition-colors hover:text-gold-light"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Button href={whatsappUrl()} size="sm" className="shrink-0">
          <span className="hidden sm:inline">Falar com o advogado</span>
          <span className="sm:hidden">WhatsApp</span>
          <WhatsAppIcon className="size-4" />
        </Button>
      </Container>
    </header>
  );
}
