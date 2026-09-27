import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Cpu, HardHat, Headset, PencilRuler } from "lucide-react";
import { LogoSymbol } from "@/components/brand/Logo";
import { BrandPattern } from "@/components/brand/Pattern";
import { CategoryCard } from "@/components/catalog/CategoryCard";
import { FeaturedRail } from "@/components/home/FeaturedRail";
import { ButtonLink } from "@/components/ui/Button";
import { CtaBand } from "@/components/ui/CtaBand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CATEGORIES } from "@/data/categories";
import { IMG } from "@/data/images";
import { JOBS } from "@/data/jobs";
import { STATS } from "@/data/site";
import { getFeatured, getProductsByCategory, toSummary } from "@/lib/catalog";

const PROCESS = [
  { icon: PencilRuler, title: "Ingeniería", text: "Estudios, diseño y cálculo con criterios de constructibilidad y seguridad desde el día uno." },
  { icon: HardHat, title: "Construcción", text: "Obras civiles, estructuras y montaje industrializado para reducir riesgos y plazos en altura." },
  { icon: Cpu, title: "Tecnología", text: "Conectividad, monitoreo y automatización integradas en una sola plataforma operativa." },
  { icon: Headset, title: "Operación y soporte", text: "Acompañamiento 24/7, mantenimiento y mejora continua durante todo el ciclo de vida." },
];

const ENVIRONMENTS = [
  { label: "Tajo abierto", image: IMG.openPit },
  { label: "Minería subterránea", image: IMG.tunnelLit },
  { label: "Planta de procesos", image: IMG.drillRig },
  { label: "Campamentos", image: IMG.modularGray },
];

