import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";

export const metadata: Metadata = {
  title: "Inscrição recebida | FUSTINONI ADVOCACIA",
  robots: { index: false },
};

export default function ObrigadoPage() {
  return (
    <main className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6 md:py-32">
        <div className="text-[11px] tracking-[0.16em] uppercase font-semibold text-black/50 mb-4">
          ◆ Quase lá ◆
        </div>
        <h1 className="font-serif text-4xl md:text-5xl leading-tight mb-6">
          Inscrição recebida.
        </h1>
        <div className="mx-auto h-px w-16 bg-black/30 my-8" />
        <p className="text-lg text-black/70 mb-4">
          Acabamos de enviar um e-mail com o link de confirmação para o endereço informado.
        </p>
        <p className="text-base text-black/65 mb-10">
          Por favor, clique no link recebido para concluir sua inscrição. Cheque também a
          caixa de spam se não encontrar.
        </p>
        <Link
          href="/publicacoes"
          className="inline-block border border-black bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-black hover:bg-black hover:text-white transition-colors"
        >
          ← Voltar às publicações
        </Link>
      </div>
    </main>
  );
}
