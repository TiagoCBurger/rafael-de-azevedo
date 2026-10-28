"use client";

import { useEffect, useState } from "react";
import { publicConfig } from "@/lib/tracking/public-config";
import { getConsent, setConsent } from "./tracking/track";

/** Só aparece com NEXT_PUBLIC_CONSENT_MODE=banner e enquanto a pessoa não escolheu. */
export default function ConsentBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- o consentimento só existe no browser
    if (publicConfig.consentMode === "banner" && !getConsent()) setOpen(true);
  }, []);

  if (!open) return null;

  const choose = (value: "granted" | "denied") => {
    setConsent(value);
    setOpen(false);
  };

  return (
    <div
      role="dialog"
      aria-label="Cookies"
      className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-xl border border-gold/30 bg-ink-soft p-5 shadow-2xl"
    >
      <p className="text-[0.875rem] leading-[1.65] text-cream/75">
        Usamos cookies para medir resultados e melhorar anúncios. Você pode
        aceitar ou recusar os cookies de marketing.
      </p>
      <div className="mt-4 flex justify-end gap-3">
        <button
          type="button"
          onClick={() => choose("denied")}
          className="rounded-sm border border-gold/60 px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-gold-light transition-colors hover:border-gold hover:bg-gold/10"
        >
          Recusar
        </button>
        <button
          type="button"
          onClick={() => choose("granted")}
          className="rounded-sm bg-gold px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-gold-dark"
        >
          Aceitar
        </button>
      </div>
    </div>
  );
}
