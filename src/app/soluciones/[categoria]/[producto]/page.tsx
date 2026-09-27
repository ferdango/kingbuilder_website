import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Download, Headset, ShieldCheck, Wrench } from "lucide-react";
import { Badge, ProductCard } from "@/components/catalog/ProductCard";
import { FeatureCards } from "@/components/product/FeatureCards";
import { Gallery } from "@/components/product/Gallery";
import { SpecsSection } from "@/components/product/SpecsSection";
import { SubNav } from "@/components/product/SubNav";
import { KeySpecs, UnitsProvider, UnitsToggle } from "@/components/product/Units";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/Button";
import { CtaBand } from "@/components/ui/CtaBand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PRODUCTS } from "@/data/products";
import { SITE } from "@/data/site";
import { categoryHref, getCategory, getProduct, getProductsByCategory, getRelated, productHref, quoteHref, toSummary } from "@/lib/catalog";

export const dynamicParams = false;

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ categoria: p.category, producto: p.slug }));
}

export async function generateMetadata(props: PageProps<"/soluciones/[categoria]/[producto]">): Promise<Metadata> {
  const { categoria, producto } = await props.params;
  const p = getProduct(categoria, producto);
  if (!p) return {};
  return {
    title: p.name,
    description: p.summary,
    openGraph: { title: p.name, description: p.summary, images: [{ url: `${p.images[0].src}?w=1200&h=630&fit=crop` }] },
  };
}

