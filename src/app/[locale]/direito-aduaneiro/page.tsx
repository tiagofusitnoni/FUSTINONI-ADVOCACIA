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
import { AduaneiroAutoCta, type AutoCtaCopy } from "@/components/aduaneiro/aduaneiro-auto-cta";
import { OG_LOCALE_BY_APP_LOCALE } from "@/lib/i18n";
import { getAlternatesLanguages, getLocalizedUrl } from "@/lib/seo";
import { SITE_NAME, SITE_OG_IMAGE } from "@/lib/site";

const pagePath = "/direito-aduaneiro";
const PAGE_LOCALES = ["pt", "en"] as const;
type PageLocale = (typeof PAGE_LOCALES)[number];

const isPageLocale = (locale: AppLocale): locale is PageLocale =>
  (PAGE_LOCALES as readonly string[]).includes(locale);

type Faq = { question: string; answer: string };
type IndexedCard = { index: string; label: string; description: string };
type TitledCard = { title: string; description: string };

type Copy = {
  metaTitle: string;
  metaDescription: string;
  whatsappHero: string;
  whatsappCta: string;

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

  defesaEyebrow: string;
  defesaTitle: string;
  defesaIntro: string;
  defesaCards: IndexedCard[];

  tributacaoEyebrow: string;
  tributacaoTitle: string;
  tributacaoIntro: string;
  tributacaoItems: string[];

  regimesEyebrow: string;
  regimesTitle: string;
  regimesIntro: string;
  regimesCards: IndexedCard[];

  logisticaEyebrow: string;
  logisticaTitle: string;
  logisticaIntro: string;
  logisticaItems: string[];
  bridgeText: string;
  bridgeLink: string;

  publicoEyebrow: string;
  publicoTitle: string;
  publicoIntro: string;
  publicoCards: string[];

  diferenciaisEyebrow: string;
  diferenciaisTitle: string;
  diferenciaisIntro: string;
  diferenciaisCards: TitledCard[];
  disclaimerNote: string;

  faqEyebrow: string;
  faqTitle: string;
  faqs: Faq[];

  ctaEyebrow: string;
  ctaTitle: string;
  ctaDescription: string;
  ctaButton: string;
  ctaBadges: string[];

  autoTool: AutoCtaCopy;
};

