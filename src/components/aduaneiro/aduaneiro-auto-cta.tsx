"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FileUpload } from "@/components/ui/file-upload";
import { WhatsAppCTAButton } from "@/components/whatsapp-cta-button";

export type AutoNatureza =
  | "perdimento"
  | "multa"
  | "reclassificacao"
  | "valoracao"
  | "outro"
  | "indefinido";

export type AutoAnalysis = {
  is_documento_aduaneiro: boolean;
  tipo_documento: string;
  natureza: AutoNatureza;
  dispositivos: string[];
  prazo: string;
  pontos_atencao: string[];
  resumo: string;
};

export type AutoCtaCopy = {
  sectionEyebrow: string;
  sectionTitle: string;
  sectionIntro: string;
  steps: { title: string; detail: string }[];
  uploadTitle: string;
  uploadSubtitle: string;
  dropHint: string;
  modifiedPrefix: string;
  progressLabels: string[];
  resultTitle: string;
  labelTipo: string;
  labelNatureza: string;
  labelDispositivos: string;
  labelPrazo: string;
  labelPontos: string;
  naturezaLabels: Record<AutoNatureza, string>;
  notAduaneiroTitle: string;
  notAduaneiroBody: string;
  disclaimer: string;
  ctaLabel: string;
  whatsappMessage: string;
  tryAgain: string;
  errorAnalyze: string;
  needsPdf: string;
};

type Phase = "ready" | "running" | "complete";

function useProgress(running: boolean, labels: string[]) {
  const [i, setI] = useState(0);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  useEffect(() => {
    if (!running) {
      timers.current.forEach(clearTimeout);
      timers.current = [];
      setI(0);
      return;
    }
    for (let k = 1; k < labels.length; k++) {
      timers.current.push(setTimeout(() => setI(k), k * 1800));
    }
    return () => {
      timers.current.forEach(clearTimeout);
      timers.current = [];
    };
  }, [running, labels.length]);
  return { label: labels[i] ?? labels[0] ?? "", pct: Math.min(20 + i * 30, 85) };
}

