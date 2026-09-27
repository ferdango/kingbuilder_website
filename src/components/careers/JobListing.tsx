"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { Bookmark, BookmarkCheck, Briefcase, CalendarDays, ChevronDown, ChevronLeft, ChevronRight, Clock, MapPin, Search, SlidersHorizontal, X } from "lucide-react";
import { JOB_FACETS } from "@/data/job-facets";
import type { JobSummary as Job } from "@/data/types";
import { cn, formatDate, normalize } from "@/lib/utils";

const PER_PAGE = 10;
type FacetKey = (typeof JOB_FACETS)[number]["key"];

// ── Empleos guardados (localStorage, solo en este navegador) ──────────────
const STORAGE_KEY = "kb-empleos-guardados";
const listeners = new Set<() => void>();
function readSaved(): string {
  try {
    return localStorage.getItem(STORAGE_KEY) ?? "[]";
  } catch {
    return "[]";
  }
}
function useSavedJobs() {
  const raw = useSyncExternalStore(
    (cb) => {
      listeners.add(cb);
      window.addEventListener("storage", cb);
      return () => {
        listeners.delete(cb);
        window.removeEventListener("storage", cb);
      };
    },
    readSaved,
    () => "[]",
  );
  const saved = useMemo(() => new Set<string>(JSON.parse(raw)), [raw]);
  const toggle = (id: string) => {
    const next = new Set(saved);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...next]));
    } catch {
      /* almacenamiento no disponible */
    }
    listeners.forEach((l) => l());
  };
  return { saved, toggle };
}

