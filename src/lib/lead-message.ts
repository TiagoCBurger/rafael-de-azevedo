/**
 * O formulário guarda o relato montado para a página /obrigado abrir o WhatsApp
 * com a mensagem pronta. sessionStorage pode falhar (aba anônima, bloqueio) —
 * nesse caso o WhatsApp abre com a mensagem padrão.
 */
const KEY = "lead_whatsapp_message";

export function saveLeadMessage(message: string) {
  try {
    sessionStorage.setItem(KEY, message);
  } catch {}
}

export function readLeadMessage(): string | undefined {
  try {
    return sessionStorage.getItem(KEY) ?? undefined;
  } catch {
    return undefined;
  }
}
