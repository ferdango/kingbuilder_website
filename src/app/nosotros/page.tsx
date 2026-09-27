import type { Metadata } from "next";
import Image from "next/image";
import { Compass, Cpu, Gem, ShieldCheck, Target } from "lucide-react";
import { LogoSymbol } from "@/components/brand/Logo";
import { BrandPattern } from "@/components/brand/Pattern";
import { CtaBand } from "@/components/ui/CtaBand";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IMG } from "@/data/images";
import { STATS } from "@/data/site";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "King Builder desarrolla proyectos de construcción e implementación tecnológica de alta ingeniería para el sector minero. Conoce nuestra misión, visión y valores.",
};

// Textos de misión, visión y concepto creativo tomados del manual de marca 2026.
const VALUES = [
  { icon: ShieldCheck, title: "Seguridad", text: "Cada decisión de ingeniería empieza por proteger a las personas." },
  { icon: Gem, title: "Solidez", text: "Obras y sistemas diseñados para durar en los entornos más exigentes." },
  { icon: Target, title: "Precisión", text: "Rigor técnico en cada cálculo, cada plano y cada instalación." },
  { icon: Cpu, title: "Innovación", text: "Tecnología aplicada para transformar desafíos en eficiencia." },
  { icon: Compass, title: "Excelencia operativa", text: "Cumplimos lo que prometemos, en plazo y con calidad." },
];

const PALETTE = [
  { name: "Negro Estructural", hex: "#1C1C1C", role: "Solidez, autoridad y firmeza", cls: "bg-kb-black border border-kb-line" },
  { name: "Blanco Arena", hex: "#EBE4D8", role: "Amplitud, limpieza y modernidad", cls: "bg-kb-sand" },
  { name: "Arena Cobre", hex: "#DFB17B", role: "Dinamismo, calidez y cercanía", cls: "bg-kb-copper" },
  { name: "Marrón Monolito", hex: "#6E502E", role: "Tierra, estabilidad y permanencia", cls: "bg-kb-brown" },
];

export default function NosotrosPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Nosotros" }]}
        eyebrow="Nosotros"
        title={
          <>
            Construimos el futuro de <strong>la minería.</strong>
          </>
        }
        description="Somos una empresa peruana de construcción e implementación tecnológica de alta ingeniería, aliada estratégica de las operaciones mineras más exigentes."
        image={IMG.manTruck}
      />

      {/* Concepto creativo */}
      <section className="container-kb grid items-center gap-14 py-20 lg:grid-cols-[1.2fr_1fr] lg:py-28">
        <div>
          <SectionHeading eyebrow="Concepto creativo" title={<>Un <strong>motor de transformación</strong> para la minería</>} />
          <div className="mt-8 flex flex-col gap-5 text-lg leading-relaxed text-kb-sand/85">
            <p>
              King Builder no es solo una empresa de construcción: es un motor de transformación que impulsa la evolución y el futuro de la minería.
              Inspirados en la solidez y la precisión de la alta ingeniería, integramos la tecnología más avanzada para convertir cada desafío
              operacional en una obra de máxima eficiencia y rendimiento.
            </p>
            <p className="text-kb-stone">
              Con soluciones robustas creadas para resistir los entornos más exigentes, nos convertimos en el aliado estratégico definitivo, donde
              cada proyecto se ejecuta con autoridad técnica y cada innovación eleva el estándar del sector.
            </p>
          </div>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
          <Image src={IMG.workerSteel.src} alt={IMG.workerSteel.alt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
        </div>
      </section>

      {/* Misión y visión */}
      <section className="relative isolate overflow-hidden bg-kb-sand text-kb-black">
        <BrandPattern className="absolute inset-y-0 right-0 -z-10 h-full w-1/3 text-kb-black/[0.06] [mask-image:linear-gradient(to_left,black,transparent)]" size={120} />
        <div className="container-kb grid gap-6 py-20 md:grid-cols-2 lg:py-28">
          {[
            {
              k: "Misión",
              t: "Desarrollar proyectos de construcción e implementación tecnológica de alta ingeniería para el sector minero, entregando soluciones robustas, seguras y eficientes que optimicen las operaciones de nuestros clientes en los entornos más exigentes.",
            },
            {
              k: "Visión",
              t: "Ser la empresa líder y referente indiscutible en construcción y tecnología minera a nivel regional, reconocida por su capacidad de innovación, solidez estructural y excelencia operativa en cada gran desafío.",
            },
          ].map((x) => (
            <article key={x.k} className="flex flex-col rounded-sm bg-kb-black p-10 text-kb-sand lg:p-12">
              <LogoSymbol className="size-10" />
              <h2 className="mt-8 eyebrow text-kb-copper">{x.k}</h2>
              <p className="mt-4 text-xl leading-relaxed font-light lg:text-2xl">{x.t}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Valores */}
      <section className="container-kb py-20 lg:py-28">
        <SectionHeading eyebrow="Valores" title={<>Lo que nos hace <strong>indestructibles</strong></>} align="center" />
        <ul className="mt-14 grid gap-px overflow-hidden rounded-sm border border-kb-line bg-kb-line sm:grid-cols-2 lg:grid-cols-5">
          {VALUES.map((v) => (
            <li key={v.title} className="bg-kb-black p-8">
              <v.icon className="size-7 text-kb-copper" aria-hidden />
              <h3 className="mt-6 text-lg font-medium">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-kb-stone">{v.text}</p>
            </li>
          ))}
        </ul>

        <dl className="mt-20 grid grid-cols-2 gap-10 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="flex flex-col border-t border-kb-copper pt-6">
              <dt className="order-2 mt-2 text-sm text-kb-stone">{s.label}</dt>
              <dd className="text-4xl font-light text-kb-sand tabular-nums lg:text-5xl">{s.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Identidad */}
      <section className="border-t border-kb-line bg-kb-ink">
        <div className="container-kb grid gap-14 py-20 lg:grid-cols-[1fr_1.4fr] lg:py-28">
          <SectionHeading
            eyebrow="Identidad"
            title={<>Una paleta que transmite <strong>solidez y elegancia</strong></>}
            description="Los tonos oscuros aportan peso estructural y distinción; el tono claro equilibra con amplitud, y el tono arena aporta calidez y versatilidad corporativa."
          />
          <ul className="grid grid-cols-2 gap-4">
            {PALETTE.map((c) => (
              <li key={c.hex}>
                <div className={`aspect-[4/3] rounded-sm ${c.cls}`} />
                <p className="mt-3 text-sm font-medium">{c.name}</p>
                <p className="text-xs text-kb-stone">
                  {c.hex} · {c.role}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
