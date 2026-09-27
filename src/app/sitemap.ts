import type { MetadataRoute } from "next";
import { CATEGORIES } from "@/data/categories";
import { JOBS } from "@/data/jobs";
import { PRODUCTS } from "@/data/products";
import { SITE } from "@/data/site";
import { categoryHref, productHref } from "@/lib/catalog";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/soluciones/",
    "/catalogo/",
    "/nosotros/",
    "/carreras/",
    "/contacto/",
    ...CATEGORIES.map((c) => categoryHref(c.slug)),
    ...PRODUCTS.map((p) => productHref(p)),
    ...JOBS.map((j) => `/carreras/${j.id}/`),
  ];
  return paths.map((p) => ({ url: `${SITE.url}${p}` }));
}
