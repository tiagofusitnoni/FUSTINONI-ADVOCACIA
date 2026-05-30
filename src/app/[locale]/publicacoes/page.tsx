import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Link } from "@/i18n/navigation";
import { type AppLocale } from "@/i18n/routing";
import { OG_LOCALE_BY_APP_LOCALE } from "@/lib/i18n";
import {
  listarPublicacoes,
  formatarDataPublicacao,
  formatarArea,
} from "@/lib/publicacoes";
import { getAlternatesLanguages, getLocalizedUrl } from "@/lib/seo";
import { SITE_NAME, SITE_OG_IMAGE } from "@/lib/site";

const pagePath = "/publicacoes";

type PageProps = {
  params: Promise<{ locale: AppLocale }>;
  searchParams: Promise<{ area?: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;

  // Publicações são só em pt. Em outros locales, marca noindex.
  if (locale !== "pt") {
    return { title: "Publicações | FUSTINONI ADVOCACIA", robots: { index: false } };
  }

  const title = "Publicações jurídicas | FUSTINONI ADVOCACIA";
  const description =
    "Análises sobre decisões, teses e movimentos relevantes para nossas áreas de atuação. Atualizado semanalmente pelo escritório.";

  return {
    title,
    description,
    alternates: {
      canonical: getLocalizedUrl(pagePath, locale),
      languages: getAlternatesLanguages(pagePath),
    },
    openGraph: {
      type: "website",
      locale: OG_LOCALE_BY_APP_LOCALE[locale],
      url: getLocalizedUrl(pagePath, locale),
      title,
      description,
      siteName: SITE_NAME,
      images: [{ url: SITE_OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
    },
  };
}

export default async function PublicacoesPage({ params, searchParams }: PageProps) {
  const { locale } = await params;
  if (locale !== "pt") {
    notFound();
  }
  const sp = await searchParams;
  const areaFiltro = sp.area || null;

  const data = await listarPublicacoes({ area: areaFiltro || undefined, limit: 60 });
  const publicacoes = data.publicacoes;
  const contagensArea = data.contagens_area;
  const totalGeral = Object.values(contagensArea).reduce((a, b) => a + b, 0);

  return (
    <main className="bg-white">
      {/* Hero da seção */}
      <section className="border-b border-black/15 px-4 pt-20 pb-10 text-center sm:px-6 sm:pt-24 md:px-10">
        <div className="text-[11px] tracking-[0.16em] uppercase font-semibold text-black/50 mb-4">
          ◆ Publicações ◆
        </div>
        <h1 className="font-serif text-4xl font-medium leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Notas jurídicas do escritório
        </h1>
        <p className="mt-5 max-w-2xl mx-auto text-base text-black/65 sm:text-lg">
          Análises sobre decisões, teses e movimentos relevantes para nossas áreas
          de atuação.
        </p>
        <div className="mt-8 mx-auto h-px w-16 bg-black/30" />
      </section>

      {/* Filtros por área */}
      {totalGeral > 0 && (
        <section className="border-b border-black/15 px-4 py-6 sm:px-6 md:px-10">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-2">
            <span className="mr-2 text-[10px] tracking-[0.12em] uppercase font-semibold text-black/50">
              Filtrar por área
            </span>
            <Link
              href="/publicacoes"
              className={`border px-3 py-1.5 text-xs font-medium transition-colors ${
                !areaFiltro
                  ? "border-black bg-black text-white"
                  : "border-black/15 bg-white text-black/70 hover:border-black/40"
              }`}
            >
              Todas <span className="opacity-60">({totalGeral})</span>
            </Link>
            {Object.entries(contagensArea)
              .sort(([, a], [, b]) => b - a)
              .map(([area, qtd]) => (
                <Link
                  key={area}
                  href={{ pathname: "/publicacoes", query: { area } }}
                  className={`border px-3 py-1.5 text-xs font-medium transition-colors ${
                    areaFiltro === area
                      ? "border-black bg-black text-white"
                      : "border-black/15 bg-white text-black/70 hover:border-black/40"
                  }`}
                >
                  {formatarArea(area)} <span className="opacity-60">({qtd})</span>
                </Link>
              ))}
          </div>
        </section>
      )}

      {/* Listagem de cards */}
      <section className="px-4 py-12 sm:px-6 md:px-10">
        <div className="mx-auto max-w-6xl">
          {publicacoes.length === 0 ? (
            <div className="py-20 text-center">
              <p className="font-serif text-2xl text-black/40">
                Em breve as primeiras publicações.
              </p>
              <p className="mt-3 text-sm text-black/50">
                Nosso agente está acompanhando STF, STJ, TJSP e outros tribunais.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {publicacoes.map((p) => (
                <Link
                  key={p.id}
                  href={`/publicacoes/${p.slug}` as never}
                  className="group flex flex-col border border-black/15 bg-white p-7 transition-all hover:border-black/40 hover:-translate-y-0.5"
                >
                  <div className="mb-4 flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-[0.12em] font-medium text-black/50">
                    <span>{formatarDataPublicacao(p.publicada_em)}</span>
                    <span className="text-black/30">◆</span>
                    <span className="font-semibold text-black/80">{p.tribunal}</span>
                    <span className="text-black/30">·</span>
                    <span>{formatarArea(p.area_direito)}</span>
                  </div>
                  <h2 className="font-serif text-xl leading-snug font-medium text-black mb-3 group-hover:text-black/80 sm:text-2xl">
                    {p.titulo}
                  </h2>
                  <p className="flex-1 text-sm leading-relaxed text-black/65 mb-5 line-clamp-3">
                    {p.lead}
                  </p>
                  <div className="border-t border-black/10 pt-3 text-[11px] uppercase tracking-[0.08em] font-semibold text-black/70">
                    Ler publicação <span className="text-black/40">→</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

// ISR — revalida a cada 60s. Quando Tiago aprovar nova publicação no cockpit,
// aparece aqui em até 1 minuto sem precisar redeploy.
export const revalidate = 60;
