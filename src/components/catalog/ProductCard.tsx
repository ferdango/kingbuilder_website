import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ProductSummary } from "@/data/types";
import { productHref, quoteHref } from "@/lib/routes";
import { cn } from "@/lib/utils";

export function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn("inline-flex items-center rounded-full bg-kb-copper px-2.5 py-1 text-[11px] font-semibold tracking-wide text-kb-black uppercase", className)}>
      {children}
    </span>
  );
}

export function ProductCard({ product, categoryName, priority }: { product: ProductSummary; categoryName?: string; priority?: boolean }) {
  const href = productHref(product);
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-sm border border-kb-line bg-kb-graphite transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:border-kb-copper/60 hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.8)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-kb-coal">
        <Image
          src={product.image.src}
          alt={product.image.alt}
          fill
          priority={priority}
          sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-kb group-hover:scale-105"
        />
        {product.badge && <Badge className="absolute top-4 left-4">{product.badge}</Badge>}
      </div>
      <div className="flex flex-1 flex-col p-6">
        {categoryName && <p className="eyebrow text-kb-copper">{categoryName}</p>}
        <h3 className={cn("text-lg leading-snug font-medium text-kb-sand", categoryName && "mt-2")}>
          <Link href={href} className="after:absolute after:inset-0 focus-visible:outline-none">
            {product.name}
          </Link>
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-kb-stone">{product.tagline}</p>

        <dl className="mt-5 grid gap-2 border-t border-kb-line pt-4 text-[13px]">
          {product.keySpecs.map((s) => (
            <div key={s.label} className="flex items-baseline justify-between gap-4">
              <dt className="text-kb-stone">{s.label}</dt>
              <dd className="text-right font-medium text-kb-sand">{s.metric}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-auto flex items-center justify-between gap-3 pt-6">
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-kb-copper">
            Ver detalles <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
          </span>
          <Link
            href={quoteHref(product)}
            className="relative z-10 rounded-sm border border-kb-line px-3 py-1.5 text-xs font-medium text-kb-sand transition-colors hover:border-kb-copper hover:text-kb-copper"
          >
            Cotizar
          </Link>
        </div>
      </div>
    </article>
  );
}
