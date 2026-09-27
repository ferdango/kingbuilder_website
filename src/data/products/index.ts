import type { Product } from "../types";
import { ACCESORIOS } from "./accesorios";
import { CONECTIVIDAD } from "./conectividad";
import { INFRAESTRUCTURA } from "./infraestructura";
import { MONITOREO } from "./monitoreo";
import { RIEGO } from "./riego";
import { SEGURIDAD } from "./seguridad";

// Catálogo provisional de soluciones: nombres, modelos y cifras son de referencia
// y deben validarse con el equipo comercial de King Builder.
export const PRODUCTS: Product[] = [
  ...RIEGO,
  ...ACCESORIOS,
  ...INFRAESTRUCTURA,
  ...CONECTIVIDAD,
  ...MONITOREO,
  ...SEGURIDAD,
];
