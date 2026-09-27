import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Briefcase, CalendarDays, Clock, Layers, MapPin } from "lucide-react";
import { ApplyForm } from "@/components/careers/ApplyForm";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/Button";
import { JOB_BENEFITS, JOBS } from "@/data/jobs";
import { SITE } from "@/data/site";
import { formatDate } from "@/lib/utils";

export const dynamicParams = false;

export function generateStaticParams() {
  return JOBS.map((j) => ({ id: j.id }));
}

export async function generateMetadata(props: PageProps<"/carreras/[id]">): Promise<Metadata> {
  const { id } = await props.params;
  const job = JOBS.find((j) => j.id === id);
  return job ? { title: `${job.title} — ${job.location}`, description: job.summary } : {};
}

export default async function JobPage(props: PageProps<"/carreras/[id]">) {
  const { id } = await props.params;
  const job = JOBS.find((j) => j.id === id);
  if (!job) notFound();
  const similar = JOBS.filter((j) => j.area === job.area && j.id !== job.id).slice(0, 4);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.summary,
    datePosted: job.posted,
    employmentType: job.contract === "Tiempo completo" ? "FULL_TIME" : job.contract === "Prácticas profesionales" ? "INTERN" : "CONTRACTOR",
    hiringOrganization: { "@type": "Organization", name: SITE.name, sameAs: SITE.url },
    jobLocation: { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: job.location, addressRegion: job.region, addressCountry: "PE" } },
    identifier: { "@type": "PropertyValue", name: SITE.name, value: job.id },
  };

  const meta = [
    { icon: MapPin, label: "Ubicación", value: `${job.location}, Perú` },
    { icon: Layers, label: "Área", value: job.area },
    { icon: Briefcase, label: "Contrato", value: job.contract },
    { icon: Clock, label: "Régimen", value: job.schedule },
    { icon: CalendarDays, label: "Publicado", value: formatDate(job.posted) },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="border-b border-kb-line bg-kb-ink">
        <div className="container-kb py-10 lg:py-14">
          <Breadcrumbs items={[{ label: "Carreras", href: "/carreras/" }, { label: job.title }]} />
          <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="eyebrow text-kb-copper">
                {job.area} · {job.id}
              </p>
              <h1 className="mt-3 text-3xl leading-tight font-medium tracking-tight sm:text-4xl lg:text-5xl">{job.title}</h1>
              <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-kb-stone">
                {meta.slice(0, 4).map((m) => (
                  <li key={m.label} className="flex items-center gap-2">
                    <m.icon className="size-4 text-kb-copper" aria-hidden /> {m.value}
                  </li>
                ))}
              </ul>
            </div>
            <ButtonLink href="#postular" size="lg">
              Postular ahora <ArrowRight className="size-4" aria-hidden />
            </ButtonLink>
          </div>
        </div>
      </section>

      <div className="container-kb grid gap-14 py-16 lg:grid-cols-[1fr_360px] lg:py-20">
        <article className="min-w-0">
          <section>
            <h2 className="eyebrow text-kb-copper">Sobre el puesto</h2>
            <p className="mt-4 text-lg leading-relaxed text-kb-sand/85">{job.summary}</p>
          </section>
          {[
            { title: "Responsabilidades", items: job.responsibilities },
            { title: "Requisitos", items: job.requirements },
            { title: "Te ofrecemos", items: JOB_BENEFITS },
          ].map((s) => (
            <section key={s.title} className="mt-12">
              <h2 className="text-2xl font-medium">{s.title}</h2>
              <ul className="mt-5 flex flex-col gap-3">
                {s.items.map((i) => (
                  <li key={i} className="flex gap-3 leading-relaxed text-kb-sand/85">
                    <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rotate-45 bg-kb-copper" />
                    {i}
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <section id="postular" className="mt-16 scroll-mt-28 rounded-sm border border-kb-line bg-kb-graphite p-6 sm:p-10">
            <h2 className="text-2xl font-medium">Postula a este puesto</h2>
            <p className="mt-2 mb-8 text-sm text-kb-stone">Completa tus datos y adjunta tu CV. Toma menos de 3 minutos.</p>
            <ApplyForm jobId={job.id} jobTitle={job.title} />
          </section>
        </article>

        <aside className="flex flex-col gap-6 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-sm border border-kb-line p-6">
            <h2 className="eyebrow text-kb-stone">Resumen</h2>
            <dl className="mt-4 flex flex-col divide-y divide-kb-line text-sm">
              {meta.map((m) => (
                <div key={m.label} className="flex justify-between gap-4 py-3">
                  <dt className="text-kb-stone">{m.label}</dt>
                  <dd className="text-right text-kb-sand">{m.value}</dd>
                </div>
              ))}
              <div className="flex justify-between gap-4 py-3">
                <dt className="text-kb-stone">Nivel</dt>
                <dd className="text-right text-kb-sand">{job.level}</dd>
              </div>
            </dl>
          </div>
          {similar.length > 0 && (
            <div className="rounded-sm border border-kb-line p-6">
              <h2 className="eyebrow text-kb-stone">Empleos similares</h2>
              <ul className="mt-4 flex flex-col gap-4">
                {similar.map((s) => (
                  <li key={s.id}>
                    <Link href={`/carreras/${s.id}/`} className="group block">
                      <span className="block text-sm font-medium text-kb-sand group-hover:text-kb-copper">{s.title}</span>
                      <span className="mt-0.5 block text-xs text-kb-stone">{s.location}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href={`/carreras/?area=${encodeURIComponent(job.area)}#resultados`} className="mt-5 inline-flex items-center gap-1.5 text-sm text-kb-copper hover:underline">
                Ver todos en {job.area} <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
          )}
        </aside>
      </div>
    </>
  );
}
