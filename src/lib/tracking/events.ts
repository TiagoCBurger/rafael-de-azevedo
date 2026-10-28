/**
 * Catálogo único de eventos. Cada evento tem um nome por plataforma — é isso que
 * garante que browser, GTM e servidor falam do mesmo evento (e deduplicam).
 */

export interface EventDefinition {
  /** Nome padrão da Meta (fbq / CAPI). */
  meta: string
  /** Nome no GA4. `null` = o GA4 já coleta sozinho (page_view pelo gtag/GTM). */
  ga4: string | null
  /** Nome do `event` empurrado no dataLayer no modo GTM. */
  dataLayer: string
  /** Pode ser disparado pelo endpoint público /api/track. Lead só entra via /api/lead. */
  publicServer: boolean
  /** Conversão enviada ao Google Ads (tag no browser e/ou API no servidor). */
  googleAdsConversion: boolean
}

export const EVENTS = {
  page_view: {
    meta: 'PageView',
    ga4: null,
    dataLayer: 'trk_page_view',
    publicServer: true,
    googleAdsConversion: false,
  },
  view_content: {
    meta: 'ViewContent',
    ga4: 'view_item',
    dataLayer: 'trk_view_content',
    publicServer: true,
    googleAdsConversion: false,
  },
  contact: {
    meta: 'Contact',
    ga4: 'contact',
    dataLayer: 'trk_contact',
    publicServer: true,
    googleAdsConversion: false,
  },
  lead: {
    meta: 'Lead',
    ga4: 'generate_lead',
    dataLayer: 'trk_lead',
    publicServer: false,
    googleAdsConversion: true,
  },
} as const satisfies Record<string, EventDefinition>

export type EventKey = keyof typeof EVENTS

export const EVENT_KEYS = Object.keys(EVENTS) as EventKey[]

export function isEventKey(v: unknown): v is EventKey {
  return typeof v === 'string' && Object.hasOwn(EVENTS, v)
}

export const CURRENCY = 'BRL'
