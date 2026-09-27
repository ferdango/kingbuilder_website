"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown, Mail, Menu, Phone, Search, X } from "lucide-react";
import { LogoImage } from "@/components/brand/LogoImage";
import { ButtonLink } from "@/components/ui/Button";
import type { Category } from "@/data/types";
import { MAIN_NAV, SITE } from "@/data/site";
import { cn } from "@/lib/utils";
import { SearchDialog } from "./SearchDialog";

type Props = { categories: Pick<Category, "slug" | "name" | "tagline" | "image">[] };

export function Header({ categories }: Props) {
  const pathname = usePathname();
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  // Cerrar menús al navegar (ajuste de estado durante el render al cambiar la ruta)
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMegaOpen(false);
    setMobileOpen(false);
    setSearchOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMegaOpen(false);
        setMobileOpen(false);
      }
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href);

  const openMega = () => {
    clearTimeout(closeTimer.current);
    setMegaOpen(true);
  };
  const scheduleClose = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMegaOpen(false), 140);
  };

  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-sm focus:bg-kb-copper focus:px-4 focus:py-2 focus:text-kb-black"
      >
        Saltar al contenido
      </a>

      {/* Barra utilitaria */}
      <div className="hidden border-b border-kb-line/60 bg-kb-ink text-xs text-kb-stone lg:block" data-no-print>
        <div className="container-kb flex h-9 items-center justify-between">
          <p>Construcción y tecnología de alta ingeniería para la minería · Lima, Perú</p>
          <div className="flex items-center gap-6">
            <a href={SITE.phoneHref} className="flex items-center gap-1.5 transition-colors hover:text-kb-copper">
              <Phone className="size-3.5" aria-hidden /> {SITE.phone}
            </a>
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-1.5 transition-colors hover:text-kb-copper">
              <Mail className="size-3.5" aria-hidden /> {SITE.email}
            </a>
            <Link href="/carreras/" className="text-kb-sand transition-colors hover:text-kb-copper">
              Trabaja con nosotros
            </Link>
          </div>
        </div>
      </div>

      <header
        data-site-header
        className={cn(
          "sticky top-0 z-50 border-b transition-[background-color,border-color] duration-300",
          scrolled || megaOpen ? "border-kb-line bg-kb-black/95 backdrop-blur-md" : "border-transparent bg-kb-black",
        )}
      >
        <div className="container-kb flex h-[72px] items-center justify-between gap-6">
          <Link href="/" aria-label="King Builder — inicio" className="shrink-0">
            <LogoImage className="h-9 w-auto sm:h-10" priority />
          </Link>

          <nav aria-label="Principal" className="hidden h-full items-center lg:flex">
            <ul className="flex h-full items-center gap-1">
              {MAIN_NAV.map((item) =>
                item.href === "/soluciones/" ? (
                  <li key={item.href} className="h-full" onMouseEnter={openMega} onMouseLeave={scheduleClose}>
                    <button
                      type="button"
                      aria-expanded={megaOpen}
                      aria-controls="mega-soluciones"
                      onClick={() => setMegaOpen((v) => !v)}
                      className={cn(
                        "relative flex h-full items-center gap-1 px-4 text-sm font-medium transition-colors",
                        megaOpen || isActive(item.href) ? "text-kb-copper" : "text-kb-sand hover:text-kb-copper",
                      )}
                    >
                      {item.label}
                      <ChevronDown className={cn("size-4 transition-transform", megaOpen && "rotate-180")} aria-hidden />
                      <span className={cn("absolute inset-x-4 bottom-0 h-0.5 origin-left bg-kb-copper transition-transform", megaOpen || isActive(item.href) ? "scale-x-100" : "scale-x-0")} />
                    </button>
                  </li>
                ) : (
                  <li key={item.href} className="h-full">
                    <Link
                      href={item.href}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      className={cn(
                        "relative flex h-full items-center px-4 text-sm font-medium transition-colors",
                        isActive(item.href) ? "text-kb-copper" : "text-kb-sand hover:text-kb-copper",
                      )}
                    >
                      {item.label}
                      <span className={cn("absolute inset-x-4 bottom-0 h-0.5 origin-left bg-kb-copper transition-transform", isActive(item.href) ? "scale-x-100" : "scale-x-0")} />
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="flex size-10 items-center justify-center rounded-sm text-kb-sand transition-colors hover:bg-kb-coal hover:text-kb-copper"
              aria-label="Buscar soluciones"
            >
              <Search className="size-5" aria-hidden />
            </button>
            <div className="hidden sm:block">
              <ButtonLink href="/contacto/?asunto=cotizacion" size="sm">
                Solicitar cotización
              </ButtonLink>
            </div>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="flex size-10 items-center justify-center rounded-sm text-kb-sand hover:bg-kb-coal lg:hidden"
              aria-label="Abrir menú"
              aria-expanded={mobileOpen}
              aria-controls="menu-movil"
            >
              <Menu className="size-6" aria-hidden />
            </button>
          </div>
        </div>

        {/* Mega menú de soluciones */}
        <div
          id="mega-soluciones"
          onMouseEnter={openMega}
          onMouseLeave={scheduleClose}
          className={cn(
            "absolute inset-x-0 top-full hidden border-b border-kb-line bg-kb-black/98 shadow-2xl shadow-black/50 backdrop-blur-md transition-[opacity,transform] duration-200 lg:block",
            megaOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0",
          )}
        >
          <div className="container-kb grid grid-cols-[260px_1fr] gap-10 py-10">
            <div>
              <p className="eyebrow text-kb-copper">Soluciones</p>
              <p className="mt-3 text-2xl leading-snug font-light text-kb-sand">
                Ingeniería, construcción y tecnología para <strong className="font-semibold">operaciones mineras</strong>.
              </p>
              <div className="mt-6 flex flex-col gap-3 text-sm">
                <Link href="/soluciones/" className="flex items-center gap-2 text-kb-copper hover:text-kb-gold">
                  Ver todas las soluciones <ArrowRight className="size-4" aria-hidden />
                </Link>
                <Link href="/catalogo/" className="flex items-center gap-2 text-kb-stone hover:text-kb-sand">
                  Explorar el catálogo completo <ArrowRight className="size-4" aria-hidden />
                </Link>
              </div>
            </div>
            <ul className="grid grid-cols-3 gap-3">
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/soluciones/${c.slug}/`}
                    tabIndex={megaOpen ? 0 : -1}
                    className="group flex gap-4 rounded-sm border border-transparent p-3 transition-colors hover:border-kb-line hover:bg-kb-graphite"
                  >
                    <span className="relative size-16 shrink-0 overflow-hidden rounded-sm bg-kb-coal">
                      <Image src={c.image.src} alt="" fill sizes="64px" className="object-cover transition-transform duration-500 group-hover:scale-110" />
                    </span>
                    <span>
                      <span className="block text-sm font-medium text-kb-sand group-hover:text-kb-copper">{c.name}</span>
                      <span className="mt-1 block text-xs leading-relaxed text-kb-stone">{c.tagline}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>

      {/* Menú móvil */}
      <div
        id="menu-movil"
        role="dialog"
        aria-modal="true"
        aria-label="Menú"
        className={cn(
          "fixed inset-0 z-[60] flex flex-col bg-kb-black transition-[opacity,visibility] duration-300 lg:hidden",
          mobileOpen ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <div className="container-kb flex h-[72px] shrink-0 items-center justify-between border-b border-kb-line">
          <LogoImage className="h-9 w-auto" />
          <button type="button" onClick={() => setMobileOpen(false)} className="flex size-10 items-center justify-center rounded-sm hover:bg-kb-coal" aria-label="Cerrar menú">
            <X className="size-6" aria-hidden />
          </button>
        </div>
        <nav aria-label="Móvil" className="container-kb flex-1 overflow-y-auto py-6">
          <details className="group border-b border-kb-line" open>
            <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-xl font-light">
              Soluciones <ChevronDown className="size-5 transition-transform group-open:rotate-180" aria-hidden />
            </summary>
            <ul className="flex flex-col gap-1 pb-4">
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link href={`/soluciones/${c.slug}/`} className="block py-2 text-kb-stone hover:text-kb-copper">
                    {c.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/soluciones/" className="flex items-center gap-2 py-2 text-kb-copper">
                  Ver todas <ArrowRight className="size-4" aria-hidden />
                </Link>
              </li>
            </ul>
          </details>
          {MAIN_NAV.filter((i) => i.href !== "/soluciones/").map((item) => (
            <Link key={item.href} href={item.href} className="block border-b border-kb-line py-4 text-xl font-light hover:text-kb-copper">
              {item.label}
            </Link>
          ))}
          <div className="mt-8 flex flex-col gap-3 text-sm text-kb-stone">
            <a href={SITE.phoneHref} className="flex items-center gap-2">
              <Phone className="size-4" aria-hidden /> {SITE.phone}
            </a>
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-2">
              <Mail className="size-4" aria-hidden /> {SITE.email}
            </a>
          </div>
        </nav>
        <div className="container-kb shrink-0 border-t border-kb-line py-4">
          <ButtonLink href="/contacto/?asunto=cotizacion" className="w-full" size="lg">
            Solicitar cotización
          </ButtonLink>
        </div>
      </div>

      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
