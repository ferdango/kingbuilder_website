"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { CheckCircle2, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Field, inputClass } from "@/components/ui/Field";

export const SUBJECTS = [
  { value: "cotizacion", label: "Solicitar una cotización" },
  { value: "especialista", label: "Hablar con un especialista" },
  { value: "soporte", label: "Soporte técnico / postventa" },
  { value: "proveedores", label: "Quiero ser proveedor" },
  { value: "talento", label: "Comunidad de talento (enviar CV)" },
  { value: "reclamo", label: "Libro de reclamaciones" },
  { value: "otro", label: "Otra consulta" },
] as const;

type Option = { value: string; label: string; group: string };

/**
 * Formulario de contacto / cotización (solo front).
 * Preselecciona el asunto y la solución desde la URL: /contacto/?asunto=cotizacion&solucion=<slug>
 * Para producción, enviar los datos a un CRM o servicio de formularios en `onSubmit`.
 */
export function ContactForm({ solutions }: { solutions: Option[] }) {
  const params = useSearchParams();
  // Reinicia el formulario si cambian los parámetros (p. ej. clic en "Libro de reclamaciones" estando en esta página)
  return <ContactFormInner key={params.toString()} solutions={solutions} params={params} />;
}

function ContactFormInner({ solutions, params }: { solutions: Option[]; params: URLSearchParams }) {
  const initialSubject = SUBJECTS.some((s) => s.value === params.get("asunto")) ? (params.get("asunto") as string) : "cotizacion";
  const initialSolution = solutions.some((s) => s.value === params.get("solucion")) ? (params.get("solucion") as string) : "";
  const [subject, setSubject] = useState(initialSubject);
  const [sent, setSent] = useState<null | { name: string }>(null);

  const groups = [...new Set(solutions.map((s) => s.group))];
  const showSolution = subject === "cotizacion" || subject === "especialista" || subject === "soporte";

  if (sent) {
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center rounded-sm border border-kb-copper/50 bg-kb-copper/5 p-10 text-center" role="status">
        <CheckCircle2 className="size-12 text-kb-copper" aria-hidden />
        <p className="mt-5 text-2xl font-medium">Gracias, {sent.name.split(" ")[0]}.</p>
        <p className="mt-3 max-w-md text-kb-stone">
          Recibimos tu mensaje. Un especialista de King Builder te responderá en menos de 24 horas hábiles.
        </p>
        <button type="button" onClick={() => setSent(null)} className="mt-8 text-sm font-medium text-kb-copper hover:underline">
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        setSent({ name: String(data.get("nombre") ?? "") });
      }}
      className="grid gap-5 sm:grid-cols-2"
    >
      <Field label="Motivo de contacto" htmlFor="c-asunto" className="sm:col-span-2">
        <div className="relative">
          <select id="c-asunto" name="asunto" value={subject} onChange={(e) => setSubject(e.target.value)} className={`${inputClass} appearance-none pr-10`}>
            {SUBJECTS.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-kb-stone" aria-hidden />
        </div>
      </Field>

      <Field label="Nombres y apellidos" htmlFor="c-nombre">
        <input id="c-nombre" name="nombre" required autoComplete="name" className={inputClass} />
      </Field>
      <Field label="Empresa" htmlFor="c-empresa">
        <input id="c-empresa" name="empresa" required={subject !== "talento"} autoComplete="organization" className={inputClass} />
      </Field>
      <Field label="Correo corporativo" htmlFor="c-correo">
        <input id="c-correo" name="correo" type="email" required autoComplete="email" className={inputClass} />
      </Field>
      <Field label="Teléfono" htmlFor="c-tel">
        <input id="c-tel" name="telefono" type="tel" autoComplete="tel" pattern="[+0-9 ]{7,15}" placeholder="+51 9XX XXX XXX" className={inputClass} />
      </Field>

      {showSolution && (
        <>
          <Field label="Solución de interés" htmlFor="c-solucion">
            <div className="relative">
              <select id="c-solucion" name="solucion" defaultValue={initialSolution} className={`${inputClass} appearance-none pr-10`}>
                <option value="">Aún no lo sé / varias</option>
                {groups.map((g) => (
                  <optgroup key={g} label={g}>
                    {solutions
                      .filter((s) => s.group === g)
                      .map((s) => (
                        <option key={s.value} value={s.value}>
                          {s.label}
                        </option>
                      ))}
                  </optgroup>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-kb-stone" aria-hidden />
            </div>
          </Field>
          <Field label="Ubicación del proyecto" htmlFor="c-ubicacion">
            <input id="c-ubicacion" name="ubicacion" placeholder="Unidad minera, región" className={inputClass} />
          </Field>
        </>
      )}

      <Field label={subject === "reclamo" ? "Detalle del reclamo o queja" : "Mensaje"} htmlFor="c-mensaje" className="sm:col-span-2">
        <textarea
          id="c-mensaje"
          name="mensaje"
          required
          rows={5}
          placeholder={subject === "cotizacion" ? "Cuéntanos el alcance, plazos y condiciones del sitio (altitud, clima, accesos)…" : ""}
          className={`${inputClass} h-auto py-3 leading-relaxed`}
        />
      </Field>

      <label className="flex items-start gap-3 text-xs leading-relaxed text-kb-stone sm:col-span-2">
        <input type="checkbox" required className="kb-checkbox mt-0.5" />
        Acepto la política de privacidad y autorizo el tratamiento de mis datos personales conforme a la Ley N.° 29733.
      </label>

      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" size="lg">
          Enviar mensaje
        </Button>
        <p className="text-xs text-kb-stone">Respondemos en menos de 24 horas hábiles.</p>
      </div>
    </form>
  );
}
