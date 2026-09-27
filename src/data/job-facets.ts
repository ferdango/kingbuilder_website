// Filtros del buscador de empleos (módulo separado para no enviar las ofertas completas al cliente).
export const JOB_FACETS = [
  { key: "area", label: "Área" },
  { key: "region", label: "Ubicación" },
  { key: "contract", label: "Tipo de contrato" },
  { key: "schedule", label: "Régimen de trabajo" },
  { key: "level", label: "Nivel" },
] as const;
