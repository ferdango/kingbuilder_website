"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, CornerDownLeft, Search, X } from "lucide-react";
import type { SearchEntry } from "@/lib/catalog";
import { assetPath } from "@/lib/routes";
import { cn, normalize } from "@/lib/utils";

const SUGGESTIONS = ["cisterna", "LTE", "campamento", "anticolisión", "drones", "martillo"];

export function SearchDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [q, setQ] = useState("");
  const [active, setActive] = useState(0);
  const [index, setIndex] = useState<SearchEntry[]>([]);
  const requested = useRef(false);

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (open && !requested.current) {
      requested.current = true;
      fetch(assetPath("/search-index.json"))
        .then((r) => r.json())
        .then(setIndex)
        .catch(() => {
          requested.current = false;
        });
    }
    if (open && !d.open) {
      d.showModal();
      requestAnimationFrame(() => inputRef.current?.focus());
    } else if (!open && d.open) {
      d.close();
    }
  }, [open]);

  const results = useMemo(() => {
    const terms = normalize(q).split(/\s+/).filter(Boolean);
    if (!terms.length) return [];
    return index
      .filter((e) => {
        const hay = normalize(`${e.title} ${e.keywords}`);
        return terms.every((t) => hay.includes(t));
      })
      .slice(0, 8);
  }, [q, index]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter" && results[active]) {
      e.preventDefault();
      router.push(results[active].href);
      onClose();
    }
  };

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={(e) => e.target === dialogRef.current && onClose()}
      aria-label="Buscar en el sitio"
      className="m-0 mx-auto mt-[8vh] w-[calc(100%-2rem)] max-w-2xl rounded-md border border-kb-line bg-kb-graphite p-0 text-kb-sand shadow-2xl backdrop:bg-black/70 backdrop:backdrop-blur-sm"
    >
      <div className="flex items-center gap-3 border-b border-kb-line px-5">
        <Search className="size-5 shrink-0 text-kb-copper" aria-hidden />
        <input
          ref={inputRef}
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            setActive(0);
          }}
          onKeyDown={onKeyDown}
          placeholder="Busca soluciones, equipos o tecnologías…"
          aria-label="Término de búsqueda"
          className="h-16 flex-1 bg-transparent text-base text-kb-sand placeholder:text-kb-stone focus:outline-none"
        />
        <button type="button" onClick={onClose} aria-label="Cerrar búsqueda" className="rounded-sm p-1.5 text-kb-stone hover:bg-kb-coal hover:text-kb-sand">
          <X className="size-5" aria-hidden />
        </button>
      </div>

      <div className="max-h-[60vh] overflow-y-auto p-3">
        {!q && (
          <div className="p-3">
            <p className="eyebrow text-kb-stone">Búsquedas frecuentes</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setQ(s)}
                  className="rounded-full border border-kb-line px-3 py-1.5 text-sm text-kb-sand transition-colors hover:border-kb-copper hover:text-kb-copper"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}
        {q && results.length === 0 && (
          <p className="p-6 text-center text-sm text-kb-stone">
            Sin resultados para “{q}”.{" "}
            <Link href="/catalogo/" onClick={onClose} className="text-kb-copper hover:underline">
              Ver el catálogo completo
            </Link>
          </p>
        )}
        {results.length > 0 && (
          <ul role="listbox" aria-label="Resultados">
            {results.map((r, i) => (
              <li key={r.href} role="option" aria-selected={i === active}>
                <Link
                  href={r.href}
                  onClick={onClose}
                  onMouseEnter={() => setActive(i)}
                  className={cn(
                    "flex items-center justify-between gap-4 rounded-sm px-4 py-3 transition-colors",
                    i === active ? "bg-kb-coal" : "hover:bg-kb-coal",
                  )}
                >
                  <span className="min-w-0">
                    <span className="block truncate font-medium">{r.title}</span>
                    <span className="block truncate text-xs text-kb-stone">
                      {r.type} · {r.subtitle}
                    </span>
                  </span>
                  {i === active ? <CornerDownLeft className="size-4 shrink-0 text-kb-copper" aria-hidden /> : <ArrowRight className="size-4 shrink-0 text-kb-line" aria-hidden />}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="hidden items-center justify-end gap-4 border-t border-kb-line px-5 py-3 text-xs text-kb-stone sm:flex">
        <span>↑↓ navegar</span>
        <span>↵ abrir</span>
        <span>Esc cerrar</span>
      </div>
    </dialog>
  );
}
