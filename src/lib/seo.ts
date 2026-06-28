import { getPathname } from "@/i18n/navigation";
import { routing, type AppLocale } from "@/i18n/routing";
import { getSiteUrl } from "@/lib/site";

const siteUrl = getSiteUrl();

type LocalizedPathname =
  | "/"
  | "/privacidade"
  | "/analise-credito"
  | "/fator-k"
  | "/direito-aduaneiro"
  | "/direito-minerario"
  | "/email-confirmado"
  | "/publicacoes";

export function getLocalizedUrl(pathname: LocalizedPathname, locale: AppLocale) {
  const localizedPath = getPathname({ href: pathname, locale });
  return `${siteUrl}${localizedPath}`;
}

// `locales` permite restringir o hreflang aos idiomas realmente publicados na
// página (ex.: páginas pt+en, com es/it pendentes de tradução). Por padrão, todos.
export function getAlternatesLanguages(
  pathname: LocalizedPathname,
  locales: readonly AppLocale[] = routing.locales,
) {
  const languages = Object.fromEntries(
    locales.map(locale => [locale, getLocalizedUrl(pathname, locale)]),
  );

  const xDefaultLocale = locales.includes(routing.defaultLocale)
    ? routing.defaultLocale
    : locales[0];

  return {
    ...languages,
    "x-default": getLocalizedUrl(pathname, xDefaultLocale),
  };
}
