"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent, type ReactNode } from "react";
import Button from "@/components/ui/Button";
import { ChevronDownIcon, WhatsAppIcon } from "@/components/icons";
import { trackLeadInBrowser } from "@/components/tracking/track";
import { saveLeadMessage } from "@/lib/lead-message";
import { newEventId } from "@/lib/tracking/client";

type Errors = Partial<Record<"name" | "email" | "phone" | "message" | "fields" | "_", string>>;

const FIELD_PREFIX = "fields.";

/** Todo input `name="fields.<chave>"` vira fields[chave] — é assim que as perguntas extras chegam ao CRM. */
function extraFields(form: FormData): Record<string, string> | undefined {
  const out: Record<string, string> = {};
  for (const [name, value] of form.entries()) {
    if (!name.startsWith(FIELD_PREFIX) || typeof value !== "string" || !value.trim()) continue;
    out[name.slice(FIELD_PREFIX.length)] = value.trim();
  }
  return Object.keys(out).length ? out : undefined;
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <span className="mt-1.5 block text-[0.8125rem] text-red-700">{message}</span>;
}

const fieldClass =
  "w-full border border-ink/15 bg-white px-4 py-3.5 text-[0.9375rem] text-ink placeholder:text-ink/40 transition-colors focus:border-gold focus:outline-none";

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

/**
 * Fluxo do lead (padrão do nextjs-tracking-template):
 * 1. gera o event_id no browser
 * 2. POST /api/lead → CRM + Meta CAPI + GA4 MP + Google Ads API (mesmo event_id)
 * 3. se deu certo, dispara o Lead no browser com o mesmo id e vai para /obrigado,
 *    que oferece continuar a conversa no WhatsApp com o relato já escrito.
 */
export default function ContactForm() {
  const router = useRouter();
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending) return;
    const form = new FormData(event.currentTarget);
    const get = (key: string) => String(form.get(key) ?? "").trim();
    const eventId = newEventId();
    const data = {
      name: get("name"),
      email: get("email"),
      phone: get("phone"),
      message: get("message") || undefined,
      consent: form.get("consent") === "on",
      fields: extraFields(form),
      website: get("website"),
      eventId,
      pageUrl: window.location.href,
    };

    if (!data.consent) {
      setErrors({ _: "Marque a autorização para podermos entrar em contato." });
      return;
    }

    setSending(true);
    setErrors({});
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        errors?: Errors;
        error?: string;
      };
      if (!res.ok || !json.ok) {
        setErrors(json.errors ?? { _: json.error ?? "Não foi possível enviar. Tente novamente." });
        return;
      }
      trackLeadInBrowser(eventId, { email: data.email, phone: data.phone });
      saveLeadMessage(
        [
          "Olá! Gostaria de falar com o advogado.",
          "",
          `Nome: ${data.name}`,
          `Cidade e estado: ${get("fields.cidade") || "—"}`,
          `Profissão ou função: ${get("fields.profissao") || "—"}`,
          `Ainda trabalha na empresa: ${get("fields.vinculo") || "—"}`,
          `Principal problema: ${get("fields.problema") || "—"}`,
          "",
          "O que aconteceu:",
          data.message || "—",
        ].join("\n"),
      );
      router.push("/obrigado");
    } catch {
      setErrors({ _: "Sem conexão. Tente novamente." });
    } finally {
      setSending(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      data-testid="lead-form"
      className="mt-8 flex flex-col gap-4"
    >
      <div>
        <input
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Nome completo"
          aria-label="Nome completo"
          className={fieldClass}
        />
        <FieldError message={errors.name} />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <input
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="WhatsApp com DDD"
            aria-label="WhatsApp com DDD"
            className={fieldClass}
          />
          <FieldError message={errors.phone} />
        </div>
        <div>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="E-mail"
            aria-label="E-mail"
            className={fieldClass}
          />
          <FieldError message={errors.email} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input
          name="fields.cidade"
          type="text"
          placeholder="Cidade e estado"
          aria-label="Cidade e estado"
          className={fieldClass}
        />
        <input
          name="fields.profissao"
          type="text"
          placeholder="Profissão ou função"
          aria-label="Profissão ou função"
          className={fieldClass}
        />
      </div>

      <Select>
        <select
          name="fields.vinculo"
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
          name="fields.problema"
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
        name="message"
        rows={4}
        placeholder="Conte o que aconteceu"
        aria-label="Conte o que aconteceu"
        className={`${fieldClass} resize-y`}
      />

      {/* honeypot: escondido de humanos */}
      <input
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] size-px opacity-0"
      />

      <label className="flex items-start gap-2.5 text-[11.5px] leading-[1.55] text-ink/55">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-0.5 size-3.5 shrink-0 accent-[var(--color-gold)]"
        />
        <span>
          Autorizo o escritório a usar essas informações apenas para entrar em
          contato e entender o meu caso.
        </span>
      </label>

      {errors.fields && <FieldError message={errors.fields} />}
      {errors._ && <FieldError message={errors._} />}

      <Button type="submit" size="md" className="mt-1 w-full" disabled={sending}>
        {sending ? "Enviando…" : "Enviar e falar com o advogado"}
        <WhatsAppIcon className="size-4" />
      </Button>

      <p className="text-center text-[11.5px] text-ink/45">
        Suas informações serão tratadas com cuidado e sigilo.
      </p>
    </form>
  );
}
