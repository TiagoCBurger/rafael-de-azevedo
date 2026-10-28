import Logo from "@/components/Logo";
import Container from "@/components/ui/Container";
import {
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  MonitorIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { site, whatsappUrl } from "@/lib/site";

const practiceAreas = [
  "Demissão",
  "Horas extras",
  "Acidente de trabalho",
  "Doença do trabalho",
  "Assédio",
  "FGTS",
  "Rescisão indireta",
];

/** Redes com link "#" ficam ocultas até o endereço real ser preenchido em `site.social`. */
const socials = [
  { icon: InstagramIcon, href: site.social.instagram, label: "Instagram" },
  { icon: LinkedInIcon, href: site.social.linkedin, label: "LinkedIn" },
  { icon: WhatsAppIcon, href: whatsappUrl(), label: "WhatsApp" },
].filter(({ href }) => href !== "#");

export default function Footer() {
  return (
    <footer className="mt-auto bg-ink-deep">
      <Container className="py-16">
        <div
          data-reveal-stagger
          className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_auto] lg:gap-12"
        >
          <div>
            <Logo />
            <p className="mt-6 max-w-[230px] text-[0.875rem] leading-[1.7] text-cream/45">
              Atendimento trabalhista com clareza, respeito e responsabilidade.
            </p>
          </div>

          <div>
            <h3 className="eyebrow text-gold-light">Áreas principais</h3>
            <ul className="mt-5 flex flex-col gap-2.5">
              {practiceAreas.map((area) => (
                <li key={area}>
                  <a
                    href="#problemas"
                    className="text-[0.875rem] text-cream/55 transition-colors hover:text-gold-light"
                  >
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-gold-light">Contato</h3>
            <ul className="mt-5 flex flex-col gap-3.5">
              <li>
                <a
                  href={`tel:+${site.whatsapp}`}
                  className="flex items-center gap-3 text-[0.875rem] text-cream/55 transition-colors hover:text-gold-light"
                >
                  <PhoneIcon className="size-4 shrink-0 text-gold-light/80" />
                  {site.phoneLabel}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-3 text-[0.875rem] text-cream/55 transition-colors hover:text-gold-light"
                >
                  <MailIcon className="size-4 shrink-0 text-gold-light/80" />
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-[0.875rem] text-cream/55">
                <MonitorIcon className="size-4 shrink-0 text-gold-light/80" />
                Atendimento on-line
              </li>
            </ul>
          </div>

          <ul className="flex gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-10 items-center justify-center rounded-full border border-gold/30 text-gold-light transition-colors hover:border-gold hover:bg-gold/10"
                >
                  <Icon className="size-[18px]" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>

    </footer>
  );
}