export function JobListing({ jobs }: { jobs: Job[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const { saved, toggle } = useSavedJobs();
  const [drawer, setDrawer] = useState(false);
  const drawerRef = useRef<HTMLDialogElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  const q = params.get("q") ?? "";
  const onlySaved = params.get("guardados") === "1";
  const sort = params.get("orden") === "titulo" ? "titulo" : "recientes";
  const page = Math.max(1, Number(params.get("pagina")) || 1);
  const selection = useMemo(
    () => Object.fromEntries(JOB_FACETS.map((f) => [f.key, params.get(f.key)?.split("|").filter(Boolean) ?? []])) as Record<FacetKey, string[]>,
    [params],
  );

  const [keyword, setKeyword] = useState(q);
  const [lastQ, setLastQ] = useState(q);
  if (q !== lastQ) {
    setLastQ(q);
    setKeyword(q);
  }

  const push = (changes: Record<string, string | null>, resetPage = true) => {
    const sp = new URLSearchParams(params.toString());
    for (const [k, v] of Object.entries(changes)) {
      if (v === null || v === "") sp.delete(k);
      else sp.set(k, v);
    }
    if (resetPage && !("pagina" in changes)) sp.delete("pagina");
    const qs = sp.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  };

  const toggleFacet = (key: FacetKey, value: string) => {
    const cur = selection[key];
    const next = cur.includes(value) ? cur.filter((v) => v !== value) : [...cur, value];
    push({ [key]: next.join("|") || null });
  };

  const clearAll = () => {
    setKeyword("");
    router.replace(pathname, { scroll: false });
  };

  const matchesExcept = (j: Job, skip?: FacetKey) => {
    if (onlySaved && !saved.has(j.id)) return false;
    if (q) {
      const terms = normalize(q).split(/\s+/).filter(Boolean);
      const hay = normalize(`${j.title} ${j.area} ${j.location} ${j.id}`);
      if (!terms.every((t) => hay.includes(t))) return false;
    }
    return JOB_FACETS.every((f) => f.key === skip || selection[f.key].length === 0 || selection[f.key].includes(j[f.key]));
  };

  const filtered = jobs.filter((j) => matchesExcept(j));
  const sorted = sort === "titulo" ? [...filtered].sort((a, b) => a.title.localeCompare(b.title, "es")) : filtered;
  const pages = Math.max(1, Math.ceil(sorted.length / PER_PAGE));
  const current = Math.min(page, pages);
  const pageItems = sorted.slice((current - 1) * PER_PAGE, current * PER_PAGE);
  const from = sorted.length ? (current - 1) * PER_PAGE + 1 : 0;
  const to = Math.min(current * PER_PAGE, sorted.length);

  const facetOptions = (key: FacetKey) => {
    const counts = new Map<string, number>();
    for (const j of jobs) counts.set(j[key], 0);
    for (const j of jobs) if (matchesExcept(j, key)) counts.set(j[key], (counts.get(j[key]) ?? 0) + 1);
    return [...counts.entries()].sort((a, b) => a[0].localeCompare(b[0], "es"));
  };

  const activeChips = JOB_FACETS.flatMap((f) => selection[f.key].map((v) => ({ key: f.key, value: v })));
  const regions = [...new Set(jobs.map((j) => j.region))].sort((a, b) => a.localeCompare(b, "es"));

  useEffect(() => {
    const d = drawerRef.current;
    if (!d) return;
    if (drawer && !d.open) d.showModal();
    if (!drawer && d.open) d.close();
  }, [drawer]);

  const goToPage = (p: number) => {
    push({ pagina: p > 1 ? String(p) : null }, false);
    resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const facetsPanel = (
    <div>
      <div className="flex items-center justify-between pb-2">
        <p className="eyebrow text-kb-stone">Filtrar empleos</p>
        {(activeChips.length > 0 || q || onlySaved) && (
          <button type="button" onClick={clearAll} className="text-xs font-medium text-kb-copper hover:underline">
            Limpiar
          </button>
        )}
      </div>
      <label className="flex items-center gap-3 border-t border-kb-line py-4 text-sm text-kb-sand">
        <input type="checkbox" className="kb-checkbox" checked={onlySaved} onChange={() => push({ guardados: onlySaved ? null : "1" })} />
        Solo empleos guardados <span className="ml-auto text-xs text-kb-stone tabular-nums">{saved.size}</span>
      </label>
      {JOB_FACETS.map((f) => (
        <details key={f.key} className="group border-t border-kb-line py-4" open={f.key === "area" || f.key === "region" || selection[f.key].length > 0}>
          <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium text-kb-sand">
            {f.label}
            <ChevronDown className="size-4 text-kb-stone transition-transform group-open:rotate-180" aria-hidden />
          </summary>
          <ul className="mt-3 flex flex-col gap-1">
            {facetOptions(f.key).map(([value, count]) => {
              const checked = selection[f.key].includes(value);
              const disabled = !checked && count === 0;
              return (
                <li key={value}>
                  <label className={cn("flex items-center gap-3 px-1 py-1.5 text-sm", disabled ? "opacity-40" : "cursor-pointer hover:text-kb-copper", checked ? "text-kb-sand" : "text-kb-stone")}>
                    <input type="checkbox" className="kb-checkbox" checked={checked} disabled={disabled} onChange={() => toggleFacet(f.key, value)} />
                    <span className="flex-1">{value}</span>
                    <span className="text-xs tabular-nums">{count}</span>
                  </label>
                </li>
              );
            })}
          </ul>
        </details>
      ))}
    </div>
  );

  return (
    <>
      {/* Buscador */}
      <form
        role="search"
        onSubmit={(e) => {
          e.preventDefault();
          push({ q: keyword.trim() || null });
          resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
        className="grid gap-px overflow-hidden rounded-sm border border-kb-line bg-kb-line shadow-2xl shadow-black/40 md:grid-cols-[1.4fr_1fr_auto]"
      >
        <label className="flex items-center gap-3 bg-kb-black px-5">
          <Search className="size-5 shrink-0 text-kb-copper" aria-hidden />
          <span className="sr-only">Palabra clave</span>
          <input
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Cargo, área o código de empleo"
            className="h-16 w-full bg-transparent text-kb-sand placeholder:text-kb-stone focus:outline-none"
          />
        </label>
        <label className="relative flex items-center gap-3 bg-kb-black px-5">
          <MapPin className="size-5 shrink-0 text-kb-copper" aria-hidden />
          <span className="sr-only">Ubicación</span>
          <select
            value={selection.region.length === 1 ? selection.region[0] : ""}
            onChange={(e) => push({ region: e.target.value || null })}
            className="h-16 w-full appearance-none bg-transparent pr-6 text-kb-sand focus:outline-none"
          >
            <option value="">Todas las ubicaciones</option>
            {regions.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-5 size-4 text-kb-stone" aria-hidden />
        </label>
        <button type="submit" className="h-16 bg-kb-copper px-8 text-sm font-medium text-kb-black transition-colors hover:bg-kb-gold">
          Buscar empleos
        </button>
      </form>

      <div ref={resultsRef} id="resultados" className="scroll-mt-28 pt-20">
        <div className="grid gap-10 lg:grid-cols-[264px_1fr]">
          <aside className="hidden lg:block" aria-label="Filtros de empleo">
            <div className="sticky top-24">{facetsPanel}</div>
          </aside>

          <div className="min-w-0">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-kb-line pb-4">
              <p className="text-sm text-kb-stone" aria-live="polite">
                {sorted.length ? (
                  <>
                    Mostrando <span className="font-medium text-kb-sand">{from}</span> a <span className="font-medium text-kb-sand">{to}</span> de{" "}
                    <span className="font-medium text-kb-sand">{sorted.length}</span> empleos
                  </>
                ) : (
                  "Sin resultados"
                )}
                {q && (
                  <>
                    {" "}
                    para “<span className="text-kb-sand">{q}</span>”
                  </>
                )}
              </p>
              <div className="flex items-center gap-3">
                <button type="button" onClick={() => setDrawer(true)} className="inline-flex h-10 items-center gap-2 rounded-sm border border-kb-line px-4 text-sm lg:hidden">
                  <SlidersHorizontal className="size-4" aria-hidden /> Filtros
                </button>
                <label className="relative">
                  <span className="sr-only">Ordenar</span>
                  <select
                    value={sort}
                    onChange={(e) => push({ orden: e.target.value === "titulo" ? "titulo" : null })}
                    className="h-10 appearance-none rounded-sm border border-kb-line bg-kb-graphite pr-9 pl-3 text-sm text-kb-sand focus:border-kb-copper focus:outline-none"
                  >
                    <option value="recientes">Más recientes</option>
                    <option value="titulo">Cargo (A–Z)</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2" aria-hidden />
                </label>
              </div>
            </div>

            {(activeChips.length > 0 || q) && (
              <div className="flex flex-wrap gap-2 pt-4">
                {q && (
                  <button type="button" onClick={() => push({ q: null })} className="inline-flex items-center gap-1.5 rounded-full border border-kb-copper/50 bg-kb-copper/10 py-1.5 pr-2.5 pl-3 text-xs">
                    “{q}” <X className="size-3.5" aria-hidden />
                  </button>
                )}
                {activeChips.map((c) => (
                  <button
                    key={`${c.key}-${c.value}`}
                    type="button"
                    onClick={() => toggleFacet(c.key, c.value)}
                    aria-label={`Quitar filtro ${c.value}`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-kb-copper/50 bg-kb-copper/10 py-1.5 pr-2.5 pl-3 text-xs"
                  >
                    {c.value} <X className="size-3.5" aria-hidden />
                  </button>
                ))}
              </div>
            )}

            {pageItems.length ? (
              <ul className="mt-4 flex flex-col">
                {pageItems.map((j) => (
                  <li key={j.id} className="group relative border-b border-kb-line py-6 transition-colors hover:bg-kb-graphite/60 sm:px-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <p className="eyebrow text-kb-copper">{j.area}</p>
                        <h3 className="mt-2 text-lg leading-snug font-medium text-kb-sand group-hover:text-kb-copper">
                          <Link href={`/carreras/${j.id}/`} className="after:absolute after:inset-0">
                            {j.title}
                          </Link>
                        </h3>
                        <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-[13px] text-kb-stone">
                          <li className="flex items-center gap-1.5">
                            <MapPin className="size-3.5" aria-hidden /> {j.location}, Perú
                          </li>
                          <li className="flex items-center gap-1.5">
                            <Briefcase className="size-3.5" aria-hidden /> {j.contract}
                          </li>
                          <li className="flex items-center gap-1.5">
                            <Clock className="size-3.5" aria-hidden /> {j.schedule}
                          </li>
                          <li className="flex items-center gap-1.5">
                            <CalendarDays className="size-3.5" aria-hidden /> {formatDate(j.posted)}
                          </li>
                        </ul>
                      </div>
                      <div className="relative z-10 flex shrink-0 flex-col items-end gap-3">
                        <button
                          type="button"
                          onClick={() => toggle(j.id)}
                          aria-pressed={saved.has(j.id)}
                          aria-label={saved.has(j.id) ? `Quitar ${j.title} de guardados` : `Guardar ${j.title}`}
                          className={cn(
                            "flex items-center gap-1.5 rounded-sm border px-3 py-1.5 text-xs font-medium transition-colors",
                            saved.has(j.id) ? "border-kb-copper bg-kb-copper/10 text-kb-copper" : "border-kb-line text-kb-stone hover:border-kb-copper hover:text-kb-copper",
                          )}
                        >
                          {saved.has(j.id) ? <BookmarkCheck className="size-4" aria-hidden /> : <Bookmark className="size-4" aria-hidden />}
                          <span className="hidden sm:inline">{saved.has(j.id) ? "Guardado" : "Guardar"}</span>
                        </button>
                        <span className="text-xs text-kb-stone tabular-nums">{j.id}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="mt-6 rounded-sm border border-dashed border-kb-line p-12 text-center">
                <p className="text-lg">No hay empleos que coincidan con tu búsqueda.</p>
                <p className="mt-2 text-sm text-kb-stone">Prueba con otra palabra clave o únete a nuestra comunidad de talento.</p>
                <div className="mt-6 flex justify-center gap-6 text-sm font-medium">
                  <button type="button" onClick={clearAll} className="text-kb-copper hover:underline">
                    Limpiar búsqueda
                  </button>
                  <Link href="/contacto/?asunto=talento" className="text-kb-sand hover:text-kb-copper">
                    Enviar mi CV
                  </Link>
                </div>
              </div>
            )}

            {pages > 1 && <Pagination current={current} pages={pages} onChange={goToPage} />}
          </div>
        </div>
      </div>

      <dialog
        ref={drawerRef}
        onClose={() => setDrawer(false)}
        aria-label="Filtros de empleo"
        className="m-0 ml-auto h-dvh max-h-dvh w-full max-w-sm bg-kb-black p-0 text-kb-sand backdrop:bg-black/60 lg:hidden"
      >
        <div className="flex h-full flex-col">
          <div className="flex h-16 shrink-0 items-center justify-between border-b border-kb-line px-5">
            <p className="font-medium">Filtros</p>
            <button type="button" onClick={() => setDrawer(false)} aria-label="Cerrar filtros" className="rounded-sm p-2 hover:bg-kb-coal">
              <X className="size-5" aria-hidden />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-5 py-4">{facetsPanel}</div>
          <div className="shrink-0 border-t border-kb-line p-4">
            <button type="button" onClick={() => setDrawer(false)} className="h-12 w-full rounded-sm bg-kb-copper text-sm font-medium text-kb-black">
              Ver {sorted.length} empleos
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}

/** Paginación numerada con elipsis: 1 … 4 5 6 … 12 */
function Pagination({ current, pages, onChange }: { current: number; pages: number; onChange: (p: number) => void }) {
  const items: (number | "…")[] = [];
  const add = (n: number | "…") => items[items.length - 1] !== n && items.push(n);
  for (let p = 1; p <= pages; p++) {
    if (p === 1 || p === pages || Math.abs(p - current) <= 1) add(p);
    else add("…");
  }
  return (
    <nav aria-label="Paginación de empleos" className="mt-10 flex items-center justify-center gap-1">
      <button
        type="button"
        onClick={() => onChange(current - 1)}
        disabled={current === 1}
        aria-label="Página anterior"
        className="flex size-10 items-center justify-center rounded-sm border border-kb-line disabled:opacity-30 enabled:hover:border-kb-copper"
      >
        <ChevronLeft className="size-4" aria-hidden />
      </button>
      {items.map((it, i) =>
        it === "…" ? (
          <span key={`e${i}`} className="px-2 text-kb-stone" aria-hidden>
            …
          </span>
        ) : (
          <button
            key={it}
            type="button"
            onClick={() => onChange(it)}
            aria-current={it === current ? "page" : undefined}
            aria-label={`Página ${it}`}
            className={cn(
              "flex size-10 items-center justify-center rounded-sm text-sm tabular-nums transition-colors",
              it === current ? "bg-kb-copper font-semibold text-kb-black" : "text-kb-sand hover:bg-kb-coal",
            )}
          >
            {it}
          </button>
        ),
      )}
      <button
        type="button"
        onClick={() => onChange(current + 1)}
        disabled={current === pages}
        aria-label="Página siguiente"
        className="flex size-10 items-center justify-center rounded-sm border border-kb-line disabled:opacity-30 enabled:hover:border-kb-copper"
      >
        <ChevronRight className="size-4" aria-hidden />
      </button>
    </nav>
  );
}
