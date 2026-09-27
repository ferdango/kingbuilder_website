import type { Metadata } from "next";
import { Suspense } from "react";
import { ProductListing } from "@/components/catalog/ProductListing";
import { CtaBand } from "@/components/ui/CtaBand";
import { PageHero } from "@/components/ui/PageHero";
import { CATEGORIES, COMMON_FACETS } from "@/data/categories";
import { IMG } from "@/data/images";
import { PRODUCTS } from "@/data/products";
import { toSummary } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Catálogo de soluciones",
  description: "Filtra todas las soluciones de King Builder por línea, tipo de aplicación y modalidad de contratación.",
};

export default function CatalogoPage() {
  const categoryNames = Object.fromEntries(CATEGORIES.map((c) => [c.slug, c.shortName]));
  return (
    <>
      <PageHero
        crumbs={[{ label: "Catálogo" }]}
        eyebrow="Catálogo"
        title={
          <>
            Encuentra la solución <strong>exacta</strong> para tu operación.
          </>
        }
        description="Filtra por línea de solución, entorno de aplicación y modalidad: venta, alquiler, proyecto llave en mano o servicio gestionado."
        image={IMG.trucksParked}
      />
      <section className="container-kb py-12 lg:py-16">
        <Suspense fallback={<div className="h-96" />}>
          <ProductListing
            products={PRODUCTS.map(toSummary)}
            facets={[{ key: "categoria", label: "Línea de solución" }, ...COMMON_FACETS]}
            categoryNames={categoryNames}
            showCategoryOnCards
          />
        </Suspense>
      </section>
      <CtaBand />
    </>
  );
}
