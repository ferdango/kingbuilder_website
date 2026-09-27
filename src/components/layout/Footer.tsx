import Link from "next/link";
import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { LogoImage } from "@/components/brand/LogoImage";
import { BrandPattern } from "@/components/brand/Pattern";
import { CATEGORIES } from "@/data/categories";
import { SITE } from "@/data/site";

const COMPANY = [
  { label: "Nosotros", href: "/nosotros/" },
  { label: "Catálogo de soluciones", href: "/catalogo/" },
  { label: "Carreras", href: "/carreras/" },
  { label: "Contacto", href: "/contacto/" },
  { label: "Proveedores", href: "/contacto/?asunto=proveedores" },
];

export function Footer() {
  return (
    <footer data-site-footer className="relative isolate overflow-hidden border-t border-kb-line bg-kb-ink">
      <BrandPattern className="absolute top-0 left-0 -z-10 h-24 w-full text-kb-sand/[0.035]" size={96} />
      <div className="container-kb grid gap-12 pt-20 pb-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <LogoImage className="h-11 w-auto" />
          <p className="mt-6 max-w-xs text-lg leading-snug font-light text-kb-sand">
            Sistemas inteligentes, <strong className="font-semibold">obras indestructibles.</strong>
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-kb-stone">{SITE.description}</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {SITE.social.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-full border border-kb-line px-3 py-1.5 text-xs text-kb-stone transition-colors hover:border-kb-copper hover:text-kb-copper"
                >
                  {s.label} <ArrowUpRight className="size-3" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Soluciones">
          <h2 className="eyebrow text-kb-copper">Soluciones</h2>
          <ul className="mt-5 flex flex-col gap-3 text-sm">
            {CATEGORIES.map((c) => (
              <li key={c.slug}>
                <Link href={`/soluciones/${c.slug}/`} className="text-kb-stone transition-colors hover:text-kb-sand">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Empresa">
          <h2 className="eyebrow text-kb-copper">Empresa</h2>
          <ul className="mt-5 flex flex-col gap-3 text-sm">
            {COMPANY.map((c) => (
              <li key={c.href}>
                <Link href={c.href} className="text-kb-stone transition-colors hover:text-kb-sand">
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="eyebrow text-kb-copper">Contacto</h2>
          <ul className="mt-5 flex flex-col gap-4 text-sm text-kb-stone">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-kb-copper" aria-hidden />
              <span>
                {SITE.address}
                <br />
                {SITE.district}
              </span>
            </li>
            <li>
              <a href={SITE.phoneHref} className="flex gap-3 hover:text-kb-sand">
                <Phone className="mt-0.5 size-4 shrink-0 text-kb-copper" aria-hidden /> {SITE.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="flex gap-3 hover:text-kb-sand">
                <Mail className="mt-0.5 size-4 shrink-0 text-kb-copper" aria-hidden /> {SITE.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 size-4 shrink-0 text-kb-copper" aria-hidden />
              <span>
                {SITE.hours}
                <br />
                {SITE.support}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-kb-line">
        <div className="container-kb flex flex-col gap-4 py-6 text-xs text-kb-stone md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {SITE.legalName} Todos los derechos reservados.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <Link href="/contacto/?asunto=reclamo" className="hover:text-kb-sand">
                Libro de reclamaciones
              </Link>
            </li>
            <li>
              <Link href="/contacto/" className="hover:text-kb-sand">
                Política de privacidad
              </Link>
            </li>
            <li>
              <Link href="/contacto/" className="hover:text-kb-sand">
                Términos y condiciones
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
