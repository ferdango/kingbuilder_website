import { IMG } from "./images";
import type { Category, FacetDef } from "./types";

/** Filtros comunes a todas las categorías. */
export const COMMON_FACETS: FacetDef[] = [
  { key: "aplicacion", label: "Aplicación" },
  { key: "modalidad", label: "Modalidad" },
];

export const CATEGORIES: Category[] = [
  {
    slug: "riego-y-supresion-de-polvo",
    name: "Riego y supresión de polvo",
    shortName: "Supresión de polvo",
    tagline: "Vías seguras, aire limpio y equipos protegidos.",
    description:
      "Camiones cisterna, sistemas de riego inteligente y nebulizadores para controlar el polvo en vías de acarreo, chancadoras y frentes de minado.",
    image: IMG.waterSpray,
    facets: [{ key: "tipo", label: "Tipo de equipo" }],
  },
  {
    slug: "accesorios-e-implementos",
    name: "Accesorios e implementos",
    shortName: "Accesorios",
    tagline: "Más trabajo con cada equipo portador.",
    description:
      "Martillos hidráulicos, cucharones de alta resistencia, desgarradores y desbrozadoras para excavadoras, cargadores y tractores.",
    image: IMG.bucketDesert,
    facets: [{ key: "tipo", label: "Tipo de accesorio" }],
  },
  {
    slug: "infraestructura-y-obras-civiles",
    name: "Infraestructura y obras civiles",
    shortName: "Infraestructura",
    tagline: "Obras que resisten la altura, el clima y el tiempo.",
    description:
      "Campamentos modulares, naves de mantenimiento, vías de acarreo y plataformas diseñadas para operar hasta 5 000 m s. n. m.",
    image: IMG.steelFrame,
    facets: [{ key: "tipo", label: "Tipo de obra" }],
  },
  {
    slug: "conectividad-y-telecomunicaciones",
    name: "Conectividad y telecomunicaciones",
    shortName: "Conectividad",
    tagline: "Cobertura total, del tajo a la galería más profunda.",
    description:
      "Redes LTE/5G privadas, backbones de fibra óptica, torres remolcables y conectividad subterránea para operaciones conectadas.",
    image: IMG.towersSunset,
    facets: [{ key: "tipo", label: "Tecnología" }],
  },
  {
    slug: "monitoreo-y-automatizacion",
    name: "Monitoreo, IoT y automatización",
    shortName: "Monitoreo e IoT",
    tagline: "Datos en tiempo real para decidir mejor.",
    description:
      "Centros de control remoto, telemetría de flota, monitoreo geotécnico, drones y sensores IoT integrados en una sola plataforma.",
    image: IMG.controlRoomLarge,
    facets: [{ key: "tipo", label: "Solución" }],
  },
  {
    slug: "seguridad-operacional",
    name: "Seguridad operacional",
    shortName: "Seguridad",
    tagline: "Cero daños como estándar de ingeniería.",
    description:
      "Sistemas anticolisión, detección de fatiga, videovigilancia con analítica y control de accesos para proteger a personas y activos.",
    image: IMG.cctvMulti,
    facets: [{ key: "tipo", label: "Sistema" }],
  },
];
