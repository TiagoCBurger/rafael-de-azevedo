"use client";

import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/icons";
import { readLeadMessage } from "@/lib/lead-message";
import { whatsappUrl } from "@/lib/site";

/** O clique conta como "contact" pelo WhatsAppClickTracker do layout. */
export default function ContinueOnWhatsApp() {
  const [href, setHref] = useState(() => whatsappUrl());

  useEffect(() => {
    const message = readLeadMessage();
    // eslint-disable-next-line react-hooks/set-state-in-effect -- sessionStorage só existe no browser
    if (message) setHref(whatsappUrl(message));
  }, []);

  return (
    <Button href={href} size="lg">
      Continuar no WhatsApp
      <WhatsAppIcon className="size-[18px]" />
    </Button>
  );
}
