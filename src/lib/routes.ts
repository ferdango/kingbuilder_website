// Rutas del sitio. Sin dependencias de datos para poder usarse en componentes cliente
// sin arrastrar el catálogo completo al bundle.

export function productHref(p: { category: string; slug: string }) {
  return `/soluciones/${p.category}/${p.slug}/`;
}

export function categoryHref(slug: string) {
  return `/soluciones/${slug}/`;
}

export function quoteHref(p?: { slug: string }) {
  return p ? `/contacto/?asunto=cotizacion&solucion=${p.slug}` : "/contacto/?asunto=cotizacion";
}
