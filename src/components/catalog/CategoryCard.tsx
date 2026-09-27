import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Category } from "@/data/types";
import { categoryHref } from "@/lib/routes";
import { cn } from "@/lib/utils";

export function CategoryCard({
  category,
  count,
  index,
  size = "md",
}: {
  category: Category;
  count: number;
  index?: number;
  size?: "md" | "lg";
}) {
  return (
    <Link
      href={categoryHref(category.slug)}
      className={cn(
        "group relative isolate flex flex-col justify-end overflow-hidden rounded-sm bg-kb-coal",
        size === "lg" ? "min-h-[420px]" : "min-h-[340px]",
      )}
    >
      <Image
        src={category.image.src}
        alt=""
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="-z-20 object-cover transition-transform duration-700 ease-kb group-hover:scale-105"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-kb-black via-kb-black/70 to-kb-black/10 transition-opacity duration-500 group-hover:from-kb-black group-hover:via-kb-black/80" />
      <div className="absolute inset-x-0 top-0 -z-10 h-28 bg-gradient-to-b from-kb-black/60 to-transparent" />
      {index !== undefined && (
        <span className="absolute top-6 left-6 text-sm font-medium text-kb-copper tabular-nums">{String(index + 1).padStart(2, "0")}</span>
      )}
      <div className="p-6 pt-24">
        <p className="eyebrow text-kb-sand/70">{count} soluciones</p>
        <h3 className="mt-2 text-2xl leading-tight font-medium text-kb-sand">{category.name}</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-kb-sand/75">{category.tagline}</p>
        <span className="mt-6 inline-flex items-center gap-2 border-b border-kb-copper/0 pb-0.5 text-sm font-medium text-kb-copper transition-colors group-hover:border-kb-copper">
          Explorar <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
        </span>
      </div>
      <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-kb-gold-sheen transition-transform duration-500 group-hover:scale-x-100" />
    </Link>
  );
}
