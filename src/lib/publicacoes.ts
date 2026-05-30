/**
 * Fetch helpers pra publicações geradas pelo cockpit Fidelitas.
 *
 * O cockpit (chefe-agent) expõe via Tailscale Funnel:
 *   GET https://escritorio.tail02559d.ts.net/api/site/publicacoes
 *   GET https://escritorio.tail02559d.ts.net/api/site/publicacoes/<slug>
 *
 * Cada notícia que o Tiago aprova no cockpit aparece aqui. ISR no Next.js
 * com revalidate=60 garante que mudanças apareçam em até 60s sem rebuild.
 *
 * Override via env COCKPIT_API_BASE_URL (sem trailing slash).
 */

const FALLBACK_COCKPIT_URL = "https://escritorio.tail02559d.ts.net";

export function getCockpitApiBase(): string {
  const raw = process.env.COCKPIT_API_BASE_URL?.trim() || FALLBACK_COCKPIT_URL;
  return raw.replace(/\/+$/, "");
}

export type Publicacao = {
  id: number;
  slug: string;
  titulo: string;
  lead: string;
  area_direito: string;
  tribunal: string;
  classe_ato: string;
  tags: string[];
  publicada_em: string | null;
  fonte_nome: string;
  fonte_url: string;
  relevancia_score: number;
};

export type PublicacaoDetalhe = Publicacao & {
  html_render: string;
};

export type PublicacoesResponse = {
  publicacoes: Publicacao[];
  total: number;
  contagens_area: Record<string, number>;
};

/**
 * Lista publicações. Server-side fetch com ISR (revalidate 60s).
 */
export async function listarPublicacoes(opts?: {
  area?: string;
  limit?: number;
}): Promise<PublicacoesResponse> {
  const url = new URL("/api/site/publicacoes", getCockpitApiBase());
  if (opts?.area) url.searchParams.set("area", opts.area);
  if (opts?.limit) url.searchParams.set("limit", String(opts.limit));

  try {
    const resp = await fetch(url.toString(), {
      next: { revalidate: 60 },
      headers: { Accept: "application/json" },
    });
    if (!resp.ok) {
      console.warn(`[publicacoes] API retornou ${resp.status}`);
      return { publicacoes: [], total: 0, contagens_area: {} };
    }
    return (await resp.json()) as PublicacoesResponse;
  } catch (e) {
    console.warn("[publicacoes] fetch falhou:", e);
    return { publicacoes: [], total: 0, contagens_area: {} };
  }
}

/**
 * Detalhe de uma publicação por slug. Retorna null se não encontrada.
 */
export async function getPublicacaoDetalhe(
  slug: string,
): Promise<PublicacaoDetalhe | null> {
  const url = new URL(
    `/api/site/publicacoes/${encodeURIComponent(slug)}`,
    getCockpitApiBase(),
  );
  try {
    const resp = await fetch(url.toString(), {
      next: { revalidate: 60 },
      headers: { Accept: "application/json" },
    });
    if (resp.status === 404) return null;
    if (!resp.ok) {
      console.warn(`[publicacao ${slug}] API retornou ${resp.status}`);
      return null;
    }
    return (await resp.json()) as PublicacaoDetalhe;
  } catch (e) {
    console.warn(`[publicacao ${slug}] fetch falhou:`, e);
    return null;
  }
}

/**
 * Formata data ISO em "27 · MAI · 2026"
 */
export function formatarDataPublicacao(iso: string | null): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (isNaN(d.getTime())) return "";
  const dia = String(d.getDate()).padStart(2, "0");
  const meses = ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"];
  const mes = meses[d.getMonth()];
  const ano = d.getFullYear();
  return `${dia} · ${mes} · ${ano}`;
}

/**
 * Capitaliza primeira letra (ex: "tributario" -> "Tributário"; mapping manual)
 */
const AREA_LABELS: Record<string, string> = {
  civel: "Cível",
  consumidor: "Consumidor",
  trabalhista: "Trabalhista",
  empresarial: "Empresarial",
  tributario: "Tributário",
  penal: "Penal",
  administrativo: "Administrativo",
  locacao: "Locação",
  sucessoes: "Sucessões",
  ambiental: "Ambiental",
  constitucional: "Constitucional",
  processual_penal: "Processual Penal",
  outro: "Outros",
};

export function formatarArea(area: string): string {
  if (!area) return "";
  return AREA_LABELS[area.toLowerCase()] || (area.charAt(0).toUpperCase() + area.slice(1));
}
