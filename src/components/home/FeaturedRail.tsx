"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProductCard } from "@/components/catalog/ProductCard";
import type { ProductSummary } from "@/data/types";

export function FeaturedRail({ products, categoryNames }: { products: ProductSummary[]; categoryNames: Record<string, string> }) {
  const ref = useRef<HTMLUListElement>(null);
  const scroll = (dir: number) => {
    const el = ref.current;
    if (!el) return;
    const card = el.querySelector("li");
    el.scrollBy({ left: dir * ((card?.clientWidth ?? 320) + 24), behavior: "smooth" });
  };
  return (
    <div className="relative">
      <div className="absolute -top-20 right-0 hidden gap-2 md:flex">
        {[
          [-1, ChevronLeft, "Anterior"],
          [1, ChevronRight, "Siguiente"],
        ].map(([dir, Icon, label]) => {
          const I = Icon as typeof ChevronLeft;
          return (
            <button
              key={label as string}
              type="button"
              onClick={() => scroll(dir as number)}
              aria-label={`${label} solución destacada`}
              className="flex size-11 items-center justify-center rounded-full border border-kb-line text-kb-sand transition-colors hover:border-kb-copper hover:text-kb-copper"
            >
              <I className="size-5" aria-hidden />
            </button>
          );
        })}
      </div>
      <ul
        ref={ref}
        className="-mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-4 pb-4 [scrollbar-width:none] sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0"
      >
        {products.map((p) => (
          <li key={p.slug} className="w-[82%] shrink-0 snap-start sm:w-[46%] lg:w-[calc((100%-48px)/3)] xl:w-[calc((100%-72px)/4)]">
            <ProductCard product={p} categoryName={categoryNames[p.category]} />
          </li>
        ))}
      </ul>
    </div>
  );
}
