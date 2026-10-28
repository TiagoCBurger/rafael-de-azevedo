"use client";

import { useEffect } from "react";
import { trackEvent } from "./track";

/**
 * Clique em qualquer link do WhatsApp = evento "contact" (Meta Contact / GA4 contact).
 * O site tem botões de WhatsApp em quase toda seção (vários são server components),
 * então um único listener no documento cobre todos sem mexer no layout.
 */
export default function WhatsAppClickTracker() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const link = (event.target as Element | null)?.closest?.("a[href]");
      if (!(link instanceof HTMLAnchorElement)) return;
      if (!/^https:\/\/(wa\.me|api\.whatsapp\.com)\//.test(link.href)) return;
      trackEvent("contact", { method: "whatsapp" });
    }

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
