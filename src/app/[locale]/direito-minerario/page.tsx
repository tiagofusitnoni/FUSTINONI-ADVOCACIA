import type { Metadata } from "next";
import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";

import { Link } from "@/i18n/navigation";
import { type AppLocale } from "@/i18n/routing";
import {
  OpticsCard,
  OpticsCardAction,
  OpticsCardContent,
  OpticsCardDescription,
  OpticsCardHeader,
  OpticsCardTitle,
} from "@/components/optics/optics-card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AnimatedList } from "@/components/ui/animated-list";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Marquee } from "@/components/ui/marquee";
import { WhatsAppCTAButton } from "@/components/whatsapp-cta-button";
import { OG_LOCALE_BY_APP_LOCALE } from "@/lib/i18n";
import { getAlternatesLanguages, getLocalizedUrl } from "@/lib/seo";
import { SITE_NAME, SITE_OG_IMAGE } from "@/lib/site";

const pagePath = "/direito-minerario";
const PAGE_LOCALES = ["pt", "en"] as const;
type PageLocale = (typeof PAGE_LOCALES)[number];

const isPageLocale = (locale: AppLocale): locale is PageLocale =>
  (PAGE_LOCALES as readonly string[]).includes(locale);

type Faq = { question: string; answer: string };
type IndexedCard = { index: string; label: string; description: string };

type Copy = {
  metaTitle: string;
  metaDescription: string;
  whatsappHero: string;
  whatsappCta: string;

  breadcrumb: string;
  heroEyebrow: string;
  heroTitle: string;
  introP1: string;
  introP2: string;
  ctaPrimary: string;
  ctaSecondary: string;
  heroTags: string[];

  preliminarEyebrow: string;
  preliminarTitle: string;
  preliminarTag: string;
  preliminarItems: { text: string; tone: "default" | "inverse" }[];

  contratoEyebrow: string;
  contratoTitle: string;
  contratoIntro: string;
  contratoCards: IndexedCard[];

  qualidadeEyebrow: string;
  qualidadeTitle: string;
  qualidadeIntro: string;
  qualidadeItems: string[];

  navioEyebrow: string;
  navioTitle: string;
  navioIntro: string;
  navioItems: string[];

  regulacaoEyebrow: string;
  regulacaoTitle: string;
  regulacaoIntro: string;
  regulacaoCards: IndexedCard[];

  ambientalEyebrow: string;
  ambientalTitle: string;
  ambientalIntro: string;
  ambientalCards: IndexedCard[];

  disputasEyebrow: string;
  disputasTitle: string;
  disputasIntro: string;
  disputasItems: string[];

  publicoEyebrow: string;
  publicoTitle: string;
  publicoIntro: string;
  publicoCards: string[];
  disclaimerNote: string;

  bridgeText: string;
  bridgeLink: string;

  faqEyebrow: string;
  faqTitle: string;
  faqs: Faq[];

  ctaEyebrow: string;
  ctaTitle: string;
  ctaDescription: string;
  ctaButton: string;
  ctaBadges: string[];
};

