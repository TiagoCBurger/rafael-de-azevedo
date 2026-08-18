"use client";

import type { FormEvent, ReactNode } from "react";
import Button from "@/components/ui/Button";
import { ChevronDownIcon, WhatsAppIcon } from "@/components/icons";
import { whatsappUrl } from "@/lib/site";

const fieldClass =
  "w-full border border-ink/15 bg-white px-4 py-3 text-[13px] text-ink placeholder:text-ink/40 focus:border-gold focus:outline-none";

/** Select nativo + chevron desenhado, já que o indicador padrão não é estilizável. */
function Select({ children }: { children: ReactNode }) {
  return (
    <div className="relative">
      {children}
      <ChevronDownIcon className="pointer-events-none absolute right-4 top-1/2 size-3.5 -translate-y-1/2 text-ink/45" />
    </div>
  );
}

const problemOptions = [
  "Demissão / rescisão",
  "Horas extras",
  "Salário ou verbas atrasadas",
  "Acidente de trabalho",
  "Doença causada pelo trabalho",
  "Assédio ou perseguição",
  "FGTS",
  "Outro / não sei dizer",
];

export default function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const get = (key: string) => String(data.get(key) ?? "").trim();

    const message = [
      "Olá! Gostaria de falar com o advogado.",
      "",
      `Nome: ${get("nome") || "—"}`,
      `Cidade e estado: ${get("cidade") || "—"}`,
      `Profissão ou função: ${get("profissao") || "—"}`,
      `Ainda trabalha na empresa: ${get("vinculo") || "—"}`,
      `Principal problema: ${get("problema") || "—"}`,
      "",
      "O que aconteceu:",
      get("relato") || "—",
    ].join("\n");

    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input
          name="nome"
          type="text"
          required
          placeholder="Nome completo"
          aria-label="Nome completo"
          className={fieldClass}
        />
        <input
          name="whatsapp"
          type="tel"
          required
          placeholder="WhatsApp"
          aria-label="WhatsApp"
          className={fieldClass}
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input
          name="cidade"
          type="text"
          placeholder="Cidade e estado"
          aria-label="Cidade e estado"
          className={fieldClass}
        />
        <input
          name="profissao"
          type="text"
          placeholder="Profissão ou função"
          aria-label="Profissão ou função"
          className={fieldClass}
        />
      </div>

      <Select>
        <select
          name="vinculo"
          defaultValue=""
          aria-label="Você ainda trabalha na empresa?"
          className={`${fieldClass} appearance-none pr-11`}
        >
          <option value="" disabled>
            Você ainda trabalha na empresa?
          </option>
          <option>Sim, ainda trabalho</option>
          <option>Não, já saí</option>
          <option>Estou afastado</option>
          <option>Prefiro não informar</option>
        </select>
      </Select>

      <Select>
        <select
          name="problema"
          defaultValue=""
          aria-label="Qual é o principal problema?"
          className={`${fieldClass} appearance-none pr-11`}
        >
          <option value="" disabled>
            Qual é o principal problema?
          </option>
          {problemOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </Select>

      <textarea
        name="relato"
        rows={4}
        placeholder="Conte o que aconteceu"
        aria-label="Conte o que aconteceu"
        className={`${fieldClass} resize-y`}
      />

      <label className="flex items-start gap-2.5 text-[11.5px] leading-[1.55] text-ink/55">
        <input
          type="checkbox"
          name="autorizacao"
          required
          className="mt-0.5 size-3.5 shrink-0 accent-[var(--color-gold)]"
        />
        <span>
          Autorizo o escritório a usar essas informações apenas para entrar em
          contato e entender o meu caso.
        </span>
      </label>

      <Button type="submit" size="md" className="mt-1 w-full">
        Enviar e falar com o advogado
        <WhatsAppIcon className="size-4" />
      </Button>

      <p className="text-center text-[11.5px] text-ink/45">
        Suas informações serão tratadas com cuidado e sigilo.
      </p>
    </form>
  );
}
