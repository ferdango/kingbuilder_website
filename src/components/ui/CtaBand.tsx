import { ArrowRight, Phone } from "lucide-react";
import { BrandPattern } from "@/components/brand/Pattern";
import { SITE } from "@/data/site";
import { ButtonLink } from "./Button";

export function CtaBand({
  title = (
    <>
      ¿Listo para construir tu <strong>próximo gran proyecto</strong>?
    </>
  ),
  text = "Cuéntanos sobre tu operación. Un especialista de King Builder te contactará en menos de 24 horas hábiles con una propuesta a la medida.",
  href = "/contacto/?asunto=cotizacion",
  cta = "Solicitar cotización",
}: {
  title?: React.ReactNode;
  text?: string;
  href?: string;
  cta?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-kb-sand text-kb-black" data-no-print>
      <BrandPattern className="absolute inset-y-0 right-0 -z-10 h-full w-1/2 text-kb-black/[0.06] [mask-image:linear-gradient(to_left,black,transparent)]" size={140} />
      <div className="container-kb flex flex-col gap-10 py-20 lg:flex-row lg:items-center lg:justify-between lg:py-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl leading-tight font-light tracking-tight text-balance sm:text-4xl [&_strong]:font-semibold">{title}</h2>
          <p className="mt-4 text-base leading-relaxed text-kb-black/70 sm:text-lg">{text}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={href} variant="dark" size="lg">
            {cta} <ArrowRight className="size-4" aria-hidden />
          </ButtonLink>
          <ButtonLink href={SITE.phoneHref} variant="light" size="lg">
            <Phone className="size-4" aria-hidden /> {SITE.phone}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
