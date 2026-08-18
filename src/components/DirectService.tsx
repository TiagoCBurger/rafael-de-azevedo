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
    <section id="sobre" className="bg-cream py-16 text-ink sm:py-20">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Vídeo */}
          <div className="lg:col-span-4">
            <button
              type="button"
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
                <span className="flex size-16 items-center justify-center rounded-full bg-gold text-white shadow-lg transition-transform group-hover:scale-105">
                  <PlayIcon className="size-6 translate-x-0.5" />
                </span>
              </span>
            </button>
          </div>

          {/* Texto */}
          <div className="lg:col-span-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-ink">
              Atendimento direto
            </p>

            <h2 className="mt-4 font-serif text-[28px] leading-[1.2] text-ink sm:text-[33px]">
              Você não precisa entender de leis para pedir ajuda
            </h2>

            <p className="mt-5 text-[13.5px] leading-[1.8] text-ink/60">
              Muitas pessoas sabem que existe algo errado no trabalho, mas não
              sabem o nome do problema. Isso é normal. Você pode contar o que
              aconteceu com suas próprias palavras. O advogado fará as perguntas
              necessárias, analisará as informações e explicará os próximos
              passos de forma clara.
            </p>

            <Button
              href={whatsappUrl("Olá! Queria explicar o que aconteceu no meu trabalho.")}
              variant="outlineLight"
              className="mt-7"
            >
              Explicar o que aconteceu
              <WhatsAppIcon className="size-4" />
            </Button>
          </div>

          {/* Pontos-chave */}
          <ul className="flex flex-col gap-6 lg:col-span-3">
            {points.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3.5">
                <Icon className="size-[26px] shrink-0 text-gold-ink" />
                <span className="text-[13px] leading-snug text-ink/75">
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
