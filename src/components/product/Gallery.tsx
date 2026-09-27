"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ImageRef } from "@/data/types";
import { cn } from "@/lib/utils";

export function Gallery({ images, name }: { images: ImageRef[]; name: string }) {
  const [index, setIndex] = useState(0);
  const go = (d: number) => setIndex((i) => (i + d + images.length) % images.length);

  return (
    <div
      className="flex flex-col gap-3"
      role="region"
      aria-roledescription="carrusel"
      aria-label={`Galería de ${name}`}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(1);
        if (e.key === "ArrowLeft") go(-1);
      }}
    >
      <div className="group relative aspect-[4/3] overflow-hidden rounded-sm bg-kb-coal">
        {images.map((img, i) => (
          <Image
            key={img.src}
            src={img.src}
            alt={img.alt}
            fill
            priority={i === 0}
            sizes="(min-width: 1024px) 58vw, 100vw"
            className={cn("object-cover transition-opacity duration-500", i === index ? "opacity-100" : "opacity-0")}
            aria-hidden={i !== index}
          />
        ))}
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Imagen anterior"
              className="absolute top-1/2 left-3 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-kb-black/70 text-kb-sand opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 focus-visible:opacity-100"
            >
              <ChevronLeft className="size-5" aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Imagen siguiente"
              className="absolute top-1/2 right-3 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-kb-black/70 text-kb-sand opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 focus-visible:opacity-100"
            >
              <ChevronRight className="size-5" aria-hidden />
            </button>
            <p className="absolute right-3 bottom-3 rounded-full bg-kb-black/70 px-3 py-1 text-xs text-kb-sand tabular-nums backdrop-blur" aria-live="polite">
              {index + 1} / {images.length}
            </p>
          </>
        )}
      </div>
      {images.length > 1 && (
        <ul className="grid grid-cols-4 gap-3">
          {images.map((img, i) => (
            <li key={img.src}>
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Ver imagen ${i + 1}`}
                aria-current={i === index}
                className={cn(
                  "relative block aspect-[4/3] w-full overflow-hidden rounded-sm border-2 transition-colors",
                  i === index ? "border-kb-copper" : "border-transparent opacity-60 hover:opacity-100",
                )}
              >
                <Image src={img.src} alt="" fill sizes="160px" className="object-cover" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
