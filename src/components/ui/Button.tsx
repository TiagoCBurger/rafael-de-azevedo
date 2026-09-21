import type { ReactNode } from "react";

type Variant = "solid" | "outlineDark" | "outlineLight";
type Size = "sm" | "md" | "lg";

const base =
  "btn-shine relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-sm font-semibold uppercase tracking-[0.1em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-light";

const variants: Record<Variant, string> = {
  /** Dourado preenchido — CTA principal, funciona em fundo claro e escuro. */
  solid: "bg-gold text-white hover:bg-gold-dark",
  /** Contorno dourado sobre fundo escuro. */
  outlineDark:
    "border border-gold/60 text-gold-light hover:border-gold hover:bg-gold/10",
  /** Contorno dourado sobre fundo claro. */
  outlineLight:
    "border border-gold-ink/40 text-gold-ink hover:border-gold-ink hover:bg-gold-ink/5",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2.5 text-[11px]",
  md: "px-6 py-3.5 text-[12px]",
  lg: "px-7 py-4 text-[13px]",
};

export default function Button({
  href,
  children,
  variant = "solid",
  size = "md",
  className = "",
  type,
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  type?: "button" | "submit";
}) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type ?? "button"} className={classes}>
      {children}
    </button>
  );
}
