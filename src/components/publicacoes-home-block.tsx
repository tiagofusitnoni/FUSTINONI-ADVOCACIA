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
    <section id="publicacoes" className="scroll-mt-24 bg-[#FFFDF9] sm:scroll-mt-28">
      <div className="mx-auto w-full max-w-[min(88vw,96rem)] px-6 py-24 sm:px-10 sm:py-28 lg:py-36">
        <div className="mb-16 flex flex-col items-start justify-between gap-8 sm:mb-20 sm:flex-row sm:items-end">
          <div>
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-10 bg-[#B08D46]" aria-hidden="true" />
              <span className="text-[0.6875rem] font-medium uppercase tracking-[0.32em] text-[#9A7A3A]">Publicações</span>
            </div>
            <h2 className="font-serif text-[2rem] leading-[1.15] tracking-[-0.012em] text-[#14231D] sm:text-[2.5rem] lg:text-[2.85rem]">
              O que estamos
              <br />
              acompanhando agora
            </h2>
          </div>
          <Link
            href="/publicacoes"
            className="group inline-flex items-center gap-3 whitespace-nowrap text-[0.6875rem] font-medium uppercase tracking-[0.24em] text-[#0F2A22]"
          >
            <span className="border-b border-[#B08D46] pb-1">Ver todas as publicações</span>
            <span className="text-[#B08D46] transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {publicacoes.map((p) => (
            <Link
              key={p.id}
              href={{ pathname: "/publicacoes/[slug]", params: { slug: p.slug } }}
              className="group flex flex-col border border-[#E3DDD1] bg-[#F6F3EE] p-8 transition-colors duration-300 hover:border-[#B08D46]/60"
            >
              <div className="mb-6 flex flex-wrap items-center gap-2 text-[0.625rem] font-medium uppercase tracking-[0.18em] text-[#4F5A54]">
                <span>{formatarDataPublicacao(p.publicada_em)}</span>
                {p.tribunal && p.tribunal.toLowerCase() !== "nenhum" && (
                  <>
                    <span className="text-[#B08D46]">·</span>
                    <span className="text-[#14231D]">{p.tribunal}</span>
                  </>
                )}
                <span className="text-[#B08D46]">·</span>
                <span>{formatarArea(p.area_direito)}</span>
              </div>
              <h3 className="mb-4 font-serif text-[1.25rem] leading-snug text-[#14231D]">
                {p.titulo}
              </h3>
              <p className="mb-8 line-clamp-3 flex-1 text-[0.9rem] leading-7 text-[#4F5A54]">
                {p.lead}
              </p>
              <div className="flex items-center gap-3 border-t border-[#E3DDD1] pt-5 text-[0.6875rem] font-medium uppercase tracking-[0.24em] text-[#0F2A22]">
                Ler publicação
                <span className="text-[#B08D46] transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