const COPY: Record<PageLocale, Copy> = {
  pt: {
    metaTitle: "Direito Aduaneiro e Comércio Exterior | FUSTINONI ADVOCACIA",
    metaDescription:
      "Direito aduaneiro, comércio exterior e marítimo para importadores, exportadores e tradings: defesa em autuações, tributação, regimes especiais e contratos.",
    whatsappHero:
      "Olá! Gostaria de falar sobre uma questão de direito aduaneiro / comércio exterior.",
    whatsappCta:
      "Olá! Vim pelo site e quero falar sobre uma operação de importação/exportação.",

    heroEyebrow: "Direito Aduaneiro · Comércio Exterior · Marítimo",
    heroTitle: "Importar e exportar é, antes de tudo, uma operação jurídica.",
    introP1:
      "Entre o embarque e o desembaraço, diversos fatores definem o custo e o risco de cada operação: a classificação fiscal da mercadoria, a base de cálculo dos tributos, os termos do contrato internacional e a cláusula do conhecimento de embarque.",
    introP2:
      "O escritório atua no momento crítico da carga retida ou autuada e na estruturação que evita o próximo problema — da defesa em processo administrativo na Receita Federal à revisão dos contratos de importação, exportação e transporte marítimo. Atuamos nos dois sentidos do comércio exterior: para o importador brasileiro e para o exportador ou a contraparte estrangeira do outro lado da operação — sempre a partir do interesse de quem nos contrata.",
    ctaPrimary: "Falar com o escritório",
    ctaSecondary: "Ver áreas de atuação",
    heroTags: [
      "Atendimento empresarial",
      "Análise documental individualizada",
      "Atuação consultiva e contenciosa",
    ],

    preliminarEyebrow: "Avaliação preliminar",
    preliminarTitle: "Sinais de que a operação merece exame jurídico",
    preliminarTag: "Aduaneiro / Comex",
    preliminarItems: [
      { text: "Mercadoria retida, sob exigência fiscal ou ameaçada de perdimento", tone: "default" },
      { text: "Reclassificação de NCM ou arbitramento de valor aduaneiro pela fiscalização", tone: "default" },
      { text: "Auto de infração ou multa no curso do despacho de importação ou exportação", tone: "default" },
      { text: "Conflito em contrato internacional, Incoterms, conhecimento de embarque ou demurrage", tone: "default" },
      {
        text: "A leitura jurídica antecipada permite aferir a consistência da exigência e preservar prazos de defesa.",
        tone: "inverse",
      },
    ],

    defesaEyebrow: "Defesa aduaneira",
    defesaTitle: "Defesa em medidas e autuações aduaneiras",
    defesaIntro:
      "Quando a fiscalização retém a carga, reclassifica a mercadoria ou aplica a pena de perdimento, o tempo de reação é curto e os prazos são técnicos. A atuação se dá na defesa administrativa e judicial dessas medidas.",
    defesaCards: [
      {
        index: "01",
        label: "Pena de perdimento",
        description:
          "Defesa contra a aplicação da pena de perdimento de mercadorias, veículos e moeda, com discussão da proporcionalidade e da própria configuração da infração — em rito próprio do DL 1.455/76, hoje julgado pelo CEJUL (Lei 14.651/2023).",
      },
      {
        index: "02",
        label: "Retenção e exigência fiscal",
        description:
          "Atuação para liberação de carga retida sob exigência, parametrizada em canal vermelho ou sob suspeita de irregularidade documental.",
      },
      {
        index: "03",
        label: "Reclassificação de NCM",
        description:
          "Discussão do enquadramento da mercadoria na Nomenclatura Comum do Mercosul e dos efeitos tributários da reclassificação feita pela fiscalização.",
      },
      {
        index: "04",
        label: "Valoração aduaneira",
        description:
          "Defesa em arbitramento de valor e em acusação de subfaturamento, à luz dos métodos do Acordo de Valoração Aduaneira.",
      },
      {
        index: "05",
        label: "Infrações e multas",
        description:
          "Impugnação de autos de infração e multas aduaneiras no contencioso administrativo (DRJ e CARF) e, quando necessário, na esfera judicial.",
      },
      {
        index: "06",
        label: "Defesa comercial",
        description:
          "Acompanhamento de investigações e medidas de defesa comercial (antidumping, compensatórias e salvaguardas), apuradas pela SDCOM/CAMEX, que oneram a importação no desembaraço.",
      },
    ],

    tributacaoEyebrow: "Tributação no comércio exterior",
    tributacaoTitle: "Os tributos da importação e da exportação",
    tributacaoIntro:
      "A carga tributária de uma operação de comércio exterior depende de classificação, origem, regime e base de cálculo — variáveis que comportam discussão técnica e, em diversos casos, teses já consolidadas nos tribunais.",
    tributacaoItems: [
      "Imposto de Importação (II) e IPI incidente na importação",
      "PIS/COFINS-Importação e a discussão sobre a composição da base de cálculo",
      "ICMS-Importação: local de recolhimento, base e creditamento",
      "Regimes de suspensão e desoneração tributária ao longo da cadeia",
      "Repetição de indébito de tributos pagos a maior, observados os prazos prescricionais",
    ],

    regimesEyebrow: "Regimes especiais e compliance",
    regimesTitle: "Regimes aduaneiros especiais e conformidade operacional",
    regimesIntro:
      "Boa parte da eficiência — e da segurança — de uma operação de comércio exterior está em estruturar o regime correto antes do embarque e em manter a conformidade documental que o sustenta.",
    regimesCards: [
      {
        index: "01",
        label: "Drawback",
        description:
          "Estruturação e habilitação do regime de drawback (suspensão, isenção e restituição) para desoneração de insumos destinados à exportação.",
      },
      {
        index: "02",
        label: "RECOF e entreposto",
        description:
          "Regimes de entreposto aduaneiro e RECOF/RECOF-SPED para industrialização e armazenagem sob controle aduaneiro.",
      },
      {
        index: "03",
        label: "Ex-tarifário",
        description:
          "Pedidos de ex-tarifário para redução do Imposto de Importação sobre bens de capital e de informática sem similar nacional.",
      },
      {
        index: "04",
        label: "Habilitação e RADAR",
        description:
          "Habilitação no RADAR/Siscomex, revisão de limites e regularização de pendências cadastrais junto à Receita Federal.",
      },
      {
        index: "05",
        label: "Compliance aduaneiro",
        description:
          "Programas de conformidade, due diligence de operações e adesão a programas como o OEA (Operador Econômico Autorizado).",
      },
      {
        index: "06",
        label: "DU-E e DUIMP",
        description:
          "Apoio no preenchimento e na revisão da Declaração Única de Exportação (DU-E) e da Declaração Única de Importação (DUIMP), no âmbito do Novo Processo de Importação do Portal Único Siscomex.",
      },
    ],

    logisticaEyebrow: "Logística internacional e marítimo",
    logisticaTitle: "Contratos internacionais, transporte e responsabilidade marítima",
    logisticaIntro:
      "Quando algo dá errado entre o vendedor, o transportador e o comprador, a resposta está nos termos contratados: o Incoterm, o conhecimento de embarque e a apólice de seguro definem quem suporta o risco e a perda.",
    logisticaItems: [
      "Incoterms 2020: alocação de custos, riscos e responsabilidades entre as partes",
      "Contratos internacionais de compra e venda e a Convenção de Viena (CISG), em vigor no Brasil desde 2014",
      "Conhecimento de embarque (Bill of Lading), avarias e responsabilidade do transportador marítimo",
      "Sobreestadia de contêiner (demurrage/detention) e prazo livre (free time)",
      "Estadia e sobreestadia do navio (laytime e demurrage) em afretamentos, e cobranças do agente e do armador",
      "Seguro de carga, regulação de sinistro e ação de regresso",
      "Cláusula de arbitragem e eleição de foro em contratos internacionais",
    ],
    bridgeText:
      "A sua empresa exporta commodities? A camada contratual e regulatória da exportação de minério tem questões próprias — teor, índice de preço, CFEM e logística portuária.",
    bridgeLink: "Conhecer a página de Direito Minerário",

    publicoEyebrow: "Para quem é",
    publicoTitle: "Importadores, exportadores, tradings e transportadores",
    publicoIntro:
      "A atuação é pensada para empresas cuja operação depende do fluxo internacional de mercadorias — e para quem precisa resolver um problema aduaneiro concreto ou estruturar a operação com segurança.",
    publicoCards: [
      "Indústrias importadoras de insumos, máquinas e bens de capital",
      "Exportadores e tradings que operam compra e venda internacional",
      "Importadores e distribuidores com carga retida ou autuada no desembaraço",
      "Transportadores, agentes de carga e operadores logísticos",
      "Empresas que buscam estruturar regimes especiais e reduzir custo tributário",
      "Companhias em revisão de contratos internacionais e gestão de risco aduaneiro",
    ],

    diferenciaisEyebrow: "Como atuamos",
    diferenciaisTitle: "Do contencioso urgente à estrutura preventiva",
    diferenciaisIntro:
      "Comércio exterior combina direito tributário, aduaneiro, internacional e marítimo — e exige leitura conjunta dos documentos da operação, do regime aplicável e do marco regulatório.",
    diferenciaisCards: [
      {
        title: "Análise jurídica e operacional integrada",
        description:
          "Leitura conjunta de fatura comercial, classificação fiscal, contrato e documentos de transporte, sem atalhos.",
      },
      {
        title: "Resposta ao urgente, foco no estrutural",
        description:
          "Atuação imediata na carga retida ou autuada e construção da estrutura que reduz a recorrência do problema.",
      },
      {
        title: "Atuação consultiva e contenciosa",
        description:
          "Capacidade de estruturar a operação antes do litígio e de conduzir a defesa administrativa e judicial quando necessária.",
      },
      {
        title: "Sigilo e atendimento empresarial",
        description:
          "Tratamento confidencial de dados comerciais, contratos e estrutura de custo de cada cliente.",
      },
      {
        title: "Visão internacional",
        description:
          "Atenção às convenções e práticas internacionais — Incoterms, CISG e arbitragem — que regem operações além da fronteira.",
      },
      {
        title: "Atuação nacional e remota",
        description:
          "Acompanhamento de operações e processos em diferentes unidades aduaneiras, com comunicação contínua.",
      },
    ],
    disclaimerNote:
      "Não há fórmula única nem promessa de resultado: a estratégia depende da documentação disponível e dos elementos técnicos e jurídicos de cada operação.",

    faqEyebrow: "FAQ",
    faqTitle: "Perguntas frequentes sobre direito aduaneiro e comércio exterior",
    faqs: [
      {
        question:
          "Como funciona a defesa em processo administrativo aduaneiro (perdimento, multa, infração)?",
        answer:
          "A defesa se desenvolve no contencioso administrativo, mas o rito varia conforme a medida. Multas e autos de infração de natureza tributária são discutidos perante a Delegacia de Julgamento (DRJ) e, em recurso, o CARF. Já a pena de perdimento segue rito próprio do Decreto-Lei nº 1.455/76, hoje com julgamento em dupla instância pelo Centro de Julgamento de Penalidades Aduaneiras (CEJUL), nos termos da Lei nº 14.651/2023. Cada via tem prazos próprios, e a discussão também pode ser levada à esfera judicial quando cabível ou mais eficiente.",
      },
      {
        question: "Em quais situações uma mercadoria pode ser retida ou apreendida na alfândega?",
        answer:
          "A retenção costuma decorrer de divergências no despacho — classificação fiscal, valor declarado, licenciamento, documentação ou suspeita de irregularidade. A leitura jurídica avalia a consistência da exigência, os caminhos para liberação da carga e os prazos envolvidos, em cada caso concreto.",
      },
      {
        question: "O que é o regime de drawback e quando ele se aplica?",
        answer:
          "O drawback é um regime aduaneiro especial que permite a suspensão, isenção ou restituição de tributos sobre insumos importados que serão empregados em produtos destinados à exportação. Sua aplicação depende do enquadramento da operação e do cumprimento dos requisitos e compromissos de exportação previstos na legislação.",
      },
      {
        question: "Como é tratada a responsabilidade por demurrage e sobreestadia de contêiner?",
        answer:
          "A sobreestadia (demurrage) decorre do uso do contêiner além do prazo livre contratado e é regida, em primeiro lugar, pelos termos do contrato e do conhecimento de embarque. A análise envolve a verificação dos prazos, da base de cálculo da cobrança e das responsabilidades das partes na cadeia de transporte.",
      },
      {
        question: "Qual a diferença entre a discussão administrativa e a judicial em matéria aduaneira?",
        answer:
          "A via administrativa ocorre dentro da própria Receita Federal e costuma ser o primeiro passo, com a vantagem de não exigir, em regra, garantia. A via judicial é adotada quando necessária ou mais eficiente — por exemplo, para obter medida liminar de liberação de carga ou para discutir tese tributária. A escolha depende do caso concreto.",
      },
      {
        question: "O atendimento pode ser remoto?",
        answer:
          "Sim. O escritório realiza atendimento remoto e presencial, com acompanhamento contínuo e comunicação transparente durante toda a condução do caso, inclusive para operações em diferentes unidades aduaneiras do país.",
      },
    ],

    ctaEyebrow: "Fale com o escritório",
    ctaTitle: "Sua operação de comércio exterior está juridicamente estruturada?",
    ctaDescription:
      "A análise jurídica prévia da operação permite avaliar, com critério técnico, a consistência de eventuais exigências fiscais, a adequação do regime aduaneiro e a alocação de riscos entre as partes.",
    ctaButton: "Falar com o escritório",
    ctaBadges: ["Atendimento por agendamento", "Análise individualizada", "Atuação nacional"],

    autoTool: {
      sectionEyebrow: "Ferramenta · Leitura preliminar",
      sectionTitle: "Leitura do seu auto de infração aduaneiro",
      sectionIntro:
        "Suba o PDF do auto de infração, termo de retenção ou intimação. Uma leitura automática e orientativa aponta o tipo de medida, os dispositivos citados, o prazo e os pontos que costumam merecer atenção em defesas dessa natureza. O documento não é armazenado.",
      steps: [
        { title: "Suba o documento", detail: "O PDF do auto, termo ou intimação — escaneado ou digital." },
        { title: "Leitura automática", detail: "A análise identifica o tipo, os dispositivos, o prazo e a natureza da medida." },
        { title: "Pontos de atenção", detail: "Você recebe uma orientação preliminar e pode falar com o escritório." },
      ],
      uploadTitle: "Arraste o PDF aqui ou clique para enviar",
      uploadSubtitle: "Auto de infração, termo de retenção ou intimação (PDF, até 10 MB)",
      dropHint: "Solte o arquivo para enviar",
      modifiedPrefix: "Selecionado",
      progressLabels: ["Enviando o documento…", "Lendo o conteúdo…", "Identificando dispositivos e prazos…"],
      resultTitle: "Leitura preliminar do documento",
      labelTipo: "Tipo de documento",
      labelNatureza: "Natureza da medida",
      labelDispositivos: "Dispositivos citados",
      labelPrazo: "Prazo mencionado",
      labelPontos: "Pontos que costumam merecer atenção",
      naturezaLabels: {
        perdimento: "Pena de perdimento",
        multa: "Multa / infração",
        reclassificacao: "Reclassificação fiscal (NCM)",
        valoracao: "Valoração aduaneira",
        outro: "Outra",
        indefinido: "A confirmar",
      },
      notAduaneiroTitle: "Não identificamos um documento aduaneiro",
      notAduaneiroBody:
        "O arquivo enviado não parece ser um auto de infração, termo ou intimação aduaneira. Tente outro documento — ou fale com o escritório.",
      disclaimer:
        "Esta é uma leitura automática e orientativa, gerada por inteligência artificial, e NÃO constitui parecer jurídico nem análise do caso concreto. Cada caso depende dos documentos da operação. O arquivo enviado não é armazenado.",
      ctaLabel: "Falar com o escritório",
      whatsappMessage:
        "Olá! Fiz a leitura preliminar de um auto de infração aduaneiro no site e gostaria de conversar sobre o caso.",
      tryAgain: "Analisar outro",
      errorAnalyze: "Não foi possível ler o documento agora. Tente novamente em instantes.",
      needsPdf: "Envie o documento em PDF.",
    },
  },

  en: {
    metaTitle: "Customs and International Trade Law | FUSTINONI ADVOCACIA",
    metaDescription:
      "Customs, international trade and maritime law for importers, exporters and traders: defense in assessments, taxation, special regimes and contracts.",
    whatsappHero:
      "Hello! I would like to discuss a customs / international trade law matter.",
    whatsappCta:
      "Hello! I came from the website and want to discuss an import/export operation.",

    heroEyebrow: "Customs · International Trade · Maritime",
    heroTitle: "Importing and exporting is, above all, a legal operation.",
    introP1:
      "Between shipment and clearance, several factors define the cost and the risk of every operation: the tariff classification of the goods, the tax base, the terms of the international contract and the bill of lading clause.",
    introP2:
      "The firm acts at the critical moment of held or assessed cargo, and in the structuring that prevents the next problem — from defense in administrative proceedings before the Federal Revenue Service to the review of import, export and maritime transport contracts. We work both directions of cross-border trade: for the Brazilian importer and for the exporter or foreign counterparty on the other side of the deal — always from the standpoint of the party who retains us.",
    ctaPrimary: "Talk to the firm",
    ctaSecondary: "See practice areas",
    heroTags: [
      "Corporate clients",
      "Individual document review",
      "Advisory and litigation practice",
    ],

    preliminarEyebrow: "Preliminary review",
    preliminarTitle: "Signs that an operation deserves legal review",
    preliminarTag: "Customs / Trade",
    preliminarItems: [
      { text: "Goods held, under fiscal demand or facing forfeiture", tone: "default" },
      { text: "Tariff reclassification or customs value reassessed by the authorities", tone: "default" },
      { text: "Assessment notice or fine during import or export clearance", tone: "default" },
      { text: "Dispute over an international contract, Incoterms, bill of lading or demurrage", tone: "default" },
      {
        text: "Early legal review helps assess the consistency of the demand and preserve defense deadlines.",
        tone: "inverse",
      },
    ],

    defesaEyebrow: "Customs defense",
    defesaTitle: "Defense in customs measures and assessments",
    defesaIntro:
      "When the authorities hold the cargo, reclassify the goods or apply forfeiture, reaction time is short and deadlines are technical. The practice covers administrative and judicial defense of these measures.",
    defesaCards: [
      {
        index: "01",
        label: "Forfeiture penalty",
        description:
          "Defense against forfeiture of goods, vehicles and currency, addressing proportionality and whether the alleged offence was in fact committed — under the specific procedure of Decree-Law 1.455/76, now decided by the CEJUL panel.",
      },
      {
        index: "02",
        label: "Held cargo and fiscal demand",
        description:
          "Action to release cargo held under demand, routed to the red channel or under suspicion of documentary irregularity.",
      },
      {
        index: "03",
        label: "Tariff reclassification",
        description:
          "Discussion of the goods' classification under the Mercosur Common Nomenclature and the tax effects of a reclassification by the authorities.",
      },
      {
        index: "04",
        label: "Customs valuation",
        description:
          "Defense against customs valuation set by the authorities and underinvoicing claims, in light of the methods of the Customs Valuation Agreement.",
      },
      {
        index: "05",
        label: "Infractions and fines",
        description:
          "Challenge to assessment notices and customs fines in administrative proceedings and, where necessary, before the courts.",
      },
      {
        index: "06",
        label: "Trade defense",
        description:
          "Monitoring of trade-defense investigations and measures — anti-dumping, countervailing and safeguards — handled by SDCOM/CAMEX, that burden imports at clearance.",
      },
    ],

    tributacaoEyebrow: "Trade taxation",
    tributacaoTitle: "Import and export taxes",
    tributacaoIntro:
      "The tax burden of a trade operation depends on classification, origin, regime and tax base — variables that allow for technical discussion and, in several cases, theses already settled in the courts.",
    tributacaoItems: [
      "Import Duty (II) and the federal tax on manufactured goods (IPI) levied on imports",
      "PIS/COFINS on imports and the debate over the composition of the tax base",
      "Import ICMS: place of payment, base and credit",
      "Suspension and tax relief regimes along the supply chain",
      "Recovery of overpaid taxes, subject to applicable limitation periods",
    ],

    regimesEyebrow: "Special regimes and compliance",
    regimesTitle: "Special customs regimes and operational compliance",
    regimesIntro:
      "Much of the efficiency — and the safety — of a trade operation lies in structuring the right regime before shipment and in maintaining the documentary compliance that sustains it.",
    regimesCards: [
      {
        index: "01",
        label: "Drawback",
        description:
          "Structuring and qualification of the drawback regime (suspension, exemption and refund) to relieve taxes on inputs used in exported goods.",
      },
      {
        index: "02",
        label: "Bonded warehouse and RECOF",
        description:
          "Bonded warehouse and RECOF/RECOF-SPED regimes for manufacturing and storage under customs control.",
      },
      {
        index: "03",
        label: "Ex-tariff (ex-tarifário)",
        description:
          "Ex-tariff applications to reduce Import Duty on capital and IT goods with no domestic equivalent.",
      },
      {
        index: "04",
        label: "Licensing and RADAR",
        description:
          "RADAR/Siscomex qualification, review of limits and regularization of registration issues with the Federal Revenue Service.",
      },
      {
        index: "05",
        label: "Customs compliance",
        description:
          "Compliance programs, operational due diligence and accession to programs such as AEO (Authorized Economic Operator).",
      },
      {
        index: "06",
        label: "DU-E and DUIMP",
        description:
          "Support in filing and reviewing the Single Export Declaration (DU-E) and the Single Import Declaration (DUIMP), under Brazil's New Import Process (Portal Único Siscomex).",
      },
    ],

    logisticaEyebrow: "International logistics and maritime",
    logisticaTitle: "International contracts, transport and maritime liability",
    logisticaIntro:
      "When something goes wrong between seller, carrier and buyer, the answer lies in the agreed terms: the Incoterm, the bill of lading and the insurance policy define who bears the risk and the loss.",
    logisticaItems: [
      "Incoterms 2020: allocation of costs, risks and responsibilities between the parties",
      "International sale of goods contracts and the Vienna Convention (CISG), in force in Brazil since 2014",
      "Bill of lading, cargo damage and general average, and the maritime carrier's liability",
      "Container demurrage/detention and free time",
      "Vessel laytime and demurrage in charterparties, and charges from the agent and the carrier",
      "Cargo insurance, claim handling and recourse action",
      "Arbitration clause and choice of forum in international contracts",
    ],
    bridgeText:
      "Does your company export commodities? The contractual and regulatory layer of mineral exports has its own questions — grade, price index, royalties and port logistics.",
    bridgeLink: "See the Mining Law page",

    publicoEyebrow: "Who it is for",
    publicoTitle: "Importers, exporters, trading companies and carriers",
    publicoIntro:
      "The practice is designed for companies whose operation depends on the international flow of goods — and for those who need to solve a concrete customs problem or structure an operation safely.",
    publicoCards: [
      "Industries importing inputs, machinery and capital goods",
      "Exporters and trading companies running international trade",
      "Importers and distributors with cargo held or assessed at clearance",
      "Carriers, freight forwarders and logistics operators",
      "Companies seeking to structure special regimes and reduce tax cost",
      "Businesses reviewing international contracts and customs risk management",
    ],

    diferenciaisEyebrow: "How we operate",
    diferenciaisTitle: "From urgent litigation to preventive structure",
    diferenciaisIntro:
      "International trade combines tax, customs, international and maritime law — and requires a joint reading of the operation's documents, the applicable regime and the regulatory framework.",
    diferenciaisCards: [
      {
        title: "Integrated legal and operational analysis",
        description:
          "A joint reading of the commercial invoice, tariff classification, contract and transport documents, without shortcuts.",
      },
      {
        title: "Response to the urgent, focus on the structural",
        description:
          "Immediate action on held or assessed cargo and construction of the structure that reduces the recurrence of the problem.",
      },
      {
        title: "Advisory and litigation practice",
        description:
          "Ability to structure the operation before litigation and to conduct administrative and judicial defense when needed.",
      },
      {
        title: "Confidentiality and business service",
        description:
          "Confidential treatment of commercial data, contracts and each client's cost structure.",
      },
      {
        title: "International perspective",
        description:
          "Attention to international conventions and practice — Incoterms, CISG and arbitration — that govern cross-border operations.",
      },
      {
        title: "Nationwide and remote practice",
        description:
          "Follow-up of operations and proceedings across different customs units, with continuous communication.",
      },
    ],
    disclaimerNote:
      "There is no single formula or guaranteed result: the strategy depends on available documentation and the technical and legal elements of each operation.",

    faqEyebrow: "FAQ",
    faqTitle: "Frequently asked questions on customs and international trade law",
    faqs: [
      {
        question: "How does defense in administrative customs proceedings work (forfeiture, fines, infractions)?",
        answer:
          "Defense unfolds in administrative proceedings, but the procedure varies with the measure. Tax-related fines and assessment notices are decided by the Judgment Office (DRJ) and, on appeal, by CARF. The forfeiture penalty follows the specific procedure of Decree-Law 1.455/76, now decided in two instances by the Customs Penalties Judgment Center (CEJUL), under Law 14.651/2023. Each route has its own deadlines, and the matter may also be taken to court where appropriate or more efficient.",
      },
      {
        question: "In which situations can goods be held or seized at customs?",
        answer:
          "A hold usually stems from discrepancies during clearance — tariff classification, declared value, licensing, documentation or suspected irregularity. Legal review assesses the consistency of the demand, the paths to release the cargo and the deadlines involved, in each concrete case.",
      },
      {
        question: "What is the drawback regime and when does it apply?",
        answer:
          "Drawback is a special customs regime allowing suspension, exemption or refund of taxes on imported inputs that will be used in goods destined for export. Its application depends on how the operation is framed and on meeting the requirements and export commitments set by law.",
      },
      {
        question: "How is liability for container demurrage handled?",
        answer:
          "Demurrage arises from using the container beyond the agreed free time and is governed, first of all, by the terms of the contract and the bill of lading. The analysis involves checking the deadlines, the basis of the charge and the responsibilities of the parties in the transport chain.",
      },
      {
        question: "What is the difference between the administrative and judicial route in customs matters?",
        answer:
          "The administrative route takes place within the Federal Revenue Service and is often the first step, with the advantage of generally not requiring a guarantee. The judicial route is used when necessary or more efficient — for instance, to obtain an injunction releasing cargo or to discuss a tax thesis. The choice depends on the concrete case.",
      },
      {
        question: "Can assistance be remote?",
        answer:
          "Yes. The firm provides remote and in-person assistance, with continuous follow-up and transparent communication throughout the case, including for operations across different customs units in the country.",
      },
    ],

    ctaEyebrow: "Talk to the firm",
    ctaTitle: "Is your international trade operation legally structured?",
    ctaDescription:
      "Early legal review of the operation makes it possible to assess, with technical criteria, the consistency of any fiscal demands, the suitability of the customs regime and the allocation of risk between the parties.",
    ctaButton: "Talk to the firm",
    ctaBadges: ["Service by appointment", "Individual review", "Nationwide practice"],

    autoTool: {
      sectionEyebrow: "Tool · Preliminary review",
      sectionTitle: "Read your customs assessment notice",
      sectionIntro:
        "Upload the PDF of the assessment notice, hold notice or summons. An automated, orientative reading points out the type of measure, the provisions cited, the deadline and the points that usually deserve attention in defenses of this nature. The document is not stored.",
      steps: [
        { title: "Upload the document", detail: "The PDF of the notice, hold or summons — scanned or digital." },
        { title: "Automated reading", detail: "The analysis identifies the type, the provisions, the deadline and the nature of the measure." },
        { title: "Points of attention", detail: "You get a preliminary orientation and can talk to the firm." },
      ],
      uploadTitle: "Drag the PDF here or click to upload",
      uploadSubtitle: "Assessment notice, hold notice or summons (PDF, up to 10 MB)",
      dropHint: "Drop the file to upload",
      modifiedPrefix: "Selected",
      progressLabels: ["Uploading the document…", "Reading the content…", "Identifying provisions and deadlines…"],
      resultTitle: "Preliminary reading of the document",
      labelTipo: "Document type",
      labelNatureza: "Nature of the measure",
      labelDispositivos: "Provisions cited",
      labelPrazo: "Deadline mentioned",
      labelPontos: "Points that usually deserve attention",
      naturezaLabels: {
        perdimento: "Forfeiture penalty",
        multa: "Fine / infraction",
        reclassificacao: "Tariff reclassification (NCM)",
        valoracao: "Customs valuation",
        outro: "Other",
        indefinido: "To be confirmed",
      },
      notAduaneiroTitle: "We could not identify a customs document",
      notAduaneiroBody:
        "The uploaded file does not appear to be a customs assessment, hold notice or summons. Try another document — or talk to the firm.",
      disclaimer:
        "This is an automated, orientative reading generated by artificial intelligence, and does NOT constitute legal advice or an analysis of the concrete case. Each case depends on the operation's documents. The uploaded file is not stored.",
      ctaLabel: "Talk to the firm",
      whatsappMessage:
        "Hello! I did a preliminary reading of a customs assessment notice on the website and would like to discuss the case.",
      tryAgain: "Analyze another",
      errorAnalyze: "We couldn't read the document right now. Please try again shortly.",
      needsPdf: "Please upload the document as a PDF.",
    },
  },
};

