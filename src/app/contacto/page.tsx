import type { Metadata } from "next";
import { Suspense } from "react";
import { ArrowUpRight, Clock, Headset, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { PageHero } from "@/components/ui/PageHero";
import { CATEGORIES } from "@/data/categories";
import { IMG } from "@/data/images";
import { PRODUCTS } from "@/data/products";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Contacto y cotizaciones",
  description: "Solicita una cotización o conversa con un especialista de King Builder. Oficina principal en San Isidro, Lima.",
};

export default function ContactoPage() {
  const solutions = PRODUCTS.map((p) => ({
    value: p.slug,
    label: p.name,
    group: CATEGORIES.find((c) => c.slug === p.category)?.name ?? "",
  }));
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${SITE.address}, ${SITE.district}`)}`;

  const cards = [
    { icon: Phone, title: "Central telefónica", lines: [SITE.phone], href: SITE.phoneHref },
    { icon: Mail, title: "Correo", lines: [SITE.email], href: `mailto:${SITE.email}` },
    { icon: Clock, title: "Horario de oficina", lines: [SITE.hours] },
    { icon: Headset, title: "Soporte en campo", lines: ["24 horas, 7 días a la semana", "para clientes con contrato vigente"] },
  ];

  return (
    <>
      <PageHero
        crumbs={[{ label: "Contacto" }]}
        eyebrow="Contacto"
        title={
          <>
            Hablemos de tu <strong>próximo proyecto.</strong>
          </>
        }
        description="Cotizaciones, asesoría técnica, soporte postventa o alianzas: cuéntanos qué necesitas y te conectamos con el especialista indicado."
        image={IMG.workerStructure}
      />

      <section className="container-kb grid gap-14 py-16 lg:grid-cols-[1.4fr_1fr] lg:py-24">
        <div className="rounded-sm border border-kb-line bg-kb-graphite p-6 sm:p-10">
          <h2 className="text-2xl font-medium">Escríbenos</h2>
          <p className="mt-2 mb-8 text-sm text-kb-stone">Todos los campos son obligatorios salvo que se indique lo contrario.</p>
          <Suspense fallback={<div className="h-[520px]" />}>
            <ContactForm solutions={solutions} />
          </Suspense>
        </div>

        <aside className="flex flex-col gap-6">
          <div className="relative isolate overflow-hidden rounded-sm border border-kb-line bg-kb-ink p-8">
            <MapPin className="size-6 text-kb-copper" aria-hidden />
            <h2 className="mt-4 text-xl font-medium">Oficina principal</h2>
            <p className="mt-2 leading-relaxed text-kb-stone">
              {SITE.address}
              <br />
              {SITE.district}
            </p>
            <a href={mapsHref} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-kb-copper hover:underline">
              Ver en Google Maps <ArrowUpRight className="size-4" aria-hidden />
            </a>
          </div>
          <ul className="grid gap-px overflow-hidden rounded-sm border border-kb-line bg-kb-line sm:grid-cols-2 lg:grid-cols-1">
            {cards.map((c) => {
              const body = (
                <>
                  <c.icon className="mt-0.5 size-5 shrink-0 text-kb-copper" aria-hidden />
                  <span>
                    <span className="block text-sm font-medium text-kb-sand">{c.title}</span>
                    {c.lines.map((l) => (
                      <span key={l} className="mt-0.5 block text-sm text-kb-stone">
                        {l}
                      </span>
                    ))}
                  </span>
                </>
              );
              return (
                <li key={c.title} className="bg-kb-black">
                  {c.href ? (
                    <a href={c.href} className="flex gap-4 p-6 transition-colors hover:bg-kb-graphite">
                      {body}
                    </a>
                  ) : (
                    <div className="flex gap-4 p-6">{body}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </aside>
      </section>
    </>
  );
}