export default function HomePage() {
  const featured = getFeatured(8);
  const categoryNames = Object.fromEntries(CATEGORIES.map((c) => [c.slug, c.shortName]));
  const aquasmart = featured.find((p) => p.model === "AquaSmart");

  return (
    <>
      {/* HERO */}
      <section className="relative isolate flex min-h-[calc(100svh-72px)] flex-col overflow-hidden lg:min-h-[calc(100svh-108px)]">
        <Image src={IMG.pitTruck.src} alt={IMG.pitTruck.alt} fill priority sizes="100vw" className="-z-20 object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-kb-black via-kb-black/75 to-kb-black/10" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-gradient-to-t from-kb-black via-kb-black/60 to-transparent" />

        <div className="container-kb flex flex-1 flex-col justify-center py-20">
          <div className="max-w-3xl animate-fade-up">
            <p className="eyebrow flex items-center gap-3 text-kb-copper">
              <span aria-hidden className="h-px w-10 bg-kb-copper" /> Construcción y tecnología minera
            </p>
            <h1 className="mt-6 text-[2.5rem] leading-[1.04] font-light tracking-tight text-balance min-[400px]:text-5xl sm:text-6xl lg:text-7xl">
              Sistemas inteligentes, <strong className="font-semibold text-kb-gold-gradient">obras indestructibles.</strong>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-kb-sand/85">
              Redefinimos la forma de construir el futuro de la minería con soluciones robustas y de alta ingeniería, diseñadas para los entornos más
              exigentes.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/soluciones/" size="lg">
                Explorar soluciones <ArrowRight className="size-4" aria-hidden />
              </ButtonLink>
              <ButtonLink href="/contacto/?asunto=cotizacion" size="lg" variant="secondary">
                Solicitar cotización
              </ButtonLink>
            </div>
          </div>
        </div>

        {aquasmart && (
          <Link
            href={`/soluciones/${aquasmart.category}/${aquasmart.slug}/`}
            className="group absolute right-6 bottom-40 hidden max-w-xs items-center gap-4 rounded-sm border border-kb-line bg-kb-black/70 p-4 backdrop-blur-md transition-colors hover:border-kb-copper xl:flex"
          >
            <span className="relative size-16 shrink-0 overflow-hidden rounded-sm">
              <Image src={aquasmart.images[0].src} alt="" fill sizes="64px" className="object-cover" />
            </span>
            <span>
              <span className="eyebrow text-kb-copper">Nuevo</span>
              <span className="mt-1 block text-sm leading-snug font-medium">{aquasmart.name}</span>
              <span className="mt-1 inline-flex items-center gap-1 text-xs text-kb-stone group-hover:text-kb-sand">
                Conocer más <ArrowUpRight className="size-3" aria-hidden />
              </span>
            </span>
          </Link>
        )}

        <div className="border-t border-kb-line/70 bg-kb-black/60 backdrop-blur-md">
          <dl className="container-kb grid grid-cols-2 lg:grid-cols-4">
            {STATS.map((s, i) => (
              <div key={s.label} className={`py-6 lg:py-8 ${i % 2 === 1 ? "pl-6" : ""} ${i > 0 ? "lg:border-l lg:border-kb-line lg:pl-8" : ""}`}>
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="block text-3xl font-light text-kb-sand tabular-nums lg:text-4xl">{s.value}</span>
                  <span className="mt-1 block text-xs leading-snug text-kb-stone sm:text-sm">{s.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* MANIFIESTO */}
      <section className="relative isolate overflow-hidden bg-kb-sand text-kb-black">
        <BrandPattern className="absolute inset-y-0 left-0 -z-10 hidden h-full w-48 text-kb-black/[0.08] lg:block" size={96} />
        <div className="container-kb grid items-center gap-12 py-24 lg:grid-cols-[1fr_280px] lg:py-32 lg:pl-60">
          <div>
            <p className="eyebrow text-kb-brown">Concepto creativo</p>
            <p className="mt-6 text-2xl leading-snug font-light text-balance sm:text-3xl lg:text-[2.5rem] lg:leading-[1.2]">
              King Builder no es solo una empresa de construcción: es un <strong className="font-semibold">motor de transformación</strong> que impulsa la
              evolución de la minería, donde cada proyecto se ejecuta con <strong className="font-semibold">autoridad técnica</strong>.
            </p>
            <Link href="/nosotros/" className="mt-10 inline-flex items-center gap-2 border-b border-kb-black pb-1 text-sm font-medium hover:border-kb-brown hover:text-kb-brown">
              Conoce nuestra historia <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
          <LogoSymbol className="mx-auto hidden w-56 lg:block" />
        </div>
      </section>

      {/* SOLUCIONES */}
      <section className="container-kb py-24 lg:py-32">
        <SectionHeading
          eyebrow="Soluciones"
          title={
            <>
              Seis líneas integradas para <strong>construir, conectar y proteger</strong> tu operación.
            </>
          }
          action={
            <ButtonLink href="/soluciones/" variant="secondary">
              Ver todas las soluciones <ArrowRight className="size-4" aria-hidden />
            </ButtonLink>
          }
        />
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c, i) => (
            <li key={c.slug}>
              <CategoryCard category={c} count={getProductsByCategory(c.slug).length} index={i} />
            </li>
          ))}
        </ul>
      </section>

      {/* DESTACADOS */}
      <section className="border-y border-kb-line bg-kb-ink py-24 lg:py-32">
        <div className="container-kb">
          <SectionHeading eyebrow="Destacados" title={<>Soluciones más <strong>solicitadas</strong></>} className="mb-14" />
          <FeaturedRail products={featured.map(toSummary)} categoryNames={categoryNames} />
        </div>
      </section>

      {/* CÓMO TRABAJAMOS */}
      <section className="container-kb grid gap-16 py-24 lg:grid-cols-[1fr_1.1fr] lg:py-32">
        <div className="relative min-h-[420px] overflow-hidden rounded-sm">
          <Image src={IMG.workersTablet.src} alt={IMG.workersTablet.alt} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-kb-black/80 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8">
            <p className="text-5xl font-light text-kb-sand">360°</p>
            <p className="mt-1 max-w-xs text-sm text-kb-sand/80">Un solo responsable desde la ingeniería hasta la operación.</p>
          </div>
        </div>
        <div>
          <SectionHeading
            eyebrow="Cómo trabajamos"
            title={
              <>
                Ingeniería con <strong>autoridad técnica</strong>, de principio a fin.
              </>
            }
            description="Integramos cada especialidad para que tu proyecto avance con seguridad, calidad y plazos predecibles."
          />
          <ol className="mt-12 flex flex-col">
            {PROCESS.map((s, i) => (
              <li key={s.title} className="group grid grid-cols-[48px_1fr] gap-5 border-t border-kb-line py-6">
                <span className="flex size-12 items-center justify-center rounded-sm border border-kb-line text-kb-copper transition-colors group-hover:border-kb-copper">
                  <s.icon className="size-5" aria-hidden />
                </span>
                <div>
                  <h3 className="flex items-baseline gap-3 text-lg font-medium">
                    <span className="text-xs font-medium text-kb-stone tabular-nums">0{i + 1}</span> {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-kb-stone">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ENTORNOS */}
      <section className="border-t border-kb-line py-24 lg:py-32">
        <div className="container-kb">
          <SectionHeading
            eyebrow="Entornos de aplicación"
            title={<>Diseñado para los <strong>entornos más exigentes</strong></>}
            description="Desde tajos a más de 4 500 m s. n. m. hasta galerías subterráneas: filtra el catálogo según tu entorno de operación."
            className="mb-14"
          />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ENVIRONMENTS.map((e) => (
              <li key={e.label}>
                <Link
                  href={`/catalogo/?aplicacion=${encodeURIComponent(e.label)}`}
                  className="group relative isolate flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-sm p-6"
                >
                  <Image src={e.image.src} alt="" fill sizes="(min-width: 1024px) 25vw, 50vw" className="-z-20 object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-kb-black via-kb-black/40 to-transparent" />
                  <h3 className="text-xl font-medium">{e.label}</h3>
                  <span className="mt-2 inline-flex items-center gap-1.5 text-sm text-kb-copper">
                    Ver soluciones <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CARRERAS */}
      <section className="relative isolate overflow-hidden border-t border-kb-line">
        <Image src={IMG.workersSite.src} alt="" fill sizes="100vw" className="-z-20 object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-kb-black via-kb-black/90 to-kb-black/30" />
        <div className="container-kb py-24 lg:py-32">
          <div className="max-w-xl">
            <p className="eyebrow text-kb-copper">Carreras</p>
            <h2 className="mt-4 text-4xl leading-tight font-light tracking-tight sm:text-5xl">
              Construye el futuro <strong className="font-semibold">con nosotros.</strong>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-kb-sand/80">
              Ingenieros, técnicos, operadores y especialistas en tecnología que comparten una cultura: la seguridad primero y la excelencia en cada obra.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href="/carreras/" size="lg">
                Ver {JOBS.length} ofertas abiertas <ArrowRight className="size-4" aria-hidden />
              </ButtonLink>
              <Link href="/contacto/?asunto=talento" className="px-2 text-sm font-medium text-kb-sand hover:text-kb-copper">
                Únete a nuestra comunidad de talento
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
