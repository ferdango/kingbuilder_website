"use client";

import { useState } from "react";
import { Check, ChevronDown, Printer } from "lucide-react";
import type { EquipmentGroup, SpecGroup } from "@/data/types";
import { cn } from "@/lib/utils";
import { specValue, UnitsToggle, useUnits } from "./Units";

type Tab = { id: string; label: string };

export function SpecsSection({
  name,
  specs,
  standard,
  optional,
}: {
  name: string;
  specs: SpecGroup[];
  standard?: EquipmentGroup[];
  optional?: EquipmentGroup[];
}) {
  const tabs: Tab[] = [
    { id: "especificaciones", label: "Especificaciones" },
    ...(standard?.length ? [{ id: "estandar", label: "Incluido de serie" }] : []),
    ...(optional?.length ? [{ id: "opcional", label: "Opcionales" }] : []),
  ];
  const [tab, setTab] = useState(tabs[0].id);
  const [openGroups, setOpenGroups] = useState<Set<number>>(() => new Set([0]));
  const { units } = useUnits();
  const hasImperial = specs.some((g) => g.rows.some((r) => r.imperial));
  const allOpen = openGroups.size === specs.length;

  const toggleGroup = (i: number) =>
    setOpenGroups((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  return (
    <div>
      <div className="flex flex-col gap-4 border-b border-kb-line md:flex-row md:items-end md:justify-between">
        <div role="tablist" aria-label={`Información técnica de ${name}`} className="-mb-px flex gap-1 overflow-x-auto">
          {tabs.map((t) => (
            <button
              key={t.id}
              id={`tab-${t.id}`}
              role="tab"
              type="button"
              aria-selected={tab === t.id}
              aria-controls={`panel-${t.id}`}
              onClick={() => setTab(t.id)}
              className={cn(
                "border-b-2 px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors",
                tab === t.id ? "border-kb-copper text-kb-sand" : "border-transparent text-kb-stone hover:text-kb-sand",
              )}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-3 pb-3" data-no-print>
          {hasImperial && tab === "especificaciones" && <UnitsToggle />}
          {tab === "especificaciones" && (
            <button
              type="button"
              onClick={() => setOpenGroups(allOpen ? new Set() : new Set(specs.map((_, i) => i)))}
              className="text-xs font-medium text-kb-copper hover:underline"
            >
              {allOpen ? "Contraer todo" : "Expandir todo"}
            </button>
          )}
          <button
            type="button"
            onClick={() => {
              setOpenGroups(new Set(specs.map((_, i) => i)));
              requestAnimationFrame(() => window.print());
            }}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-kb-stone hover:text-kb-sand"
          >
            <Printer className="size-4" aria-hidden /> Imprimir ficha
          </button>
        </div>
      </div>

      <div id="panel-especificaciones" role="tabpanel" aria-labelledby="tab-especificaciones" hidden={tab !== "especificaciones"} className="pt-2">
        {specs.map((group, i) => {
          const open = openGroups.has(i);
          return (
            <div key={group.title} className="border-b border-kb-line">
              <h3>
                <button
                  type="button"
                  onClick={() => toggleGroup(i)}
                  aria-expanded={open}
                  aria-controls={`spec-${i}`}
                  className="flex w-full items-center justify-between py-5 text-left text-sm font-semibold tracking-[0.12em] text-kb-sand uppercase transition-colors hover:text-kb-copper"
                >
                  {group.title}
                  <ChevronDown className={cn("size-5 text-kb-stone transition-transform", open && "rotate-180")} aria-hidden />
                </button>
              </h3>
              <div id={`spec-${i}`} hidden={!open} className="pb-6">
                <table className="w-full text-sm">
                  <caption className="sr-only">{group.title}</caption>
                  <tbody>
                    {group.rows.map((r) => (
                      <tr key={r.label} className="odd:bg-kb-graphite">
                        <th scope="row" className="w-1/2 px-4 py-3 text-left font-normal text-kb-stone">
                          {r.label}
                        </th>
                        <td className="px-4 py-3 text-right font-medium text-kb-sand tabular-nums">{specValue(r, units)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          );
        })}
      </div>

      {[
        { id: "estandar", groups: standard },
        { id: "opcional", groups: optional },
      ].map(
        ({ id, groups }) =>
          groups && groups.length > 0 && (
            <div key={id} id={`panel-${id}`} role="tabpanel" aria-labelledby={`tab-${id}`} hidden={tab !== id} className="grid gap-x-10 gap-y-8 pt-8 md:grid-cols-2 lg:grid-cols-3">
              {groups.map((g) => (
                <div key={g.title}>
                  <h3 className="eyebrow text-kb-copper">{g.title}</h3>
                  <ul className="mt-4 flex flex-col gap-3">
                    {g.items.map((item) => (
                      <li key={item} className="flex gap-3 text-sm text-kb-sand">
                        <Check className="mt-0.5 size-4 shrink-0 text-kb-copper" aria-hidden /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <p className="text-xs text-kb-stone md:col-span-2 lg:col-span-3">
                El equipamiento estándar y opcional puede variar según el proyecto. Consulta con un especialista de King Builder.
              </p>
            </div>
          ),
      )}
    </div>
  );
}
