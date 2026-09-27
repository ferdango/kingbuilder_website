// Rutas del sitio. Sin dependencias de datos para poder usarse en componentes cliente
// sin arrastrar el catálogo completo al bundle.

/** Subruta de publicación (igual que `basePath` en next.config.ts). */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * Antepone la subruta a archivos de /public. `next/link` lo hace solo;
 * `next/image` y `fetch` no.
 */
export function assetPath(path: string) {
  return `${BASE_PATH}${path}`;
}

export function productHref(p: { category: string; slug: string }) {
  return `/soluciones/${p.category}/${p.slug}/`;
}

export function categoryHref(slug: string) {
  return `/soluciones/${slug}/`;
}

export function quoteHref(p?: { slug: string }) {
  return p ? `/contacto/?asunto=cotizacion&solucion=${p.slug}` : "/contacto/?asunto=cotizacion";
}
