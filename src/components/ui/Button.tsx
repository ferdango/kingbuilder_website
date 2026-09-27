import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "dark" | "ghost" | "light";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm font-medium tracking-wide transition-[background-color,color,border-color,box-shadow,transform] duration-200 ease-(--ease-kb) disabled:pointer-events-none disabled:opacity-50 whitespace-nowrap";

const variants: Record<Variant, string> = {
  // Arena Cobre sobre negro: acción principal
  primary:
    "bg-kb-copper text-kb-black hover:bg-kb-gold hover:shadow-[0_8px_24px_-8px_rgba(223,177,123,0.55)] active:translate-y-px",
  // Contorno arena sobre fondos oscuros
  secondary: "border border-kb-sand/40 text-kb-sand hover:border-kb-copper hover:text-kb-copper",
  // Negro sobre fondos claros
  dark: "bg-kb-black text-kb-sand hover:bg-kb-earth active:translate-y-px",
  // Contorno negro sobre fondos claros
  light: "border border-kb-black/30 text-kb-black hover:border-kb-black hover:bg-kb-black hover:text-kb-sand",
  ghost: "text-kb-copper hover:text-kb-gold underline-offset-4 hover:underline px-0!",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-[13px]",
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-[15px]",
};

type Common = { variant?: Variant; size?: Size; className?: string; children: ReactNode };

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: Common & ComponentProps<typeof Link>) {
  return (
    <Link className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </Link>
  );
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: Common & ComponentProps<"button">) {
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  );
}
