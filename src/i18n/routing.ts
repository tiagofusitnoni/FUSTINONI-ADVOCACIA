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
    // S101: Serviços específicos (geridos no cockpit, servidos via /api/site/servicos)
    "/servicos/[slug]": {
      pt: "/servicos/[slug]",
      en: "/services/[slug]",
      es: "/servicios/[slug]",
      it: "/servizi/[slug]",
    },
    "/newsletter/obrigado": {
      pt: "/newsletter/obrigado",
      en: "/newsletter/thank-you",
      es: "/newsletter/gracias",
      it: "/newsletter/grazie",
    },
    "/newsletter/confirmado": {
      pt: "/newsletter/confirmado",
      en: "/newsletter/confirmed",
      es: "/newsletter/confirmado",
      it: "/newsletter/confermato",
    },
    "/newsletter/descadastrado": {
      pt: "/newsletter/descadastrado",
      en: "/newsletter/unsubscribed",
      es: "/newsletter/dado-de-baja",
      it: "/newsletter/cancellato",
    },
  },
});

export type AppLocale = (typeof routing.locales)[number];
