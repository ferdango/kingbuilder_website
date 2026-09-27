"use client";

import { useState } from "react";
import { CheckCircle2, Upload } from "lucide-react";
import { Field, inputClass } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";

const MAX_MB = 5;

/**
 * Formulario de postulación (solo front). Valida los datos y muestra la
 * confirmación; conectar `onSubmit` al ATS o servicio de formularios en producción.
 */
export function ApplyForm({ jobId, jobTitle }: { jobId: string; jobTitle: string }) {
  const [sent, setSent] = useState(false);
  const [fileName, setFileName] = useState("");
  const [fileError, setFileError] = useState("");

  if (sent) {
    return (
      <div className="rounded-sm border border-kb-copper/50 bg-kb-copper/5 p-8 text-center" role="status">
        <CheckCircle2 className="mx-auto size-10 text-kb-copper" aria-hidden />
        <p className="mt-4 text-xl font-medium">¡Recibimos tu postulación!</p>
        <p className="mt-2 text-sm text-kb-stone">
          Postulaste a <span className="text-kb-sand">{jobTitle}</span> ({jobId}). Nuestro equipo de talento revisará tu perfil y te contactará por correo.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!fileName) {
          setFileError("Adjunta tu CV en formato PDF.");
          return;
        }
        setSent(true);
      }}
      className="grid gap-5 sm:grid-cols-2"
    >
      <Field label="Nombres y apellidos" htmlFor="ap-nombre" className="sm:col-span-2">
        <input id="ap-nombre" name="nombre" required autoComplete="name" className={inputClass} />
      </Field>
      <Field label="Correo electrónico" htmlFor="ap-correo">
        <input id="ap-correo" name="correo" type="email" required autoComplete="email" className={inputClass} />
      </Field>
      <Field label="Teléfono" htmlFor="ap-tel">
        <input id="ap-tel" name="telefono" type="tel" required autoComplete="tel" pattern="[+0-9 ]{7,15}" placeholder="+51 9XX XXX XXX" className={inputClass} />
      </Field>
      <Field label="Perfil de LinkedIn (opcional)" htmlFor="ap-in" className="sm:col-span-2">
        <input id="ap-in" name="linkedin" type="url" placeholder="https://www.linkedin.com/in/…" className={inputClass} />
      </Field>
      <div className="sm:col-span-2">
        <span className="mb-2 block text-sm text-kb-sand">CV (PDF, máx. {MAX_MB} MB)</span>
        <label
          htmlFor="ap-cv"
          className="flex cursor-pointer items-center gap-4 rounded-sm border border-dashed border-kb-line bg-kb-black px-5 py-5 text-sm transition-colors hover:border-kb-copper focus-within:border-kb-copper"
        >
          <Upload className="size-5 text-kb-copper" aria-hidden />
          <span className={fileName ? "text-kb-sand" : "text-kb-stone"}>{fileName || "Selecciona un archivo o arrástralo aquí"}</span>
          <input
            id="ap-cv"
            name="cv"
            type="file"
            accept="application/pdf"
            className="sr-only"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (!f) return;
              if (f.size > MAX_MB * 1024 * 1024) {
                setFileError(`El archivo supera ${MAX_MB} MB.`);
                setFileName("");
                return;
              }
              setFileError("");
              setFileName(f.name);
            }}
          />
        </label>
        {fileError && (
          <p className="mt-2 text-xs text-[#e57373]" role="alert">
            {fileError}
          </p>
        )}
      </div>
      <label className="flex items-start gap-3 text-xs leading-relaxed text-kb-stone sm:col-span-2">
        <input type="checkbox" required className="kb-checkbox mt-0.5" />
        Autorizo a King Builder a tratar mis datos personales para fines de selección, conforme a la Ley N.° 29733 de Protección de Datos Personales.
      </label>
      <div className="sm:col-span-2">
        <Button type="submit" size="lg" className="w-full sm:w-auto">
          Enviar postulación
        </Button>
      </div>
    </form>
  );
}
