"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Check, Plus, X } from "lucide-react";
import type { Feature } from "@/data/types";

const INITIAL = 6;

export function FeatureCards({ features }: { features: Feature[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const visible = showAll ? features : features.slice(0, INITIAL);
  const current = open !== null ? features[open] : null;

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (open !== null && !d.open) d.showModal();
    if (open === null && d.open) d.close();
  }, [open]);

  return (
    <>
      <ul className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {visible.map((f, i) => (
          <li key={f.title} className="group flex flex-col overflow-hidden rounded-sm border border-kb-line bg-kb-graphite">
            {f.image && (
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image src={f.image.src} alt={f.image.alt} fill sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            )}
            <div className="flex flex-1 flex-col p-6">
              <h3 className="eyebrow text-kb-copper">{f.title}</h3>
              <p className="mt-3 text-lg leading-snug font-medium text-kb-sand">{f.subtitle}</p>
              <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-kb-stone">{f.text}</p>
              <button
                type="button"
                onClick={() => setOpen(i)}
                className="mt-auto inline-flex items-center gap-2 self-start pt-6 text-sm font-medium text-kb-sand transition-colors hover:text-kb-copper"
              >
                <span className="flex size-7 items-center justify-center rounded-full border border-kb-line group-hover:border-kb-copper">
                  <Plus className="size-4" aria-hidden />
                </span>
                Más información
              </button>
            </div>
          </li>
        ))}
      </ul>
      {features.length > INITIAL && !showAll && (
        <div className="mt-10 text-center">
          <button type="button" onClick={() => setShowAll(true)} className="rounded-sm border border-kb-line px-6 py-3 text-sm font-medium hover:border-kb-copper hover:text-kb-copper">
            Ver más características
          </button>
        </div>
      )}

      <dialog
        ref={dialogRef}
        onClose={() => setOpen(null)}
        onClick={(e) => e.target === dialogRef.current && setOpen(null)}
        aria-label={current?.title}
        className="m-auto w-[calc(100%-2rem)] max-w-3xl overflow-hidden rounded-md border border-kb-line bg-kb-graphite p-0 text-kb-sand backdrop:bg-black/70 backdrop:backdrop-blur-sm"
      >
        {current && (
          <div className="grid md:grid-cols-2">
            {current.image && (
              <div className="relative aspect-[4/3] md:aspect-auto">
                <Image src={current.image.src} alt={current.image.alt} fill sizes="(min-width: 768px) 384px, 100vw" className="object-cover" />
              </div>
            )}
            <div className="relative p-8">
              <button type="button" onClick={() => setOpen(null)} aria-label="Cerrar" className="absolute top-4 right-4 rounded-sm p-1.5 text-kb-stone hover:bg-kb-coal hover:text-kb-sand">
                <X className="size-5" aria-hidden />
              </button>
              <p className="eyebrow text-kb-copper">{current.title}</p>
              <h3 className="mt-3 pr-8 text-2xl leading-tight font-medium">{current.subtitle}</h3>
              <p className="mt-4 text-sm leading-relaxed text-kb-stone">{current.text}</p>
              {current.points && (
                <ul className="mt-6 flex flex-col gap-3">
                  {current.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-kb-copper" aria-hidden />
                      {p}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
