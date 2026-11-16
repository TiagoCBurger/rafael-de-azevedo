"use client";

import { useId, useState } from "react";
import { PlusIcon } from "@/components/icons";

export default function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <div
      className={`border bg-ink-soft transition-colors ${
        open ? "border-gold/35" : "border-white/10 hover:border-white/20"
      }`}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((value) => !value)}
        className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left font-sans text-[0.9375rem] leading-snug text-cream/85"
      >
        {question}
        <PlusIcon
          className={`size-4 shrink-0 text-gold-light transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        />
      </button>
      {/* Abre/fecha em CSS (grid 0fr → 1fr), mesmo efeito da animação GSAP
          anterior; assim o GSAP não entra no JavaScript inicial da página. */}
      <div
        id={id}
        className={`grid transition-[grid-template-rows] duration-[450ms] ease-[cubic-bezier(0.645,0.045,0.355,1)] motion-reduce:transition-none ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <p className="border-t border-white/[0.07] px-5 py-4 font-sans text-[0.9rem] leading-[1.75] text-cream/55">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
