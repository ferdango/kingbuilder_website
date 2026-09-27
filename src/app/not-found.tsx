import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LogoSymbol } from "@/components/brand/Logo";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="container-kb flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
      <LogoSymbol className="size-20" />
      <p className="eyebrow mt-10 text-kb-copper">Error 404</p>
      <h1 className="mt-4 text-4xl font-light tracking-tight sm:text-5xl">
        Esta ruta <strong className="font-semibold">no existe.</strong>
      </h1>
      <p className="mt-4 max-w-md text-kb-stone">La página que buscas fue movida o nunca se construyó. Te ayudamos a encontrar el camino.</p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <ButtonLink href="/" size="lg">
          Volver al inicio
        </ButtonLink>
        <ButtonLink href="/soluciones/" size="lg" variant="secondary">
          Ver soluciones <ArrowRight className="size-4" aria-hidden />
        </ButtonLink>
      </div>
      <Link href="/contacto/" className="mt-8 text-sm text-kb-stone hover:text-kb-copper">
        ¿Necesitas ayuda? Contáctanos
      </Link>
    </section>
  );
}