export function AduaneiroAutoCta({
  copy,
  whatsappPhone,
}: {
  copy: AutoCtaCopy;
  whatsappPhone: string;
}) {
  const [phase, setPhase] = useState<Phase>("ready");
  const [analysis, setAnalysis] = useState<AutoAnalysis | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [uploadKey, setUploadKey] = useState(0);
  const progress = useProgress(phase === "running", copy.progressLabels);

  const handleFiles = useCallback(
    async (files: File[]) => {
      const file = files[0];
      if (!file) return;
      setError(null);
      setPhase("running");
      const fd = new FormData();
      fd.append("file", file);
      try {
        const res = await fetch("/api/aduaneiro/analyze-auto", { method: "POST", body: fd });
        if (res.status === 415) {
          setError(copy.needsPdf);
          setPhase("ready");
          setUploadKey(k => k + 1);
          return;
        }
        const payload = (await res.json()) as { analysis?: AutoAnalysis; code?: string };
        if (!res.ok || !payload.analysis) {
          setError(copy.errorAnalyze);
          setPhase("ready");
          setUploadKey(k => k + 1);
          return;
        }
        setAnalysis(payload.analysis);
        setPhase("complete");
      } catch {
        setError(copy.errorAnalyze);
        setPhase("ready");
        setUploadKey(k => k + 1);
      }
    },
    [copy.errorAnalyze, copy.needsPdf],
  );

  function reset() {
    setPhase("ready");
    setAnalysis(null);
    setError(null);
    setUploadKey(k => k + 1);
  }

  const isAduaneiro = analysis?.is_documento_aduaneiro ?? false;

  return (
    <section className="relative border-b border-black/15 bg-black px-4 py-16 text-white sm:px-6 sm:py-20 md:px-10">
      <div className="mx-auto max-w-5xl">
        <p className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-white/80">
          {copy.sectionEyebrow}
        </p>
        <h2 className="mb-5 text-center font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
          {copy.sectionTitle}
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-sm leading-7 text-white/75">
          {copy.sectionIntro}
        </p>

        <div className="mb-12 grid gap-6 sm:grid-cols-3">
          {copy.steps.map((s, n) => (
            <div
              key={s.title}
              className="flex gap-4 border border-white/20 bg-zinc-950 p-4 sm:min-h-[140px]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/35 text-sm font-bold tabular-nums">
                {n + 1}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold tracking-tight">{s.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-white/72">{s.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-xl border border-white/20 bg-zinc-950 p-6 sm:p-8">
          {phase === "running" && (
            <div className="flex flex-col items-center justify-center gap-4 py-16">
              <Loader2 className="size-6 animate-spin text-white/70" aria-hidden />
              <span className="text-sm text-white/90">{progress.label}</span>
              <div className="h-1 w-48 overflow-hidden bg-white/10">
                <div
                  className="h-full bg-white/80 transition-all duration-700 ease-out"
                  style={{ width: `${progress.pct}%` }}
                />
              </div>
            </div>
          )}

          {phase === "ready" && (
            <div>
              <FileUpload
                key={uploadKey}
                variant="dark"
                title={copy.uploadTitle}
                subtitle={copy.uploadSubtitle}
                dropHint={copy.dropHint}
                modifiedPrefix={copy.modifiedPrefix}
                accept=".pdf,application/pdf"
                onChange={files => void handleFiles(files)}
              />
              {error ? (
                <p className="mt-4 whitespace-pre-line text-center text-sm leading-relaxed text-red-300">
                  {error}
                </p>
              ) : null}
            </div>
          )}

          {phase === "complete" && analysis && (
            <div>
              {isAduaneiro ? (
                <div className="space-y-5">
                  <h3 className="font-serif text-xl sm:text-2xl">{copy.resultTitle}</h3>

                  {analysis.resumo ? (
                    <p className="text-sm leading-relaxed text-white/80">{analysis.resumo}</p>
                  ) : null}

                  <dl className="grid gap-3 text-sm">
                    {analysis.tipo_documento ? (
                      <div className="flex flex-wrap gap-x-3 gap-y-1 border-t border-white/15 pt-3">
                        <dt className="text-white/55">{copy.labelTipo}</dt>
                        <dd className="font-medium">{analysis.tipo_documento}</dd>
                      </div>
                    ) : null}
                    <div className="flex flex-wrap gap-x-3 gap-y-1 border-t border-white/15 pt-3">
                      <dt className="text-white/55">{copy.labelNatureza}</dt>
                      <dd className="font-medium">
                        {copy.naturezaLabels[analysis.natureza] ?? copy.naturezaLabels.indefinido}
                      </dd>
                    </div>
                    {analysis.dispositivos.length > 0 ? (
                      <div className="flex flex-wrap gap-x-3 gap-y-1 border-t border-white/15 pt-3">
                        <dt className="text-white/55">{copy.labelDispositivos}</dt>
                        <dd className="font-medium">{analysis.dispositivos.join(" · ")}</dd>
                      </div>
                    ) : null}
                    {analysis.prazo ? (
                      <div className="flex flex-wrap gap-x-3 gap-y-1 border-t border-white/15 pt-3">
                        <dt className="text-white/55">{copy.labelPrazo}</dt>
                        <dd className="font-medium">{analysis.prazo}</dd>
                      </div>
                    ) : null}
                  </dl>

                  {analysis.pontos_atencao.length > 0 ? (
                    <div className="border-t border-white/15 pt-4">
                      <p className="mb-3 text-xs font-bold uppercase tracking-widest text-white/55">
                        {copy.labelPontos}
                      </p>
                      <ul className="space-y-2">
                        {analysis.pontos_atencao.map(p => (
                          <li key={p} className="flex gap-2 text-sm leading-relaxed text-white/80">
                            <span aria-hidden className="text-white/40">
                              —
                            </span>
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  <p className="border-t border-white/15 pt-4 text-xs leading-relaxed text-white/45">
                    {copy.disclaimer}
                  </p>

                  <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <WhatsAppCTAButton
                      origem="direito_aduaneiro_auto"
                      whatsappPhone={whatsappPhone}
                      whatsappBaseMessage={copy.whatsappMessage}
                      className="h-[42px] rounded-none bg-white px-6 text-xs font-medium uppercase tracking-wider text-black hover:bg-white/90"
                    >
                      {copy.ctaLabel}
                    </WhatsAppCTAButton>
                    <Button
                      type="button"
                      variant="outline"
                      className="h-[42px] rounded-none border-white/35 text-xs uppercase tracking-wider text-white hover:bg-white/10"
                      onClick={reset}
                    >
                      {copy.tryAgain}
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <h3 className="font-serif text-xl sm:text-2xl">{copy.notAduaneiroTitle}</h3>
                  <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/75">
                    {copy.notAduaneiroBody}
                  </p>
                  <Button
                    type="button"
                    variant="outline"
                    className="mt-6 h-[42px] rounded-none border-white/35 text-xs uppercase tracking-wider text-white hover:bg-white/10"
                    onClick={reset}
                  >
                    {copy.tryAgain}
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
