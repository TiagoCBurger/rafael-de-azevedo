/**
 * Fotos com versões WebP já redimensionadas em public/images/ (geradas por
 * scripts/optimize-images.ts). O MediaSlot usa estes arquivos direto, sem
 * passar pelo otimizador /_next/image.
 */
export type ResponsiveImage = {
  widths: number[];
  variant: (width: number) => string;
};

function webpVariants(base: string, widths: number[]): ResponsiveImage {
  return { widths, variant: (w) => `${base}-${w}w.webp` };
}

export const responsiveImages: Record<string, ResponsiveImage> = {
  "/images/raphael-de-azevedo.jpg": webpVariants(
    "/images/raphael-de-azevedo",
    [128, 256, 640, 960, 1080],
  ),
};

export function srcSetFor(src: string): { src: string; srcSet: string } | undefined {
  const image = responsiveImages[src];
  if (!image) return undefined;
  const largest = image.widths[image.widths.length - 1];
  return {
    src: image.variant(largest),
    srcSet: image.widths.map((w) => `${image.variant(w)} ${w}w`).join(", "),
  };
}
