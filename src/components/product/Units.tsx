"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import type { SpecRow } from "@/data/types";
import { cn } from "@/lib/utils";

type Units = "metric" | "imperial";
const UnitsContext = createContext<{ units: Units; setUnits: (u: Units) => void }>({ units: "metric", setUnits: () => {} });

export function UnitsProvider({ children }: { children: ReactNode }) {
  const [units, setUnits] = useState<Units>("metric");
  return <UnitsContext.Provider value={{ units, setUnits }}>{children}</UnitsContext.Provider>;
}

export function useUnits() {
  return useContext(UnitsContext);
}

export function specValue(row: SpecRow, units: Units) {
  return units === "imperial" && row.imperial ? row.imperial : row.metric;
}

/** Selector Métrico / EE. UU. (como en las fichas de producto de referencia). */
export function UnitsToggle({ className }: { className?: string }) {
  const { units, setUnits } = useUnits();
  return (
    <div role="radiogroup" aria-label="Sistema de unidades" className={cn("inline-flex rounded-sm border border-kb-line p-0.5 text-xs", className)}>
      {(
        [
          ["metric", "Métrico"],
          ["imperial", "EE. UU."],
        ] as const
      ).map(([value, label]) => (
        <button
          key={value}
          type="button"
          role="radio"
          aria-checked={units === value}
          onClick={() => setUnits(value)}
          className={cn(
            "rounded-[2px] px-3 py-1.5 font-medium transition-colors",
            units === value ? "bg-kb-sand text-kb-black" : "text-kb-stone hover:text-kb-sand",
          )}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export function KeySpecs({ specs }: { specs: SpecRow[] }) {
  const { units } = useUnits();
  return (
    <dl className="divide-y divide-kb-line border-y border-kb-line">
      {specs.map((s) => (
        <div key={s.label} className="flex items-baseline justify-between gap-6 py-3.5">
          <dt className="text-sm text-kb-stone">{s.label}</dt>
          <dd className="text-right text-base font-medium text-kb-sand tabular-nums">{specValue(s, units)}</dd>
        </div>
      ))}
    </dl>
  );
}
