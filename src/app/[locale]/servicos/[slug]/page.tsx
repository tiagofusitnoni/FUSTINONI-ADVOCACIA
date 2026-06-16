import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { type AppLocale } from "@/i18n/routing";
import { OpticsCard, OpticsCardContent, OpticsCardDescription, OpticsCardHeader, OpticsCardTitle } from "@/components/optics/optics-card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AnimatedList } from "@/components/ui/animated-list";
import { Card } from "@/components/ui/card";
import { Marquee } from "@/components/ui/marquee";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { WhatsAppCTAButton } from "@/components/whatsapp-cta-button";
import { SITE_NAME } from "@/lib/site";
import { getServicoDetalhe, listarServicos, type ServicoSecao } from "@/lib/servicos";

export const revalidate = 60;

const HERO_IMG = "/office-lounge.jpg";
const whatsappPhone = process.env.WHATSAPP_PHONE_NUMBER ?? "";

const T = {
  eyebrow: { pt: "Serviço específico", en: "Specific service", es: "Servicio específico", it: "Servizio specifico" },
  faq: { pt: "Perguntas frequentes", en: "Frequently asked questions", es: "Preguntas frecuentes", it: "Domande frequenti" },
  ctaEyebrow: { pt: "Agende sua consulta", en: "Schedule your consultation", es: "Agende su consulta", it: "Prenoti la sua consulenza" },
  ctaButton: { pt: "Falar com o escritório", en: "Talk to the firm", es: "Hablar con el despacho", it: "Parla con lo studio" },
  ctaTitle: {
    pt: "Fale com uma equipe preparada para examinar seu caso com seriedade técnica",
    en: "Talk to a team ready to review your case with technical rigor",
    es: "Hable con un equipo preparado para evaluar su caso con rigor técnico",
    it: "Parla con un team pronto a valutare il tuo caso con rigore tecnico",
  },
  badges: {
    pt: ["Atendimento por agendamento", "Análise individualizada", "Atuação nacional"],
    en: ["Scheduled service", "Individual review", "Nationwide practice"],
    es: ["Atención con cita previa", "Análisis individual", "Actuación nacional"],
    it: ["Assistenza su appuntamento", "Analisi individuale", "Operatività nazionale"],
  },
  msg: {
    pt: "Olá! Vim pelo site e gostaria de falar sobre este serviço.",
    en: "Hello! I came from the website and would like to discuss this service.",
    es: "¡Hola! Vengo del sitio y me gustaría hablar sobre este servicio.",
    it: "Buongiorno! Sono arrivato dal sito e vorrei parlare di questo servizio.",
  },
} as const;

type PageProps = { params: Promise<{ locale: AppLocale; slug: string }> };

export async function generateStaticParams() {
  const servicos = await listarServicos("pt");
  const locales: AppLocale[] = ["pt", "en", "es", "it"];
  return locales.flatMap((locale) => servicos.map((s) => ({ locale, slug: s.slug })));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const s = await getServicoDetalhe(slug, locale);
  if (!s) return {};
  const hero = s.conteudo?.hero ?? { titulo: s.nome, chamada: "", descricao: "" };
  const title = s.seo?.title || `${hero.titulo} | ${SITE_NAME}`;
  const description = (s.seo?.description || hero.descricao || hero.chamada || "").slice(0, 180);
  return {
    title,
    description,
    openGraph: { type: "website", title, description, siteName: SITE_NAME },
    twitter: { card: "summary_large_image", title, description },
  };
}

function paragraphs(text?: string): string[] {
  if (!text) return [];
  return text.split(/\n+/).map((p) => p.trim()).filter(Boolean);
}

