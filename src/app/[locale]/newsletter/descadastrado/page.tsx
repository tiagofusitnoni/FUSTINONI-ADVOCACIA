import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { getCockpitApiBase } from "@/lib/publicacoes";

export const metadata: Metadata = {
  title: "Inscrição encerrada | FUSTINONI ADVOCACIA",
  robots: { index: false },
};

type PageProps = {
  searchParams: Promise<{ t?: string }>;
};

async function descadastrarToken(token: string) {
  try {
    const r = await fetch(
      `${getCockpitApiBase()}/api/site/newsletter/descadastrar/${encodeURIComponent(token)}`,
      { cache: "no-store", headers: { Accept: "application/json" } },
    );
    if (!r.ok) return { ok: false };
    return await r.json();
  } catch {
    return { ok: false };
  }
}

export default async function DescadastradoPage({ searchParams }: PageProps) {
  const sp = await searchParams;
  const token = sp.t || "";
  const data = token ? await descadastrarToken(token) : { ok: false };
  const sucesso = data.ok === true;

  return (
    <main className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6 md:py-32">
        {sucesso ? (
          <>
            <div className="text-[11px] tracking-[0.16em] uppercase font-semibold text-black/50 mb-4">
              ◆ Inscrição encerrada
            </div>
            <h1 className="font-serif text-4xl md:text-5xl leading-tight mb-6">
              Pronto, você foi removido.
            </h1>
            <div className="mx-auto h-px w-16 bg-black/30 my-8" />
            <p className="text-base text-black/65 mb-4">
              Você não receberá mais e-mails do escritório a partir de agora.
            </p>
            <p className="text-base text-black/65 mb-10">
              Se mudou de ideia ou foi engano, é só se inscrever novamente.
            </p>
            <Link
              href="/publicacoes"
              className="inline-block border border-black bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-black hover:bg-black hover:text-white transition-colors"
            >
              Voltar às publicações
            </Link>
          </>
        ) : (
          <>
            <div className="text-[11px] tracking-[0.16em] uppercase font-semibold text-black/50 mb-4">
              ◆ Erro
            </div>
            <h1 className="font-serif text-4xl md:text-5xl leading-tight mb-6">
              Link inválido.
            </h1>
            <div className="mx-auto h-px w-16 bg-black/30 my-8" />
            <p className="text-base text-black/65 mb-10">
              Não foi possível processar o pedido. Se ainda estiver recebendo e-mails que não quer,
              entre em contato pelo site.
            </p>
            <Link
              href="/"
              className="inline-block border border-black bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-black hover:bg-black hover:text-white transition-colors"
            >
              Ir para o site
            </Link>
          </>
        )}
      </div>
    </main>
  );
}
