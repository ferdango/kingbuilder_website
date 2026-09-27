import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ProductListing } from "@/components/catalog/ProductListing";
import { CtaBand } from "@/components/ui/CtaBand";
import { PageHero } from "@/components/ui/PageHero";
import { CATEGORIES } from "@/data/categories";
import { categoryHref, facetsForCategory, getCategory, getProductsByCategory, toSummary } from "@/lib/catalog";
import { cn } from "@/lib/utils";

export const dynamicParams = false;

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ categoria: c.slug }));
}

export async function generateMetadata(props: PageProps<"/soluciones/[categoria]">): Promise<Metadata> {
  const { categoria } = await props.params;
  const c = getCategory(categoria);
  return c ? { title: c.name, description: c.description } : {};
}

export default async function CategoriaPage(props: PageProps<"/soluciones/[categoria]">) {
  const { categoria } = await props.params;
  const category = getCategory(categoria);
  if (!category) notFound();
  const products = getProductsByCategory(category.slug);
  const categoryNames = Object.fromEntries(CATEGORIES.map((c) => [c.slug, c.shortName]));

  return (
    <>
      <PageHero
        crumbs={[{ label: "Soluciones", href: "/soluciones/" }, { label: category.name }]}
        eyebrow={`${products.length} soluciones`}
        title={category.name}
        description={category.description}
        image={category.image}
      />

      {/* Acceso rápido entre categorías */}
      <nav aria-label="Otras líneas de solución" className="border-b border-kb-line bg-kb-ink">
        <ul className="container-kb flex gap-1 overflow-x-auto py-2 [scrollbar-width:none]">
          {CATEGORIES.map((c) => (
            <li key={c.slug}>
              <Link
                href={categoryHref(c.slug)}
                aria-current={c.slug === category.slug ? "page" : undefined}
                className={cn(
                  "block rounded-sm px-3 py-2 text-[13px] font-medium whitespace-nowrap transition-colors",
                  c.slug === category.slug ? "bg-kb-coal text-kb-copper" : "text-kb-stone hover:text-kb-sand",
                )}
              >
                {c.shortName}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <section className="container-kb py-12 lg:py-16">
        <Suspense fallback={<div className="h-96" />}>
          <ProductListing products={products.map(toSummary)} facets={facetsForCategory(category)} categoryNames={categoryNames} />
        </Suspense>
      </section>

      <CtaBand
        title={
          <>
            ¿Necesitas una solución de <strong>{category.shortName.toLowerCase()}</strong> a la medida?
          </>
        }
      />
    </>
  );
}
