import Container from "@/components/ui/Container";
import {
  AccidentIcon,
  ArrowRightIcon,
  ClockIcon,
  DismissalIcon,
  HarassmentIcon,
  HealthIcon,
  MoneyIcon,
} from "@/components/icons";
import { whatsappUrl } from "@/lib/site";

const problems = [
  {
    icon: MoneyIcon,
    title: "A empresa não pagou o que devia?",
    description:
      "Salário atrasado, férias, décimo terceiro, FGTS e outros valores.",
    cta: "Quero explicar",
    message: "Olá! A empresa não pagou o que devia e queria explicar a situação.",
  },
  {
    icon: DismissalIcon,
    title: "Foi demitido e tem dúvidas sobre os valores?",
    description:
      "Análise de rescisão, aviso-prévio, férias, décimo terceiro e FGTS.",
    cta: "Conferir demissão",
    message: "Olá! Fui demitido e queria conferir os valores da rescisão.",
  },
  {
    icon: ClockIcon,
    title: "Trabalhou além do horário e não recebeu?",
    description:
      "Horas extras, intervalo não concedido e jornada maior que a registrada.",
    cta: "Falar sobre horas extras",
    message: "Olá! Trabalhei além do horário e não recebi. Queria conversar.",
  },
  {
    icon: AccidentIcon,
    title: "Sofreu acidente no trabalho?",
    description:
      "Afastamento, documentos médicos, estabilidade e outros direitos.",
    cta: "Falar sobre o acidente",
    message: "Olá! Sofri um acidente no trabalho e queria falar sobre isso.",
  },
  {
    icon: HealthIcon,
    title: "Ficou doente por causa do trabalho?",
    description:
      "Lesões, ansiedade, estresse e outros problemas relacionados ao trabalho.",
    cta: "Contar o que aconteceu",
    message: "Olá! Fiquei doente por causa do trabalho e queria contar o que aconteceu.",
  },
  {
    icon: HarassmentIcon,
    title: "Sofre humilhação ou perseguição?",
    description:
      "Gritos, ameaças, metas abusivas e assédio no ambiente de trabalho.",
    cta: "Falar sobre essa situação",
    message: "Olá! Estou passando por humilhação/perseguição no trabalho.",
  },
];

export default function Problems() {
  return (
    <section id="problemas" className="bg-cream-soft py-20 text-ink sm:py-24">
      <Container>
        <div className="text-center">
          <div data-reveal="up" className="flex items-center justify-center gap-3">
            <span data-draw className="inline-block h-px w-8 origin-left bg-gold" />
            <p className="eyebrow text-gold-ink">Problemas trabalhistas</p>
            <span data-draw className="inline-block h-px w-8 origin-right bg-gold" />
          </div>
          <h2
            data-split="words"
            className="section-title mx-auto mt-5 max-w-3xl text-[1.85rem] text-ink sm:text-[2.25rem]"
          >
            Veja algumas situações em que o advogado pode ajudar
          </h2>
          <p data-reveal="up" className="mt-5 text-[0.95rem] text-ink/55">
            Não encontrou o seu problema? Entre em contato e explique o que
            aconteceu.
          </p>
        </div>

        <ul
          data-reveal-stagger
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {problems.map(({ icon: Icon, title, description, cta, message }) => (
            <li
              key={title}
              className="lift-card flex flex-col border border-ink/10 bg-white p-7 hover:border-gold/50"
            >
              <Icon className="size-7 text-gold-ink" />

              <h3 className="section-title mt-6 text-[1.2rem] leading-[1.3] text-ink">
                {title}
              </h3>

              <p className="mt-3 flex-1 text-[0.9rem] leading-[1.7] text-ink/55">
                {description}
              </p>

              <a
                href={whatsappUrl(message)}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-7 flex items-center justify-between gap-3 text-[0.8125rem] font-medium text-gold-ink transition-colors hover:text-gold-dark"
              >
                {cta}
                <ArrowRightIcon className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
