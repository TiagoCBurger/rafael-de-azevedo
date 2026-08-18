import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const line = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

const solid = {
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": true,
} as const;

/* ---------------------------------- Marca --------------------------------- */

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg {...solid} {...props}>
      <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 5L2 22l5.2-1.36a9.9 9.9 0 0 0 4.84 1.24h.01c5.5 0 9.96-4.46 9.96-9.96 0-2.66-1.04-5.16-2.92-7.04A9.88 9.88 0 0 0 12.04 2Zm0 18.2h-.01a8.3 8.3 0 0 1-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.24 8.24 0 0 1-1.27-4.38c0-4.56 3.72-8.27 8.29-8.27 2.21 0 4.29.86 5.85 2.43a8.22 8.22 0 0 1 2.42 5.85c0 4.56-3.72 8.23-8.29 8.23Zm4.54-6.17c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.15.16-.29.19-.53.06-.25-.12-1.05-.38-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.44.13-.14.17-.24.25-.41.08-.16.04-.31-.02-.43-.06-.13-.56-1.35-.77-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.21.89 2.39 1.01 2.55.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.2-.58.2-1.08.14-1.18-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...line} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg {...line} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <path d="M7.5 10.5V17" />
      <circle cx="7.5" cy="7.4" r="1" fill="currentColor" stroke="none" />
      <path d="M11.5 17v-3.6a2.4 2.4 0 0 1 4.8 0V17" />
      <path d="M11.5 10.5V17" />
    </svg>
  );
}

/* --------------------------------- Genéricos -------------------------------- */

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...line} {...props}>
      <path d="M4 12h15" />
      <path d="m13.5 6.5 6 5.5-6 5.5" />
    </svg>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg {...line} {...props}>
      <path d="m5.5 9 6.5 6.5L18.5 9" />
    </svg>
  );
}

