import { expect, test, type Page } from '@playwright/test'

const PIXEL = '123456789012345'

/** Intercepta Meta/Google: nada sai da máquina, e as chamadas ficam na fila para inspeção. */
async function stubExternal(page: Page) {
  const loaded: string[] = []
  await page.route(/connect\.facebook\.net|facebook\.com\/tr|googletagmanager\.com|google-analytics\.com|googleadservices\.com/, (route) => {
    loaded.push(route.request().url())
    return route.fulfill({ status: 200, contentType: 'application/javascript', body: '' })
  })
  return loaded
}

/** Chamadas do fbq enfileiradas (o fbevents.js real foi bloqueado, então a fila não é consumida). */
function fbqQueue(page: Page) {
  return page.evaluate(() => ((window as any).fbq?.queue ?? []).map((a: IArguments) => Array.from(a)))
}

/** dataLayer com os `arguments` do gtag convertidos em arrays. */
function dataLayer(page: Page) {
  return page.evaluate(() =>
    ((window as any).dataLayer ?? []).map((x: unknown) =>
      Object.prototype.toString.call(x) === '[object Arguments]' ? Array.from(x as IArguments) : x,
    ),
  )
}

async function fillLead(page: Page, phone = '(11) 99999-8888') {
  const form = page.getByTestId('lead-form')
  await form.getByLabel('Nome completo').fill('Teste E2E')
  await form.getByLabel('E-mail').fill('e2e@example.com')
  await form.getByLabel('WhatsApp com DDD').fill(phone)
  await form.getByLabel('Conte o que aconteceu').fill('Fui demitido sem receber as verbas.')
  await form.getByRole('checkbox').check()
}

const SUBMIT = /enviar e falar com o advogado/i

// ---------------------------------------------------------------------------
// Modo direct
// ---------------------------------------------------------------------------

test('@direct PageView: pixel e CAPI com o mesmo event_id, sem GTM', async ({ page }) => {
  const loaded = await stubExternal(page)
  const trackReq = page.waitForRequest((r) => r.url().endsWith('/api/track'))
  await page.goto('/')
  const body = (await trackReq).postDataJSON()

  expect(body.event).toBe('page_view')
  const q = await fbqQueue(page)
  expect(q).toContainEqual(['init', PIXEL])
  expect(q).toContainEqual(['track', 'PageView', {}, { eventID: body.eventId }])
  expect(q.filter((c: unknown[]) => c[1] === 'PageView')).toHaveLength(1)

  expect(loaded.some((u) => u.includes('fbevents.js'))).toBe(true)
  expect(loaded.some((u) => u.includes('gtag/js?id=G-ABCDE12345'))).toBe(true)
  expect(loaded.some((u) => u.includes('gtm.js'))).toBe(false)
})

test('@direct cookies first-party gravados pelo servidor a partir da URL', async ({ page }) => {
  await stubExternal(page)
  await page.goto('/?utm_source=facebook&utm_medium=cpc&utm_campaign=bf&fbclid=IwAR_e2e&gclid=Cj0_e2e')
  const cookies = Object.fromEntries((await page.context().cookies()).map((c) => [c.name, c.value]))

  expect(cookies._fbc).toMatch(/^fb\.1\.\d{13}\.IwAR_e2e$/)
  expect(cookies._fbp).toMatch(/^fb\.1\.\d{13}\.\d+$/)
  expect(cookies.trk_gclid).toBe('Cj0_e2e')
  expect(cookies.trk_vid).toBeTruthy()
  expect(JSON.parse(decodeURIComponent(cookies.trk_lt))).toMatchObject({ utm_source: 'facebook', utm_campaign: 'bf' })
  expect(JSON.parse(decodeURIComponent(cookies.trk_ft))).toMatchObject({ utm_source: 'facebook' })
})