type PageProps = {
  params: Promise<{ locale: AppLocale }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;

  // Página publicada em pt+en. Em es/it (ainda não traduzida), marca noindex.
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

export default async function DireitoAduaneiroPage({ params }: PageProps) {
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

      {/* Hero fotográfico — porto/terminal de contêineres (Pexels, uso comercial livre) */}
      <section className="relative flex min-h-[48vh] flex-col justify-end overflow-hidden border-b border-black/15 px-4 py-14 sm:px-6 sm:py-16 md:px-10 md:py-20">
        <Image src="/hero-aduaneiro.jpg" alt="" fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#16181d]/55 via-[#16181d]/62 to-[#16181d]/88" />
        <div className="relative z-10 w-full max-w-4xl">
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
                origem="direito_aduaneiro"
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
                <Link href={{ pathname: pagePath, hash: "defesa" }}>{c.ctaSecondary}</Link>
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

      {/* Ferramenta-isca: leitura do auto de infração (upload + IA) */}
      <AduaneiroAutoCta copy={c.autoTool} whatsappPhone={whatsappPhone} />

      <div className={sectionStripe} />

      {/* Defesa aduaneira */}
      <section id="defesa" className="border-b border-black/15 px-4 py-16 sm:px-6 sm:py-20 md:px-10">
        <div className="mb-12 grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <div className="mb-4 text-xs font-bold uppercase tracking-widest text-black/70">{c.defesaEyebrow}</div>
            <h2 className="font-serif text-3xl leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">{c.defesaTitle}</h2>
          </div>
          <p className="border-l border-black/15 pl-8 text-sm leading-7 text-black/70 sm:text-base">{c.defesaIntro}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {c.defesaCards.map(item => (
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

      {/* Tributação */}
      <section id="tributacao" className="border-b border-black/15 px-4 py-16 sm:px-6 sm:py-20 md:px-10">
        <div className="grid gap-8 md:grid-cols-[1fr_0.9fr] md:items-start">
          <div>
            <div className="mb-4 text-xs font-bold uppercase tracking-widest text-black/70">{c.tributacaoEyebrow}</div>
            <h2 className="font-serif text-3xl leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">{c.tributacaoTitle}</h2>
            <p className="mt-6 text-sm leading-7 text-black/65 sm:text-base">{c.tributacaoIntro}</p>
          </div>

          <OpticsCard decorations className="rounded-none border border-black/15 bg-white shadow-none ring-0 gap-0">
            <OpticsCardHeader className="border-b border-black/15 pb-4">
              <OpticsCardDescription className="text-xs font-bold uppercase tracking-widest text-black/70">
                {c.tributacaoEyebrow}
              </OpticsCardDescription>
            </OpticsCardHeader>
            <div
              style={stripeStyle}
              className="h-10 w-full bg-[repeating-linear-gradient(45deg,var(--card),var(--card)_3px,var(--muted)_3px,var(--muted)_6px)]"
            />
            <OpticsCardContent className="px-0">
              <AnimatedList delay={400} newestOnTop={false} className="w-full items-stretch gap-2">
                {c.tributacaoItems.map((item, i) => (
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

      {/* Regimes especiais */}
      <section id="regimes" className="border-b border-black/15 px-4 py-16 sm:px-6 sm:py-20 md:px-10">
        <div className="mb-12 grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <div className="mb-4 text-xs font-bold uppercase tracking-widest text-black/70">{c.regimesEyebrow}</div>
            <h2 className="font-serif text-3xl leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">{c.regimesTitle}</h2>
          </div>
          <p className="border-l border-black/15 pl-8 text-sm leading-7 text-black/70 sm:text-base">{c.regimesIntro}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {c.regimesCards.map(item => (
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

      {/* Logística internacional e marítimo */}
      <section id="logistica" className="border-b border-black/15 px-4 py-16 sm:px-6 sm:py-20 md:px-10">
        <div className="grid gap-8 md:grid-cols-[1fr_0.9fr] md:items-start">
          <div>
            <div className="mb-4 text-xs font-bold uppercase tracking-widest text-black/70">{c.logisticaEyebrow}</div>
            <h2 className="font-serif text-3xl leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">{c.logisticaTitle}</h2>
            <p className="mt-6 text-sm leading-7 text-black/65 sm:text-base">{c.logisticaIntro}</p>

            <Card className="mt-8 rounded-none border-black/15 bg-neutral-50 p-5 shadow-none">
              <p className="text-sm leading-7 text-black/70">{c.bridgeText}</p>
              <Link
                href={{ pathname: "/direito-minerario" }}
                className="mt-3 inline-block text-xs font-bold uppercase tracking-wider text-black underline underline-offset-4 hover:text-black/70"
              >
                {c.bridgeLink} →
              </Link>
            </Card>
          </div>

          <OpticsCard decorations className="rounded-none border border-black/15 bg-white shadow-none ring-0 gap-0">
            <OpticsCardHeader className="border-b border-black/15 pb-4">
              <OpticsCardDescription className="text-xs font-bold uppercase tracking-widest text-black/70">
                {c.logisticaEyebrow}
              </OpticsCardDescription>
            </OpticsCardHeader>
            <div
              style={stripeStyle}
              className="h-10 w-full bg-[repeating-linear-gradient(45deg,var(--card),var(--card)_3px,var(--muted)_3px,var(--muted)_6px)]"
            />
            <OpticsCardContent className="px-0">
              <AnimatedList delay={300} newestOnTop={false} className="w-full items-stretch gap-2">
                {c.logisticaItems.map((item, i) => (
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
      </section>

      <div className={sectionStripe} />

      {/* Como atuamos / diferenciais */}
      <section id="diferenciais" className="border-b border-black/15 px-4 py-16 sm:px-6 sm:py-20 md:px-10">
        <div className="mb-12 grid gap-8 md:grid-cols-2 md:items-start">
          <div>
            <div className="mb-4 text-xs font-bold uppercase tracking-widest text-black/70">{c.diferenciaisEyebrow}</div>
            <h2 className="font-serif text-3xl leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">{c.diferenciaisTitle}</h2>
          </div>
          <div className="md:mt-[calc(1rem+1lh)]">
            <p className="border-l border-black/15 pl-8 text-sm leading-7 text-black/65 sm:text-base">{c.diferenciaisIntro}</p>
            <Card className="mt-6 ml-8 rounded-none border-black/15 bg-neutral-50 p-4 text-sm leading-7 text-black/70 shadow-none">
              {c.disclaimerNote}
            </Card>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {c.diferenciaisCards.map(item => (
            <OpticsCard key={item.title} decorations className="rounded-none border border-black/15 bg-white shadow-none ring-0">
              <OpticsCardHeader>
                <OpticsCardTitle className="font-serif text-base font-normal leading-snug">{item.title}</OpticsCardTitle>
                <OpticsCardDescription className="text-xs leading-relaxed text-black/70">
                  {item.description}
                </OpticsCardDescription>
              </OpticsCardHeader>
            </OpticsCard>
          ))}
        </div>
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
              origem="direito_aduaneiro"
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
