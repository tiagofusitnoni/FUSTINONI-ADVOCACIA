import { Link } from "@/i18n/navigation";
import {
  listarPublicacoes,
  formatarDataPublicacao,
  formatarArea,
} from "@/lib/publicacoes";

/**
 * Bloco "Últimas publicações" na home (pt only).
 *
 * Mostra os 3 últimos artigos aprovados pelo Tiago no cockpit. Server Component
 * — fetch SSR com ISR 60s. Se 0 publicações, renderiza nada (não polui home).
 *
 * Posicionamento na home: entre #specific-services e #faq.
 */
export async function PublicacoesHomeBlock() {
  const data = await listarPublicacoes({ limit: 3 });
  const publicacoes = data.publicacoes;

  // Não renderiza bloco se não tem publicação ainda — home fica limpa
  if (publicacoes.length === 0) {
    return null;
  }

  return (
    <section
      id="publicacoes"
      className="scroll-mt-24 border-b border-black/15 bg-neutral-50/60 px-4 py-16 sm:px-6 sm:py-20 sm:scroll-mt-28 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header do bloco */}
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <div className="text-[11px] tracking-[0.16em] uppercase font-semibold text-black/50 mb-3">
              ◆ Publicações
            </div>
            <h2 className="font-serif text-3xl font-medium leading-tight tracking-tight sm:text-4xl md:text-5xl">
              O que estamos
              <br />
              acompanhando agora
            </h2>
          </div>
          <Link
            href="/publicacoes"
            className="text-xs uppercase tracking-[0.06em] font-semibold text-black/80 border-b border-black/40 pb-1 hover:text-black hover:border-black whitespace-nowrap"
          >
            Ver todas as publicações →
          </Link>
        </div>

        {/* Grid 3 cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
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
              <h3 className="font-serif text-xl leading-snug font-medium text-black mb-3 group-hover:text-black/80">
                {p.titulo}
              </h3>
              <p className="flex-1 text-sm leading-relaxed text-black/65 mb-5 line-clamp-3">
                {p.lead}
              </p>
              <div className="border-t border-black/10 pt-3 text-[11px] uppercase tracking-[0.08em] font-semibold text-black/70">
                Ler publicação <span className="text-black/40">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
