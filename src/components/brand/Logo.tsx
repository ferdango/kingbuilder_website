import { useId } from "react";
import {
  GOLD_STOPS,
  REGISTERED_MARK,
  SYMBOL_PATHS,
  WORDMARK_BUILDER,
  WORDMARK_KING,
} from "./logo-data";

// Composición horizontal (símbolo + logotipo), igual que en la tarjeta personal del manual:
// el símbolo mide lo mismo que el bloque KING / BUILDER.
const H = 88.7;
const GAP = 20;
const SYMBOL_SCALE = H / 315;
const WORDMARK_X = H + GAP - 346;
const WORDMARK_Y = -217.7;
const W = 348.9;

type LogoProps = {
  className?: string;
  /** "negativo" = texto arena para fondos oscuros; "positivo" = texto negro para fondos claros. */
  variant?: "negativo" | "positivo";
  title?: string;
};

function GoldGradient({ id }: { id: string }) {
  return (
    <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
      <stop stopColor={GOLD_STOPS[0]} />
      <stop offset="1" stopColor={GOLD_STOPS[1]} />
    </linearGradient>
  );
}

export function Logo({ className, variant = "negativo", title = "King Builder" }: LogoProps) {
  const id = useId().replace(/:/g, "");
  const color = variant === "negativo" ? "var(--color-kb-sand)" : "var(--color-kb-black)";
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className={className}
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <GoldGradient id={`kb-gold-${id}`} />
      </defs>
      <g transform={`scale(${SYMBOL_SCALE})`}>
        {SYMBOL_PATHS.map((d, i) => (
          <path key={i} d={d} fill={`url(#kb-gold-${id})`} />
        ))}
      </g>
      <g transform={`translate(${WORDMARK_X} ${WORDMARK_Y})`} fill={color}>
        <path d={WORDMARK_KING} />
        <path d={WORDMARK_BUILDER} />
        <path d={REGISTERED_MARK} />
        <circle cx="582.55" cy="262.735" r="2.874" fill="none" stroke={color} strokeWidth="0.383" />
      </g>
    </svg>
  );
}

/** Solo el símbolo (la "K" estructural) con el degradado dorado. */
export function LogoSymbol({ className, title }: { className?: string; title?: string }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg
      viewBox="0 0 315 315"
      className={className}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <GoldGradient id={`kb-sym-${id}`} />
      </defs>
      {SYMBOL_PATHS.map((d, i) => (
        <path key={i} d={d} fill={`url(#kb-sym-${id})`} />
      ))}
    </svg>
  );
}
