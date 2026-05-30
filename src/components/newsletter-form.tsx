"use client";

import { useState } from "react";
import { useRouter } from "@/i18n/navigation";
import { getCockpitApiBase } from "@/lib/publicacoes";

const AREAS = [
  { slug: "civel", label: "Cível" },
  { slug: "consumidor", label: "Consumidor" },
  { slug: "trabalhista", label: "Trabalhista" },
  { slug: "empresarial", label: "Empresarial" },
  { slug: "tributario", label: "Tributário" },
  { slug: "administrativo", label: "Administrativo" },
  { slug: "locacao", label: "Locação" },
  { slug: "sucessoes", label: "Sucessões" },
  { slug: "penal", label: "Penal" },
  { slug: "ambiental", label: "Ambiental" },
  { slug: "constitucional", label: "Constitucional" },
];

type Modo = "todas" | "selecionar";
type State = "idle" | "enviando" | "ok" | "erro";

export function NewsletterForm({ compact = false }: { compact?: boolean }) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [modo, setModo] = useState<Modo>("todas");
  const [areas, setAreas] = useState<string[]>([]);
  const [aceiteLgpd, setAceiteLgpd] = useState(false);
  const [state, setState] = useState<State>("idle");
  const [erro, setErro] = useState<string | null>(null);

  const toggleArea = (slug: string) => {
    setAreas((prev) => (prev.includes(slug) ? prev.filter((a) => a !== slug) : [...prev, slug]));
  };

  const enviar = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro(null);

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setErro("E-mail inválido.");
      return;
    }
    if (!aceiteLgpd) {
      setErro("Você precisa aceitar receber e-mails pra continuar.");
      return;
    }
    if (modo === "selecionar" && areas.length === 0) {
      setErro("Selecione pelo menos uma área ou escolha 'Todas as áreas'.");
      return;
    }

    setState("enviando");
    try {
      const resp = await fetch(`${getCockpitApiBase()}/api/site/newsletter/inscrever`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          nome: nome.trim() || undefined,
          areas: modo === "todas" ? [] : areas,
        }),
      });
      const data = await resp.json().catch(() => ({}));
      if (!resp.ok) {
        const msg = (data && (data.detail || data.message)) || `Erro ${resp.status}`;
        setErro(String(msg));
        setState("erro");
        return;
      }
      setState("ok");
      // Redireciona pra página de obrigado após pequeno delay
      setTimeout(() => {
        router.push("/newsletter/obrigado" as never);
      }, 1500);
    } catch (e) {
      setErro("Não conseguimos enviar agora. Tente novamente em alguns minutos.");
      setState("erro");
    }
  };

  if (state === "ok") {
    return (
      <div className="border border-black/15 bg-white p-8 text-center">
        <div className="text-[11px] tracking-[0.16em] uppercase font-semibold text-black/50 mb-3">
          ◆ Quase lá
        </div>
        <h3 className="font-serif text-2xl mb-3">Inscrição recebida!</h3>
        <p className="text-sm text-black/65">
          Acabamos de enviar um e-mail pra <strong>{email}</strong> com o link de confirmação. Cheque sua
          caixa de entrada (e o spam, por garantia).
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={enviar} className={compact ? "" : "border border-black/15 bg-white p-8"}>
      {!compact && (
        <>
          <div className="text-[11px] tracking-[0.16em] uppercase font-semibold text-black/50 mb-3">
            ◆ Receba nossas publicações
          </div>
          <h3 className="font-serif text-2xl md:text-3xl mb-2">
            Newsletter jurídica do escritório
          </h3>
          <p className="text-sm text-black/65 mb-6">
            Receba no seu e-mail cada nova análise sobre decisões, teses e movimentos relevantes
            das áreas que você acompanha.
          </p>
        </>
      )}

      <div className="space-y-4">
        <div>
          <label className="block text-[11px] uppercase tracking-[0.08em] font-semibold text-black/70 mb-1">
            E-mail
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="seu@email.com"
            className="w-full border border-black/15 bg-white px-4 py-3 text-sm focus:border-black focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-[11px] uppercase tracking-[0.08em] font-semibold text-black/70 mb-1">
            Nome <span className="text-black/40 normal-case">(opcional)</span>
          </label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Como devemos chamá-lo?"
            className="w-full border border-black/15 bg-white px-4 py-3 text-sm focus:border-black focus:outline-none"
          />
        </div>

        <div>
          <div className="text-[11px] uppercase tracking-[0.08em] font-semibold text-black/70 mb-2">
            Quais áreas?
          </div>
          <div className="space-y-2">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="radio"
                name="modo"
                checked={modo === "todas"}
                onChange={() => setModo("todas")}
                className="mt-1"
              />
              <span className="text-sm">
                <strong>Todas as áreas.</strong> Receber toda publicação nova.
              </span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="radio"
                name="modo"
                checked={modo === "selecionar"}
                onChange={() => setModo("selecionar")}
                className="mt-1"
              />
              <span className="text-sm">
                <strong>Apenas áreas específicas.</strong> Eu escolho.
              </span>
            </label>
          </div>

          {modo === "selecionar" && (
            <div className="mt-3 grid grid-cols-2 gap-2 pl-6">
              {AREAS.map((a) => (
                <label key={a.slug} className="flex items-center gap-2 cursor-pointer text-sm">
                  <input
                    type="checkbox"
                    checked={areas.includes(a.slug)}
                    onChange={() => toggleArea(a.slug)}
                  />
                  <span>{a.label}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-black/10 pt-4">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={aceiteLgpd}
              onChange={(e) => setAceiteLgpd(e.target.checked)}
              className="mt-1"
            />
            <span className="text-xs text-black/65 leading-relaxed">
              Concordo em receber e-mails do escritório com as publicações jurídicas selecionadas. Você
              pode cancelar a qualquer momento — o link de descadastro está em todo e-mail. Tratamos
              seus dados conforme a LGPD.
            </span>
          </label>
        </div>

        {erro && (
          <div className="border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-900">
            {erro}
          </div>
        )}

        <button
          type="submit"
          disabled={state === "enviando"}
          className="w-full bg-black px-6 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-black/85 disabled:opacity-50 disabled:cursor-wait"
        >
          {state === "enviando" ? "Enviando…" : "Inscrever-se"}
        </button>
      </div>
    </form>
  );
}
