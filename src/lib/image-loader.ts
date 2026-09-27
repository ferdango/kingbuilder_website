type LoaderArgs = { src: string; width: number; quality?: number };

/**
 * Loader de imágenes para la exportación estática.
 * - Imágenes de Unsplash (placeholders): se redimensionan con los parámetros de su CDN.
 * - Imágenes locales (/public): se sirven tal cual.
 */
export default function imageLoader({ src, width, quality }: LoaderArgs) {
  if (src.startsWith("https://images.unsplash.com/")) {
    const url = new URL(src);
    url.searchParams.set("w", String(width));
    url.searchParams.set("q", String(quality ?? 75));
    url.searchParams.set("auto", "format");
    url.searchParams.set("fit", url.searchParams.get("fit") ?? "crop");
    return url.toString();
  }
  return src;
}
