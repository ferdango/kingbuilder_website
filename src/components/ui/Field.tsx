import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const inputClass =
  "h-12 w-full rounded-sm border border-kb-line bg-kb-black px-4 text-sm text-kb-sand placeholder:text-kb-stone/70 transition-colors focus:border-kb-copper focus:outline-none user-invalid:border-[#e57373]";

export function Field({
  label,
  htmlFor,
  children,
  className,
  hint,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
  className?: string;
  hint?: string;
}) {
  return (
    <div className={cn("flex flex-col", className)}>
      <label htmlFor={htmlFor} className="mb-2 text-sm text-kb-sand">
        {label}
      </label>
      {children}
      {hint && <p className="mt-1.5 text-xs text-kb-stone">{hint}</p>}
    </div>
  );
}
