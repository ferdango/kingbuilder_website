# King Builder — Sitio web

Sitio corporativo de **King Builder** (construcción e implementación tecnológica para la minería, Lima – Perú).
Proyecto **solo front-end**: se exporta como sitio estático y puede publicarse en cualquier hosting.

> *Sistemas inteligentes, obras indestructibles.*

## Stack

- [Next.js 16](https://nextjs.org) (App Router) con `output: "export"` → HTML estático en `out/`
- React 19 + TypeScript
- Tailwind CSS v4 (tokens de marca en `src/app/globals.css`)
- Poppins (tipografía oficial del manual de marca) vía `next/font`
- Íconos: `lucide-react`

## Comandos

```bash
npm install        # instalar dependencias
npm run dev        # desarrollo en http://localhost:3000
npm run build      # genera el sitio estático en ./out
npm run lint       # ESLint
```

Para previsualizar el build: `npx serve out`.

## Publicación (GitHub Pages)

Cada push a `master` ejecuta `.github/workflows/deploy-pages.yml`, que compila el sitio y lo publica en
**https://ferdango.github.io/kingbuilder_website/**. Como GitHub Pages sirve el proyecto bajo una subruta,
el workflow define `NEXT_PUBLIC_BASE_PATH=/kingbuilder_website` (y `NEXT_PUBLIC_SITE_URL` para el sitemap).

Con dominio propio basta con quitar esas variables (o dejarlas vacías): el sitio se genera en la raíz.
Las rutas a archivos de `/public` usadas con `next/image` o `fetch` deben pasar por `assetPath()` (`src/lib/routes.ts`).

## Páginas

| Ruta | Descripción | Referencia |
| --- | --- | --- |
| `/` | Inicio: hero, soluciones, destacados, proceso, entornos, carreras | — |
| `/soluciones/` | Grilla de líneas de solución | cat.com · *Equipment* |
| `/soluciones/[categoria]/` | Listado con filtros (URL compartible), orden y chips | logitechg.com · *PLP* |
| `/soluciones/[categoria]/[producto]/` | Ficha: galería, specs clave, selector Métrico/EE. UU., navegación fija, beneficios, características, especificaciones en acordeón, relacionados | cat.com · *PDP* |
| `/catalogo/` | Catálogo completo filtrable por línea, aplicación y modalidad | logitechg.com |
| `/carreras/` | Buscador de empleos: palabra clave + ubicación, filtros, guardados, paginación | careers.caterpillar.com |
| `/carreras/[id]/` | Detalle de oferta con formulario de postulación | careers.caterpillar.com |
| `/nosotros/` | Concepto creativo, misión, visión, valores e identidad | Manual de marca |
| `/contacto/` | Contacto y cotizaciones (`?asunto=cotizacion&solucion=<slug>` precarga el formulario) | — |

## Estructura

```
src/
├─ app/                 # rutas (App Router)
├─ components/
│  ├─ brand/            # Logo (SVG), símbolo, forma recurrente
│  ├─ layout/           # Header (mega menú, buscador ⌘K, menú móvil), Footer
│  ├─ catalog/          # Tarjetas y listado con filtros
│  ├─ product/          # Galería, specs, unidades, características
│  ├─ careers/          # Buscador de empleos y postulación
│  ├─ contact/          # Formulario de contacto
│  └─ ui/               # Botones, encabezados, breadcrumbs, CTA
├─ data/                # ✏️ CONTENIDO EDITABLE
│  ├─ site.ts           # datos de contacto, navegación, cifras
│  ├─ categories.ts     # líneas de solución
│  ├─ products/         # fichas de cada solución (specs, beneficios…)
│  ├─ jobs.ts           # ofertas laborales
│  └─ images.ts         # banco de imágenes
└─ lib/                 # utilidades, rutas y consultas al catálogo
```

## Marca

Tomado del manual *Brand Guidelines 2026* (Figma):

| Token | Color | Uso |
| --- | --- | --- |
| `kb-black` | `#1C1C1C` Negro Estructural | fondo principal |
| `kb-sand` | `#EBE4D8` Blanco Arena | texto / secciones claras |
| `kb-copper` | `#DFB17B` Arena Cobre | acentos y acciones |
| `kb-brown` | `#6E502E` Marrón Monolito | acentos sobre claro |
| `kb-steel` · `kb-gold` · `kb-earth` · `kb-red` | secundarios | apoyo |

El logotipo se extrajo en vectores del Figma: `public/brand/` (positivo, negativo y símbolo) y `src/components/brand/Logo.tsx`.

## Pendientes antes de producción

- **Contenido provisional**: catálogo de soluciones, cifras (`STATS`), ofertas laborales y redes sociales son de referencia; validar con King Builder.
- **Fotografías**: se usan imágenes de Unsplash (licencia libre) como placeholder. Reemplazar en `src/data/images.ts` por fotografía propia (en `/public`).
- **Formularios** (contacto y postulación): validan y muestran confirmación, pero no envían datos. Conectar a un CRM/ATS o servicio de formularios (Formspree, HubSpot, etc.).
- **Libro de Reclamaciones**: el enlace abre el formulario de contacto; implementar el formato oficial (INDECOPI) si corresponde.
- Con el dominio definitivo, configurar `NEXT_PUBLIC_SITE_URL` (o el valor por defecto de `SITE.url` en `src/data/site.ts`).
