# Raphael de Azevedo — landing page

Next.js 16 + Tailwind 4 + GSAP. O tracking segue o padrão do
[nextjs-tracking-template](https://github.com/TiagoCBurger/nextjs-tracking-template):
cookies first-party, Meta Pixel + CAPI, GA4 + Measurement Protocol, Google Ads (tag + API)
e envio do lead para o CRM (webhook, RD Station ou Kommo). A documentação completa de modos,
GTM, CRM e testes está no README do template.

```
npm install
cp .env.example .env.local   # preencha
npm run dev
```

## O que é específico deste site

- **Formulário** (`src/components/ContactForm.tsx`): manda o lead para `/api/lead`. Cidade,
  profissão, vínculo e problema chegam ao CRM em `fields` (`cidade`, `profissao`, `vinculo`,
  `problema`); o relato vai em `message`. Depois do envio a pessoa vai para `/obrigado`, que
  abre o WhatsApp com o relato já escrito.
- **WhatsApp**: todo link `wa.me` do site dispara o evento `contact`
  (`src/components/tracking/WhatsAppClickTracker.tsx`), sem precisar trocar os botões.
- **Conteúdo e contatos**: `src/lib/site.ts`.

## Checagens

| Comando | O que faz |
|---|---|
| `npm run check:tracking` | roda sozinho antes de todo build (inclusive na Vercel): env faltando ou errada quebra o build |
| `npm test` | testes unitários do tracking |
| `npm run test:e2e` | Chrome real, modos `direct` e `gtm` |
| `npm run check:tracking:live` | depois de configurar as credenciais de verdade |
