"use client";

import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

/** Navegación interna fija de la ficha de producto con la sección activa resaltada. */
export function SubNav({ items, quoteHref, name }: { items: { id: string; label: string }[]; quoteHref: string; name: string }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const els = items.map((i) => document.getElementById(i.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-140px 0px -55% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [items]);

  return (
    <div className="sticky top-[72px] z-40 border-y border-kb-line bg-kb-black/95 backdrop-blur-md" data-no-print>
      <div className="container-kb flex h-14 items-center justify-between gap-6">
        <nav aria-label="Secciones del producto" className="-mx-1 flex min-w-0 flex-1 overflow-x-auto [scrollbar-width:none]">
          <ul className="flex items-center gap-1">
            {items.map((i) => (
              <li key={i.id}>
                <a
                  href={`#${i.id}`}
                  aria-current={active === i.id ? "true" : undefined}
                  className={cn(
                    "block rounded-sm px-3 py-2 text-[13px] font-medium whitespace-nowrap transition-colors",
                    active === i.id ? "bg-kb-coal text-kb-copper" : "text-kb-stone hover:text-kb-sand",
                  )}
                >
                  {i.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden shrink-0 items-center gap-4 md:flex">
          <span className="max-w-56 truncate text-sm text-kb-sand">{name}</span>
          <ButtonLink href={quoteHref} size="sm">
            Solicitar cotización
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
