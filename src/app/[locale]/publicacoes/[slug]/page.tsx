import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Link } from "@/i18n/navigation";
import { type AppLocale } from "@/i18n/routing";
import { OG_LOCALE_BY_APP_LOCALE } from "@/lib/i18n";
import {
  getPublicacaoDetalhe,
  formatarDataPublicacao,
  formatarArea,
} from "@/lib/publicacoes";
import { getLocalizedUrl } from "@/lib/seo";
import { SITE_NAME, SITE_OG_IMAGE } from "@/lib/site";

type PageProps = {
  params: Promise<{ locale: AppLocale; slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;

  if (locale !== "pt") {
    return { title: "Publicação | FUSTINONI ADVOCACIA", robots: { index: false } };
  }

  const pub = await getPublicacaoDetalhe(slug);
  if (!pub) {
    return { title: "Publicação não encontrada | FUSTINONI ADVOCACIA" };
  }

  const title = `${pub.titulo} | FUSTINONI ADVOCACIA`;
  const description = pub.lead.slice(0, 200);
  const canonical = `${getLocalizedUrl("/publicacoes", locale)}/${slug}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "article",
      locale: OG_LOCALE_BY_APP_LOCALE[locale],
      url: canonical,
      title,
      description,
      siteName: SITE_NAME,
      images: [{ url: SITE_OG_IMAGE, width: 1200, height: 630, alt: pub.titulo }],
    },
  };
}

export default async function PublicacaoDetalhePage({ params }: PageProps) {
  const { locale, slug } = await params;
  if (locale !== "pt") {
    notFound();
  }

  const pub = await getPublicacaoDetalhe(slug);
  if (!pub) {
    notFound();
  }

  return (
    <main className="bg-white">
      <article className="mx-auto max-w-3xl px-4 pt-16 pb-20 sm:px-6 sm:pt-20 md:px-10">
        {/* Breadcrumb */}
        <nav className="mb-7 text-[11px] uppercase tracking-[0.08em] font-medium text-black/50">
          <Link href="/" className="hover:text-black">
            Início
          </Link>
          <span className="mx-2 text-black/30">›</span>
          <Link href="/publicacoes" className="hover:text-black">
            Publicações
          </Link>
          <span className="mx-2 text-black/30">›</span>
          <span className="text-black/80">{pub.titulo.slice(0, 40)}…</span>
        </nav>

        {/* Metadata sup */}
        <div className="text-center text-[11px] uppercase tracking-[0.16em] font-semibold text-black/60 mb-4">
          {formatarDataPublicacao(pub.publicada_em)}
          <span className="mx-3 text-black/30">·</span>
          {pub.tribunal}
          <span className="mx-3 text-black/30">·</span>
          {formatarArea(pub.area_direito)}
        </div>

        {/* Conteúdo do artigo (HTML gerado pelo agente — Opus 4.7) */}
        <div
          className="publicacao-prose"
          dangerouslySetInnerHTML={{ __html: pub.html_render }}
        />

        {/* Voltar */}
        <div className="mt-12 border-t border-black/10 pt-8">
          <Link
            href="/publicacoes"
            className="inline-block text-xs uppercase tracking-[0.08em] font-semibold text-black/70 hover:text-black"
          >
            ← Voltar para todas as publicações
          </Link>
        </div>
      </article>

      {/* Estilo editorial pro artigo (escopado via classe .publicacao-prose) */}
      <style>{`
        .publicacao-prose article h1 {
          font-family: var(--font-cormorant, 'Cormorant Garamond'), Georgia, serif;
          font-size: 2.5rem;
          font-weight: 500;
          line-height: 1.2;
          letter-spacing: -0.01em;
          text-align: center;
          margin-bottom: 1.75rem;
        }
        .publicacao-prose article h1::after {
          content: '';
          display: block;
          width: 5rem;
          height: 1px;
          background: rgba(0,0,0,0.4);
          margin: 1.5rem auto 0;
        }
        .publicacao-prose article p {
          font-family: var(--font-cormorant, 'Cormorant Garamond'), Georgia, serif;
          font-size: 1.18rem;
          line-height: 1.7;
          color: #1d2330;
          margin-bottom: 1.35rem;
        }
        .publicacao-prose article p.lead {
          font-size: 1.3rem;
          font-style: italic;
          color: rgba(0,0,0,0.72);
          border-left: 3px solid rgba(0,0,0,0.5);
          padding: 0.5rem 0 0.5rem 1.25rem;
          margin-bottom: 1.75rem;
        }
        .publicacao-prose article p.lead strong {
          font-weight: 500;
          font-style: normal;
        }
        .publicacao-prose article h3 {
          font-family: var(--font-cormorant, 'Cormorant Garamond'), Georgia, serif;
          font-size: 1.5rem;
          font-weight: 600;
          margin: 2.25rem 0 1rem;
          color: #1d2330;
        }
        .publicacao-prose article footer {
          margin-top: 3rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(0,0,0,0.12);
          font-family: inherit;
          font-size: 0.85rem;
          color: rgba(0,0,0,0.55);
          text-align: center;
        }
        .publicacao-prose article footer a {
          color: rgba(0,0,0,0.8);
          border-bottom: 1px solid rgba(0,0,0,0.35);
          text-decoration: none;
        }
        .publicacao-prose article footer a:hover {
          color: black;
        }
      `}</style>
    </main>
  );
}

// ISR revalidate 60s — quando Tiago aprovar nova publicação ou editar uma
// existente no cockpit, aparece aqui em ~1min.
export const revalidate = 60;
