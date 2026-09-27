import { useId } from "react";

/**
 * "Forma recurrente" del manual de marca: rombos concéntricos enmarcados por
 * diagonales y barras horizontales. Se usa como textura decorativa.
 */
export function BrandPattern({
  className,
  size = 120,
}: {
  className?: string;
  /** Tamaño en px de cada módulo del patrón. */
  size?: number;
}) {
  const id = useId().replace(/:/g, "");
  return (
    <svg className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id={`kb-pat-${id}`} width={size} height={size} patternUnits="userSpaceOnUse" viewBox="0 0 100 100">
          <g fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="butt">
            <path d="M0 3.5h100M0 96.5h100" />
            <path d="M50 16 84 50 50 84 16 50Z" />
            <path d="M50 29 71 50 50 71 29 50Z" />
            {/* diagonales de esquina, paralelas a los rombos */}
            <path d="M0 18 32 50 0 82M0 34 16 50 0 66" />
            <path d="M100 18 68 50 100 82M100 34 84 50 100 66" />
            <path d="M18 11 50 43 82 11M36 11 50 25 64 11" />
            <path d="M18 89 50 57 82 89M36 89 50 75 64 89" />
          </g>
          <path d="M50 42 58 50 50 58 42 50Z" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#kb-pat-${id})`} />
    </svg>
  );
}
