import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items, className, tone = "dark" }: { items: Crumb[]; className?: string; tone?: "dark" | "light" }) {
  const all: Crumb[] = [{ label: "Inicio", href: "/" }, ...items];
  return (
    <nav aria-label="Ruta de navegación" className={cn("text-[13px]", className)}>
      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
        {all.map((c, i) => {
          const last = i === all.length - 1;
          return (
            <li key={i} className="flex items-center gap-1.5">
              {c.href && !last ? (
                <Link
                  href={c.href}
                  className={cn(
                    "transition-colors",
                    tone === "dark" ? "text-kb-stone hover:text-kb-copper" : "text-kb-black/60 hover:text-kb-brown",
                  )}
                >
                  {c.label}
                </Link>
              ) : (
                <span aria-current={last ? "page" : undefined} className={tone === "dark" ? "text-kb-sand" : "text-kb-black"}>
                  {c.label}
                </span>
              )}
              {!last && <ChevronRight aria-hidden className={cn("size-3.5", tone === "dark" ? "text-kb-line" : "text-kb-black/30")} />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
