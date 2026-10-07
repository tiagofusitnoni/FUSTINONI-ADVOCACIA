import type { Metadata } from "next";
import Image from "next/image";
import { Check, Minus } from "lucide-react";

import { Link } from "@/i18n/navigation";
import { type AppLocale } from "@/i18n/routing";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PublicacoesHomeBlock } from "@/components/publicacoes-home-block";
import { WhatsAppCTAButton } from "@/components/whatsapp-cta-button";
import { OG_LOCALE_BY_APP_LOCALE } from "@/lib/i18n";
import { getLocalizedHash } from "@/lib/navigation";
import { getAlternatesLanguages, getLocalizedUrl } from "@/lib/seo";
import { SITE_OG_IMAGE, SITE_NAME, getSiteUrl } from "@/lib/site";

type HomePageProps = {
  params: Promise<{
    locale: AppLocale;
  }>;
};

const HOME_TITLE_BY_LOCALE: Record<AppLocale, string> = {
  pt: SITE_NAME,
  en: `${SITE_NAME} | Strategic legal advisory`,
  es: `${SITE_NAME} | Asesoría jurídica estratégica`,
  it: `${SITE_NAME} | Consulenza legale strategica`,
};

const HOME_DESCRIPTION_BY_LOCALE: Record<AppLocale, string> = {
  pt: "Assessoria jurídica consultiva e contenciosa para pessoas físicas e jurídicas, com atuação estratégica, técnica e personalizada em múltiplas áreas do Direito.",
  en: "Strategic legal advisory and litigation support for individuals and companies, with technical precision and personalized service.",
  es: "Asesoría jurídica consultiva y contenciosa para personas y empresas, con actuación estratégica, técnica y personalizada.",
  it: "Consulenza legale, preventiva e contenziosa, per persone e imprese con approccio strategico, tecnico e personalizzato.",
};

