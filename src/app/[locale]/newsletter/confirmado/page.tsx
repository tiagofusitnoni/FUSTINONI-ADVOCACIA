import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { getCockpitApiBase } from "@/lib/publicacoes";

export const metadata: Metadata = {
  title: "Inscrição confirmada | FUSTINONI ADVOCACIA",
  robots: { index: false },
};

type PageProps = {
  searchParams: Promise<{ t?: string }>;
};

async function confirmarToken(token: string) {
  try {
    const r = await fetch(
      `${getCockpitApiBase()}/api/site/newsletter/confirmar/${encodeURIComponent(token)}`,
      { cache: "no-store", headers: { Accept: "application/json" } },
    );
    if (!r.ok) return { ok: false };
    return await r.json();
  } catch {
    return { ok: false };
  }
}

export default async function ConfirmadoPage({ searchParams }: PageProps) {
  const sp = await searchParams;
  const token = sp.t || "";
  const data = token ? await confirmarToken(token) : { ok: false };
  const sucesso = data.ok === true;

  return (
    <main className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6 md:py-32">
        {sucesso ? (
          <>
            <div className="text-[11px] tracking-[0.16em] uppercase font-semibold text-[#c9a86a] mb-4">
              ◆ Confirmado ◆
            </div>
            <h1 className="font-serif text-4xl md:text-5xl leading-tight mb-6">
              Pronto! Você está inscrito.
            </h1>
            <div className="mx-auto h-px w-16 bg-black/30 my-8" />
            <p className="text-lg text-black/70 mb-4">
              {data.nome ? `Obrigado, ${data.nome}.` : "Obrigado pela inscrição."}
            </p>
            <p className="text-base text-black/65 mb-10">
              Toda vez que publicarmos uma nova análise{" "}
              {Array.isArray(data.areas) && data.areas.length > 0
                ? "nas áreas que você selecionou"
                : "em qualquer área"}
              , você receberá um e-mail com o link para ler.
            </p>
            <Link
              href="/publicacoes"
              className="inline-block bg-black px-6 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-white hover:bg-black/85 transition-colors"
            >
              Ver publicações atuais
            </Link>
          </>
        ) : (
          <>
            <div className="text-[11px] tracking-[0.16em] uppercase font-semibold text-black/50 mb-4">
              ◆ Erro
            </div>
            <h1 className="font-serif text-4xl md:text-5xl leading-tight mb-6">
              Link inválido ou expirado.
            </h1>
            <div className="mx-auto h-px w-16 bg-black/30 my-8" />
            <p className="text-base text-black/65 mb-10">
              O link de confirmação não foi reconhecido. Se você se inscreveu há muito tempo,
              tente se inscrever novamente.
            </p>
            <Link
              href="/publicacoes"
              className="inline-block border border-black bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-black hover:bg-black hover:text-white transition-colors"
            >
              ← Voltar e tentar novamente
            </Link>
          </>
        )}
      </div>
    </main>
  );
}
