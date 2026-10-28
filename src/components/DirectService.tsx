import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import MediaSlot from "@/components/ui/MediaSlot";
import {
  BulbIcon,
  MonitorIcon,
  PlayIcon,
  SpeechIcon,
  UploadIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { media, whatsappUrl } from "@/lib/site";

const points = [
  { icon: SpeechIcon, label: "Fale com suas palavras" },
  { icon: MonitorIcon, label: "Atendimento on-line" },
  { icon: UploadIcon, label: "Envie o que você tiver" },
  { icon: BulbIcon, label: "Explicação simples" },
];

export default function DirectService() {
  return (
    <section id="sobre" className="bg-cream py-20 text-ink sm:py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {media.video && (
            <div className="lg:col-span-4">
              <button
                type="button"
                data-reveal="clip"
                className="group relative block w-full overflow-hidden rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                aria-label="Assistir ao vídeo de apresentação do advogado"
              >
                <MediaSlot
                  src={media.video}
                  alt="Vídeo de apresentação do advogado"
                  label="Capa do vídeo"
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="aspect-[4/3] w-full"
                />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="relative flex size-16 items-center justify-center">
                    <span className="gold-ring absolute inset-0 rounded-full bg-gold/35" />
                    <span className="gold-ring gold-ring-delay absolute inset-0 rounded-full bg-gold/25" />
                    <span className="relative flex size-16 items-center justify-center rounded-full bg-gold text-white shadow-lg transition-transform duration-300 group-hover:scale-105">
                      <PlayIcon className="size-6 translate-x-0.5" />
                    </span>
                  </span>
                </span>
              </button>
            </div>
          )}

          <div className={media.video ? "lg:col-span-5" : "lg:col-span-8"}>
            <div data-reveal="up" className="flex items-center gap-3">
              <span data-draw className="inline-block h-px w-8 origin-left bg-gold" />
              <p className="eyebrow text-gold-ink">Atendimento direto</p>
            </div>

            <h2
              data-split="chars"
              className="section-title mt-5 text-[1.85rem] text-ink sm:text-[2.25rem]"
            >
              Você não precisa <em className="text-gold-ink">entender de leis</em>{" "}
              para pedir ajuda
            </h2>

            <p
              data-reveal="up"
              className="mt-6 text-[1.0125rem] leading-[1.8] text-ink/62"
            >
              Muitas pessoas sabem que existe algo errado no trabalho, mas não
              sabem o nome do problema. Isso é normal. Você pode contar o que
              aconteceu com suas próprias palavras. O advogado fará as perguntas
              necessárias, analisará as informações e explicará os próximos
              passos de forma clara.
            </p>

            <div data-reveal="up">
              <Button
                href={whatsappUrl("Olá! Queria explicar o que aconteceu no meu trabalho.")}
                variant="outlineLight"
                className="mt-8"
              >
                Explicar o que aconteceu
                <WhatsAppIcon className="size-4" />
              </Button>
            </div>
          </div>

          <ul
            data-reveal-stagger
            className={`flex flex-col gap-6 ${media.video ? "lg:col-span-3" : "lg:col-span-4"}`}
          >
            {points.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3.5">
                <Icon className="size-[26px] shrink-0 text-gold-ink" />
                <span className="text-[0.9375rem] leading-snug text-ink/75">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
