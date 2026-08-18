/**
 * Dados de contato e mídia do site.
 * Trocar aqui reflete em todas as seções — não há telefone/e-mail hardcoded nos componentes.
 */

export const site = {
  name: "Raphael de Azevedo",
  role: "Advogado Trabalhista",
  phoneLabel: "(21) 99999-9999",
  /** Somente dígitos, com DDI — usado nos links do WhatsApp. */
  whatsapp: "5521999999999",
  email: "contato@raphaeldeazevedo.adv.br",
  social: {
    instagram: "#",
    linkedin: "#",
  },
} as const;

/** Mensagem pré-preenchida ao abrir o WhatsApp. */
export function whatsappUrl(message = "Olá! Gostaria de falar sobre um problema no trabalho.") {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

/**
 * Slots de imagem. Coloque os arquivos em `public/images/` e preencha o caminho —
 * enquanto forem `undefined`, o layout renderiza um placeholder do tamanho certo.
 */
export const media: Record<"hero" | "video" | "specialties", string | undefined> = {
  hero: undefined, // ex.: "/images/advogado-escritorio.jpg"
  video: undefined, // ex.: "/images/capa-video.jpg"
  specialties: undefined, // ex.: "/images/bancarios-petroleo.jpg"
};