export async function generateMetadata({
  params,
}: HomePageProps): Promise<Metadata> {
  const { locale } = await params;
  const title = HOME_TITLE_BY_LOCALE[locale];
  const description = HOME_DESCRIPTION_BY_LOCALE[locale];

  return {
    title,
    description,
    alternates: {
      canonical: getLocalizedUrl("/", locale),
      languages: getAlternatesLanguages("/"),
    },
    openGraph: {
      type: "website",
      locale: OG_LOCALE_BY_APP_LOCALE[locale],
      url: getLocalizedUrl("/", locale),
      title,
      description,
      siteName: SITE_NAME,
      images: [
        {
          url: SITE_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: SITE_NAME,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [SITE_OG_IMAGE],
    },
  };
}

const practiceAreas = [
  "Contencioso Estratégico",
  "Consultoria Empresarial",
  "Patrimônio e Sucessões",
  "Direito Penal Empresarial",
  "Direito Imobiliário",
  "Compliance e Direito Digital",
];

const serviceHighlights = [
  {
    title: "Dr. Tiago Sales Fustinoni - OAB/SP 395.178",
    description:
      "Fundador do escritório, com atuação em Direito Penal e Processual Penal, nulidades processuais, planejamento e proteção patrimonial, além de estratégias para satisfação de execução.",
  },
  {
    title: "Dr. Eduardo Torres de Freitas - OAB/SP 478.321",
    description:
      "Atua em Direito Penal, Civil, Consumidor e Previdenciário, com foco em gestão de riscos, estratégia processual e condução ativa de litígios de alta complexidade.",
  },
  {
    title: "Dra. Melina Carneiro Rizzo - OAB/SP 391.137",
    description:
      "Especialista em Direito Imobiliário, Penal e Processual Penal, com experiência em consultivo e contencioso imobiliário, due diligence estratégica e compliance de integridade.",
  },
  {
    title: "Dr. Marcio Eduardo Garcia Leite - OAB/SP 257.464",
    description:
      "Atuação destacada em Direito Trabalhista, Civil e Administrativo, com forte experiência em prevenção de litígios, negociação, gestão de riscos e defesa de interesses corporativos.",
  },
];

const processRows = [
  "Diagnóstico jurídico e mapeamento de riscos",
  "Definição de estratégia consultiva ou contenciosa",
  "Pareceres e orientação para tomada de decisão",
  "Estruturação documental e contratual",
  "Negociação e condução de tratativas",
  "Atuação contenciosa em primeira instância",
  "Recursos e sustentações orais",
  "Acompanhamento pós-decisão e execução",
];

const faqs = [
  {
    question: "Como funciona a primeira consulta?",
    answer:
      "A primeira reunião é dedicada ao entendimento completo do caso, dos objetivos e dos riscos envolvidos. A partir disso, apresentamos um direcionamento estratégico e o escopo recomendado.",
  },
  {
    question: "O escritório atende pessoa física e pessoa jurídica?",
    answer:
      "Sim. Atuamos para pessoa física e pessoa jurídica, com abordagem personalizada para demandas consultivas, preventivas e contenciosas.",
  },
  {
    question: "É possível contratar somente consultoria preventiva?",
    answer:
      "Sim. A consultoria preventiva pode ser contratada de forma independente para reduzir riscos, estruturar decisões e evitar litígios futuros.",
  },
  {
    question: "Vocês atuam em casos urgentes e medidas liminares?",
    answer:
      "Sim. Em situações urgentes, avaliamos a viabilidade jurídica imediata e estruturamos a atuação necessária para proteção célere dos direitos do cliente.",
  },
  {
    question: "O atendimento pode ser remoto?",
    answer:
      "Sim. O escritório realiza atendimentos presenciais e remotos, com acompanhamento contínuo e comunicação transparente durante toda a condução do caso.",
  },
  {
    question: "Como são definidos honorários e escopo?",
    answer:
      "Honorários e escopo são definidos conforme complexidade, volume de trabalho e objetivos do cliente, sempre com proposta clara e alinhada antes do início da atuação.",
  },
];

const legalAreasSchema = [
  "Direito Civil",
  "Direito de Família e Sucessões",
  "Direito Tributário",
  "Direito Imobiliário",
  "Direito Trabalhista",
  "Direito Empresarial",
  "Direito da Saúde",
  "Direito Administrativo",
  "Direito Internacional",
  "Direito Desportivo",
  "Direito Penal Empresarial",
  "Direito Digital e Compliance",
];

const specificServices = [
  {
    title: "Direito à Saúde",
    description:
      "Convênio médico que nega cobertura ou home care. Estado que deixa de oferecer tratamento necessário. O escritório atua em face de operadoras privadas e do poder público, com estratégia voltada a provimentos urgentes e reparação de danos.",
    layoutType: "full_text" as const,
    subCards: [
      {
        title: "Convênio Médico",
        bullets: [
          "Negativa de cobertura de cirurgia ou procedimento prescrito",
          "Recusa de internação ou alta antecipada indevida",
          "Negativa de tratamento oncológico ou de alta complexidade",
          "Exclusão indevida de medicamentos ou insumos necessários",
          "Limitação de sessões abaixo do prescrito",
          "Cobertura recusada por cláusula abusiva ou interpretação indevida",
        ],
        href: "/direito-saude#convenio",
        ctaLabel: "Agendar Consulta",
      },
      {
        title: "Home Care pelo Estado",
        bullets: [
          "Paciente com alta hospitalar dependente de cuidados contínuos",
          "Impossibilidade de locomoção ou internação domiciliar prescrita",
          "Estado que nega ou retarda o fornecimento do serviço",
          "Necessidade de equipamentos, medicamentos e equipe de saúde",
          "Crianças ou idosos sem atendimento adequado garantido pelo SUS",
          "Tutela de urgência para garantia imediata do tratamento",
        ],
        href: "/direito-saude#home-care",
        ctaLabel: "Agendar Consulta",
      },
    ],
  },
  {
    title: "Análise de Apontamentos Indevidos",
    description:
      "Análise jurídica de histórico bancário para casos de recusa de crédito, limite ou financiamento, com estratégia consultiva e contenciosa.",
    href: "/analise-credito",
    ctaLabel: "Acessar Serviço",
    disabled: false,
    layoutType: "card" as const,
  },
  {
    title: "Revisão de Fator K",
    description:
      "Análise jurídica e técnica das faturas SABESP para empresas que pagam Fator K, com estratégia de impugnação administrativa ou judicial e pleito de restituição quando cabível.",
    href: "/fator-k",
    ctaLabel: "Acessar Serviço",
    disabled: false,
    layoutType: "card" as const,
  },
  {
    title: "Direito Aduaneiro & Comércio Exterior",
    description:
      "Defesa em autuações e perdimento, tributação na importação, regimes especiais (drawback, RECOF) e contratos internacionais e marítimos — para importadores, exportadores e tradings.",
    href: "/direito-aduaneiro",
    ctaLabel: "Conhecer a área",
    disabled: false,
    layoutType: "card" as const,
  },
  {
    title: "Direito Minerário & Exportação de Minério",
    description:
      "Contratos de fornecimento, qualidade e teor, CFEM, logística portuária e arbitragem internacional — para mineradoras, tradings e compradores de minério.",
    href: "/direito-minerario",
    ctaLabel: "Conhecer a área",
    disabled: false,
    layoutType: "card" as const,
  },
];

type NonDefaultLocale = Exclude<AppLocale, "pt">;

const PRACTICE_AREAS_BY_LOCALE: Record<NonDefaultLocale, typeof practiceAreas> = {
  en: [
    "Strategic Litigation",
    "Business Advisory",
    "Wealth and Succession",
    "Corporate Criminal Law",
    "Real Estate Law",
    "Compliance and Digital Law",
  ],
  es: [
    "Litigio Estratégico",
    "Consultoría Empresarial",
    "Patrimonio y Sucesiones",
    "Derecho Penal Empresarial",
    "Derecho Inmobiliario",
    "Compliance y Derecho Digital",
  ],
  it: [
    "Contenzioso Strategico",
    "Consulenza Aziendale",
    "Patrimonio e Successioni",
    "Diritto Penale d'Impresa",
    "Diritto Immobiliare",
    "Compliance e Diritto Digitale",
  ],
};

const SERVICE_HIGHLIGHTS_BY_LOCALE: Record<
  NonDefaultLocale,
  typeof serviceHighlights
> = {
  en: [
    {
      title: "Dr. Tiago Sales Fustinoni - OAB/SP 395.178",
      description:
        "Founder of the firm, practicing in Criminal and Criminal Procedure Law, procedural nullities, wealth planning and protection, as well as enforcement-oriented legal strategies.",
    },
    {
      title: "Dr. Eduardo Torres de Freitas - OAB/SP 478.321",
      description:
        "Practices in Criminal, Civil, Consumer and Social Security Law, with a focus on risk management, procedural strategy and active litigation leadership in complex disputes.",
    },
    {
      title: "Dra. Melina Carneiro Rizzo - OAB/SP 391.137",
      description:
        "Specialist in Real Estate, Criminal and Criminal Procedure Law, with experience in advisory and litigation matters, strategic due diligence and integrity compliance.",
    },
    {
      title: "Dr. Marcio Eduardo Garcia Leite - OAB/SP 257.464",
      description:
        "Recognized practice in Labor, Civil and Administrative Law, with strong experience in dispute prevention, negotiation, risk management and corporate defense.",
    },
  ],
  es: [
    {
      title: "Dr. Tiago Sales Fustinoni - OAB/SP 395.178",
      description:
        "Fundador del despacho, con actuación en Derecho Penal y Procesal Penal, nulidades procesales, planificación y protección patrimonial, además de estrategias para satisfacción de ejecución.",
    },
    {
      title: "Dr. Eduardo Torres de Freitas - OAB/SP 478.321",
      description:
        "Actúa en Derecho Penal, Civil, del Consumidor y Previsional, con foco en gestión de riesgos, estrategia procesal y conducción activa de litigios de alta complejidad.",
    },
    {
      title: "Dra. Melina Carneiro Rizzo - OAB/SP 391.137",
      description:
        "Especialista en Derecho Inmobiliario, Penal y Procesal Penal, con experiencia en consultivo y contencioso inmobiliario, due diligence estratégica y compliance de integridad.",
    },
    {
      title: "Dr. Marcio Eduardo Garcia Leite - OAB/SP 257.464",
      description:
        "Actuación destacada en Derecho Laboral, Civil y Administrativo, con amplia experiencia en prevención de litigios, negociación, gestión de riesgos y defensa de intereses corporativos.",
    },
  ],
  it: [
    {
      title: "Dr. Tiago Sales Fustinoni - OAB/SP 395.178",
      description:
        "Fondatore dello studio, con attività in Diritto Penale e Processuale Penale, nullità processuali, pianificazione e protezione patrimoniale, oltre a strategie per l'esecuzione delle decisioni.",
    },
    {
      title: "Dr. Eduardo Torres de Freitas - OAB/SP 478.321",
      description:
        "Opera nel Diritto Penale, Civile, dei Consumatori e Previdenziale, con focus su gestione del rischio, strategia processuale e conduzione attiva di contenziosi complessi.",
    },
    {
      title: "Dra. Melina Carneiro Rizzo - OAB/SP 391.137",
      description:
        "Specialista in Diritto Immobiliare, Penale e Processuale Penale, con esperienza in consulenza e contenzioso immobiliare, due diligence strategica e compliance d'integrità.",
    },
    {
      title: "Dr. Marcio Eduardo Garcia Leite - OAB/SP 257.464",
      description:
        "Attività di rilievo in Diritto del Lavoro, Civile e Amministrativo, con forte esperienza in prevenzione del contenzioso, negoziazione, gestione dei rischi e tutela di interessi aziendali.",
    },
  ],
};

const PROCESS_ROWS_BY_LOCALE: Record<NonDefaultLocale, typeof processRows> = {
  en: [
    "Legal diagnosis and risk mapping",
    "Definition of advisory or litigation strategy",
    "Legal opinions and decision support",
    "Document and contract structuring",
    "Negotiation and management of discussions",
    "Litigation in first-instance courts",
    "Appeals and oral arguments",
    "Post-decision and enforcement follow-up",
  ],
  es: [
    "Diagnóstico jurídico y mapeo de riesgos",
    "Definición de estrategia consultiva o contenciosa",
    "Dictámenes y orientación para la toma de decisiones",
    "Estructuración documental y contractual",
    "Negociación y conducción de tratativas",
    "Actuación contenciosa en primera instancia",
    "Recursos y alegatos orales",
    "Seguimiento posterior a la decisión y ejecución",
  ],
  it: [
    "Diagnosi legale e mappatura dei rischi",
    "Definizione della strategia consulenziale o contenziosa",
    "Pareri legali e supporto decisionale",
    "Strutturazione documentale e contrattuale",
    "Negoziazione e gestione delle trattative",
    "Assistenza nel contenzioso di primo grado",
    "Impugnazioni e discussioni orali",
    "Monitoraggio post-decisione ed esecuzione",
  ],
};

const FAQS_BY_LOCALE: Record<NonDefaultLocale, typeof faqs> = {
  en: [
    {
      question: "How does the first consultation work?",
      answer:
        "The first meeting is focused on fully understanding the case, objectives and risks involved. From there, we present strategic guidance and the recommended scope of work.",
    },
    {
      question: "Does the firm serve both individuals and companies?",
      answer:
        "Yes. We represent individuals and companies with a tailored approach to advisory, preventive and litigation matters.",
    },
    {
      question: "Can I hire only preventive advisory services?",
      answer:
        "Yes. Preventive advisory can be hired independently to reduce risks, structure decisions and avoid future disputes.",
    },
    {
      question: "Do you handle urgent cases and injunctions?",
      answer:
        "Yes. In urgent situations, we assess immediate legal feasibility and structure the necessary action for swift protection of the client's rights.",
    },
    {
      question: "Can consultations be remote?",
      answer:
        "Yes. The firm provides in-person and remote consultations, with continuous follow-up and transparent communication throughout the case.",
    },
    {
      question: "How are fees and scope defined?",
      answer:
        "Fees and scope are set according to complexity, workload and client objectives, always with a clear proposal aligned before engagement starts.",
    },
  ],
  es: [
    {
      question: "¿Cómo funciona la primera consulta?",
      answer:
        "La primera reunión se dedica a comprender de forma integral el caso, los objetivos y los riesgos involucrados. A partir de ello, presentamos una orientación estratégica y el alcance recomendado.",
    },
    {
      question: "¿El despacho atiende a personas físicas y jurídicas?",
      answer:
        "Sí. Actuamos para personas físicas y jurídicas, con un enfoque personalizado para demandas consultivas, preventivas y contenciosas.",
    },
    {
      question: "¿Es posible contratar solo consultoría preventiva?",
      answer:
        "Sí. La consultoría preventiva puede contratarse de forma independiente para reducir riesgos, estructurar decisiones y evitar litigios futuros.",
    },
    {
      question: "¿Actúan en casos urgentes y medidas cautelares?",
      answer:
        "Sí. En situaciones urgentes, evaluamos la viabilidad jurídica inmediata y estructuramos la actuación necesaria para proteger con celeridad los derechos del cliente.",
    },
    {
      question: "¿La atención puede ser remota?",
      answer:
        "Sí. El despacho realiza atenciones presenciales y remotas, con seguimiento continuo y comunicación transparente durante toda la conducción del caso.",
    },
    {
      question: "¿Cómo se definen honorarios y alcance?",
      answer:
        "Honorarios y alcance se definen según complejidad, volumen de trabajo y objetivos del cliente, siempre con propuesta clara y alineada antes del inicio de la actuación.",
    },
  ],
  it: [
    {
      question: "Come funziona la prima consulenza?",
      answer:
        "Il primo incontro è dedicato alla piena comprensione del caso, degli obiettivi e dei rischi coinvolti. Da lì presentiamo un indirizzo strategico e l'ambito di attività raccomandato.",
    },
    {
      question: "Lo studio assiste persone fisiche e aziende?",
      answer:
        "Sì. Assistiamo persone fisiche e giuridiche con un approccio personalizzato per esigenze consulenziali, preventive e contenziose.",
    },
    {
      question: "È possibile contrattare solo consulenza preventiva?",
      answer:
        "Sì. La consulenza preventiva può essere attivata in modo indipendente per ridurre i rischi, strutturare decisioni ed evitare futuri contenziosi.",
    },
    {
      question: "Gestite casi urgenti e misure cautelari?",
      answer:
        "Sì. Nelle situazioni urgenti valutiamo la fattibilità giuridica immediata e strutturiamo l'azione necessaria per una tutela rapida dei diritti del cliente.",
    },
    {
      question: "L'assistenza può essere da remoto?",
      answer:
        "Sì. Lo studio offre assistenza in presenza e da remoto, con monitoraggio continuo e comunicazione trasparente durante tutta la gestione del caso.",
    },
    {
      question: "Come vengono definiti compensi e perimetro?",
      answer:
        "Compensi e perimetro sono definiti in base a complessità, volume di lavoro e obiettivi del cliente, sempre con proposta chiara e condivisa prima dell'avvio.",
    },
  ],
};

const LEGAL_AREAS_SCHEMA_BY_LOCALE: Record<
  NonDefaultLocale,
  typeof legalAreasSchema
> = {
  en: [
    "Civil Law",
    "Family and Succession Law",
    "Tax Law",
    "Real Estate Law",
    "Labor Law",
    "Business Law",
    "Health Law",
    "Administrative Law",
    "International Law",
    "Sports Law",
    "Corporate Criminal Law",
    "Digital Law and Compliance",
  ],
  es: [
    "Derecho Civil",
    "Derecho de Familia y Sucesiones",
    "Derecho Tributario",
    "Derecho Inmobiliario",
    "Derecho Laboral",
    "Derecho Empresarial",
    "Derecho de la Salud",
    "Derecho Administrativo",
    "Derecho Internacional",
    "Derecho Deportivo",
    "Derecho Penal Empresarial",
    "Derecho Digital y Compliance",
  ],
  it: [
    "Diritto Civile",
    "Diritto di Famiglia e Successioni",
    "Diritto Tributario",
    "Diritto Immobiliare",
    "Diritto del Lavoro",
    "Diritto d'Impresa",
    "Diritto Sanitario",
    "Diritto Amministrativo",
    "Diritto Internazionale",
    "Diritto Sportivo",
    "Diritto Penale d'Impresa",
    "Diritto Digitale e Compliance",
  ],
};

const SPECIFIC_SERVICES_BY_LOCALE: Record<
  NonDefaultLocale,
  typeof specificServices
> = {
  en: [
    {
      title: "Health Law",
      description:
        "When private health insurance denies coverage or home care, or the State fails to provide necessary treatment, the firm acts against private operators and public entities with strategy focused on urgent relief and compensation.",
      layoutType: "full_text" as const,
      subCards: [
        {
          title: "Private Health Insurance",
          bullets: [
            "Denied coverage for surgery or prescribed procedures",
            "Denied hospitalization or improper early discharge",
            "Denied oncology or high-complexity treatment",
            "Improper exclusion of required medicines or supplies",
            "Session limits below what was medically prescribed",
            "Coverage denied based on abusive clauses or improper interpretation",
          ],
          href: "/direito-saude#convenio",
          ctaLabel: "Schedule Consultation",
        },
        {
          title: "State-Funded Home Care",
          bullets: [
            "Patient discharged but still dependent on continuous care",
            "Reduced mobility or medically prescribed home hospitalization",
            "State refusal or delay in providing the service",
            "Need for equipment, medication and healthcare team",
            "Children or older adults without adequate care guaranteed by SUS",
            "Urgent relief to secure immediate treatment",
          ],
          href: "/direito-saude#home-care",
          ctaLabel: "Schedule Consultation",
        },
      ],
    },
    {
      title: "Improper Listing Review",
      description:
        "Legal review of banking history for credit denial, limit reduction or financing refusal, with advisory and litigation strategy.",
      href: "/analise-credito",
      ctaLabel: "Access Service",
      disabled: false,
      layoutType: "card" as const,
    },
    {
      title: "Factor K Review",
      description:
        "Legal and technical review of SABESP invoices for companies charged with Factor K, including administrative or judicial challenge strategy and reimbursement claims when applicable.",
      href: "/fator-k",
      ctaLabel: "Access Service",
      disabled: false,
      layoutType: "card" as const,
    },
    {
      title: "Customs & International Trade Law",
      description:
        "Defense in assessments and forfeiture, import taxation, special regimes (drawback, RECOF) and international and maritime contracts — for importers, exporters and trading companies.",
      href: "/direito-aduaneiro",
      ctaLabel: "Explore the area",
      disabled: false,
      layoutType: "card" as const,
    },
    {
      title: "Mining Law & Mineral Export",
      description:
        "Supply contracts, quality and grade, royalties (CFEM), port logistics and international arbitration — for mining companies, traders and ore buyers.",
      href: "/direito-minerario",
      ctaLabel: "Explore the area",
      disabled: false,
      layoutType: "card" as const,
    },
  ],
  es: [
    {
      title: "Derecho a la Salud",
      description:
        "Cuando un seguro médico niega cobertura u hospitalización domiciliaria, o el Estado no ofrece el tratamiento necesario, el despacho actúa frente a operadoras privadas y poder público, con estrategia orientada a medidas urgentes y reparación de daños.",
      layoutType: "full_text" as const,
      subCards: [
        {
          title: "Seguro Médico",
          bullets: [
            "Negativa de cobertura de cirugía o procedimiento prescrito",
            "Negativa de internación o alta anticipada indebida",
            "Negativa de tratamiento oncológico o de alta complejidad",
            "Exclusión indebida de medicamentos o insumos necesarios",
            "Limitación de sesiones por debajo de lo prescrito",
            "Cobertura rechazada por cláusula abusiva o interpretación indebida",
          ],
          href: "/direito-saude#convenio",
          ctaLabel: "Agendar Consulta",
        },
        {
          title: "Home Care por el Estado",
          bullets: [
            "Paciente con alta hospitalaria que depende de cuidados continuos",
            "Imposibilidad de movilidad o internación domiciliaria prescrita",
            "Estado que niega o retrasa la prestación del servicio",
            "Necesidad de equipos, medicamentos y equipo de salud",
            "Niños o adultos mayores sin atención adecuada garantizada por el SUS",
            "Medida urgente para garantizar atención inmediata",
          ],
          href: "/direito-saude#home-care",
          ctaLabel: "Agendar Consulta",
        },
      ],
    },
    {
      title: "Análisis de Registros Indebidos",
      description:
        "Análisis jurídico del historial bancario para casos de rechazo de crédito, límite o financiación, con estrategia consultiva y contenciosa.",
      href: "/analise-credito",
      ctaLabel: "Acceder al Servicio",
      disabled: false,
      layoutType: "card" as const,
    },
    {
      title: "Revisión de Factor K",
      description:
        "Análisis jurídico y técnico de facturas SABESP para empresas que pagan Factor K, con estrategia de impugnación administrativa o judicial y solicitud de restitución cuando corresponda.",
      href: "/fator-k",
      ctaLabel: "Acceder al Servicio",
      disabled: false,
      layoutType: "card" as const,
    },
  ],
  it: [
    {
      title: "Diritto alla Salute",
      description:
        "Quando l'assicurazione sanitaria nega copertura o assistenza domiciliare, o lo Stato non fornisce il trattamento necessario, lo studio agisce contro operatori privati ed enti pubblici con strategia orientata a misure urgenti e risarcimento.",
      layoutType: "full_text" as const,
      subCards: [
        {
          title: "Assicurazione Sanitaria",
          bullets: [
            "Diniego di copertura per chirurgia o procedura prescritta",
            "Rifiuto del ricovero o dimissione anticipata impropria",
            "Diniego di trattamenti oncologici o ad alta complessità",
            "Esclusione impropria di farmaci o presidi necessari",
            "Limitazione delle sedute al di sotto di quanto prescritto",
            "Copertura negata per clausole abusive o interpretazione impropria",
          ],
          href: "/direito-saude#convenio",
          ctaLabel: "Prenota Consulenza",
        },
        {
          title: "Home Care da Parte dello Stato",
          bullets: [
            "Paziente dimesso ma dipendente da assistenza continuativa",
            "Impossibilità di mobilità o ricovero domiciliare prescritto",
            "Stato che nega o ritarda l'erogazione del servizio",
            "Necessità di dispositivi, farmaci e team sanitario",
            "Bambini o anziani senza assistenza adeguata garantita dal SUS",
            "Tutela urgente per garantire assistenza immediata",
          ],
          href: "/direito-saude#home-care",
          ctaLabel: "Prenota Consulenza",
        },
      ],
    },
    {
      title: "Analisi di Segnalazioni Indebite",
      description:
        "Analisi legale dello storico bancario in caso di rifiuto del credito, riduzione del limite o diniego di finanziamento, con strategia consulenziale e contenziosa.",
      href: "/analise-credito",
      ctaLabel: "Vai al Servizio",
      disabled: false,
      layoutType: "card" as const,
    },
    {
      title: "Revisione del Fattore K",
      description:
        "Analisi legale e tecnica delle fatture SABESP per aziende che pagano il Fattore K, con strategia di impugnazione amministrativa o giudiziale e richiesta di rimborso quando applicabile.",
      href: "/fator-k",
      ctaLabel: "Vai al Servizio",
      disabled: false,
      layoutType: "card" as const,
    },
  ],
};

type HomeTextCopy = {
  heroTitle: string;
  heroDescription: string;
  heroCta: string;
  heroImageAlt: string;
  teamLabel: string;
  teamTitle: string;
  studioLabel: string;
  studioTitle: string;
  studioDescription: string;
  studioImageAlt: string;
  studioPillars: [string, string, string, string, string];
  processLabel: string;
  processTitle: string;
  consultingTitle: string;
  consultingDescription: string;
  consultingCta: string;
  fullActingTitle: string;
  fullActingDescription: string;
  fullActingCta: string;
  sectorsLabel: string;
  sectorsTitle: string;
  sectorCard1Title: string;
  sectorCard1Description: string;
  sectorPatrimonialLabel: string;
  sectorPatrimonialTitle: string;
  sectorPlanningLabel: string;
  sectorPlanningTitle: string;
  sectorCard3Title: string;
  sectorCard3Description: string;
  sectorRegulatedLabel: string;
  sectorRegulatedTitle: string;
  sectorInternationalLabel: string;
  sectorInternationalTitle: string;
  sectorRiskLabel: string;
  sectorRiskTitle: string;
  sectorClosingTitle: string;
  sectorClosingDescription: string;
  specificServicesLabel: string;
  specificServicesTitle: string;
  specificServicesDescription: string;
  faqTitle: string;
  finalLabel: string;
  finalTitle: string;
  finalDescription: string;
};

const HOME_TEXT_BY_LOCALE: Record<AppLocale, HomeTextCopy> = {
  pt: {
    heroTitle: "Estratégia, discrição e precisão técnica para questões de alta complexidade",
    heroDescription:
      "Atuação consultiva e contenciosa para pessoas físicas e jurídicas, com foco em proteção patrimonial, mitigação de riscos e defesa qualificada de interesses relevantes.",
    heroCta: "Agendar Consulta",
    heroImageAlt: "Representação institucional do escritório",
    teamLabel: "Equipe",
    teamTitle: "Advogados com formação sólida e atuação multidisciplinar",
    studioLabel: "Escritório",
    studioTitle:
      "Rigor técnico e visão estratégica para questões sensíveis",
    studioDescription:
      "Nossa atuação combina rigor jurídico, discrição absoluta e atendimento personalizado para transformar complexidade em soluções seguras, eficazes e sustentáveis.",
    studioImageAlt: "Posicionamento institucional do escritório",
    studioPillars: [
      "Rigor técnico",
      "Estratégia processual",
      "Discrição absoluta",
      "Atendimento personalizado",
      "Visão multidisciplinar",
    ],
    processLabel: "Modelos de Atuação",
    processTitle: "Escolha o nível de acompanhamento jurídico que seu caso exige",
    consultingTitle: "Consultoria e Prevenção",
    consultingDescription:
      "Ideal para quem busca orientação estratégica, prevenção de passivos e estruturação jurídica antes do litígio.",
    consultingCta: "Falar com a Equipe",
    fullActingTitle: "Atuação Completa",
    fullActingDescription:
      "Recomendado para casos que exigem condução integral, da estratégia inicial à atuação contenciosa e fase de execução.",
    fullActingCta: "Agendar Consulta",
    sectorsLabel: "Áreas de Atuação",
    sectorsTitle: "Atuação jurídica abrangente em 12 frentes estratégicas",
    sectorCard1Title: "Direito Civil e Direito de Família e Sucessões.",
    sectorCard1Description:
      "Contratos, responsabilidade civil, inventários e planejamento patrimonial familiar.",
    sectorPatrimonialLabel: "Frente Patrimonial",
    sectorPatrimonialTitle: "Direito Tributário + Direito Imobiliário",
    sectorPlanningLabel: "Planejamento",
    sectorPlanningTitle: "Estruturas e proteção de ativos",
    sectorCard3Title: "Direito Trabalhista e Direito Empresarial.",
    sectorCard3Description:
      "Consultoria preventiva, contratos estratégicos e defesa em litígios de alta exposição.",
    sectorRegulatedLabel: "Setores Regulados",
    sectorRegulatedTitle: "Direito da Saúde + Direito Administrativo",
    sectorInternationalLabel: "Âmbito Internacional",
    sectorInternationalTitle: "Direito Internacional + Direito Desportivo",
    sectorRiskLabel: "Risco e Integridade",
    sectorRiskTitle: "Direito Penal Empresarial + Direito Digital e Compliance",
    sectorClosingTitle:
      "Atuação consultiva e contenciosa com estratégia sob medida para cada cliente.",
    sectorClosingDescription:
      "Pessoas físicas, famílias e empresas com demandas de alta complexidade.",
    specificServicesLabel: "Serviços Específicos",
    specificServicesTitle: "Soluções dedicadas para demandas jurídicas específicas",
    specificServicesDescription:
      "Conheça frentes específicas de atuação com escopo claro, abordagem técnica e acompanhamento estratégico.",
    faqTitle: "Perguntas frequentes antes do início da atuação jurídica",
    finalLabel: "Agende Sua Consulta",
    finalTitle: "Converse com uma equipe preparada para suas decisões mais sensíveis",
    finalDescription:
      "Se você precisa de consultoria preventiva ou representação contenciosa, estruturamos a atuação ideal para proteger seus interesses com segurança jurídica.",
  },
  en: {
    heroTitle: "Strategy, discretion and technical precision for high-complexity matters",
    heroDescription:
      "Advisory and litigation services for individuals and companies, focused on asset protection, risk mitigation and qualified legal defense for high-stakes matters.",
    heroCta: "Schedule Consultation",
    heroImageAlt: "Institutional representation of the law firm",
    teamLabel: "Team",
    teamTitle: "Lawyers with strong academic training and multidisciplinary practice",
    studioLabel: "Firm",
    studioTitle:
      "Technical rigor and strategic vision for sensitive matters",
    studioDescription:
      "Our practice combines legal rigor, absolute discretion and personalized service to turn complexity into safe, effective and sustainable solutions.",
    studioImageAlt: "Institutional positioning of the law firm",
    studioPillars: [
      "Technical rigor",
      "Procedural strategy",
      "Absolute discretion",
      "Personalized service",
      "Multidisciplinary vision",
    ],
    processLabel: "Engagement Models",
    processTitle: "Choose the level of legal support your case requires",
    consultingTitle: "Advisory and Prevention",
    consultingDescription:
      "Ideal for those seeking strategic guidance, liability prevention and legal structuring before litigation.",
    consultingCta: "Talk to the Team",
    fullActingTitle: "Full Representation",
    fullActingDescription:
      "Recommended for matters that require end-to-end handling, from initial strategy to litigation and enforcement.",
    fullActingCta: "Schedule Consultation",
    sectorsLabel: "Practice Areas",
    sectorsTitle: "Comprehensive legal practice across 12 strategic fronts",
    sectorCard1Title: "Civil Law and Family & Succession Law.",
    sectorCard1Description:
      "Contracts, civil liability, probate and family wealth planning.",
    sectorPatrimonialLabel: "Asset Front",
    sectorPatrimonialTitle: "Tax Law + Real Estate Law",
    sectorPlanningLabel: "Planning",
    sectorPlanningTitle: "Structures and asset protection",
    sectorCard3Title: "Labor Law and Business Law.",
    sectorCard3Description:
      "Preventive advisory, strategic contracts and defense in high-exposure disputes.",
    sectorRegulatedLabel: "Regulated Sectors",
    sectorRegulatedTitle: "Health Law + Administrative Law",
    sectorInternationalLabel: "International Scope",
    sectorInternationalTitle: "International Law + Sports Law",
    sectorRiskLabel: "Risk and Integrity",
    sectorRiskTitle: "Corporate Criminal Law + Digital Law and Compliance",
    sectorClosingTitle:
      "Advisory and litigation services with strategy tailored to each client.",
    sectorClosingDescription:
      "Individuals, families and companies with high-complexity demands.",
    specificServicesLabel: "Specific Services",
    specificServicesTitle: "Dedicated solutions for specific legal demands",
    specificServicesDescription:
      "Explore focused legal services with clear scope, technical approach and strategic follow-up.",
    faqTitle: "Frequently asked questions before legal representation starts",
    finalLabel: "Schedule Your Consultation",
    finalTitle: "Talk to a team prepared for your most sensitive decisions",
    finalDescription:
      "If you need preventive advisory or litigation representation, we structure the ideal approach to protect your interests with legal certainty.",
  },
  es: {
    heroTitle: "Estrategia, discreción y precisión técnica para asuntos de alta complejidad",
    heroDescription:
      "Actuación consultiva y contenciosa para personas y empresas, con foco en protección patrimonial, mitigación de riesgos y defensa cualificada de intereses relevantes.",
    heroCta: "Agendar Consulta",
    heroImageAlt: "Representación institucional del despacho",
    teamLabel: "Equipo",
    teamTitle: "Abogados con formación sólida y actuación multidisciplinaria",
    studioLabel: "Despacho",
    studioTitle:
      "Rigor técnico y visión estratégica para asuntos sensibles",
    studioDescription:
      "Nuestra actuación combina rigor jurídico, discreción absoluta y atención personalizada para transformar complejidad en soluciones seguras, eficaces y sostenibles.",
    studioImageAlt: "Posicionamiento institucional del despacho",
    studioPillars: [
      "Rigor técnico",
      "Estrategia procesal",
      "Discreción absoluta",
      "Atención personalizada",
      "Visión multidisciplinaria",
    ],
    processLabel: "Modelos de Actuación",
    processTitle: "Elija el nivel de acompañamiento jurídico que su caso exige",
    consultingTitle: "Consultoría y Prevención",
    consultingDescription:
      "Ideal para quienes buscan orientación estratégica, prevención de pasivos y estructuración jurídica antes del litigio.",
    consultingCta: "Hablar con el Equipo",
    fullActingTitle: "Actuación Completa",
    fullActingDescription:
      "Recomendado para casos que exigen conducción integral, desde la estrategia inicial hasta la actuación contenciosa y etapa de ejecución.",
    fullActingCta: "Agendar Consulta",
    sectorsLabel: "Áreas de Actuación",
    sectorsTitle: "Actuación jurídica integral en 12 frentes estratégicos",
    sectorCard1Title: "Derecho Civil y Derecho de Familia y Sucesiones.",
    sectorCard1Description:
      "Contratos, responsabilidad civil, sucesiones y planificación patrimonial familiar.",
    sectorPatrimonialLabel: "Frente Patrimonial",
    sectorPatrimonialTitle: "Derecho Tributario + Derecho Inmobiliario",
    sectorPlanningLabel: "Planificación",
    sectorPlanningTitle: "Estructuras y protección de activos",
    sectorCard3Title: "Derecho Laboral y Derecho Empresarial.",
    sectorCard3Description:
      "Consultoría preventiva, contratos estratégicos y defensa en litigios de alta exposición.",
    sectorRegulatedLabel: "Sectores Regulados",
    sectorRegulatedTitle: "Derecho de la Salud + Derecho Administrativo",
    sectorInternationalLabel: "Ámbito Internacional",
    sectorInternationalTitle: "Derecho Internacional + Derecho Deportivo",
    sectorRiskLabel: "Riesgo e Integridad",
    sectorRiskTitle: "Derecho Penal Empresarial + Derecho Digital y Compliance",
    sectorClosingTitle:
      "Actuación consultiva y contenciosa con estrategia a medida para cada cliente.",
    sectorClosingDescription:
      "Personas físicas, familias y empresas con demandas de alta complejidad.",
    specificServicesLabel: "Servicios Específicos",
    specificServicesTitle: "Soluciones dedicadas para demandas jurídicas específicas",
    specificServicesDescription:
      "Conozca frentes específicas de actuación con alcance claro, enfoque técnico y seguimiento estratégico.",
    faqTitle: "Preguntas frecuentes antes del inicio de la actuación jurídica",
    finalLabel: "Agende Su Consulta",
    finalTitle: "Converse con un equipo preparado para sus decisiones más sensibles",
    finalDescription:
      "Si necesita consultoría preventiva o representación contenciosa, estructuramos la actuación ideal para proteger sus intereses con seguridad jurídica.",
  },
  it: {
    heroTitle: "Strategia, discrezione e precisione tecnica per questioni di alta complessità",
    heroDescription:
      "Attività consulenziale e contenziosa per persone e imprese, con focus su protezione patrimoniale, mitigazione dei rischi e tutela qualificata di interessi rilevanti.",
    heroCta: "Prenota Consulenza",
    heroImageAlt: "Rappresentazione istituzionale dello studio",
    teamLabel: "Team",
    teamTitle: "Avvocati con formazione solida e attività multidisciplinare",
    studioLabel: "Studio",
    studioTitle:
      "Rigore tecnico e visione strategica per questioni delicate",
    studioDescription:
      "La nostra attività unisce rigore giuridico, discrezione assoluta e assistenza personalizzata per trasformare la complessità in soluzioni sicure, efficaci e sostenibili.",
    studioImageAlt: "Posizionamento istituzionale dello studio",
    studioPillars: [
      "Rigore tecnico",
      "Strategia processuale",
      "Discrezione assoluta",
      "Assistenza personalizzata",
      "Visione multidisciplinare",
    ],
    processLabel: "Modelli di Assistenza",
    processTitle: "Scegli il livello di assistenza legale richiesto dal tuo caso",
    consultingTitle: "Consulenza e Prevenzione",
    consultingDescription:
      "Ideale per chi cerca orientamento strategico, prevenzione delle passività e strutturazione giuridica prima del contenzioso.",
    consultingCta: "Parla con il Team",
    fullActingTitle: "Assistenza Completa",
    fullActingDescription:
      "Consigliata per casi che richiedono conduzione integrale, dalla strategia iniziale al contenzioso e alla fase esecutiva.",
    fullActingCta: "Prenota Consulenza",
    sectorsLabel: "Aree di Attività",
    sectorsTitle: "Attività legale completa in 12 fronti strategici",
    sectorCard1Title: "Diritto Civile e Diritto di Famiglia e Successioni.",
    sectorCard1Description:
      "Contratti, responsabilità civile, successioni e pianificazione patrimoniale familiare.",
    sectorPatrimonialLabel: "Area Patrimoniale",
    sectorPatrimonialTitle: "Diritto Tributario + Diritto Immobiliare",
    sectorPlanningLabel: "Pianificazione",
    sectorPlanningTitle: "Strutture e protezione degli asset",
    sectorCard3Title: "Diritto del Lavoro e Diritto d'Impresa.",
    sectorCard3Description:
      "Consulenza preventiva, contratti strategici e difesa in contenziosi ad alta esposizione.",
    sectorRegulatedLabel: "Settori Regolati",
    sectorRegulatedTitle: "Diritto Sanitario + Diritto Amministrativo",
    sectorInternationalLabel: "Ambito Internazionale",
    sectorInternationalTitle: "Diritto Internazionale + Diritto Sportivo",
    sectorRiskLabel: "Rischio e Integrità",
    sectorRiskTitle: "Diritto Penale d'Impresa + Diritto Digitale e Compliance",
    sectorClosingTitle:
      "Attività consulenziale e contenziosa con strategia su misura per ogni cliente.",
    sectorClosingDescription:
      "Persone, famiglie e imprese con esigenze di alta complessità.",
    specificServicesLabel: "Servizi Specifici",
    specificServicesTitle: "Soluzioni dedicate per esigenze legali specifiche",
    specificServicesDescription:
      "Scopri linee di attività specifiche con ambito chiaro, approccio tecnico e monitoraggio strategico.",
    faqTitle: "Domande frequenti prima dell'avvio dell'assistenza legale",
    finalLabel: "Prenota la Tua Consulenza",
    finalTitle: "Parli con un team preparato per le sue decisioni più delicate",
    finalDescription:
      "Se hai bisogno di consulenza preventiva o rappresentanza contenziosa, strutturiamo l'approccio ideale per proteggere i tuoi interessi con certezza giuridica.",
  },
};

const whatsappPhone = process.env.WHATSAPP_PHONE_NUMBER ?? "";
const MSG_CONSULTA_BY_LOCALE: Record<AppLocale, string> = {
  pt: "Olá! Gostaria de agendar uma consulta com a equipe da FUSTINONI ADVOCACIA.",
  en: "Hello! I would like to schedule a consultation with the FUSTINONI ADVOCACIA team.",
  es: "¡Hola! Me gustaría agendar una consulta con el equipo de FUSTINONI ADVOCACIA.",
  it: "Buongiorno! Vorrei fissare una consulenza con il team di FUSTINONI ADVOCACIA.",
};

const MSG_CONSULTORIA_BY_LOCALE: Record<AppLocale, string> = {
  pt: "Olá! Quero falar com a equipe da FUSTINONI ADVOCACIA sobre meu caso.",
  en: "Hello! I want to talk to the FUSTINONI ADVOCACIA team about my case.",
  es: "¡Hola! Quiero hablar con el equipo de FUSTINONI ADVOCACIA sobre mi caso.",
  it: "Buongiorno! Vorrei parlare con il team di FUSTINONI ADVOCACIA del mio caso.",
};

const MSG_SAUDE_BY_LOCALE: Record<AppLocale, string> = {
  pt: "Olá! Gostaria de agendar uma consulta sobre Direito à Saúde (convênio médico ou home care).",
  en: "Hello! I would like to schedule a consultation on Health Law (insurance coverage or home care).",
  es: "¡Hola! Me gustaría agendar una consulta sobre Derecho a la Salud (seguro médico u hospitalización domiciliaria).",
  it: "Buongiorno! Vorrei fissare una consulenza su Diritto alla Salute (assicurazione sanitaria o assistenza domiciliare).",
};

const SCHEMA_LANGUAGE_BY_LOCALE: Record<AppLocale, string> = {
  pt: "pt-BR",
  en: "en",
  es: "es",
  it: "it",
};

const SCHEMA_LANGUAGE_LABEL_BY_LOCALE: Record<AppLocale, string> = {
  pt: "Portuguese",
  en: "English",
  es: "Spanish",
  it: "Italian",
};

/* Identidade oficial (07/10/2026): medidas e acabamentos da página inicial. */
const WRAP = "mx-auto w-full max-w-[min(88vw,96rem)] px-6 sm:px-10";
const SECAO = "py-24 sm:py-28 lg:py-36";
const TITULO = "text-balance font-serif text-[2rem] leading-[1.15] tracking-[-0.012em] text-[#14231D] sm:text-[2.5rem] lg:text-[2.85rem]";
const TEXTO = "text-[0.95rem] leading-7 text-[#4F5A54] sm:text-base sm:leading-8";
const BTN_BASE = "inline-flex h-auto items-center justify-center rounded-none px-10 py-5 text-[0.6875rem] font-medium uppercase tracking-[0.24em] shadow-none transition-colors duration-300";
const BTN_LINHA = `${BTN_BASE} border border-[#0F2A22]/60 bg-transparent text-[#0F2A22] hover:border-[#0F2A22] hover:bg-[#0F2A22] hover:text-[#F6F3EE]`;
const BTN_OURO = `${BTN_BASE} border border-[#B08D46] bg-transparent text-[#F6F3EE] hover:bg-[#B08D46] hover:text-[#0B1A16]`;
const LINK_SETA = "inline-flex items-center gap-3 self-start text-[0.6875rem] font-medium uppercase tracking-[0.24em] text-[#0F2A22]";

function Rotulo({ children, claro = false, centro = false }: { children: React.ReactNode; claro?: boolean; centro?: boolean }) {
  return (
    <div className={`mb-7 flex items-center gap-4 ${centro ? "justify-center" : ""}`}>
      <span className="h-px w-10 bg-[#B08D46]" aria-hidden="true" />
      <span className={`text-[0.6875rem] font-medium uppercase tracking-[0.32em] ${claro ? "text-[#C9A86A]" : "text-[#9A7A3A]"}`}>
        {children}
      </span>
      {centro && <span className="h-px w-10 bg-[#B08D46]" aria-hidden="true" />}
    </div>
  );
}

export default async function Home({ params }: HomePageProps) {
  const { locale } = await params;
  const msgConsulta = MSG_CONSULTA_BY_LOCALE[locale] ?? MSG_CONSULTA_BY_LOCALE.pt;
  const msgConsultoria = MSG_CONSULTORIA_BY_LOCALE[locale] ?? MSG_CONSULTORIA_BY_LOCALE.pt;
  const msgSaude = MSG_SAUDE_BY_LOCALE[locale] ?? MSG_SAUDE_BY_LOCALE.pt;
  const text = HOME_TEXT_BY_LOCALE[locale] ?? HOME_TEXT_BY_LOCALE.pt;
  const localizedPracticeAreas =
    locale === "pt" ? practiceAreas : PRACTICE_AREAS_BY_LOCALE[locale] ?? practiceAreas;
  const localizedServiceHighlights =
    locale === "pt"
      ? serviceHighlights
      : SERVICE_HIGHLIGHTS_BY_LOCALE[locale] ?? serviceHighlights;
  const localizedProcessRows =
    locale === "pt" ? processRows : PROCESS_ROWS_BY_LOCALE[locale] ?? processRows;
  const localizedFaqs = locale === "pt" ? faqs : FAQS_BY_LOCALE[locale] ?? faqs;
  const localizedLegalAreas =
    locale === "pt" ? legalAreasSchema : LEGAL_AREAS_SCHEMA_BY_LOCALE[locale] ?? legalAreasSchema;
  const localizedSpecificServices =
    locale === "pt" ? specificServices : SPECIFIC_SERVICES_BY_LOCALE[locale] ?? specificServices;
  const homeSectionHashes = {
    services: getLocalizedHash("/", "services", locale),
    process: getLocalizedHash("/", "process", locale),
    firm: getLocalizedHash("/", "firm", locale),
    sectors: getLocalizedHash("/", "sectors", locale),
    faq: getLocalizedHash("/", "faq", locale),
  };
  const pageDescription = HOME_DESCRIPTION_BY_LOCALE[locale] ?? HOME_DESCRIPTION_BY_LOCALE.pt;
  const siteUrl = getSiteUrl();
  const legalServiceSchema = {
    "@context": "https://schema.org",
    "@type": ["LegalService", "LocalBusiness"],
    name: SITE_NAME,
    url: siteUrl,
    description: pageDescription,
    image: `${siteUrl}${SITE_OG_IMAGE}`,
    areaServed: "BR",
    availableLanguage: [SCHEMA_LANGUAGE_BY_LOCALE[locale]],
    serviceType: localizedLegalAreas,
    address: {
      "@type": "PostalAddress",
      addressCountry: "BR",
      addressRegion: "SP",
      addressLocality: "São Paulo",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: SCHEMA_LANGUAGE_LABEL_BY_LOCALE[locale],
    },
    employee: [
      {
        "@type": "Person",
        name: "Dr. Tiago Sales Fustinoni",
        jobTitle: "Advogado",
        description: "OAB/SP 395.178",
      },
      {
        "@type": "Person",
        name: "Dr. Eduardo Torres de Freitas",
        jobTitle: "Advogado",
        description: "OAB/SP 478.321",
      },
      {
        "@type": "Person",
        name: "Dra. Melina Carneiro Rizzo",
        jobTitle: "Advogada",
        description: "OAB/SP 391.137",
      },
      {
        "@type": "Person",
        name: "Dr. Marcio Eduardo Garcia Leite",
        jobTitle: "Advogado",
        description: "OAB/SP 257.464",
      },
    ],
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: localizedFaqs.map(item => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero (identidade oficial, 07/10/2026): Ponte Estaiada ao entardecer + véu verde.
          Cores em hex arbitrário: o hero é sempre escuro e o overlay de compat remapeia
          text-white/bg-white. */}
      <section className="relative flex min-h-[calc(100svh-5rem)] flex-col items-center justify-center overflow-hidden px-6 py-28 text-center sm:py-32">
        <Image
          src="/hero-ponte-estaiada.jpg"
          alt={text.heroImageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[93%_50%] md:object-center"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(11,26,22,0.8)_0%,rgba(11,26,22,0.58)_52%,rgba(11,26,22,0.4)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#0B1A16]" />

        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center">
          <div className="mb-7 text-[0.6875rem] font-medium uppercase tracking-[0.42em] text-[#C9A86A]">
            Fustinoni Advocacia
          </div>
          <div className="mb-10 h-px w-14 bg-[#B08D46]" aria-hidden="true" />

          <h1 className="mb-9 text-balance font-serif text-[2.1rem] leading-[1.12] tracking-[-0.015em] text-[#F6F3EE] sm:text-[3.4rem] md:text-[4rem] lg:text-[4.5rem]">
            {text.heroTitle}
          </h1>

          <p className="mx-auto mb-12 max-w-xl text-[0.975rem] leading-8 text-[#F6F3EE]/75 sm:text-[1.0625rem]">
            {text.heroDescription}
          </p>

          <WhatsAppCTAButton origem="pagina_principal"
            whatsappPhone={whatsappPhone}
            whatsappBaseMessage={msgConsulta}
            className={`${BTN_OURO} w-full max-w-xs sm:w-auto`}
          >
            {text.heroCta}
          </WhatsAppCTAButton>
        </div>

        <div className="absolute bottom-8 left-1/2 hidden h-16 w-px -translate-x-1/2 bg-gradient-to-b from-[#B08D46] to-transparent md:block" aria-hidden="true" />
      </section>

      {/* Faixa das frentes principais */}
      <div className="bg-[#0B1A16]">
        <ul className={`${WRAP} grid grid-cols-2 py-4 md:grid-cols-3 md:py-2 lg:grid-cols-6 lg:py-0`}>
          {localizedPracticeAreas.map(area => (
            <li
              key={area}
              className="flex items-center justify-center px-3 py-3 text-center font-serif text-[0.9rem] leading-snug text-[#F6F3EE]/80 lg:border-l lg:border-[#B08D46]/20 lg:py-7 lg:first:border-l-0"
            >
              {area}
            </li>
          ))}
        </ul>
      </div>

      {/* Equipe */}
      <section id={homeSectionHashes.services} className="scroll-mt-24 bg-[#F6F3EE] sm:scroll-mt-28">
        <div className={`${WRAP} ${SECAO}`}>
          <Rotulo>{text.teamLabel}</Rotulo>
          <h2 className={`${TITULO} max-w-3xl`}>{text.teamTitle}</h2>

          <div className="mt-16 grid grid-cols-1 border-t border-[#E3DDD1] sm:mt-20 sm:grid-cols-2 sm:gap-x-16 lg:gap-x-24">
            {localizedServiceHighlights.map((member, index) => {
              const [nome, oab] = member.title.split(/\s+[-–—]\s+/);
              return (
                <article key={member.title} className="border-b border-[#E3DDD1] py-10 sm:py-12">
                  <div className="mb-6 flex items-baseline justify-between gap-4">
                    <span className="font-serif text-sm tracking-[0.2em] text-[#B08D46]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {oab && (
                      <span className="text-[0.625rem] font-medium uppercase tracking-[0.22em] text-[#4F5A54]">{oab}</span>
                    )}
                  </div>
                  <h3 className="mb-4 font-serif text-[1.45rem] leading-snug text-[#14231D] sm:text-[1.6rem]">{nome}</h3>
                  <p className={TEXTO}>{member.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Escritório */}
      <section id={homeSectionHashes.firm} className="scroll-mt-24 bg-[#FFFDF9] sm:scroll-mt-28">
        <div className={`${WRAP} ${SECAO} grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24`}>
          <div>
            <Rotulo>{text.studioLabel}</Rotulo>
            <h2 className={TITULO}>{text.studioTitle}</h2>
            <p className={`${TEXTO} mt-8 max-w-lg`}>{text.studioDescription}</p>
            <ul className="mt-12 max-w-lg border-t border-[#E3DDD1]">
              {text.studioPillars.map(pilar => (
                <li key={pilar} className="flex items-center gap-4 border-b border-[#E3DDD1] py-4 text-[0.95rem] text-[#14231D]">
                  <span className="h-px w-5 shrink-0 bg-[#B08D46]" aria-hidden="true" />
                  {pilar}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mr-4 mb-4 sm:mr-6 sm:mb-6">
            <div className="absolute inset-0 translate-x-4 translate-y-4 border border-[#B08D46]/50 sm:translate-x-6 sm:translate-y-6" aria-hidden="true" />
            <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[5/6]">
              <Image
                src="/office-lounge.jpg"
                alt={text.studioImageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Modelos de atuação */}
      <section id={homeSectionHashes.process} className="scroll-mt-24 bg-[#F6F3EE] sm:scroll-mt-28">
        <div className={`${WRAP} ${SECAO}`}>
          <Rotulo>{text.processLabel}</Rotulo>
          <h2 className={`${TITULO} max-w-3xl`}>{text.processTitle}</h2>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:mt-20 md:grid-cols-2 lg:gap-8">
            <div className="flex flex-col border border-[#E3DDD1] bg-[#FFFDF9]">
              <div className="p-8 sm:p-10 lg:p-12">
                <h3 className="mb-4 font-serif text-[1.6rem] leading-snug text-[#14231D]">{text.consultingTitle}</h3>
                <p className={`${TEXTO} mb-10`}>{text.consultingDescription}</p>
                <WhatsAppCTAButton origem="pagina_principal"
                  whatsappPhone={whatsappPhone}
                  whatsappBaseMessage={msgConsultoria}
                  className={`${BTN_LINHA} w-full`}
                >
                  {text.consultingCta}
                </WhatsAppCTAButton>
              </div>
              <ul className="mt-auto border-t border-[#E3DDD1] px-8 sm:px-10 lg:px-12">
                {localizedProcessRows.map((label, index) => (
                  <li key={label} className="flex items-center justify-between gap-6 border-b border-[#E3DDD1] py-4 text-[0.9rem] last:border-b-0">
                    <span className={index < 5 ? "text-[#14231D]" : "text-[#4F5A54]/60"}>{label}</span>
                    {index < 5
                      ? <Check className="h-4 w-4 shrink-0 text-[#B08D46]" strokeWidth={1.5} />
                      : <Minus className="h-4 w-4 shrink-0 text-[#4F5A54]/40" strokeWidth={1.5} />}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col border border-[#0F2A22] bg-[#0F2A22]">
              <div className="p-8 sm:p-10 lg:p-12">
                <h3 className="mb-4 font-serif text-[1.6rem] leading-snug text-[#F6F3EE]">{text.fullActingTitle}</h3>
                <p className="mb-10 text-[0.95rem] leading-7 text-[#F6F3EE]/70">{text.fullActingDescription}</p>
                <WhatsAppCTAButton origem="pagina_principal"
                  whatsappPhone={whatsappPhone}
                  whatsappBaseMessage={msgConsulta}
                  className={`${BTN_OURO} w-full`}
                >
                  {text.fullActingCta}
                </WhatsAppCTAButton>
              </div>
              <ul className="mt-auto border-t border-[#F6F3EE]/10 px-8 sm:px-10 lg:px-12">
                {localizedProcessRows.map(label => (
                  <li key={label} className="flex items-center justify-between gap-6 border-b border-[#F6F3EE]/10 py-4 text-[0.9rem] text-[#F6F3EE]/85 last:border-b-0">
                    <span>{label}</span>
                    <Check className="h-4 w-4 shrink-0 text-[#C9A86A]" strokeWidth={1.5} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Áreas de atuação (bloco escuro) */}
      <section id={homeSectionHashes.sectors} className="scroll-mt-24 bg-[#0F2A22] sm:scroll-mt-28">
        <div className={`${WRAP} ${SECAO}`}>
          <Rotulo claro>{text.sectorsLabel}</Rotulo>
          <h2 className={`${TITULO} max-w-3xl text-[#F6F3EE]`}>{text.sectorsTitle}</h2>

          <div className="mt-16 grid grid-cols-2 border-t border-l border-[#F6F3EE]/10 sm:mt-20 md:grid-cols-3 lg:grid-cols-4">
            {localizedLegalAreas.map((area, index) => (
              <div
                key={area}
                className="group flex min-h-[8.5rem] flex-col justify-between border-r border-b border-[#F6F3EE]/10 p-5 transition-colors duration-300 hover:bg-[#F6F3EE]/[0.04] sm:min-h-[10.5rem] sm:p-7"
              >
                <span className="font-serif text-sm tracking-[0.2em] text-[#B08D46]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <span className="mb-4 block h-px w-6 bg-[#B08D46]/70 transition-all duration-300 group-hover:w-12" aria-hidden="true" />
                  <span className="font-serif text-[1.05rem] leading-snug text-[#F6F3EE] sm:text-[1.15rem]">{area}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços específicos */}
      <section id="specific-services" className="scroll-mt-24 bg-[#F6F3EE] sm:scroll-mt-28">
        <div className={`${WRAP} ${SECAO}`}>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end lg:gap-16">
            <div className="lg:col-span-7">
              <Rotulo>{text.specificServicesLabel}</Rotulo>
              <h2 className={TITULO}>{text.specificServicesTitle}</h2>
            </div>
            <p className={`${TEXTO} lg:col-span-5 lg:pb-2`}>{text.specificServicesDescription}</p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:mt-20 md:grid-cols-2 lg:gap-8">
            {localizedSpecificServices
              .filter(service => service.layoutType === "card")
              .map((service, index) => (
                <article
                  key={service.title}
                  className="group flex flex-col border border-[#E3DDD1] bg-[#FFFDF9] p-8 transition-colors duration-300 hover:border-[#B08D46]/60 sm:p-10"
                >
                  <span className="mb-8 font-serif text-sm tracking-[0.2em] text-[#B08D46]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mb-4 font-serif text-[1.45rem] leading-snug text-[#14231D] sm:text-[1.55rem]">{service.title}</h3>
                  <p className={`${TEXTO} mb-10 flex-1`}>{service.description}</p>

                  {service.href && !service.disabled ? (
                    <Link href={service.href as "/analise-credito" | "/fator-k"} className={LINK_SETA}>
                      <span className="border-b border-[#B08D46] pb-1">{service.ctaLabel}</span>
                      <span className="text-[#B08D46] transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
                    </Link>
                  ) : (
                    <span className="text-[0.6875rem] font-medium uppercase tracking-[0.24em] text-[#4F5A54]/60">
                      {service.ctaLabel}
                    </span>
                  )}
                </article>
              ))}
          </div>

          {localizedSpecificServices
            .filter(service => service.layoutType === "full_text")
            .map(service => (
              <article key={service.title} className="mt-24 border-t border-[#E3DDD1] pt-24 text-center sm:mt-28 sm:pt-28">
                <div className="mx-auto mb-8 h-px w-14 bg-[#B08D46]" aria-hidden="true" />
                <h3 className="mb-6 font-serif text-[1.9rem] leading-tight text-[#14231D] sm:text-[2.25rem]">{service.title}</h3>
                <p className={`${TEXTO} mx-auto max-w-2xl`}>{service.description}</p>
                {"subCards" in service && service.subCards && (
                  <div className="mt-14 grid grid-cols-1 gap-6 text-left md:grid-cols-2 lg:gap-8">
                    {service.subCards.map(sub => (
                      <div key={sub.title} className="flex flex-col justify-between border border-[#E3DDD1] bg-[#FFFDF9] p-8 sm:p-10">
                        <div>
                          <h4 className="mb-6 font-serif text-[1.35rem] leading-snug text-[#14231D]">{sub.title}</h4>
                          <ul className="mb-10 space-y-3">
                            {sub.bullets.map(bullet => (
                              <li key={bullet} className="flex items-start gap-3 text-[0.925rem] leading-7 text-[#4F5A54]">
                                <span className="mt-[0.85rem] h-px w-3 shrink-0 bg-[#B08D46]" aria-hidden="true" />
                                {bullet}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <WhatsAppCTAButton origem="pagina_principal"
                          whatsappPhone={whatsappPhone}
                          whatsappBaseMessage={msgSaude}
                          className={`${BTN_LINHA} w-full`}
                        >
                          {sub.ctaLabel}
                        </WhatsAppCTAButton>
                      </div>
                    ))}
                  </div>
                )}
              </article>
            ))}
        </div>
      </section>

      {/* === Bloco Publicações (S33+) — só em pt === */}
      {locale === "pt" && <PublicacoesHomeBlock />}

      {/* Perguntas frequentes */}
      <section id={homeSectionHashes.faq} className="scroll-mt-24 bg-[#F6F3EE] sm:scroll-mt-28">
        <div className={`${WRAP} ${SECAO} grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20`}>
          <div className="lg:sticky lg:top-32 lg:col-span-5 lg:self-start">
            <Rotulo>FAQ</Rotulo>
            <h2 className={`${TITULO} max-w-md`}>{text.faqTitle}</h2>
          </div>

          <div className="lg:col-span-7">
            <Accordion type="single" collapsible className="w-full border-t border-[#E3DDD1]">
              {localizedFaqs.map((item, index) => (
                <AccordionItem key={item.question} value={`item-${index}`} className="border-b border-[#E3DDD1]">
                  <AccordionTrigger className="py-7 text-left font-serif text-[1.1rem] font-normal leading-snug text-[#14231D] hover:no-underline sm:text-[1.2rem]">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="pr-8 pb-7 text-[0.95rem] leading-7 text-[#4F5A54]">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Convite final (bloco escuro sobre a foto do escritório) */}
      <section className="relative overflow-hidden bg-[#0B1A16]">
        <Image
          src="/office-corredor.jpg"
          alt={text.heroImageAlt}
          fill
          sizes="100vw"
          className="object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1A16]/70 via-[#0B1A16]/55 to-[#0B1A16]/90" />

        <div className={`${WRAP} relative py-28 text-center sm:py-36`}>
          <Rotulo claro centro>{text.finalLabel}</Rotulo>
          <h2 className="mx-auto max-w-3xl text-balance font-serif text-[2.1rem] leading-[1.15] tracking-[-0.012em] text-[#F6F3EE] sm:text-[2.75rem] lg:text-[3.25rem]">
            {text.finalTitle}
          </h2>
          <p className="mx-auto mt-8 mb-12 max-w-xl text-[0.975rem] leading-8 text-[#F6F3EE]/70">
            {text.finalDescription}
          </p>
          <WhatsAppCTAButton origem="pagina_principal"
            whatsappPhone={whatsappPhone}
            whatsappBaseMessage={msgConsulta}
            className={`${BTN_OURO} w-full max-w-xs sm:w-auto`}
          >
            {text.heroCta}
          </WhatsAppCTAButton>
        </div>
      </section>
    </>
  );
}
