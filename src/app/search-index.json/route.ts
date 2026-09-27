import { getSearchIndex } from "@/lib/catalog";

// Índice del buscador generado como archivo estático (/search-index.json);
// el diálogo de búsqueda lo descarga solo cuando se abre.
export const dynamic = "force-static";

export function GET() {
  return Response.json(getSearchIndex());
}
