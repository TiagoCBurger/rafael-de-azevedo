/**
 * Gera versões WebP redimensionadas das fotos em public/images/.
 *
 * O site não depende do otimizador de imagens do servidor (/_next/image):
 * em produção ele estava devolvendo o JPEG original (206 KB) para qualquer
 * tamanho pedido. Com os arquivos prontos, o navegador baixa só a largura
 * de que precisa, em qualquer hospedagem.
 *
 * Uso: npx tsx scripts/optimize-images.ts  (rodar de novo ao trocar a foto)
 */
import path from "node:path";
import sharp from "sharp";
import { responsiveImages } from "../src/lib/images";

const publicDir = path.join(import.meta.dirname, "..", "public");

for (const [src, image] of Object.entries(responsiveImages)) {
  for (const width of image.widths) {
    const out = path.join(publicDir, image.variant(width));
    const info = await sharp(path.join(publicDir, src))
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 74, effort: 6 })
      .toFile(out);
    console.log(`${out}  ${info.width}x${info.height}  ${(info.size / 1024).toFixed(1)} KB`);
  }
}