export default async function ProductoPage(props: PageProps<"/soluciones/[categoria]/[producto]">) {
  const { categoria, producto } = await props.params;
  const product = getProduct(categoria, producto);
  const category = getCategory(categoria);
  if (!product || !category) notFound();

  const related = getRelated(product, 3);
  const quote = quoteHref(product);
  const hasImperial = product.keySpecs.some((s) => s.imperial);

  const sections = [
    { id: "descripcion", label: "Descripción general" },
    { id: "beneficios", label: "Beneficios" },
    ...(product.features.length ? [{ id: "caracteristicas", label: "Características" }] : []),
    { id: "especificaciones", label: "Especificaciones" },
    ...(related.length ? [{ id: "relacionados", label: "Relacionados" }] : []),
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    model: product.model,
    description: product.summary,
    image: product.images.map((i) => i.src),
    brand: { "@type": "Brand", name: SITE.name },
    category: category.name,
    url: `${SITE.url}${productHref(product)}`,
  };

  return (
    <UnitsProvider>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Encabezado de producto */}
      <section className="container-kb pt-8 pb-14 lg:pb-20">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Breadcrumbs
            items={[
              { label: "Soluciones", href: "/soluciones/" },
              { label: category.shortName, href: categoryHref(category.slug) },
              { label: product.name },
            ]}
          />
          {hasImperial && <UnitsToggle />}
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-14">
          <Gallery images={product.images} name={product.name} />

          <div className="flex flex-col">
            <div className="flex flex-wrap items-center gap-3">
              <Link href={categoryHref(category.slug)} className="eyebrow text-kb-copper hover:underline">
                {category.name}
              </Link>
              {product.badge && <Badge>{product.badge}</Badge>}
            </div>
            <h1 className="mt-4 text-3xl leading-tight font-medium tracking-tight text-balance sm:text-4xl">{product.name}</h1>
            <p className="mt-2 text-sm text-kb-stone">Modelo {product.model}</p>
            <p className="mt-5 text-base leading-relaxed text-kb-sand/85">{product.summary}</p>

            <div className="mt-8">
              <KeySpecs specs={product.keySpecs} />
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <ButtonLink href={quote} size="lg" className="flex-1">
                Solicitar cotización <ArrowRight className="size-4" aria-hidden />
              </ButtonLink>
              <ButtonLink href="/contacto/?asunto=especialista" variant="secondary" size="lg" className="flex-1">
                <Headset className="size-4" aria-hidden /> Hablar con un especialista
              </ButtonLink>
            </div>
            <a href="#especificaciones" className="mt-4 inline-flex items-center gap-2 self-start text-sm text-kb-stone hover:text-kb-copper">
              <Download className="size-4" aria-hidden /> Ver e imprimir ficha técnica
            </a>

            <ul className="mt-auto grid grid-cols-3 gap-3 border-t border-kb-line pt-6 text-xs text-kb-stone max-lg:mt-8">
              <li className="flex flex-col gap-2">
                <ShieldCheck className="size-5 text-kb-copper" aria-hidden /> Garantía y respaldo de fábrica
              </li>
              <li className="flex flex-col gap-2">
                <Wrench className="size-5 text-kb-copper" aria-hidden /> Instalación y puesta en marcha
              </li>
              <li className="flex flex-col gap-2">
                <Headset className="size-5 text-kb-copper" aria-hidden /> {SITE.support}
              </li>
            </ul>
          </div>
        </div>
      </section>

      <SubNav items={sections} quoteHref={quote} name={product.name} />

      {/* Descripción general */}
      <section id="descripcion" className="scroll-mt-36 border-b border-kb-line">
        <div className="container-kb grid gap-10 py-20 lg:grid-cols-[1fr_1.3fr] lg:py-24">
          <SectionHeading eyebrow="Descripción general" title={product.overview.heading} />
          <div className="text-lg leading-relaxed text-kb-sand/85">
            <p>{product.overview.text}</p>
            {product.compatible && (
              <div className="mt-10">
                <h3 className="eyebrow text-kb-copper">Equipos compatibles</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {product.compatible.map((c) => (
                    <li key={c} className="rounded-full border border-kb-line px-4 py-2 text-sm text-kb-sand">
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section id="beneficios" className="scroll-mt-36 bg-kb-sand text-kb-black">
        <div className="container-kb py-20 lg:py-24">
          <SectionHeading eyebrow="Beneficios" title="Por qué elegir esta solución" tone="light" />
          <ol className="mt-14 grid gap-10 md:grid-cols-3">
            {product.benefits.map((b, i) => (
              <li key={b.title} className="border-t-2 border-kb-black pt-6">
                <span className="text-sm font-semibold text-kb-brown tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-xl leading-snug font-medium">{b.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-kb-black/70">{b.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Características */}
      {product.features.length > 0 && (
        <section id="caracteristicas" className="scroll-mt-36 border-b border-kb-line">
          <div className="container-kb py-20 lg:py-24">
            <SectionHeading eyebrow="Características" title="Características de un vistazo" className="mb-12" />
            <FeatureCards features={product.features} />
          </div>
        </section>
      )}

      {/* Especificaciones */}
      <section id="especificaciones" className="scroll-mt-36">
        <div className="container-kb py-20 lg:py-24">
          <SectionHeading eyebrow="Ficha técnica" title={<>Especificaciones de <strong>{product.name}</strong></>} className="mb-10" />
          <SpecsSection name={product.name} specs={product.specs} standard={product.standard} optional={product.optional} />
        </div>
      </section>

      {/* Relacionados */}
      {related.length > 0 && (
        <section id="relacionados" className="scroll-mt-36 border-t border-kb-line bg-kb-ink" data-no-print>
          <div className="container-kb py-20 lg:py-24">
            <SectionHeading
              eyebrow={category.shortName}
              title="Soluciones relacionadas"
              action={
                <Link href={categoryHref(category.slug)} className="inline-flex items-center gap-2 text-sm font-medium text-kb-copper hover:underline">
                  Ver todas ({getProductsByCategory(category.slug).length}) <ArrowRight className="size-4" aria-hidden />
                </Link>
              }
              className="mb-12"
            />
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <li key={p.slug}>
                  <ProductCard product={toSummary(p)} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <CtaBand
        title={
          <>
            Cotiza <strong>{product.name}</strong> para tu operación
          </>
        }
        href={quote}
      />
    </UnitsProvider>
  );
}
