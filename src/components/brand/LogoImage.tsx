import Image from "next/image";

/**
 * Logotipo como archivo SVG estático (se descarga una vez y queda en caché).
 * Para usos decorativos o con animación/degradado propio, usar <Logo /> (SVG en línea).
 */
export function LogoImage({
  variant = "negativo",
  className,
  priority,
}: {
  variant?: "negativo" | "positivo";
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={`/brand/kingbuilder-logo-${variant}.svg`}
      alt="King Builder"
      width={349}
      height={89}
      unoptimized
      priority={priority}
      className={className}
    />
  );
}
