import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CategoryCard } from "@/components/catalog/CategoryCard";
import { CtaBand } from "@/components/ui/CtaBand";
import { PageHero } from "@/components/ui/PageHero";
import { CATEGORIES } from "@/data/categories";
import { IMG } from "@/data/images";
import { PRODUCTS } from "@/data/products";
import { getProductsByCategory } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Soluciones",
  description:
    "Soluciones de construcción, infraestructura, conectividad, monitoreo y seguridad para operaciones mineras en el Perú.",
};

export default function SolucionesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Soluciones" }]}
        eyebrow="Soluciones"
        title={
          <>
            Todo lo que tu operación necesita, <strong>de la obra a la red.</strong>
          </>
        }
        description="Seis líneas de solución integradas para construir, conectar y proteger operaciones mineras en los entornos más exigentes."
        image={IMG.pitAerial}
      >
        <p className="mt-6 text-sm text-kb-stone">
          {CATEGORIES.length} líneas · {PRODUCTS.length} soluciones ·{" "}
          <Link href="/catalogo/" className="text-kb-copper hover:underline">
            ver catálogo completo
          </Link>
        </p>
      </PageHero>

      <section className="container-kb py-16 lg:py-24" aria-label="Líneas de solución">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c, i) => (
            <li key={c.slug}>
              <CategoryCard category={c} count={getProductsByCategory(c.slug).length} index={i} />
            </li>
          ))}
        </ul>

        <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-kb-line bg-kb-line md:grid-cols-3">
          {[
            { t: "Ingeniería propia", d: "Diseño, cálculo y documentación con equipos multidisciplinarios." },
            { t: "Ejecución llave en mano", d: "Un solo responsable desde la ingeniería hasta la puesta en marcha." },
            { t: "Soporte 24/7 en campo", d: "Técnicos y repuestos en las principales regiones mineras del país." },
          ].map((x) => (
            <div key={x.t} className="bg-kb-black p-8">
              <p className="text-lg font-medium text-kb-sand">{x.t}</p>
              <p className="mt-2 text-sm leading-relaxed text-kb-stone">{x.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link href="/catalogo/" className="inline-flex items-center gap-2 text-sm font-medium text-kb-copper hover:underline">
            Filtrar todas las soluciones en el catálogo <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
