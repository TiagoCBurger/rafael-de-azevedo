import { site } from "@/lib/site";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span
        aria-hidden
        className="flex size-11 shrink-0 items-center justify-center border border-gold/45 font-serif text-[1.05rem] leading-none tracking-[0.08em] text-gold-light"
      >
        RA
      </span>

      <span className="flex flex-col gap-1">
        <span className="font-serif text-[0.84rem] leading-[1.12] tracking-[0.18em] text-cream uppercase">
          Raphael
          <br />
          de Azevedo
        </span>
        <span aria-hidden className="h-px w-full bg-gold/35" />
        <span className="text-[0.47rem] font-medium uppercase leading-none tracking-[0.28em] text-gold-light/70">
          {site.role}
        </span>
      </span>
    </span>
  );
}