const COPY: Record<PageLocale, Copy> = {
  pt: {
    metaTitle: "Direito Minerário e Exportação de Minério | FUSTINONI ADVOCACIA",
    metaDescription:
      "Direito minerário e exportação de minério: contratos de fornecimento, ajuste de preço por teor, CFEM, ANM, logística portuária e arbitragem internacional.",
    whatsappHero: "Olá! Gostaria de falar sobre um contrato de exportação de minério / commodities.",
    whatsappCta: "Olá! Vim pelo site e quero falar sobre uma operação de exportação de minério.",

    breadcrumb: "Direito Aduaneiro & Comércio Exterior",
    heroEyebrow: "Direito Minerário · Commodities · Exportação de Minério",
    heroTitle: "No comércio de minério, a margem mora nas cláusulas.",
    introP1:
      "O preço de capa de uma tonelada de minério diz pouco. O que define quanto se recebe — e quanto se perde — são o teor, o índice de cotação, o período de precificação e o relógio do navio, escritos em cláusulas que poucos leem com atenção até o primeiro litígio.",
    introP2:
      "O escritório estrutura e revisa contratos de fornecimento, financiamento e exportação de minério, com atenção à regulação mineral, tributária e ambiental — e a um caminho de disputa que se sustente também fora do país.",
    ctaPrimary: "Falar com o escritório",
    ctaSecondary: "Ver áreas de atuação",
    heroTags: ["Atendimento empresarial", "Contratos de exportação", "Atuação consultiva e contenciosa"],

    preliminarEyebrow: "Avaliação preliminar",
    preliminarTitle: "Pontos do contrato de minério que merecem leitura jurídica",
    preliminarTag: "Minério / Commodities",
    preliminarItems: [
      { text: "Ajuste de preço por teor (Fe, contaminantes) e penalidades sem critério claro", tone: "default" },
      { text: "Período de cotação (QP) e preço provisório/definitivo desalinhados do fluxo de caixa", tone: "default" },
      { text: "Cláusulas de laytime, demurrage e time bar desfavoráveis no afretamento", tone: "default" },
      { text: "CFEM, licenciamento e força maior tratados de forma genérica no contrato", tone: "default" },
      {
        text: "A leitura jurídica do contrato permite alinhar preço, qualidade, logística e risco regulatório antes do primeiro embarque.",
        tone: "inverse",
      },
    ],

    contratoEyebrow: "Contrato de fornecimento",
    contratoTitle: "A anatomia do contrato de minério",
    contratoIntro:
      "Antes do preço, vem a estrutura: o tipo de contrato, o volume comprometido, a exclusividade e a forma de resolver o impasse definem o equilíbrio da operação ao longo de anos.",
    contratoCards: [
      {
        index: "01",
        label: "Offtake e fornecimento de longo prazo",
        description:
          "Contratos de offtake e long-term supply: volume, prazo, exclusividade, take-or-pay e condições de prorrogação.",
      },
      {
        index: "02",
        label: "Spot e embarque a embarque",
        description:
          "Operações spot e contratos por embarque, com atenção à formação de preço e à alocação de risco em cada cargo.",
      },
      {
        index: "03",
        label: "Lei e foro aplicáveis",
        description:
          "Escolha da lei aplicável e do foro ou da arbitragem — ponto que define onde e como uma eventual disputa será resolvida.",
      },
      {
        index: "04",
        label: "Garantias e inadimplemento",
        description:
          "Cláusulas de garantia, cartas de crédito, eventos de inadimplemento e os remédios contratuais correspondentes.",
      },
    ],

    qualidadeEyebrow: "Qualidade, teor e preço",
    qualidadeTitle: "Como o número vira dinheiro",
    qualidadeIntro:
      "É no encontro entre a especificação de qualidade e o mecanismo de preço que a margem se define. Cada cláusula técnica tem efeito direto sobre o valor recebido por tonelada.",
    qualidadeItems: [
      "Especificação de qualidade: teor de ferro (Fe), sílica, alumina, fósforo e demais contaminantes",
      "Ajuste de preço por teor e penalidades (price adjustment) sobre a base contratada",
      "Umidade e conversão entre tonelada úmida e tonelada seca (WMT / DMT)",
      "Índices de referência (Platts e congêneres) e a formação do preço",
      "Preço provisório e preço definitivo (provisional / final pricing) e o período de cotação (QP)",
      "Amostragem, análise e o laudo dirimente (umpire) em caso de divergência de teor",
    ],

    navioEyebrow: "Logística e afretamento",
    navioTitle: "O navio e o relógio",
    navioIntro:
      "No granel, o tempo é preço. A coordenação entre o contrato de venda e o de transporte evita que a sobreestadia de um navio consuma o ganho da operação.",
    navioItems: [
      "Afretamento (charter party) e a coordenação back-to-back com o contrato de venda",
      "Laytime, notice of readiness (NOR) e o início da contagem da estadia",
      "Demurrage, despatch e o prazo decadencial (time bar) para a cobrança",
      "Incoterms para granel (FOB, CFR, CIF) e a transferência de risco e de custo",
      "Inspeção de carga, draft survey e divergências de peso no embarque",
    ],

    regulacaoEyebrow: "Regulação e tributação",
    regulacaoTitle: "A camada regulatória e tributária da exportação",
    regulacaoIntro:
      "Sobre o contrato incide uma camada própria do setor mineral — royalty, título minerário, tributação da exportação — que precisa estar refletida na operação e no preço.",
    regulacaoCards: [
      {
        index: "01",
        label: "CFEM",
        description:
          "A Compensação Financeira pela Exploração Mineral (Lei 13.540/2017): base de cálculo, alíquotas por substância e as discussões sobre a sua incidência.",
      },
      {
        index: "02",
        label: "ANM e Código de Mineração",
        description:
          "Títulos minerários, obrigações perante a Agência Nacional de Mineração (ANM) e o regime do Código de Mineração.",
      },
      {
        index: "03",
        label: "Imunidade de ICMS na exportação",
        description:
          "A imunidade constitucional do ICMS na exportação (CF, art. 155, § 2º, X, 'a'), regulada pela Lei Kandir (LC 87/96), e a não incidência na venda à trading com fim específico de exportação (Súmula 536/STJ).",
      },
      {
        index: "04",
        label: "PIS/COFINS e a cadeia de exportação",
        description:
          "Não incidência e creditamento de PIS/COFINS na exportação, inclusive na exportação indireta por comercial exportadora/trading (STF, Tema 674 — RE 759244).",
      },
      {
        index: "05",
        label: "DU-E e logística de granéis",
        description:
          "Declaração Única de Exportação (DU-E), Siscomex e as particularidades do embarque de granéis pelo porto, inclusive a não incidência do ICMS sobre o frete interestadual até o porto (Súmula 649/STJ).",
      },
      {
        index: "06",
        label: "Due diligence de cadeia",
        description:
          "Diligência sobre origem, titularidade e conformidade da cadeia mineral, inclusive exigências de compradores no exterior.",
      },
    ],

    ambientalEyebrow: "Ambiental e força maior",
    ambientalTitle: "Licenciamento, barragens e o que interrompe a operação",
    ambientalIntro:
      "Um evento ambiental ou regulatório pode parar a mina e, com ela, o fornecimento. O contrato precisa antecipar quem suporta esse risco.",
    ambientalCards: [
      {
        index: "01",
        label: "Licenciamento ambiental",
        description:
          "Licenças, condicionantes e o impacto de sua suspensão sobre os compromissos de fornecimento já assumidos.",
      },
      {
        index: "02",
        label: "Segurança de barragens",
        description:
          "A Política Nacional de Segurança de Barragens (Lei 12.334/2010, alterada pela Lei 14.066/2020) e seus reflexos regulatórios e contratuais.",
      },
      {
        index: "03",
        label: "Força maior e change in law",
        description:
          "Cláusulas de força maior, change in law e hardship (onerosidade excessiva, CC arts. 478-480) que suspendem ou realocam obrigações diante de eventos regulatórios e ambientais.",
      },
    ],

    disputasEyebrow: "Disputas internacionais",
    disputasTitle: "Quando a disputa cruza a fronteira",
    disputasIntro:
      "Contratos de minério costumam ser regidos por lei estrangeira e resolvidos por arbitragem fora do país. Estruturar isso desde o início evita surpresas no momento do conflito.",
    disputasItems: [
      "Cláusula compromissória e a escolha da sede da arbitragem (Londres, Paris, Singapura)",
      "Câmaras e regras aplicáveis (LCIA, ICC, SIAC) e o idioma do procedimento",
      "Homologação da sentença arbitral estrangeira pelo STJ, via que opera o seu reconhecimento (Convenção de Nova York; Lei 9.307/96, arts. 34-40)",
      "Medidas de urgência e a coordenação entre arbitragem e tutela cautelar perante o Judiciário",
    ],

    publicoEyebrow: "Para quem é",
    publicoTitle: "Mineradoras, tradings e exportadores de minério",
    publicoIntro:
      "A atuação é pensada para quem produz, comercializa ou financia minério — e para o comprador internacional que contrata fornecimento de origem brasileira.",
    publicoCards: [
      "Mineradoras de pequeno e médio porte (juniores) em contratos de venda e financiamento",
      "Tradings e comercializadoras de commodities minerais",
      "Exportadores que negociam preço, teor e logística com compradores no exterior",
      "Empresas em estruturação de pré-pagamento e trade finance",
      "Operações que enfrentam disputa de teor, demurrage ou força maior",
      "Compradores internacionais que contratam fornecimento de origem brasileira",
    ],
    disclaimerNote:
      "Não há fórmula única nem promessa de resultado: cada operação depende do contrato, da regulação aplicável e dos elementos técnicos do caso concreto.",

    bridgeText:
      "Esta é uma especialização da nossa atuação em comércio exterior. Para a visão geral — desembaraço, tributação na importação, regimes aduaneiros e transporte marítimo —, veja a página de Direito Aduaneiro.",
    bridgeLink: "Voltar a Direito Aduaneiro & Comércio Exterior",

    faqEyebrow: "FAQ",
    faqTitle: "Perguntas frequentes sobre direito minerário e exportação de minério",
    faqs: [
      {
        question: "Como é calculada a CFEM (Compensação Financeira pela Exploração Mineral)?",
        answer:
          "A CFEM, conhecida como royalty da mineração, é a compensação financeira pela exploração de recursos minerais (CF, art. 20, § 1º), com regras consolidadas pela Lei nº 13.540/2017. Sua base de cálculo é, em regra, a receita bruta da venda deduzidos os tributos incidentes sobre a comercialização, e as alíquotas variam conforme a substância mineral; na exportação, costuma-se adotar o preço de referência. Há discussões técnicas relevantes sobre base, deduções e momento de incidência — pontos que merecem análise caso a caso.",
      },
      {
        question: "Quais tributos incidem sobre a exportação de minério?",
        answer:
          "A exportação é favorecida por imunidades e não incidências: o ICMS não incide sobre operações que destinem mercadorias ao exterior — imunidade constitucional regulada pela Lei Kandir (LC 87/96) —, inclusive na venda à trading com fim específico de exportação (Súmula 536/STJ); e há não incidência de PIS/COFINS sobre a receita de exportação, alcançando também a exportação indireta (STF, Tema 674). Permanece a CFEM sobre a exploração mineral. A correta estruturação tributária depende da cadeia adotada.",
      },
      {
        question: "Como funciona o ajuste de preço por teor e o período de cotação em contratos de minério?",
        answer:
          "O preço costuma partir de um índice de referência (como o Platts) e ser ajustado pelo teor efetivo da carga — por exemplo, prêmios e penalidades conforme o percentual de ferro e de contaminantes. O período de cotação (QP) define qual janela de preço será usada, e é comum haver um preço provisório no embarque e um preço definitivo após a análise final. Cada um desses elementos tem efeito direto sobre o valor recebido.",
      },
      {
        question: "Quais aspectos ambientais e de segurança de barragens impactam a operação?",
        answer:
          "O licenciamento ambiental e a Política Nacional de Segurança de Barragens (Lei 12.334/2010, alterada pela Lei 14.066/2020) impõem obrigações cujo descumprimento pode suspender a operação. No plano contratual, isso se reflete nas cláusulas de força maior, change in law e na alocação do risco de interrupção do fornecimento.",
      },
      {
        question: "Por que contratos de exportação de minério costumam prever arbitragem internacional?",
        answer:
          "Por envolverem partes de países diferentes, esses contratos frequentemente elegem lei estrangeira e arbitragem em uma sede neutra (como Londres ou Singapura), sob regras de câmaras como LCIA, ICC ou SIAC. A sentença arbitral estrangeira pode ser reconhecida no Brasil pela Convenção de Nova York, mediante homologação pelo STJ. Estruturar essa cláusula desde o início dá previsibilidade à resolução de eventuais disputas.",
      },
      {
        question: "O atendimento pode ser remoto e em inglês?",
        answer:
          "Sim. O escritório atua de forma remota e presencial e conduz operações e contratos em português e em inglês, o que é frequente no comércio internacional de commodities minerais.",
      },
    ],

    ctaEyebrow: "Fale com o escritório",
    ctaTitle: "Seu contrato de minério reflete o teor, o índice e a logística reais da operação?",
    ctaDescription:
      "A revisão jurídica prévia do contrato permite alinhar a especificação de qualidade, o mecanismo de preço, a logística portuária e o risco regulatório com aquilo que a operação realmente comporta.",
    ctaButton: "Falar com o escritório",
    ctaBadges: ["Atendimento por agendamento", "Atuação nacional e internacional", "Contratos em português e inglês"],
  },

  en: {
    metaTitle: "Mining Law and Mineral Export | FUSTINONI ADVOCACIA",
    metaDescription:
      "Mining law and mineral export: supply contracts, grade-based price adjustment, royalties (CFEM), ANM, port logistics and international arbitration.",
    whatsappHero: "Hello! I would like to discuss a mineral export / commodities contract.",
    whatsappCta: "Hello! I came from the website and want to discuss a mineral export operation.",

    breadcrumb: "Customs & International Trade Law",
    heroEyebrow: "Mining Law · Commodities · Mineral Export",
    heroTitle: "In the mineral trade, the margin lives in the clauses.",
    introP1:
      "The headline price of a tonne of ore says little. What defines how much is received — and how much is lost — is the grade, the price index, the quotation period and the ship's clock, written into clauses few read closely until the first dispute.",
    introP2:
      "The firm structures and reviews mineral supply, financing and export contracts, with attention to mineral, tax and environmental regulation — and to a dispute path that holds up abroad as well.",
    ctaPrimary: "Talk to the firm",
    ctaSecondary: "See practice areas",
    heroTags: ["Corporate clients", "Export contracts", "Advisory and litigation practice"],

    preliminarEyebrow: "Preliminary review",
    preliminarTitle: "Points in a mineral contract that deserve legal review",
    preliminarTag: "Iron ore / Commodities",
    preliminarItems: [
      { text: "Grade-based price adjustment (Fe, contaminants) and penalties without clear criteria", tone: "default" },
      { text: "Quotation period (QP) and provisional/final price misaligned with cash flow", tone: "default" },
      { text: "Unfavourable laytime, demurrage and time-bar clauses in the charterparty", tone: "default" },
      { text: "Royalties (CFEM), licensing and force majeure handled generically in the contract", tone: "default" },
      {
        text: "Legal review of the contract aligns price, quality, logistics and regulatory risk before the first shipment.",
        tone: "inverse",
      },
    ],

    contratoEyebrow: "Supply contract",
    contratoTitle: "The anatomy of a mineral contract",
    contratoIntro:
      "Before price comes structure: the type of contract, the committed volume, exclusivity and the way to resolve deadlock define the balance of the operation over years.",
    contratoCards: [
      {
        index: "01",
        label: "Offtake and long-term supply",
        description:
          "Offtake and long-term supply contracts: volume, term, exclusivity, take-or-pay and renewal conditions.",
      },
      {
        index: "02",
        label: "Spot and shipment by shipment",
        description:
          "Spot operations and per-shipment contracts, with attention to price formation and risk allocation in each cargo.",
      },
      {
        index: "03",
        label: "Governing law and forum",
        description:
          "Choice of governing law and of forum or arbitration — defining where and how any dispute will be resolved.",
      },
      {
        index: "04",
        label: "Guarantees and default",
        description:
          "Guarantee clauses, letters of credit, events of default and the corresponding contractual remedies.",
      },
    ],

    qualidadeEyebrow: "Quality, grade and price",
    qualidadeTitle: "How the number becomes money",
    qualidadeIntro:
      "It is at the meeting of quality specification and pricing mechanism that the margin is set. Each technical clause has a direct effect on the value received per tonne.",
    qualidadeItems: [
      "Quality specification: iron (Fe) grade, silica, alumina, phosphorus and other contaminants",
      "Grade-based price adjustment and penalties over the contracted basis",
      "Moisture and conversion between wet and dry metric tonnes (WMT / DMT)",
      "Reference indices (Platts and the like) and price formation",
      "Provisional and final pricing and the quotation period (QP)",
      "Sampling, assaying and the umpire's report in case of a grade dispute",
    ],

    navioEyebrow: "Logistics and chartering",
    navioTitle: "The ship and the clock",
    navioIntro:
      "In bulk, time is price. Coordinating the sale contract with the transport contract keeps a vessel's demurrage from consuming the operation's gain.",
    navioItems: [
      "Charterparty and back-to-back coordination with the sale contract",
      "Laytime, notice of readiness (NOR) and the start of laytime counting",
      "Demurrage, despatch and the time bar for claims",
      "Incoterms for bulk (FOB, CFR, CIF) and the transfer of risk and cost",
      "Cargo inspection, draft survey and weight discrepancies at loading",
    ],

    regulacaoEyebrow: "Regulation and taxation",
    regulacaoTitle: "The regulatory and tax layer of export",
    regulacaoIntro:
      "On top of the contract sits a layer specific to the mineral sector — royalty, mining title, export taxation — that must be reflected in the operation and in the price.",
    regulacaoCards: [
      {
        index: "01",
        label: "CFEM (mineral royalty)",
        description:
          "The Financial Compensation for Mineral Exploration (Law 13,540/2017): tax base, rates per substance and the debates over its incidence.",
      },
      {
        index: "02",
        label: "ANM and the Mining Code",
        description:
          "Mining titles, obligations before the National Mining Agency (ANM) and the regime of the Mining Code.",
      },
      {
        index: "03",
        label: "ICMS export immunity",
        description:
          "Constitutional ICMS immunity on exports (Federal Constitution, art. 155), as regulated by the Kandir Law (LC 87/96), and non-incidence on sales to an export trading company (STJ Precedent 536).",
      },
      {
        index: "04",
        label: "PIS/COFINS and the export chain",
        description:
          "Non-incidence and credit of PIS/COFINS on exports, including indirect export through a trading company (Brazilian Supreme Court, Theme 674 — RE 759244).",
      },
      {
        index: "05",
        label: "DU-E and bulk logistics",
        description:
          "The Single Export Declaration (DU-E), Siscomex and the particularities of bulk shipment through the port, including ICMS non-incidence on inland interstate freight to the port (STJ Precedent 649).",
      },
      {
        index: "06",
        label: "Supply-chain due diligence",
        description:
          "Diligence on origin, title and compliance of the mineral chain, including requirements from buyers abroad.",
      },
    ],

    ambientalEyebrow: "Environmental and force majeure",
    ambientalTitle: "Licensing, dams and what halts the operation",
    ambientalIntro:
      "An environmental or regulatory event can stop the mine and, with it, the supply. The contract must anticipate who bears that risk.",
    ambientalCards: [
      {
        index: "01",
        label: "Environmental licensing",
        description:
          "Licenses, conditions and the impact of their suspension on supply commitments already undertaken.",
      },
      {
        index: "02",
        label: "Dam safety",
        description:
          "The National Dam Safety Policy (Law 12,334/2010, amended by Law 14,066/2020) and its regulatory and contractual effects.",
      },
      {
        index: "03",
        label: "Force majeure and change in law",
        description:
          "Force majeure, change-in-law and hardship clauses that suspend or reallocate obligations in the face of regulatory and environmental events.",
      },
    ],

    disputasEyebrow: "International disputes",
    disputasTitle: "When the dispute crosses the border",
    disputasIntro:
      "Mineral contracts are often governed by foreign law and resolved by arbitration abroad. Structuring this from the outset avoids surprises at the moment of conflict.",
    disputasItems: [
      "Arbitration clause and choice of the seat of arbitration (London, Paris, Singapore)",
      "Institutions and rules (LCIA, ICC, SIAC) and the language of the proceedings",
      "Recognition and enforcement of a foreign arbitral award through homologation proceedings before the STJ (New York Convention; Law 9,307/96)",
      "Interim measures and coordination between arbitration and urgent court relief",
    ],

    publicoEyebrow: "Who it is for",
    publicoTitle: "Mining companies, traders and mineral exporters",
    publicoIntro:
      "The practice is designed for those who produce, trade or finance ore — and for the international buyer contracting Brazilian-origin supply.",
    publicoCards: [
      "Junior and mid-size mining companies in sale and financing contracts",
      "Trading and commodity-marketing companies",
      "Exporters negotiating price, grade and logistics with buyers abroad",
      "Operations structuring pre-payment and trade finance",
      "Operations facing grade, demurrage or force-majeure disputes",
      "International buyers contracting Brazilian-origin supply",
    ],
    disclaimerNote:
      "There is no single formula or guaranteed result: each operation depends on the contract, the applicable regulation and the technical elements of the concrete case.",

    bridgeText:
      "This is a specialization of our international trade practice. For the overview — clearance, import taxation, customs regimes and maritime transport — see the Customs & Trade Law page.",
    bridgeLink: "Back to Customs & International Trade Law",

    faqEyebrow: "FAQ",
    faqTitle: "Frequently asked questions on mining law and mineral export",
    faqs: [
      {
        question: "How is the CFEM (mineral royalty) calculated?",
        answer:
          "CFEM, known as the mining royalty, is the financial compensation for the exploration of mineral resources (Federal Constitution, art. 20, § 1º), with rules consolidated by Law 13,540/2017. Its base is, as a rule, gross sales revenue net of the taxes levied on the sale, and rates vary by mineral substance; on exports, a reference price is generally used. There are relevant technical debates over base, deductions and the moment of incidence — points that deserve case-by-case analysis.",
      },
      {
        question: "Which taxes apply to the export of ore?",
        answer:
          "Exports benefit from immunities and non-incidence: ICMS does not apply to operations sending goods abroad — a constitutional immunity regulated by the Kandir Law (LC 87/96) — including sales to a trading company for the specific purpose of export (STJ Precedent 536); and PIS/COFINS do not apply to export revenue, reaching indirect export as well (Supreme Court, Theme 674). CFEM on mineral exploration remains due. Proper tax structuring depends on the chain adopted.",
      },
      {
        question: "How do grade-based price adjustment and the quotation period work in mineral contracts?",
        answer:
          "Price usually starts from a reference index (such as Platts) and is adjusted by the cargo's actual grade — for example, premiums and penalties according to the iron and contaminant content. The quotation period (QP) defines which price window applies, and it is common to have a provisional price at loading and a final price after the final analysis. Each of these elements directly affects the value received.",
      },
      {
        question: "Which environmental and dam-safety aspects affect the operation?",
        answer:
          "Environmental licensing and the National Dam Safety Policy (Law 12,334/2010, amended by Law 14,066/2020) impose obligations whose breach can suspend the operation. Contractually, this is reflected in force majeure and change-in-law clauses and in the allocation of the risk of supply interruption.",
      },
      {
        question: "Why do mineral export contracts often provide for international arbitration?",
        answer:
          "As they involve parties from different countries, these contracts often choose foreign law and arbitration in a neutral seat (such as London or Singapore), under rules of institutions like LCIA, ICC or SIAC. A foreign arbitral award can be recognized in Brazil under the New York Convention, through homologation by the STJ. Structuring this clause from the outset gives predictability to the resolution of any disputes.",
      },
      {
        question: "Can assistance be remote and in English?",
        answer:
          "Yes. The firm works remotely and in person and handles operations and contracts in Portuguese and English, as is common in the international trade of mineral commodities.",
      },
    ],

    ctaEyebrow: "Talk to the firm",
    ctaTitle: "Does your mineral contract reflect the real grade, index and logistics of the operation?",
    ctaDescription:
      "Early legal review of the contract makes it possible to align the quality specification, the pricing mechanism, the port logistics and the regulatory risk with what the operation actually supports.",
    ctaButton: "Talk to the firm",
    ctaBadges: ["Service by appointment", "Nationwide and international practice", "Contracts in Portuguese and English"],
  },
};

