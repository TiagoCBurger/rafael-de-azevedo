"use client";

import { useId, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { PlusIcon } from "@/components/icons";

export default function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const id = useId();

  useGSAP(
    () => {
      const panel = panelRef.current;
      if (!panel) return;

      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      gsap.to(panel, {
        height: open ? "auto" : 0,
        duration: reduce ? 0 : 0.45,
        ease: "power2.inOut",
      });
    },
    { dependencies: [open] },
  );

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
      <div id={id} ref={panelRef} className="h-0 overflow-hidden">
        <p className="border-t border-white/[0.07] px-5 py-4 font-sans text-[0.9rem] leading-[1.75] text-cream/55">
          {answer}
        </p>
      </div>
    </div>
  );
}
