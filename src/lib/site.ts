const FALLBACK_SITE_URL = "https://www.escritoriofustinoni.com.br";

export const SITE_NAME = "FUSTINONI ADVOCACIA";
export const SITE_DESCRIPTION =
  "Assessoria jurídica consultiva e contenciosa para pessoas físicas e jurídicas, com atuação estratégica, técnica e personalizada em múltiplas áreas do Direito.";
export const SITE_OG_IMAGE = "/og-home-hero-header.png";

// Portal interno (cockpit) — acesso da equipe, protegido por Cloudflare Access (OTP).
// Configurável por env caso o subdomínio mude.
export const INTERNAL_ACCESS_URL =
  process.env.NEXT_PUBLIC_INTERNAL_ACCESS_URL?.trim() ||
  "https://sistema.escritoriofustinoni.com.br";

// Instagram oficial do escritório (S86: @fustinoniadvocacia). Configurável por env.
export const INSTAGRAM_URL =
  process.env.NEXT_PUBLIC_INSTAGRAM_URL?.trim() ||
  "https://www.instagram.com/fustinoniadvocacia";

export function getSiteUrl(): string {
  const rawUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || FALLBACK_SITE_URL;
  return rawUrl.replace(/\/+$/, "");
}