export default async function ServicoPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const data = await getServicoDetalhe(slug, locale);
  if (!data || !data.conteudo?.hero) notFound();

  const { hero, secoes = [], faq = [] } = data.conteudo;
  const sec = (id: string): ServicoSecao | undefined =>
    secoes.find((s) => s.id === id);
  const problema = sec("problema");
  const como = sec("como-atuamos");
  const questionavel = sec("questionavel") ?? sec("irregularidade");
  const publico = sec("publico");
  const diferenciais = sec("diferenciais");
  const msg = T.msg[locale] ?? T.msg.pt;

  const heroDescs = paragraphs(hero.descricao);
  const preliminarItems = (problema?.lista ?? []).slice(0, 5);

  return (
    <>
      {/* Hero fotográfico */}
      <section className="relative flex min-h-[48vh] flex-col justify-end overflow-hidden border-b border-black/15 px-4 py-14 sm:px-6 sm:py-16 md:px-10 md:py-20">
        <Image src={HERO_IMG} alt="" fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#16181d]/55 via-[#16181d]/62 to-[#16181d]/88" />
        <div className="relative z-10 w-full max-w-4xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-[#9aa3b0]" />
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#c3d2dc]">
              {hero.titulo}
            </span>
          </div>
          <h1 className="max-w-3xl font-serif text-4xl leading-[1.03] tracking-tight text-[#f7fafc] sm:text-5xl md:text-6xl">
            {hero.chamada || hero.titulo}
          </h1>
        </div>
      </section>

      {/* Intro + cartão preliminar */}
      <section className="border-b border-black/15 px-4 pt-12 pb-12 sm:px-6 sm:pt-14 md:px-10 md:pt-16">
        <div className="grid items-start gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div className="min-w-0">
            {heroDescs.map((p, i) => (
              <p key={i} className="mb-5 max-w-3xl text-sm leading-7 text-black/70 sm:text-base">
                {p}
              </p>
            ))}
            <div className="mb-8 mt-3 flex flex-col gap-3 sm:flex-row">
              <WhatsAppCTAButton
                origem={`servico_${slug}`}
                whatsappPhone={whatsappPhone}
                whatsappBaseMessage={msg}
                className="h-[42px] rounded-none border-black bg-black px-6 text-xs uppercase tracking-wider text-white hover:bg-black/85"
              >
                {T.ctaButton[locale] ?? T.ctaButton.pt}
              </WhatsAppCTAButton>
            </div>
            {(diferenciais?.lista?.length ?? 0) > 0 && (
              <div className="mb-2 w-full max-w-full overflow-hidden">
                <Marquee className="w-full max-w-full overflow-hidden [--duration:30s] [--gap:0.5rem] p-0" repeat={6}>
                  {(diferenciais?.lista ?? []).map((tag) => (
                    <Card key={tag} className="min-w-56 shrink-0 rounded-none border-black/15 px-4 py-3 text-xs font-medium shadow-none">
                      {tag}
                    </Card>
                  ))}
                </Marquee>
              </div>
            )}
          </div>

          {preliminarItems.length > 0 && (
            <div className="min-w-0">
              <OpticsCard decorations className="rounded-none border border-black/15 ring-0 bg-white p-6 shadow-none">
                <OpticsCardHeader className="mb-6 border-b border-black/15 pb-4">
                  <OpticsCardDescription className="text-xs font-bold uppercase tracking-widest text-black/70">
                    {T.eyebrow[locale] ?? T.eyebrow.pt}
                  </OpticsCardDescription>
                  <OpticsCardTitle className="mt-2 font-serif text-2xl leading-tight font-normal">
                    {problema?.subtitulo || problema?.titulo || hero.titulo}
                  </OpticsCardTitle>
                </OpticsCardHeader>
                <OpticsCardContent className="px-0">
                  <AnimatedList delay={650} newestOnTop={false} className="w-full items-stretch gap-2">
                    {preliminarItems.map((item, i) => (
                      <Card
                        key={item}
                        style={{ order: i + 1 }}
                        className={i === preliminarItems.length - 1
                          ? "rounded-none border-black bg-black p-3 text-sm text-white shadow-none"
                          : "rounded-none border-black/15 p-3 text-sm shadow-none"}
                      >
                        {item}
                      </Card>
                    ))}
                  </AnimatedList>
                </OpticsCardContent>
              </OpticsCard>
            </div>
          )}
        </div>
      </section>

      <div className="h-16 w-full border-b border-black/15 bg-grid-pattern-small" />

      {/* Problema */}
      {problema && (
        <>
          <section id="problema" className="border-b border-black/15 px-4 py-16 sm:px-6 sm:py-20 md:px-10">
            <div className="mb-12 grid gap-8 md:grid-cols-2 md:items-end">
              <div>
                <div className="mb-4 text-xs font-bold uppercase tracking-widest text-black/70">{problema.titulo}</div>
                <h2 className="font-serif text-3xl leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">
                  {problema.subtitulo || problema.titulo}
                </h2>
              </div>
              <div className="space-y-4 border-l border-black/15 pl-8 text-sm leading-7 text-black/70 sm:text-base">
                {(problema.paragrafos ?? []).map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {(problema.lista ?? []).map((label, i) => (
                <OpticsCard key={label} decorations className="rounded-none border border-black/15 bg-white shadow-none ring-0">
                  <OpticsCardHeader>
                    <OpticsCardDescription className="font-bold text-black/30">{String(i + 1).padStart(2, "0")}</OpticsCardDescription>
                    <OpticsCardTitle className="font-serif text-base font-normal leading-snug">{label}</OpticsCardTitle>
                  </OpticsCardHeader>
                </OpticsCard>
              ))}
            </div>
          </section>
          <div className="h-16 w-full border-b border-black/15 bg-grid-pattern-small" />
        </>
      )}

      {/* Como atuamos */}
      {como && (
        <>
          <section id="como-atuamos" className="border-b border-black/15 px-4 py-16 sm:px-6 sm:py-20 md:px-10">
            <div className="grid gap-10 md:grid-cols-2 md:items-start">
              <div>
                <div className="mb-4 text-xs font-bold uppercase tracking-widest text-black/70">{como.titulo}</div>
                <h2 className="font-serif text-3xl leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">
                  {como.subtitulo || como.titulo}
                </h2>
                {(como.paragrafos ?? []).map((p, i) => (
                  <p key={i} className="mt-6 text-sm leading-7 text-black/65 sm:text-base">{p}</p>
                ))}
              </div>
              <OpticsCard decorations className="rounded-none border border-black/15 bg-white shadow-none ring-0 gap-0">
                <OpticsCardHeader className="border-b border-black/15 pb-4">
                  <OpticsCardDescription className="text-xs font-bold uppercase tracking-widest text-black/70">{como.titulo}</OpticsCardDescription>
                </OpticsCardHeader>
                <div style={{ "--card": "black", "--muted": "rgb(255 255 255 / 0.15)" } as React.CSSProperties}
                  className="h-10 w-full bg-[repeating-linear-gradient(45deg,var(--card),var(--card)_3px,var(--muted)_3px,var(--muted)_6px)]" />
                <OpticsCardContent className="px-0">
                  <AnimatedList delay={400} newestOnTop={false} className="w-full items-stretch gap-2">
                    {(como.etapas ?? []).map((et, i) => (
                      <Card key={et.titulo} style={{ order: i + 1 }} className="rounded-none border-black/15 p-3 shadow-none">
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5 shrink-0 border border-black/20 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-black/60">
                            {String(i + 1).padStart(2, "0")}
                          </div>
                          <div>
                            <div className="text-sm font-medium">{et.titulo}</div>
                            <div className="mt-0.5 text-xs leading-relaxed text-black/70">{et.descricao}</div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </AnimatedList>
                </OpticsCardContent>
              </OpticsCard>
            </div>
          </section>
          <div className="h-16 w-full border-b border-black/15 bg-grid-pattern-small" />
        </>
      )}

      {/* Quando há fundamento jurídico */}
      {questionavel && (
        <>
          <section id="questionavel" className="border-b border-black/15 px-4 py-16 sm:px-6 sm:py-20 md:px-10">
            <div className="grid gap-8 md:grid-cols-[1fr_0.9fr] md:items-start">
              <div>
                <div className="mb-4 text-xs font-bold uppercase tracking-widest text-black/70">{questionavel.titulo}</div>
                <h2 className="font-serif text-3xl leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">
                  {questionavel.subtitulo || questionavel.titulo}
                </h2>
                {(questionavel.paragrafos ?? []).map((p, i) => (
                  <p key={i} className="mt-6 text-sm leading-7 text-black/65 sm:text-base">{p}</p>
                ))}
              </div>
              <OpticsCard decorations className="rounded-none border border-black/15 bg-white shadow-none ring-0 gap-0">
                <OpticsCardHeader className="border-b border-black/15 pb-4">
                  <OpticsCardDescription className="text-xs font-bold uppercase tracking-widest text-black/70">{questionavel.titulo}</OpticsCardDescription>
                </OpticsCardHeader>
                <div style={{ "--card": "black", "--muted": "rgb(255 255 255 / 0.15)" } as React.CSSProperties}
                  className="h-10 w-full bg-[repeating-linear-gradient(45deg,var(--card),var(--card)_3px,var(--muted)_3px,var(--muted)_6px)]" />
                <OpticsCardContent className="px-0">
                  <AnimatedList delay={300} newestOnTop={false} className="w-full items-stretch gap-2">
                    {(questionavel.lista ?? []).map((item, i) => (
                      <Card key={item} style={{ order: i + 1 }} className="rounded-none border-black/15 p-3 text-sm leading-6 shadow-none">
                        {item}
                      </Card>
                    ))}
                  </AnimatedList>
                </OpticsCardContent>
              </OpticsCard>
            </div>
          </section>
          <div className="h-16 w-full border-b border-black/15 bg-grid-pattern-small" />
        </>
      )}

      {/* Para quem é */}
      {publico && (
        <>
          <section id="publico" className="border-b border-black/15 px-4 py-16 sm:px-6 sm:py-20 md:px-10">
            <div className="max-w-4xl">
              <div className="mb-4 text-xs font-bold uppercase tracking-widest text-black/70">{publico.titulo}</div>
              <h2 className="font-serif text-3xl leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">
                {publico.subtitulo || publico.titulo}
              </h2>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {(publico.lista ?? []).map((label) => (
                <OpticsCard key={label} decorations className="rounded-none border border-black/15 bg-white shadow-none ring-0">
                  <OpticsCardHeader>
                    <OpticsCardTitle className="font-serif text-base font-normal leading-snug">{label}</OpticsCardTitle>
                  </OpticsCardHeader>
                </OpticsCard>
              ))}
            </div>
          </section>
          <div className="h-16 w-full border-b border-black/15 bg-grid-pattern-small" />
        </>
      )}

      {/* Diferenciais */}
      {diferenciais && (
        <>
          <section id="diferenciais" className="border-b border-black/15 px-4 py-16 sm:px-6 sm:py-20 md:px-10">
            <div className="mb-12 max-w-4xl">
              <div className="mb-4 text-xs font-bold uppercase tracking-widest text-black/70">{diferenciais.titulo}</div>
              <h2 className="font-serif text-3xl leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">
                {diferenciais.subtitulo || diferenciais.titulo}
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {(diferenciais.lista ?? []).map((label) => (
                <OpticsCard key={label} decorations className="rounded-none border border-black/15 bg-white shadow-none ring-0">
                  <OpticsCardHeader>
                    <OpticsCardTitle className="font-serif text-base font-normal leading-snug">{label}</OpticsCardTitle>
                  </OpticsCardHeader>
                </OpticsCard>
              ))}
            </div>
          </section>
          <div className="h-16 w-full border-b border-black/15 bg-grid-pattern-small" />
        </>
      )}

      {/* FAQ */}
      {faq.length > 0 && (
        <section id="faq" className="border-b border-black/15">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col justify-center border-b border-black/15 p-8 sm:p-12 lg:border-r lg:border-b-0 lg:p-20">
              <div className="mb-6 text-xs font-bold uppercase tracking-widest text-black/70">FAQ</div>
              <h2 className="max-w-sm font-serif text-3xl leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">
                {T.faq[locale] ?? T.faq.pt}
              </h2>
            </div>
            <div className="flex flex-col">
              <Accordion type="single" collapsible className="w-full">
                {faq.map((item, index) => (
                  <AccordionItem key={item.pergunta} value={`item-${index}`} className="border-b border-black/15 px-5 py-2 last:border-b-0 sm:px-8">
                    <AccordionTrigger className="py-6 text-left text-sm font-medium hover:no-underline md:text-base">
                      {item.pergunta}
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 leading-relaxed text-black/70">{item.resposta}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      )}

      {/* CTA final */}
      <section className="relative border-b border-black/15 bg-black px-4 pt-16 pb-20 text-center sm:px-6 sm:pt-20 md:px-10 md:pt-24 overflow-hidden">
        <BackgroundBeams className="absolute inset-0 z-0" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <div className="mb-6 text-xs font-bold uppercase tracking-widest text-white/85">{T.ctaEyebrow[locale] ?? T.ctaEyebrow.pt}</div>
          <h2 className="mx-auto mb-6 max-w-2xl font-serif text-3xl leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl">
            {T.ctaTitle[locale] ?? T.ctaTitle.pt}
          </h2>
          <div className="mt-8 flex justify-center">
            <WhatsAppCTAButton
              origem={`servico_${slug}`}
              whatsappPhone={whatsappPhone}
              whatsappBaseMessage={msg}
              className="h-[42px] rounded-none border-white bg-white px-8 text-xs uppercase tracking-wider text-black hover:bg-white/90"
            >
              {T.ctaButton[locale] ?? T.ctaButton.pt}
            </WhatsAppCTAButton>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs uppercase tracking-wider text-white/85">
            {(T.badges[locale] ?? T.badges.pt).map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
      </section>
    </>
  );
}
