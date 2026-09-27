import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  align = "left",
  tone = "dark",
  className,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  align?: "left" | "center";
  /** "dark" = sección sobre negro; "light" = sección sobre arena */
  tone?: "dark" | "light";
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6",
        align === "center" ? "items-center text-center" : "md:flex-row md:items-end md:justify-between",
        className,
      )}
    >
      <div className={cn("max-w-3xl", align === "center" && "mx-auto")}>
        {eyebrow && (
          <p className={cn("eyebrow mb-4 flex items-center gap-3", tone === "dark" ? "text-kb-copper" : "text-kb-brown", align === "center" && "justify-center")}>
            <span aria-hidden className={cn("h-px w-8", tone === "dark" ? "bg-kb-copper" : "bg-kb-brown")} />
            {eyebrow}
          </p>
        )}
        <Tag
          className={cn(
            "text-3xl leading-[1.1] font-light tracking-tight text-balance sm:text-4xl lg:text-[2.75rem]",
            tone === "dark" ? "text-kb-sand" : "text-kb-black",
            "[&_strong]:font-semibold",
          )}
        >
          {title}
        </Tag>
        {description && (
          <p className={cn("mt-5 text-base leading-relaxed text-pretty sm:text-lg", tone === "dark" ? "text-kb-stone" : "text-kb-black/70")}>
            {description}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