export function PlusIcon(props: IconProps) {
  return (
    <svg {...line} {...props}>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
}

export function PlayIcon(props: IconProps) {
  return (
    <svg {...solid} {...props}>
      <path d="M9 6.8v10.4a.8.8 0 0 0 1.22.68l8.4-5.2a.8.8 0 0 0 0-1.36l-8.4-5.2A.8.8 0 0 0 9 6.8Z" />
    </svg>
  );
}

/* ------------------------------- Confiança/hero ------------------------------ */

export function ChatIcon(props: IconProps) {
  return (
    <svg {...line} {...props}>
      <path d="M3 6.5A3.5 3.5 0 0 1 6.5 3h11A3.5 3.5 0 0 1 21 6.5v6A3.5 3.5 0 0 1 17.5 16H9l-4.5 3.8V16h-1" />
      <path d="M7.5 8h9" />
      <path d="M7.5 11.5h5.5" />
    </svg>
  );
}

export function UserIcon(props: IconProps) {
  return (
    <svg {...line} {...props}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4.5 20.5a7.5 7.5 0 0 1 15 0" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...line} {...props}>
      <path d="M12 2.8 4.5 5.8v5.4c0 4.6 3.1 8.4 7.5 9.9 4.4-1.5 7.5-5.3 7.5-9.9V5.8Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function LockIcon(props: IconProps) {
  return (
    <svg {...line} {...props}>
      <rect x="4.5" y="10" width="15" height="10.5" rx="2.5" />
      <path d="M7.5 10V7.5a4.5 4.5 0 0 1 9 0V10" />
      <path d="M12 14v2.5" />
    </svg>
  );
}

export function ScalesIcon(props: IconProps) {
  return (
    <svg {...line} {...props}>
      <circle cx="12" cy="3.8" r="1.4" />
      <path d="M12 5.4v13.8" />
      <path d="M8 19.2h8" />
      <path d="M3 8h18" />
      <path d="M12 6.6 4.5 8M12 6.6 19.5 8" />
      <path d="M6 8 3.5 13.2M6 8l2.5 5.2" />
      <path d="M3.2 13.2a2.8 2.8 0 0 0 5.6 0" />
      <path d="M18 8l-2.5 5.2M18 8l2.5 5.2" />
      <path d="M15.2 13.2a2.8 2.8 0 0 0 5.6 0" />
    </svg>
  );
}

/* ------------------------------ Atendimento direto ---------------------------- */

export function SpeechIcon(props: IconProps) {
  return (
    <svg {...line} {...props}>
      <path d="M3 6.5A2.5 2.5 0 0 1 5.5 4h8A2.5 2.5 0 0 1 16 6.5v4A2.5 2.5 0 0 1 13.5 13H8l-3.5 3v-3A2.5 2.5 0 0 1 3 10.5Z" />
      <path d="M18 9h.5A2.5 2.5 0 0 1 21 11.5v4a2.5 2.5 0 0 1-2.5 2.5H18l-3 2.5V18h-2" />
    </svg>
  );
}

export function MonitorIcon(props: IconProps) {
  return (
    <svg {...line} {...props}>
      <rect x="2.5" y="4" width="19" height="12.5" rx="2.5" />
      <path d="M12 16.5V20" />
      <path d="M8 20h8" />
    </svg>
  );
}

export function UploadIcon(props: IconProps) {
  return (
    <svg {...line} {...props}>
      <path d="M12 15.5V3.5" />
      <path d="m7.5 8 4.5-4.5L16.5 8" />
      <path d="M3.5 14.5V18a2.5 2.5 0 0 0 2.5 2.5h12a2.5 2.5 0 0 0 2.5-2.5v-3.5" />
    </svg>
  );
}

export function BulbIcon(props: IconProps) {
  return (
    <svg {...line} {...props}>
      <path d="M12 3a6 6 0 0 0-3.6 10.8c.6.45.9 1.15.9 1.9v.3h5.4v-.3c0-.75.3-1.45.9-1.9A6 6 0 0 0 12 3Z" />
      <path d="M9.7 18.5h4.6" />
      <path d="M10.6 21h2.8" />
    </svg>
  );
}

/* -------------------------- Problemas trabalhistas -------------------------- */

export function MoneyIcon(props: IconProps) {
  return (
    <svg {...line} {...props}>
      <rect x="2.5" y="5.5" width="19" height="13" rx="2.5" />
      <circle cx="12" cy="12" r="2.8" />
      <path d="M12 8v8" />
      <path d="M5.8 12h.01M18.2 12h.01" />
    </svg>
  );
}

export function DismissalIcon(props: IconProps) {
  return (
    <svg {...line} {...props}>
      <path d="M13.5 3H7a2.5 2.5 0 0 0-2.5 2.5v13A2.5 2.5 0 0 0 7 21h10a2.5 2.5 0 0 0 2.5-2.5V9Z" />
      <path d="M13.5 3v4.5a1.5 1.5 0 0 0 1.5 1.5h4.5" />
      <path d="M8.5 13.5h7" />
      <path d="M8.5 17h4.5" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...line} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 6.8V12l3.5 2.1" />
    </svg>
  );
}

export function AccidentIcon(props: IconProps) {
  return (
    <svg {...line} {...props}>
      <rect x="2.5" y="7" width="19" height="13.5" rx="2.5" />
      <path d="M9 7V5.5A2.5 2.5 0 0 1 11.5 3h1A2.5 2.5 0 0 1 15 5.5V7" />
      <path d="M12 11v6" />
      <path d="M9 14h6" />
    </svg>
  );
}

export function HealthIcon(props: IconProps) {
  return (
    <svg {...line} {...props}>
      <path d="M20.4 8.6a4.6 4.6 0 0 0-8.4-2.6 4.6 4.6 0 0 0-8.4 2.6c0 .5.06 1 .18 1.45" />
      <path d="M3.9 13.2c1.7 3.3 5.7 6 8.1 7.6 1.8-1.2 4.5-3 6.4-5.3" />
      <path d="M2.8 11.8h4l1.4-2.6 2.4 5.2 1.5-2.6h9.1" />
    </svg>
  );
}

export function HarassmentIcon(props: IconProps) {
  return (
    <svg {...line} {...props}>
      <circle cx="9" cy="7.5" r="3.5" />
      <path d="M2.8 20v-1.4A4.6 4.6 0 0 1 7.4 14h3.2a4.6 4.6 0 0 1 4.6 4.6V20" />
      <path d="M16.8 4.4a3.5 3.5 0 0 1 0 6.6" />
      <path d="M21.2 20v-1.4a4.6 4.6 0 0 0-3-4.3" />
    </svg>
  );
}

/* --------------------------- Atendimento específico -------------------------- */

export function BankIcon(props: IconProps) {
  return (
    <svg {...line} {...props}>
      <path d="M3 9.5 12 4l9 5.5" />
      <path d="M4.8 9.5V18M9.6 9.5V18M14.4 9.5V18M19.2 9.5V18" />
      <path d="M2.8 20.5h18.4" />
      <path d="M2.8 18h18.4" />
    </svg>
  );
}

export function OilRigIcon(props: IconProps) {
  return (
    <svg {...line} {...props}>
      <path d="M12 3v17.5" />
      <path d="M7 20.5 12 3l5 17.5" />
      <path d="M9.4 12.4h5.2" />
      <path d="M10.2 8.6h3.6" />
      <path d="M8.5 16.4h7" />
      <path d="M3 20.5h18" />
    </svg>
  );
}

/* -------------------------------- Como funciona ------------------------------ */

export function SearchIcon(props: IconProps) {
  return (
    <svg {...line} {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="m16.2 16.2 4.3 4.3" />
    </svg>
  );
}

export function CheckCircleIcon(props: IconProps) {
  return (
    <svg {...line} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12.4 2.6 2.6L16 9.6" />
    </svg>
  );
}

export function QuestionUserIcon(props: IconProps) {
  return (
    <svg {...line} {...props}>
      <circle cx="10" cy="7.5" r="3.5" />
      <path d="M3.5 20.5v-1.2a4.8 4.8 0 0 1 4.8-4.8h2.2" />
      <path d="M16.2 15.4a1.9 1.9 0 1 1 2.6 1.8c-.5.2-.8.7-.8 1.2v.4" />
      <path d="M18 21.2h.01" />
    </svg>
  );
}

/* ---------------------------------- Contato ---------------------------------- */

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...line} {...props}>
      <path d="M6.2 3h3l1.5 4-2.1 1.5a12.5 12.5 0 0 0 6.9 6.9L17 13.3l4 1.5v3a2 2 0 0 1-2.2 2A17.2 17.2 0 0 1 4.2 5.2 2 2 0 0 1 6.2 3Z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...line} {...props}>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="m3.2 7 8.8 6 8.8-6" />
    </svg>
  );
}
