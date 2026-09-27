import type { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";
import { GraduationCap, HardHat, Mountain } from "lucide-react";
import { JobListing } from "@/components/careers/JobListing";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/Button";
import { IMG } from "@/data/images";
import { JOB_BENEFITS, JOBS, toJobSummary } from "@/data/jobs";

export const metadata: Metadata = {
  title: "Carreras",
  description: "Ofertas laborales en King Builder: ingeniería, operaciones, tecnología, SSOMA y más en proyectos mineros del Perú.",
};

const PILLARS = [
  { icon: HardHat, title: "La seguridad primero", text: "Nadie se expone a un riesgo no controlado. Es nuestro primer valor y no se negocia." },
  { icon: Mountain, title: "Proyectos que desafían", text: "Obras a más de 4 500 m s. n. m. con la tecnología más avanzada del sector." },
  { icon: GraduationCap, title: "Crecimiento real", text: "Capacitación continua, certificaciones y línea de carrera en cada especialidad." },
];

export default function CarrerasPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-kb-line">
        <div className="absolute inset-x-0 top-0 -z-10 h-[640px]">
          <Image src={IMG.workersRebar.src} alt="" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-kb-black/85 via-kb-black/75 to-kb-black" />
        </div>
        <div className="container-kb pt-10 pb-16 lg:pb-20">
          <Breadcrumbs items={[{ label: "Carreras" }]} />
          <div className="mt-14 max-w-3xl">
            <p className="eyebrow flex items-center gap-3 text-kb-copper">
              <span aria-hidden className="h-px w-8 bg-kb-copper" />
              {JOBS.length} ofertas abiertas
            </p>
            <h1 className="mt-4 text-4xl leading-[1.05] font-light tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Haz el trabajo <strong className="font-semibold">que construye el futuro.</strong>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-kb-sand/80">
              Únete a un equipo de ingenieros, técnicos y especialistas que llevan la construcción y la tecnología minera a otro nivel.
            </p>
          </div>
          <div className="mt-12">
            <Suspense fallback={<div className="h-16 rounded-sm border border-kb-line" />}>
              <JobListing jobs={JOBS.map(toJobSummary)} />
            </Suspense>
          </div>
        </div>
      </section>

      <section className="bg-kb-sand text-kb-black">
        <div className="container-kb grid gap-14 py-20 lg:grid-cols-[1fr_1.2fr] lg:py-24">
          <div>
            <p className="eyebrow text-kb-brown">Vida en King Builder</p>
            <h2 className="mt-4 text-3xl leading-tight font-light tracking-tight sm:text-4xl">
              Una cultura construida sobre <strong className="font-semibold">solidez y precisión.</strong>
            </h2>
            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {JOB_BENEFITS.map((b) => (
                <li key={b} className="border-l-2 border-kb-brown py-1 pl-4 text-sm leading-relaxed">
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <ul className="grid gap-6">
            {PILLARS.map((p) => (
              <li key={p.title} className="flex gap-5 rounded-sm bg-kb-black p-6 text-kb-sand">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-sm bg-kb-gold-gradient text-kb-black">
                  <p.icon className="size-5" aria-hidden />
                </span>
                <div>
                  <h3 className="text-lg font-medium">{p.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-kb-stone">{p.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-kb flex flex-col items-start justify-between gap-8 py-20 md:flex-row md:items-center">
        <div className="max-w-xl">
          <h2 className="text-3xl leading-tight font-light">
            ¿No encuentras el puesto ideal? <strong className="font-semibold">Únete a nuestra comunidad de talento.</strong>
          </h2>
          <p className="mt-3 text-kb-stone">Déjanos tu CV y te contactaremos cuando se abra una posición acorde a tu perfil.</p>
        </div>
        <ButtonLink href="/contacto/?asunto=talento" size="lg">
          Enviar mi CV
        </ButtonLink>
      </section>
    </>
  );
}
