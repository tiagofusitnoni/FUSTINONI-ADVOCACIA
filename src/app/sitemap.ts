import type { MetadataRoute } from "next";

import { getPathname } from "@/i18n/navigation";
import { routing, type AppLocale } from "@/i18n/routing";
import { getSiteUrl } from "@/lib/site";

// Cada rota declara em quais idiomas está publicada. Páginas pt+en (com es/it
// ainda pendentes de tradução) só entram no sitemap/hreflang em pt e en — assim
// não anunciamos URLs que respondem 404/notFound().
type SitemapRoute = { path: Parameters<typeof getPathname>[0]["href"]; locales: readonly AppLocale[] };

const ALL = routing.locales;

const internalRoutes: SitemapRoute[] = [
  { path: "/", locales: ALL },
  { path: "/analise-credito", locales: ALL },
  { path: "/fator-k", locales: ALL },
  { path: "/direito-aduaneiro", locales: ["pt", "en"] },
  { path: "/direito-minerario", locales: ["pt", "en"] },
  { path: "/privacidade", locales: ALL },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  return internalRoutes.flatMap(({ path, locales }) =>
    locales.map(locale => {
      const localizedPath = getPathname({ href: path, locale });
      const languages = Object.fromEntries(
        locales.map(itemLocale => [
          itemLocale,
          `${siteUrl}${getPathname({ href: path, locale: itemLocale })}`,
        ]),
      );

      return {
        url: `${siteUrl}${localizedPath}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: path === "/" ? 1 : 0.9,
        alternates: {
          languages,
        },
      };
    }),
  );
}
