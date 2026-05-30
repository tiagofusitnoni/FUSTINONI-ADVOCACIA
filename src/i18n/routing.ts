import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["pt", "en", "es", "it"],
  defaultLocale: "pt",
  localePrefix: "always",
  localeDetection: false,
  alternateLinks: false,
  pathnames: {
    "/": "/",
    "/analise-credito": {
      pt: "/analise-credito",
      en: "/credit-record-review",
      es: "/analisis-registro-crediticio",
      it: "/analisi-registro-creditizio",
    },
    "/fator-k": {
      pt: "/fator-k",
      en: "/sabesp-factor-k-review",
      es: "/revision-factor-k-sabesp",
      it: "/revisione-fattore-k-sabesp",
    },
    "/email-confirmado": {
      pt: "/email-confirmado",
      en: "/email-confirmed",
      es: "/correo-confirmado",
      it: "/email-confermata",
    },
    // S33+: Publicações jurídicas (só conteúdo em pt; outras locales redirecionam
    // pra notFound() dentro do page.tsx). Pathnames espelhados pra os outros
    // idiomas só pra atender exigência de tipo do next-intl.
    "/publicacoes": {
      pt: "/publicacoes",
      en: "/publications",
      es: "/publicaciones",
      it: "/pubblicazioni",
    },
    "/publicacoes/[slug]": {
      pt: "/publicacoes/[slug]",
      en: "/publications/[slug]",
      es: "/publicaciones/[slug]",
      it: "/pubblicazioni/[slug]",
    },
  },
});

export type AppLocale = (typeof routing.locales)[number];
