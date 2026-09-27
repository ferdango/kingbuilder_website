import Image from "next/image";
import type { ReactNode } from "react";
import type { ImageRef } from "@/data/types";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";

/** Encabezado de página interior con imagen de fondo y ruta de navegación. */
export function PageHero({
  eyebrow,
  title,
  description,
  image,
  crumbs,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  image?: ImageRef;
  crumbs: Crumb[];
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden border-b border-kb-line">
      {image && (
        <>
          <Image src={image.src} alt="" fill priority sizes="100vw" className="-z-20 object-cover" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-kb-black via-kb-black/75 to-kb-black/15" />
          <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-kb-black to-transparent" />
        </>
      )}
      <div className="container-kb py-12 sm:py-16 lg:py-20">
        <Breadcrumbs items={crumbs} />
        <div className="mt-10 max-w-3xl">
          {eyebrow && (
            <p className="eyebrow flex items-center gap-3 text-kb-copper">
              <span aria-hidden className="h-px w-8 bg-kb-copper" />
              {eyebrow}
            </p>
          )}
          <h1 className="mt-4 text-4xl leading-[1.05] font-light tracking-tight text-balance sm:text-5xl lg:text-6xl [&_strong]:font-semibold">{title}</h1>
          {description && <p className="mt-6 max-w-2xl text-base leading-relaxed text-kb-sand/80 sm:text-lg">{description}</p>}
          {children}
        </div>
      </div>
    </section>
  );
}
