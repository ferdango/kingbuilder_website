export type ImageRef = { src: string; alt: string };

export type FacetDef = { key: string; label: string };

export type Category = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  image: ImageRef;
  /** Filtros disponibles en el listado de la categoría (además de los comunes). */
  facets: FacetDef[];
};

/** Fila de especificación. `imperial` es opcional: si existe, se habilita el selector de unidades. */
export type SpecRow = { label: string; metric: string; imperial?: string };

export type SpecGroup = { title: string; rows: SpecRow[] };

export type EquipmentGroup = { title: string; items: string[] };

export type Feature = {
  title: string;
  subtitle: string;
  text: string;
  points?: string[];
  image?: ImageRef;
};

export type Badge = "Nuevo" | "Destacado" | "Más solicitado";

export type Product = {
  slug: string;
  category: string;
  name: string;
  model: string;
  tagline: string;
  summary: string;
  badge?: Badge;
  /** Año de lanzamiento — usado para ordenar por "Más recientes". */
  year: number;
  images: ImageRef[];
  keySpecs: SpecRow[];
  overview: { heading: string; text: string };
  benefits: { title: string; text: string }[];
  features: Feature[];
  specs: SpecGroup[];
  standard?: EquipmentGroup[];
  optional?: EquipmentGroup[];
  /** Solo para accesorios: equipos portadores compatibles. */
  compatible?: string[];
  /** Valores de filtro: { tipo: [...], aplicacion: [...], modalidad: [...] } */
  attributes: Record<string, string[]>;
};

/** Datos mínimos de un producto para tarjetas y listados (lo que viaja al cliente). */
export type ProductSummary = Pick<Product, "slug" | "category" | "name" | "tagline" | "badge" | "year" | "attributes"> & {
  image: ImageRef;
  keySpecs: SpecRow[];
};

export type Job = {
  id: string;
  title: string;
  area: string;
  location: string;
  region: string;
  contract: string;
  schedule: string;
  level: string;
  posted: string; // ISO date
  summary: string;
  responsibilities: string[];
  requirements: string[];
};

/** Campos de una oferta que necesita el listado (sin descripción completa). */
export type JobSummary = Omit<Job, "summary" | "responsibilities" | "requirements">;
