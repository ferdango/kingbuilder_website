import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Sitio 100% estático (solo front): `npm run build` genera la carpeta `out/`
  // lista para publicar en cualquier hosting (Vercel, Netlify, S3, GitHub Pages…).
  output: "export",
  // Subruta de publicación (p. ej. "/kingbuilder_website" en GitHub Pages). Vacío en dominio propio.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? "",
  trailingSlash: true,
  images: {
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
    qualities: [60, 75, 85],
    deviceSizes: [640, 828, 1200, 1920, 2560],
    imageSizes: [64, 128, 256, 384],
  },
};

export default nextConfig;
