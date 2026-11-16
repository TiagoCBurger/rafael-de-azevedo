import Image from "next/image";
import { srcSetFor } from "@/lib/images";

/**
 * Renderiza a imagem quando `src` existe; caso contrário, mantém o espaço
 * ocupado com um placeholder discreto para o layout não colapsar.
 */
export default function MediaSlot({
  src,
  alt,
  label,
  sizes = "100vw",
  priority = false,
  className = "",
  imageClassName = "object-cover",
}: {
  src?: string;
  alt: string;
  label: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
}) {
  const responsive = src ? srcSetFor(src) : undefined;

  if (responsive) {
    // Foto com versões WebP prontas (ver src/lib/images.ts): o navegador
    // escolhe a largura certa sem depender do otimizador do servidor.
    return (
      <div className={`relative overflow-hidden ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={responsive.src}
          srcSet={responsive.srcSet}
          sizes={sizes}
          alt={alt}
          decoding="async"
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : undefined}
          className={`absolute inset-0 h-full w-full ${imageClassName}`}
        />
      </div>
    );
  }

  if (src) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={imageClassName}
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative overflow-hidden bg-[linear-gradient(135deg,#1b2229_0%,#101519_55%,#191f25_100%)] ${className}`}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="rounded-sm border border-gold/25 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-light/60">
          {label}
        </span>
      </div>
    </div>
  );
}
