import { CATEGORIES, COMMON_FACETS } from "@/data/categories";
import { PRODUCTS } from "@/data/products";
import type { Category, FacetDef, Product, ProductSummary } from "@/data/types";
import { categoryHref, productHref } from "./routes";

export { categoryHref, productHref, quoteHref } from "./routes";

export function getCategory(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function getProductsByCategory(slug: string): Product[] {
  return PRODUCTS.filter((p) => p.category === slug);
}

export function getProduct(category: string, slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.category === category && p.slug === slug);
}

export function facetsForCategory(category: Category): FacetDef[] {
  return [...category.facets, ...COMMON_FACETS];
}

export function getFeatured(limit = 8): Product[] {
  return PRODUCTS.filter((p) => p.badge).slice(0, limit);
}

export function getRelated(product: Product, limit = 3): Product[] {
  return PRODUCTS.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, limit);
}

/** Versión liviana de un producto para tarjetas y listados en componentes cliente. */
export function toSummary(p: Product): ProductSummary {
  return {
    slug: p.slug,
    category: p.category,
    name: p.name,
    tagline: p.tagline,
    badge: p.badge,
    year: p.year,
    attributes: p.attributes,
    image: p.images[0],
    keySpecs: p.keySpecs.slice(0, 2),
  };
}

/** Datos mínimos para el buscador del encabezado. */
export function getSearchIndex() {
  return [
    ...CATEGORIES.map((c) => ({
      type: "Categoría" as const,
      title: c.name,
      subtitle: c.tagline,
      href: categoryHref(c.slug),
      keywords: `${c.name} ${c.description}`,
    })),
    ...PRODUCTS.map((p) => ({
      type: "Solución" as const,
      title: p.name,
      subtitle: getCategory(p.category)?.shortName ?? "",
      href: productHref(p),
      keywords: `${p.name} ${p.model} ${p.tagline} ${Object.values(p.attributes).flat().join(" ")}`,
    })),
  ];
}

export type SearchEntry = ReturnType<typeof getSearchIndex>[number];
