"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown, SlidersHorizontal, X } from "lucide-react";
import type { FacetDef, ProductSummary as Product } from "@/data/types";
import { cn } from "@/lib/utils";
import { ProductCard } from "./ProductCard";

const SORTS = [
  { value: "destacados", label: "Destacados" },
  { value: "recientes", label: "Más recientes" },
  { value: "nombre-asc", label: "Nombre (A–Z)" },
  { value: "nombre-desc", label: "Nombre (Z–A)" },
] as const;

type SortValue = (typeof SORTS)[number]["value"];
type Selection = Record<string, string[]>;

const CATEGORY_KEY = "categoria";

function valuesOf(p: Product, key: string, categoryNames: Record<string, string>) {
  return key === CATEGORY_KEY ? [categoryNames[p.category]] : (p.attributes[key] ?? []);
}

function matches(p: Product, sel: Selection, categoryNames: Record<string, string>, skip?: string) {
  return Object.entries(sel).every(([key, vals]) => {
    if (key === skip || vals.length === 0) return true;
    const pv = valuesOf(p, key, categoryNames);
    return vals.some((v) => pv.includes(v));
  });
}

export function ProductListing({
  products,
  facets,
  categoryNames,
  showCategoryOnCards = false,
}: {
  products: Product[];
  facets: FacetDef[];
  categoryNames: Record<string, string>;
  showCategoryOnCards?: boolean;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerRef = useRef<HTMLDialogElement>(null);

  const selection: Selection = useMemo(() => {
    const s: Selection = {};
    for (const f of facets) {
      const raw = params.get(f.key);
      s[f.key] = raw ? raw.split(",").filter(Boolean) : [];
    }
    return s;
  }, [params, facets]);

  const sort = (SORTS.find((s) => s.value === params.get("orden"))?.value ?? "destacados") as SortValue;

  const update = (next: Selection, nextSort: SortValue = sort) => {
    const sp = new URLSearchParams();
    for (const f of facets) if (next[f.key]?.length) sp.set(f.key, next[f.key].join(","));
    if (nextSort !== "destacados") sp.set("orden", nextSort);
    const qs = sp.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  };

  const toggle = (key: string, value: string) => {
    const cur = selection[key] ?? [];
    update({ ...selection, [key]: cur.includes(value) ? cur.filter((v) => v !== value) : [...cur, value] });
  };

  const clearAll = () => update(Object.fromEntries(facets.map((f) => [f.key, []])));

  // Opciones y conteos por filtro (conteo = resultados si se añadiera esa opción)
  const options = useMemo(() => {
    const out: Record<string, { value: string; count: number }[]> = {};
    for (const f of facets) {
      const all = new Map<string, number>();
      for (const p of products) for (const v of valuesOf(p, f.key, categoryNames)) all.set(v, 0);
      for (const p of products) {
        if (!matches(p, selection, categoryNames, f.key)) continue;
        for (const v of valuesOf(p, f.key, categoryNames)) all.set(v, (all.get(v) ?? 0) + 1);
      }
      out[f.key] = [...all.entries()].map(([value, count]) => ({ value, count })).sort((a, b) => a.value.localeCompare(b.value, "es"));
    }
    return out;
  }, [products, facets, selection, categoryNames]);

  const results = useMemo(() => {
    const list = products.filter((p) => matches(p, selection, categoryNames));
    const byName = (a: Product, b: Product) => a.name.localeCompare(b.name, "es");
    switch (sort) {
      case "recientes":
        return [...list].sort((a, b) => b.year - a.year || byName(a, b));
      case "nombre-asc":
        return [...list].sort(byName);
      case "nombre-desc":
        return [...list].sort((a, b) => byName(b, a));
      default:
        return [...list].sort((a, b) => Number(Boolean(b.badge)) - Number(Boolean(a.badge)));
    }
  }, [products, selection, sort, categoryNames]);

  const active = facets.flatMap((f) => (selection[f.key] ?? []).map((v) => ({ key: f.key, label: f.label, value: v })));

  useEffect(() => {
    const d = drawerRef.current;
    if (!d) return;
    if (drawerOpen && !d.open) d.showModal();
    if (!drawerOpen && d.open) d.close();
  }, [drawerOpen]);

  const panel = (
    <FilterPanel facets={facets} options={options} selection={selection} onToggle={toggle} onClear={clearAll} hasActive={active.length > 0} />
  );

  return (
    <div className="grid gap-10 lg:grid-cols-[264px_1fr]">
      <aside className="hidden lg:block" aria-label="Filtros">
        <div className="sticky top-24">{panel}</div>
      </aside>

      <div className="min-w-0">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-kb-line pb-4">
          <p className="text-sm text-kb-stone" aria-live="polite">
            <span className="font-medium text-kb-sand">{results.length}</span> de {products.length} soluciones
          </p>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              className="inline-flex h-10 items-center gap-2 rounded-sm border border-kb-line px-4 text-sm lg:hidden"
            >
              <SlidersHorizontal className="size-4" aria-hidden /> Filtros
              {active.length > 0 && <span className="rounded-full bg-kb-copper px-1.5 text-xs font-semibold text-kb-black">{active.length}</span>}
            </button>
            <label className="flex items-center gap-2 text-sm text-kb-stone">
              <span className="hidden sm:inline">Ordenar por</span>
              <span className="relative">
                <select
                  value={sort}
                  onChange={(e) => update(selection, e.target.value as SortValue)}
                  className="h-10 appearance-none rounded-sm border border-kb-line bg-kb-graphite pr-9 pl-3 text-sm text-kb-sand focus:border-kb-copper focus:outline-none"
                >
                  {SORTS.map((s) => (
                    <option key={s.value} value={s.value}>
                      {s.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2" aria-hidden />
              </span>
            </label>
          </div>
        </div>

        {active.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 pt-4">
            {active.map((a) => (
              <button
                key={`${a.key}-${a.value}`}
                type="button"
                onClick={() => toggle(a.key, a.value)}
                className="inline-flex items-center gap-1.5 rounded-full border border-kb-copper/50 bg-kb-copper/10 py-1.5 pr-2.5 pl-3 text-xs text-kb-sand transition-colors hover:bg-kb-copper/20"
                aria-label={`Quitar filtro ${a.label}: ${a.value}`}
              >
                <span className="text-kb-stone">{a.label}:</span> {a.value}
                <X className="size-3.5" aria-hidden />
              </button>
            ))}
            <button type="button" onClick={clearAll} className="px-2 text-xs font-medium text-kb-copper hover:underline">
              Limpiar todo
            </button>
          </div>
        )}

        {results.length > 0 ? (
          <ul className="grid gap-6 pt-6 sm:grid-cols-2 xl:grid-cols-3">
            {results.map((p, i) => (
              <li key={p.slug} className="animate-fade-up" style={{ animationDelay: `${Math.min(i, 8) * 40}ms` }}>
                <ProductCard product={p} categoryName={showCategoryOnCards ? categoryNames[p.category] : undefined} priority={i < 3} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-6 rounded-sm border border-dashed border-kb-line p-12 text-center">
            <p className="text-lg text-kb-sand">No encontramos soluciones con esos filtros.</p>
            <p className="mt-2 text-sm text-kb-stone">Prueba quitando alguno de los filtros aplicados.</p>
            <button type="button" onClick={clearAll} className="mt-6 text-sm font-medium text-kb-copper hover:underline">
              Limpiar filtros
            </button>
          </div>
        )}
      </div>

      {/* Filtros en móvil */}
      <dialog
        ref={drawerRef}
        onClose={() => setDrawerOpen(false)}
        aria-label="Filtros"
        className="m-0 ml-auto h-dvh max-h-dvh w-full max-w-sm bg-kb-black p-0 text-kb-sand backdrop:bg-black/60 lg:hidden"
      >
        <div className="flex h-full flex-col">
          <div className="flex h-16 shrink-0 items-center justify-between border-b border-kb-line px-5">
            <p className="font-medium">Filtros</p>
            <button type="button" onClick={() => setDrawerOpen(false)} aria-label="Cerrar filtros" className="rounded-sm p-2 hover:bg-kb-coal">
              <X className="size-5" aria-hidden />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-5 py-4">{panel}</div>
          <div className="shrink-0 border-t border-kb-line p-4">
            <button
              type="button"
              onClick={() => setDrawerOpen(false)}
              className="h-12 w-full rounded-sm bg-kb-copper text-sm font-medium text-kb-black"
            >
              Ver {results.length} resultado{results.length === 1 ? "" : "s"}
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}

function FilterPanel({
  facets,
  options,
  selection,
  onToggle,
  onClear,
  hasActive,
}: {
  facets: FacetDef[];
  options: Record<string, { value: string; count: number }[]>;
  selection: Selection;
  onToggle: (key: string, value: string) => void;
  onClear: () => void;
  hasActive: boolean;
}) {
  return (
    <div>
      <div className="flex items-center justify-between pb-2">
        <p className="eyebrow text-kb-stone">Filtrar por</p>
        {hasActive && (
          <button type="button" onClick={onClear} className="text-xs font-medium text-kb-copper hover:underline">
            Limpiar filtros
          </button>
        )}
      </div>
      {facets.map((f) => (
        <FacetGroup key={f.key} facet={f} options={options[f.key] ?? []} selected={selection[f.key] ?? []} onToggle={onToggle} />
      ))}
    </div>
  );
}

function FacetGroup({
  facet,
  options,
  selected,
  onToggle,
}: {
  facet: FacetDef;
  options: { value: string; count: number }[];
  selected: string[];
  onToggle: (key: string, value: string) => void;
}) {
  const [open, setOpen] = useState(true);
  const id = `facet-${facet.key}`;
  return (
    <fieldset className="border-t border-kb-line py-4">
      <legend className="contents">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={id}
          className="flex w-full items-center justify-between py-1 text-left text-sm font-medium text-kb-sand"
        >
          {facet.label}
          <ChevronDown className={cn("size-4 text-kb-stone transition-transform", open && "rotate-180")} aria-hidden />
        </button>
      </legend>
      <ul id={id} hidden={!open} className="mt-3 flex flex-col gap-1">
        {options.map((o) => {
          const checked = selected.includes(o.value);
          const disabled = !checked && o.count === 0;
          return (
            <li key={o.value}>
              <label
                className={cn(
                  "flex cursor-pointer items-center gap-3 rounded-sm px-1 py-1.5 text-sm transition-colors",
                  disabled ? "cursor-not-allowed opacity-40" : "hover:text-kb-copper",
                  checked ? "text-kb-sand" : "text-kb-stone",
                )}
              >
                <input
                  type="checkbox"
                  checked={checked}
                  disabled={disabled}
                  onChange={() => onToggle(facet.key, o.value)}
                  className="kb-checkbox"
                />
                <span className="flex-1">{o.value}</span>
                <span className="text-xs text-kb-stone tabular-nums">{o.count}</span>
              </label>
            </li>
          );
        })}
      </ul>
    </fieldset>
  );
}