type PageProps = {
  params: Promise<{ locale: AppLocale }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isPageLocale(locale)) {
    return { title: COPY.en.metaTitle, robots: { index: false } };
  }

  const { metaTitle: title, metaDescription: description } = COPY[locale];

  return {
    title,
    description,
    alternates: {
      canonical: getLocalizedUrl(pagePath, locale),
      languages: getAlternatesLanguages(pagePath, PAGE_LOCALES),
    },
    openGraph: {
      type: "website",
      url: getLocalizedUrl(pagePath, locale),
      title,
      description,
      siteName: SITE_NAME,
      locale: OG_LOCALE_BY_APP_LOCALE[locale],
      images: [{ url: SITE_OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [SITE_OG_IMAGE],
    },
  };
}

const whatsappPhone = process.env.WHATSAPP_PHONE_NUMBER ?? "";
const sectionStripe = "h-16 w-full border-b border-black/15 bg-grid-pattern-small";
const stripeStyle = {
  "--card": "black",
  "--muted": "rgb(255 255 255 / 0.15)",
} as React.CSSProperties;

export default async function DireitoMinerarioPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isPageLocale(locale)) {
    notFound();
  }

  const c = COPY[locale];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faqs.map(item => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero fotográfico — mineração a céu aberto / escavadeiras (Pexels, uso comercial livre) */}
      <section className="relative flex min-h-[48vh] flex-col justify-end overflow-hidden border-b border-black/15 px-4 py-14 sm:px-6 sm:py-16 md:px-10 md:py-20">
        <Image src="/hero-minerario.jpg" alt="" fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#16181d]/60 via-[#16181d]/66 to-[#16181d]/90" />
        <div className="relative z-10 w-full max-w-4xl">
          <Link
            href={{ pathname: "/direito-aduaneiro" }}
            className="mb-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#c3d2dc] hover:text-white"
          >
            <span aria-hidden>↑</span> {c.breadcrumb}
          </Link>
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-[#9aa3b0]" />
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#c3d2dc]">{c.heroEyebrow}</span>
          </div>
          <h1 className="max-w-3xl font-serif text-4xl leading-[1.03] tracking-tight text-[#f7fafc] sm:text-5xl md:text-6xl">
            {c.heroTitle}
          </h1>
        </div>
      </section>

      {/* Intro + avaliação preliminar */}
      <section className="border-b border-black/15 px-4 pt-12 pb-12 sm:px-6 sm:pt-14 md:px-10 md:pt-16">
        <div className="grid items-start gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div className="min-w-0">
            <p className="mb-5 max-w-3xl text-sm leading-7 text-black/70 sm:text-base">{c.introP1}</p>
            <p className="mb-8 max-w-3xl text-sm leading-7 text-black/70 sm:text-base">{c.introP2}</p>

            <div className="mb-8 flex flex-col gap-3 sm:flex-row">
              <WhatsAppCTAButton
                origem="direito_minerario"
                whatsappPhone={whatsappPhone}
                whatsappBaseMessage={c.whatsappHero}
                className="h-[42px] rounded-none border-black bg-black px-6 text-xs uppercase tracking-wider text-white hover:bg-black/85"
              >
                {c.ctaPrimary}
              </WhatsAppCTAButton>
              <Button
                asChild
                variant="outline"
                className="h-[42px] rounded-none border-black/30 px-6 text-xs uppercase tracking-wider"
              >
                <Link href={{ pathname: pagePath, hash: "contrato" }}>{c.ctaSecondary}</Link>
              </Button>
            </div>

            <div className="mb-8 w-full max-w-full overflow-hidden">
              <Marquee className="w-full max-w-full overflow-hidden [--duration:28s] [--gap:0.5rem] p-0" repeat={6}>
                {c.heroTags.map(tag => (
                  <Card
                    key={tag}
                    className="min-w-56 shrink-0 rounded-none border-black/15 px-4 py-3 text-xs font-medium shadow-none"
                  >
                    {tag}
                  </Card>
                ))}
              </Marquee>
            </div>
          </div>

          <div className="min-w-0">
            <OpticsCard decorations className="rounded-none border border-black/15 ring-0 bg-white p-6 shadow-none">
              <OpticsCardHeader className="mb-6 border-b border-black/15 pb-4">
                <OpticsCardDescription className="text-xs font-bold uppercase tracking-widest text-black/70">
                  {c.preliminarEyebrow}
                </OpticsCardDescription>
                <OpticsCardTitle className="mt-2 font-serif text-2xl leading-tight font-normal">
                  {c.preliminarTitle}
                </OpticsCardTitle>
                <OpticsCardAction>
                  <div className="border border-black/20 px-3 py-1 text-[11px] font-medium uppercase tracking-wider">
                    {c.preliminarTag}
                  </div>
                </OpticsCardAction>
              </OpticsCardHeader>

              <OpticsCardContent className="px-0">
                <AnimatedList delay={650} newestOnTop={false} className="w-full items-stretch gap-2">
                  {c.preliminarItems.map((item, i) => (
                    <Card
                      key={item.text}
                      style={{ order: i + 1 }}
                      className={
                        item.tone === "inverse"
                          ? "rounded-none border-black bg-black p-3 text-sm text-white shadow-none"
                          : "rounded-none border-black/15 p-3 text-sm shadow-none"
                      }
                    >
                      {item.text}
                    </Card>
                  ))}
                </AnimatedList>
              </OpticsCardContent>
            </OpticsCard>
          </div>
        </div>
      </section>

      <div className={sectionStripe} />

      {/* Contrato de fornecimento */}
      <section id="contrato" className="border-b border-black/15 px-4 py-16 sm:px-6 sm:py-20 md:px-10">
        <div className="mb-12 grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <div className="mb-4 text-xs font-bold uppercase tracking-widest text-black/70">{c.contratoEyebrow}</div>
            <h2 className="font-serif text-3xl leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">{c.contratoTitle}</h2>
          </div>
          <p className="border-l border-black/15 pl-8 text-sm leading-7 text-black/70 sm:text-base">{c.contratoIntro}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {c.contratoCards.map(item => (
            <OpticsCard key={item.label} decorations className="rounded-none border border-black/15 bg-white shadow-none ring-0">
              <OpticsCardHeader>
                <OpticsCardDescription className="font-bold text-black/30">{item.index}</OpticsCardDescription>
                <OpticsCardTitle className="font-serif text-base font-normal leading-snug">{item.label}</OpticsCardTitle>
                <OpticsCardDescription className="text-xs leading-relaxed text-black/70">
                  {item.description}
                </OpticsCardDescription>
              </OpticsCardHeader>
            </OpticsCard>
          ))}
        </div>
      </section>

      <div className={sectionStripe} />

      {/* Qualidade, teor e preço */}
      <section id="qualidade" className="border-b border-black/15 px-4 py-16 sm:px-6 sm:py-20 md:px-10">
        <div className="grid gap-8 md:grid-cols-[1fr_0.9fr] md:items-start">
          <div>
            <div className="mb-4 text-xs font-bold uppercase tracking-widest text-black/70">{c.qualidadeEyebrow}</div>
            <h2 className="font-serif text-3xl leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">{c.qualidadeTitle}</h2>
            <p className="mt-6 text-sm leading-7 text-black/65 sm:text-base">{c.qualidadeIntro}</p>
          </div>

          <OpticsCard decorations className="rounded-none border border-black/15 bg-white shadow-none ring-0 gap-0">
            <OpticsCardHeader className="border-b border-black/15 pb-4">
              <OpticsCardDescription className="text-xs font-bold uppercase tracking-widest text-black/70">
                {c.qualidadeEyebrow}
              </OpticsCardDescription>
            </OpticsCardHeader>
            <div
              style={stripeStyle}
              className="h-10 w-full bg-[repeating-linear-gradient(45deg,var(--card),var(--card)_3px,var(--muted)_3px,var(--muted)_6px)]"
            />
            <OpticsCardContent className="px-0">
              <AnimatedList delay={400} newestOnTop={false} className="w-full items-stretch gap-2">
                {c.qualidadeItems.map((item, i) => (
                  <Card key={item} style={{ order: i + 1 }} className="rounded-none border-black/15 p-3 text-sm leading-6 shadow-none">
                    {item}
                  </Card>
                ))}
              </AnimatedList>
            </OpticsCardContent>
          </OpticsCard>
        </div>
      </section>

      <div className={sectionStripe} />

      {/* O navio e o relógio */}
      <section id="logistica" className="border-b border-black/15 px-4 py-16 sm:px-6 sm:py-20 md:px-10">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1fr] md:items-start">
          <OpticsCard decorations className="order-2 rounded-none border border-black/15 bg-white shadow-none ring-0 gap-0 md:order-1">
            <OpticsCardHeader className="border-b border-black/15 pb-4">
              <OpticsCardDescription className="text-xs font-bold uppercase tracking-widest text-black/70">
                {c.navioEyebrow}
              </OpticsCardDescription>
            </OpticsCardHeader>
            <div
              style={stripeStyle}
              className="h-10 w-full bg-[repeating-linear-gradient(45deg,var(--card),var(--card)_3px,var(--muted)_3px,var(--muted)_6px)]"
            />
            <OpticsCardContent className="px-0">
              <AnimatedList delay={300} newestOnTop={false} className="w-full items-stretch gap-2">
                {c.navioItems.map((item, i) => (
                  <Card key={item} style={{ order: i + 1 }} className="rounded-none border-black/15 p-3 text-sm leading-6 shadow-none">
                    {item}
                  </Card>
                ))}
              </AnimatedList>
            </OpticsCardContent>
          </OpticsCard>

          <div className="order-1 md:order-2">
            <div className="mb-4 text-xs font-bold uppercase tracking-widest text-black/70">{c.navioEyebrow}</div>
            <h2 className="font-serif text-3xl leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">{c.navioTitle}</h2>
            <p className="mt-6 text-sm leading-7 text-black/65 sm:text-base">{c.navioIntro}</p>
          </div>
        </div>
      </section>

      <div className={sectionStripe} />

      {/* Regulação e tributação */}
      <section id="regulacao" className="border-b border-black/15 px-4 py-16 sm:px-6 sm:py-20 md:px-10">
        <div className="mb-12 grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <div className="mb-4 text-xs font-bold uppercase tracking-widest text-black/70">{c.regulacaoEyebrow}</div>
            <h2 className="font-serif text-3xl leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">{c.regulacaoTitle}</h2>
          </div>
          <p className="border-l border-black/15 pl-8 text-sm leading-7 text-black/70 sm:text-base">{c.regulacaoIntro}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {c.regulacaoCards.map(item => (
            <OpticsCard key={item.label} decorations className="rounded-none border border-black/15 bg-white shadow-none ring-0">
              <OpticsCardHeader>
                <OpticsCardDescription className="font-bold text-black/30">{item.index}</OpticsCardDescription>
                <OpticsCardTitle className="font-serif text-base font-normal leading-snug">{item.label}</OpticsCardTitle>
                <OpticsCardDescription className="text-xs leading-relaxed text-black/70">
                  {item.description}
                </OpticsCardDescription>
              </OpticsCardHeader>
            </OpticsCard>
          ))}
        </div>
      </section>

      <div className={sectionStripe} />

      {/* Ambiental e força maior */}
      <section id="ambiental" className="border-b border-black/15 px-4 py-16 sm:px-6 sm:py-20 md:px-10">
        <div className="mb-12 grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <div className="mb-4 text-xs font-bold uppercase tracking-widest text-black/70">{c.ambientalEyebrow}</div>
            <h2 className="font-serif text-3xl leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">{c.ambientalTitle}</h2>
          </div>
          <p className="border-l border-black/15 pl-8 text-sm leading-7 text-black/70 sm:text-base">{c.ambientalIntro}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {c.ambientalCards.map(item => (
            <OpticsCard key={item.label} decorations className="rounded-none border border-black/15 bg-white shadow-none ring-0">
              <OpticsCardHeader>
                <OpticsCardDescription className="font-bold text-black/30">{item.index}</OpticsCardDescription>
                <OpticsCardTitle className="font-serif text-base font-normal leading-snug">{item.label}</OpticsCardTitle>
                <OpticsCardDescription className="text-xs leading-relaxed text-black/70">
                  {item.description}
                </OpticsCardDescription>
              </OpticsCardHeader>
            </OpticsCard>
          ))}
        </div>
      </section>

      <div className={sectionStripe} />

      {/* Disputas internacionais */}
      <section id="disputas" className="border-b border-black/15 px-4 py-16 sm:px-6 sm:py-20 md:px-10">
        <div className="grid gap-8 md:grid-cols-[1fr_0.9fr] md:items-start">
          <div>
            <div className="mb-4 text-xs font-bold uppercase tracking-widest text-black/70">{c.disputasEyebrow}</div>
            <h2 className="font-serif text-3xl leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">{c.disputasTitle}</h2>
            <p className="mt-6 text-sm leading-7 text-black/65 sm:text-base">{c.disputasIntro}</p>
          </div>

          <OpticsCard decorations className="rounded-none border border-black/15 bg-white shadow-none ring-0 gap-0">
            <OpticsCardHeader className="border-b border-black/15 pb-4">
              <OpticsCardDescription className="text-xs font-bold uppercase tracking-widest text-black/70">
                {c.disputasEyebrow}
              </OpticsCardDescription>
            </OpticsCardHeader>
            <div
              style={stripeStyle}
              className="h-10 w-full bg-[repeating-linear-gradient(45deg,var(--card),var(--card)_3px,var(--muted)_3px,var(--muted)_6px)]"
            />
            <OpticsCardContent className="px-0">
              <AnimatedList delay={300} newestOnTop={false} className="w-full items-stretch gap-2">
                {c.disputasItems.map((item, i) => (
                  <Card key={item} style={{ order: i + 1 }} className="rounded-none border-black/15 p-3 text-sm leading-6 shadow-none">
                    {item}
                  </Card>
                ))}
              </AnimatedList>
            </OpticsCardContent>
          </OpticsCard>
        </div>
      </section>

      <div className={sectionStripe} />

      {/* Para quem é */}
      <section id="publico" className="border-b border-black/15 px-4 py-16 sm:px-6 sm:py-20 md:px-10">
        <div className="max-w-4xl">
          <div className="mb-4 text-xs font-bold uppercase tracking-widest text-black/70">{c.publicoEyebrow}</div>
          <h2 className="font-serif text-3xl leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">{c.publicoTitle}</h2>
          <p className="mt-6 text-sm leading-7 text-black/65 sm:text-base">{c.publicoIntro}</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {c.publicoCards.map(label => (
            <OpticsCard key={label} decorations className="rounded-none border border-black/15 bg-white shadow-none ring-0">
              <OpticsCardHeader>
                <OpticsCardTitle className="font-serif text-base font-normal leading-snug">{label}</OpticsCardTitle>
              </OpticsCardHeader>
            </OpticsCard>
          ))}
        </div>

        <Card className="mt-10 rounded-none border-black/15 bg-neutral-50 p-5 shadow-none">
          <p className="text-sm leading-7 text-black/70">{c.disclaimerNote}</p>
        </Card>

        <Card className="mt-6 flex flex-col gap-3 rounded-none border-black/15 bg-white p-5 shadow-none sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-7 text-black/70">{c.bridgeText}</p>
          <Link
            href={{ pathname: "/direito-aduaneiro" }}
            className="shrink-0 text-xs font-bold uppercase tracking-wider text-black underline underline-offset-4 hover:text-black/70"
          >
            ← {c.bridgeLink}
          </Link>
        </Card>
      </section>

      <div className={sectionStripe} />

      {/* FAQ */}
      <section id="faq" className="border-b border-black/15">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col justify-center border-b border-black/15 p-8 sm:p-12 lg:border-r lg:border-b-0 lg:p-20">
            <div className="mb-6 text-xs font-bold uppercase tracking-widest text-black/70">{c.faqEyebrow}</div>
            <h2 className="max-w-sm font-serif text-3xl leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">{c.faqTitle}</h2>
          </div>

          <div className="flex flex-col">
            <Accordion type="single" collapsible className="w-full">
              {c.faqs.map((item, index) => (
                <AccordionItem
                  key={item.question}
                  value={`item-${index}`}
                  className="border-b border-black/15 px-5 py-2 last:border-b-0 sm:px-8"
                >
                  <AccordionTrigger className="py-6 text-left text-sm font-medium hover:no-underline md:text-base">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 leading-relaxed text-black/70">{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <div className={sectionStripe} />

      {/* CTA final */}
      <section className="relative border-b border-black/15 bg-black px-4 pt-16 pb-20 text-center sm:px-6 sm:pt-20 md:px-10 md:pt-24 overflow-hidden">
        <BackgroundBeams className="absolute inset-0 z-0" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <div className="mb-6 text-xs font-bold uppercase tracking-widest text-white/85">{c.ctaEyebrow}</div>
          <h2 className="mx-auto mb-6 max-w-2xl font-serif text-3xl leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl">
            {c.ctaTitle}
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-7 text-white/90 sm:text-base">{c.ctaDescription}</p>
          <div className="mt-8 flex justify-center">
            <WhatsAppCTAButton
              origem="direito_minerario"
              whatsappPhone={whatsappPhone}
              whatsappBaseMessage={c.whatsappCta}
              className="h-[42px] rounded-none border-white bg-white px-8 text-xs uppercase tracking-wider text-black hover:bg-white/90"
            >
              {c.ctaButton}
            </WhatsAppCTAButton>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs uppercase tracking-wider text-white/85">
            {c.ctaBadges.map(item => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
