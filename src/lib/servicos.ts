/**
 * Fetch helpers pros SERVIÇOS ESPECÍFICOS geridos no cockpit Fidelitas.
 *
 * Espelha lib/publicacoes.ts: o cockpit expõe a API pública /api/site/servicos
 * (com Bypass no Cloudflare Access). ISR revalidate=60 — o que o Tiago aprova no
 * cockpit aparece no site em ~60s, sem rebuild.
 */
import { getCockpitApiBase } from "./publicacoes";

export type ServicoSecao = {
  id: string;
  titulo: string;
  subtitulo?: string;
  paragrafos?: string[];
  lista?: string[];
  etapas?: { titulo: string; descricao: string }[];
};

export type ServicoConteudo = {
  hero: { titulo: string; chamada: string; descricao: string };
  secoes: ServicoSecao[];
  faq: { pergunta: string; resposta: string }[];
};

export type ServicoDetalhe = {
  slug: string;
  nome: string;
  area_direito: string;
  locale: string;
  conteudo: ServicoConteudo;
  seo: { title?: string; description?: string };
  publicada_em: string | null;
};

export type ServicoItem = {
  slug: string;
  nome: string;
  titulo: string;
  chamada?: string;
  area_direito: string;
};

export async function listarServicos(locale = "pt"): Promise<ServicoItem[]> {
  const url = new URL("/api/site/servicos", getCockpitApiBase());
  url.searchParams.set("locale", locale);
  try {
    const resp = await fetch(url.toString(), {
      next: { revalidate: 60 },
      headers: { Accept: "application/json" },
    });
    if (!resp.ok) return [];
    const data = (await resp.json()) as { servicos?: ServicoItem[] };
    return data.servicos ?? [];
  } catch (e) {
    console.warn("[servicos] fetch falhou:", e);
    return [];
  }
}

export async function getServicoDetalhe(
  slug: string,
  locale = "pt",
): Promise<ServicoDetalhe | null> {
  const url = new URL(
    `/api/site/servicos/${encodeURIComponent(slug)}`,
    getCockpitApiBase(),
  );
  url.searchParams.set("locale", locale);
  try {
    const resp = await fetch(url.toString(), {
      next: { revalidate: 60 },
      headers: { Accept: "application/json" },
    });
    if (resp.status === 404) return null;
    if (!resp.ok) return null;
    return (await resp.json()) as ServicoDetalhe;
  } catch (e) {
    console.warn(`[servico ${slug}] fetch falhou:`, e);
    return null;
  }
}