test('@direct Lead: /api/lead, pixel e Google Ads com o mesmo event_id', async ({ page }) => {
  await stubExternal(page)
  await page.goto('/?gclid=Cj0_e2e')
  await fillLead(page)

  const leadReq = page.waitForRequest((r) => r.url().endsWith('/api/lead'))
  const leadRes = page.waitForResponse((r) => r.url().endsWith('/api/lead'))
  await page.getByRole('button', { name: SUBMIT }).click()
  const sent = (await leadReq).postDataJSON()
  expect((await leadRes).status()).toBe(200)
  await page.waitForURL('**/obrigado')
  await expect(page.getByTestId('thank-you')).toBeVisible()

  const q = await fbqQueue(page)
  expect(q).toContainEqual(['track', 'Lead', { currency: 'BRL' }, { eventID: sent.eventId }])
  expect(q.filter((c: unknown[]) => c[1] === 'Lead')).toHaveLength(1)

  const dl = await dataLayer(page)
  expect(dl).toContainEqual(['set', 'user_data', { email: 'e2e@example.com', phone_number: '+5511999998888' }])
  expect(dl).toContainEqual([
    'event',
    'conversion',
    expect.objectContaining({ send_to: 'AW-123456789/AbCdEfGhIjK12', transaction_id: sent.eventId }),
  ])
  expect(dl).toContainEqual(['event', 'generate_lead', expect.objectContaining({ event_id: sent.eventId })])
  expect(dl.some((x: any) => typeof x?.event === 'string' && x.event.startsWith('trk_'))).toBe(false)
})

test('@direct telefone inválido: erro no campo e nenhum Lead disparado', async ({ page }) => {
  await stubExternal(page)
  await page.goto('/')
  await fillLead(page, '123')
  await page.getByRole('button', { name: SUBMIT }).click()
  await expect(page.getByText(/Telefone inválido/)).toBeVisible()
  expect((await fbqQueue(page)).some((c: unknown[]) => c[1] === 'Lead')).toBe(false)
  expect(page.url()).not.toContain('/obrigado')
})

test('@direct Lead: /obrigado continua no WhatsApp com o relato', async ({ page }) => {
  await stubExternal(page)
  await page.goto('/')
  await fillLead(page)
  await page.getByRole('button', { name: SUBMIT }).click()
  await page.waitForURL('**/obrigado')
  const link = page.getByRole('link', { name: /continuar no whatsapp/i })
  await expect(link).toHaveAttribute('href', new RegExp(encodeURIComponent('Fui demitido sem receber as verbas.')))
})

test('@direct clique no WhatsApp: Contact no pixel e na CAPI com o mesmo event_id', async ({ page, context }) => {
  await stubExternal(page)
  await context.route(/wa\.me/, (route) => route.fulfill({ status: 200, body: '' }))
  await page.goto('/')
  const trackReq = page.waitForRequest((r) => r.url().endsWith('/api/track') && r.postDataJSON()?.event === 'contact')
  await page.locator('header').getByRole('link', { name: /falar com o advogado/i }).click()
  const body = (await trackReq).postDataJSON()

  const q = await fbqQueue(page)
  expect(q).toContainEqual(['track', 'Contact', { method: 'whatsapp' }, { eventID: body.eventId }])
})

test('@direct /api/tracking-health fechado sem token', async ({ request }) => {
  expect((await request.get('/api/tracking-health')).status()).toBe(404)
})

// ---------------------------------------------------------------------------
// Modo gtm
// ---------------------------------------------------------------------------

test('@gtm carrega só o GTM; trk_page_view com o mesmo id da CAPI', async ({ page }) => {
  const loaded = await stubExternal(page)
  const trackReq = page.waitForRequest((r) => r.url().endsWith('/api/track'))
  await page.goto('/')
  const body = (await trackReq).postDataJSON()

  expect(loaded.some((u) => u.includes('gtm.js?id=GTM-ABC1234'))).toBe(true)
  expect(loaded.some((u) => u.includes('fbevents.js'))).toBe(false)
  expect(loaded.some((u) => u.includes('gtag/js'))).toBe(false)
  expect(await page.evaluate(() => typeof (window as any).fbq)).toBe('undefined')

  const dl = await dataLayer(page)
  expect(dl).toContainEqual(expect.objectContaining({ event: 'trk_page_view', event_id: body.eventId, meta_event_name: 'PageView' }))
  expect(await page.locator('noscript').first().innerHTML()).toContain('ns.html?id=GTM-ABC1234')
})

test('@gtm Lead: trk_lead no dataLayer com o event_id do /api/lead', async ({ page }) => {
  await stubExternal(page)
  await page.goto('/')
  await fillLead(page)

  const leadReq = page.waitForRequest((r) => r.url().endsWith('/api/lead'))
  await page.getByRole('button', { name: SUBMIT }).click()
  const sent = (await leadReq).postDataJSON()
  await page.waitForURL('**/obrigado')

  const dl = await dataLayer(page)
  const leads = dl.filter((x: any) => x?.event === 'trk_lead')
  expect(leads).toHaveLength(1)
  expect(leads[0]).toMatchObject({
    event_id: sent.eventId,
    meta_event_name: 'Lead',
    ga4_event_name: 'generate_lead',
    user_data: { email: 'e2e@example.com', phone_number: '+5511999998888' },
  })
})
