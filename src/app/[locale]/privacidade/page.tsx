import type { Metadata } from "next";

import { type AppLocale } from "@/i18n/routing";
import { OG_LOCALE_BY_APP_LOCALE } from "@/lib/i18n";
import { getAlternatesLanguages, getLocalizedUrl } from "@/lib/seo";
import { SITE_NAME, SITE_OG_IMAGE } from "@/lib/site";

const pagePath = "/privacidade";

type PrivacySection = { heading: string; paragraphs: string[]; items?: string[] };
type PrivacyContent = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  lastUpdated: string;
  intro: string[];
  sections: PrivacySection[];
};

const CONTENT: Record<AppLocale, PrivacyContent> = {
  "pt": {
    "metaTitle": "Política de Privacidade | FUSTINONI ADVOCACIA",
    "metaDescription": "Saiba como o escritório FUSTINONI ADVOCACIA trata seus dados pessoais, quais são seus direitos e como exercê-los, nos termos da LGPD.",
    "eyebrow": "Privacidade e proteção de dados",
    "title": "Política de Privacidade",
    "lastUpdated": "Última atualização: 17 de junho de 2026",
    "intro": [
      "O escritório FUSTINONI ADVOCACIA valoriza a privacidade e a proteção dos dados pessoais de seus visitantes, potenciais clientes e assinantes da newsletter. Esta Política de Privacidade descreve, de forma clara e transparente, quais dados pessoais coletamos por meio do site www.escritoriofustinoni.com.br, para quais finalidades os utilizamos, com quem os compartilhamos e quais direitos você possui, em conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD, Lei n.º 13.709/2018), o Marco Civil da Internet (Lei n.º 12.965/2014) e, quando aplicável, o Código de Defesa do Consumidor (Lei n.º 8.078/1990).",
      "Ao utilizar nosso site, você reconhece que leu e compreendeu as condições aqui descritas. Caso tenha dúvidas ou queira exercer seus direitos, entre em contato pelo e-mail contato@fustinoni.adv.br."
    ],
    "sections": [
      {
        "heading": "1. Controlador e encarregado pelo tratamento de dados",
        "paragraphs": [
          "O controlador responsável pelo tratamento dos seus dados pessoais é a T. S. FUSTINONI SOCIEDADE INDIVIDUAL DE ADVOCACIA (FUSTINONI ADVOCACIA), inscrita no CNPJ sob o n.º 54.489.975/0001-54, com sede na Rua Amaro de Morais, 233, anexo 231, Vila Sabrina, São Paulo/SP, CEP 02138-070.",
          "O encarregado pelo tratamento de dados (DPO) é o responsável pelo atendimento de titulares e pelo cumprimento das obrigações previstas na LGPD. Para exercer seus direitos ou esclarecer dúvidas sobre o tratamento de seus dados, entre em contato pelo e-mail: contato@fustinoni.adv.br."
        ],
        "items": []
      },
      {
        "heading": "2. Dados pessoais tratados e suas finalidades",
        "paragraphs": [
          "Tratamos apenas os dados necessários para as finalidades específicas indicadas a seguir. Não coletamos dados além do descrito nesta Política."
        ],
        "items": [
          "Formulário de contato e solicitação: coletamos nome, telefone, e-mail, breve descrição do caso (campo de texto livre), idioma de navegação e origem da visita (campanha ou anúncio). Esses dados são usados para responder ao contato, realizar triagem inicial e conduzir procedimentos preliminares para eventual prestação de serviços advocatícios. O titular não deve incluir mais informações do que o estritamente necessário; caso inclua dados sensíveis voluntariamente, eles serão tratados com o mesmo cuidado e sigilo, com fundamento nos artigos 7.º, V e IX, e 11 da LGPD.",
          "Newsletter jurídica: coletamos e-mail, nome (opcional), áreas do Direito de interesse e o registro do consentimento. A finalidade é o envio periódico de conteúdo jurídico informativo exclusivamente a quem optou por recebê-lo, mediante dupla confirmação (double opt-in). O descadastro pode ser solicitado a qualquer momento pelo link presente em todos os e-mails.",
          "Navegação e cookies: por meio das ferramentas Google Ads (gtag), coletamos cookies, identificadores de sessão e conversão, endereço IP e dados técnicos do dispositivo e do navegador. A finalidade é exclusivamente medir a eficácia de campanhas e conversões. O escritório não realiza remarketing nem direciona anúncios com base em características pessoais ou situações sensíveis do usuário.",
          "Botões de WhatsApp: ao clicar nos botões de WhatsApp presentes no site, você é redirecionado ao aplicativo da Meta Platforms. A partir desse redirecionamento, a comunicação passa a ser regida também pela Política de Privacidade do WhatsApp, e os dados trocados nesse canal estão sujeitos ao controle da Meta Platforms, fora do escopo de controle direto deste escritório."
        ]
      },
      {
        "heading": "3. Bases legais do tratamento (LGPD)",
        "paragraphs": [
          "Todo tratamento de dados realizado por este escritório fundamenta-se em uma das bases legais previstas na LGPD (art. 7.º e art. 11). As bases aplicáveis a cada tipo de dado são as seguintes:"
        ],
        "items": [
          "Dados do formulário de contato e solicitação: execução de procedimentos preliminares relacionados a eventual contrato, a pedido do próprio titular (art. 7.º, V); e legítimo interesse do escritório para responder a consultas, conduzir triagem inicial e gerenciar sua atividade advocatícia (art. 7.º, IX, observado o art. 10 da LGPD). O exercício regular de direitos em processo judicial, administrativo ou arbitral (art. 7.º, VI) pode ser invocado quando o tratamento decorrer de demanda judicial ou extrajudicial já instaurada.",
          "Newsletter: consentimento livre, informado, inequívoco e específico do titular, prestado por meio do processo de dupla confirmação (art. 7.º, I), revogável a qualquer tempo.",
          "Cookies de medição e publicidade (Google): consentimento do titular (art. 7.º, I), que pode ser gerenciado ou revogado nas configurações do navegador ou pelas ferramentas de opt-out do Google.",
          "Dados sensíveis eventualmente informados de forma voluntária pelo titular no formulário: consentimento específico e destacado do titular (art. 11, I); ou, quando o tratamento for indispensável ao exercício regular de direito pelo escritório, a hipótese do art. 11, II, alínea 'd', da LGPD.",
          "Cumprimento de obrigações legais e regulatórias, inclusive as inerentes ao exercício da advocacia (Estatuto da OAB, regulamentos do CFE/OAB e demais normas aplicáveis): obrigação legal (art. 7.º, II)."
        ]
      },
      {
        "heading": "4. Cookies e tecnologias de rastreamento",
        "paragraphs": [
          "Nosso site utiliza dois tipos de cookies:",
          "Cookies estritamente necessários: indispensáveis ao funcionamento básico do site, como segurança, controle de sessão e preferências de idioma. Não requerem consentimento, pois não envolvem coleta para fins de marketing ou perfilamento.",
          "Cookies de medição e publicidade: são os cookies do Google (Google Ads (gtag)), que coletam informações sobre suas interações com o site para medir o desempenho de campanhas e conversões. Esses cookies são ativados mediante o seu consentimento. Você pode gerenciá-los, limitá-los ou recusá-los a qualquer momento nas configurações de privacidade do seu navegador ou por meio das ferramentas de opt-out disponibilizadas pelo Google (https://adssettings.google.com). A recusa aos cookies de medição não impede o uso do site."
        ],
        "items": []
      },
      {
        "heading": "5. Compartilhamento de dados com terceiros",
        "paragraphs": [
          "O escritório não vende, não cede e não compartilha dados pessoais para fins comerciais de terceiros. O compartilhamento ocorre exclusivamente com os operadores listados abaixo, na medida estritamente necessária para a prestação de seus serviços, e sempre sob obrigação contratual de confidencialidade e conformidade com a legislação de proteção de dados aplicável:"
        ],
        "items": [
          "Vercel: hospedagem e entrega do site; fornece tambem metricas de uso agregadas e anonimizadas (Vercel Analytics), sem cookies de identificacao pessoal.",
          "Cloudflare: segurança, proteção contra ataques e entrega de conteúdo (CDN). A Cloudflare atua como suboperadora no processamento do tráfego do site, incluindo o endereço IP dos visitantes, com servidores localizados fora do Brasil.",
          "Google: medição de campanhas e conversões por meio do Google Ads.",
          "Supabase: armazenamento dos dados provenientes do formulário de contato.",
          "Resend: plataforma de envio dos e-mails da newsletter.",
          "Meta Platforms / WhatsApp: quando o visitante opta por iniciar uma conversa pelo botão de WhatsApp disponível no site, os dados da conversa ficam sujeitos às políticas da Meta Platforms."
        ]
      },
      {
        "heading": "6. Transferência internacional de dados",
        "paragraphs": [
          "Os operadores listados na seção anterior podem processar dados pessoais em servidores localizados fora do Brasil, incluindo os Estados Unidos da América. Essas transferências internacionais são realizadas com fundamento nas salvaguardas previstas no art. 33 da LGPD, notadamente por meio de cláusulas contratuais padrão e/ou com base na adequação do nível de proteção reconhecida pela Autoridade Nacional de Proteção de Dados (ANPD).",
          "O escritório adota diligência na seleção de seus operadores e exige, contratualmente, que os dados sejam tratados com nível de proteção equivalente ao exigido pela legislação brasileira."
        ],
        "items": []
      },
      {
        "heading": "7. Retenção e eliminação dos dados",
        "paragraphs": [
          "Os dados pessoais são mantidos pelo tempo necessário ao cumprimento das finalidades para as quais foram coletados, observados os prazos legais aplicáveis, inclusive as obrigações de guarda documental inerentes ao exercício da advocacia.",
          "Dados do formulário de contato que não resultem em contratação de serviços são eliminados ou anonimizados quando deixam de ser necessários para as finalidades descritas. Dados da newsletter são mantidos até o descadastro pelo titular. Dados de navegação e cookies obedecem às políticas de retenção dos respectivos operadores (Google, Cloudflare e Vercel)."
        ],
        "items": []
      },
      {
        "heading": "8. Direitos do titular de dados (art. 18 da LGPD)",
        "paragraphs": [
          "Você, como titular de dados pessoais, possui os seguintes direitos, que podem ser exercidos a qualquer momento mediante solicitação pelo e-mail contato@fustinoni.adv.br:"
        ],
        "items": [
          "Confirmação da existência de tratamento dos seus dados pessoais.",
          "Acesso aos dados pessoais que mantemos sobre você.",
          "Correção de dados incompletos, inexatos ou desatualizados.",
          "Anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com a LGPD.",
          "Portabilidade dos seus dados a outro fornecedor de serviço ou produto, mediante requisição expressa e observada a regulamentação da ANPD.",
          "Eliminação dos dados tratados com base no seu consentimento.",
          "Informação sobre com quais entidades públicas e privadas compartilhamos seus dados.",
          "Informação sobre a possibilidade de não fornecer o consentimento e sobre as consequências dessa recusa.",
          "Revogação do consentimento a qualquer tempo, sem prejuízo da licitude do tratamento realizado anteriormente com base nessa mesma base legal.",
          "Direito de peticionar à Autoridade Nacional de Proteção de Dados (ANPD) em caso de descumprimento da legislação de proteção de dados."
        ]
      },
      {
        "heading": "9. Como exercer seus direitos",
        "paragraphs": [
          "Para exercer qualquer dos direitos listados acima, envie uma solicitação para contato@fustinoni.adv.br, identificando-se e descrevendo o direito que deseja exercer. Responderemos no prazo de até 15 (quinze) dias, conforme previsto no art. 18, § 3.º, da LGPD.",
          "Podemos solicitar informações adicionais para confirmar sua identidade antes de processar a requisição, como medida de segurança e para proteção do próprio titular."
        ],
        "items": []
      },
      {
        "heading": "10. Segurança da informação",
        "paragraphs": [
          "Adotamos medidas técnicas e administrativas adequadas para proteger os dados pessoais contra acessos não autorizados, situações acidentais ou ilícitas de destruição, perda, alteração, comunicação ou difusão, em conformidade com o art. 46 da LGPD.",
          "Em caso de incidente de segurança que possa acarretar risco ou dano relevante aos titulares, comunicaremos o fato à ANPD e aos titulares afetados no prazo legal, na forma do art. 48 da LGPD e da Resolução CD/ANPD n.º 15/2024, com as informações necessárias sobre a natureza dos dados envolvidos, os riscos relacionados e as medidas adotadas para mitigação."
        ],
        "items": []
      },
      {
        "heading": "11. Legislação aplicável e foro",
        "paragraphs": [
          "Esta Política de Privacidade é regida pela LGPD (Lei n.º 13.709/2018), pelo Marco Civil da Internet (Lei n.º 12.965/2014) e, quando aplicável, pelo Código de Defesa do Consumidor (Lei n.º 8.078/1990), sem prejuízo de demais normas regulatórias pertinentes, incluindo as resoluções e orientações da ANPD.",
          "Eventuais controvérsias serão submetidas ao foro da comarca do domicílio do escritório FUSTINONI ADVOCACIA, salvo disposição legal em contrário."
        ],
        "items": []
      },
      {
        "heading": "12. Alterações nesta Política",
        "paragraphs": [
          "Esta Política de Privacidade pode ser atualizada periodicamente para refletir mudanças nos serviços oferecidos, na legislação aplicável ou nas práticas de tratamento de dados. A versão vigente é sempre a publicada nesta página, identificada pela data de última atualização indicada no início do documento.",
          "Recomendamos que você consulte esta Política regularmente. Alterações relevantes serão comunicadas de forma adequada, inclusive aos assinantes da newsletter quando o tratamento relacionado a esses dados for afetado."
        ],
        "items": []
      }
    ]
  },
  "en": {
    "metaTitle": "Privacy Policy | FUSTINONI ADVOCACIA",
    "metaDescription": "Learn how the law firm FUSTINONI ADVOCACIA handles your personal data, what your rights are, and how to exercise them, in accordance with the LGPD.",
    "eyebrow": "Privacy and data protection",
    "title": "Privacy Policy",
    "lastUpdated": "Last updated: June 17, 2026",
    "intro": [
      "The law firm FUSTINONI ADVOCACIA values the privacy and protection of the personal data of its visitors, prospective clients, and newsletter subscribers. This Privacy Policy describes, in a clear and transparent manner, what personal data we collect through the website www.escritoriofustinoni.com.br, the purposes for which we use it, with whom we share it, and what rights you have, in compliance with the Brazilian General Data Protection Law (Lei Geral de Proteção de Dados Pessoais - LGPD, Law No. 13.709/2018), the Brazilian Internet Civil Framework (Marco Civil da Internet, Law No. 12.965/2014) and, where applicable, the Consumer Protection Code (Código de Defesa do Consumidor, Law No. 8.078/1990).",
      "By using our website, you acknowledge that you have read and understood the conditions described herein. Should you have any questions or wish to exercise your rights, please contact us at contato@fustinoni.adv.br."
    ],
    "sections": [
      {
        "heading": "1. Data controller and data protection officer",
        "paragraphs": [
          "The controller responsible for the processing of your personal data is T. S. FUSTINONI SOCIEDADE INDIVIDUAL DE ADVOCACIA (FUSTINONI ADVOCACIA), registered under CNPJ No. 54.489.975/0001-54, with its registered office at Rua Amaro de Morais, 233, anexo 231, Vila Sabrina, São Paulo/SP, CEP 02138-070.",
          "The data protection officer (DPO) is responsible for handling data subject requests and for ensuring compliance with the obligations set forth in the LGPD. To exercise your rights or clarify any questions about the processing of your data, please contact us at: contato@fustinoni.adv.br."
        ],
        "items": []
      },
      {
        "heading": "2. Personal data processed and the purposes thereof",
        "paragraphs": [
          "We process only the data necessary for the specific purposes indicated below. We do not collect data beyond what is described in this Policy."
        ],
        "items": [
          "Contact and request form: we collect name, telephone number, email, a brief description of the matter (free-text field), browsing language, and the source of the visit (campaign or advertisement). This data is used to respond to the inquiry, conduct an initial screening, and carry out preliminary procedures for the eventual provision of legal services. The data subject should not include more information than strictly necessary; should the data subject voluntarily include sensitive data, it will be processed with the same care and confidentiality, on the basis of Articles 7, V and IX, and 11 of the LGPD.",
          "Legal newsletter: we collect email, name (optional), areas of law of interest, and the record of consent. The purpose is to periodically send informative legal content exclusively to those who have opted to receive it, by means of double confirmation (double opt-in). Unsubscription may be requested at any time through the link present in all emails.",
          "Browsing and cookies: through the Google Ads (gtag) tools, we collect cookies, session and conversion identifiers, IP address, and technical data of the device and browser. The purpose is exclusively to measure the effectiveness of campaigns and conversions. The firm does not engage in remarketing or target advertisements based on personal characteristics or sensitive situations of the user.",
          "WhatsApp buttons: by clicking on the WhatsApp buttons present on the website, you are redirected to Meta Platforms' application. From that redirection onward, the communication also becomes governed by WhatsApp's Privacy Policy, and the data exchanged through that channel is subject to the control of Meta Platforms, outside the scope of this firm's direct control."
        ]
      },
      {
        "heading": "3. Legal bases for processing (LGPD)",
        "paragraphs": [
          "All data processing carried out by this firm is based on one of the legal bases provided for in the LGPD (Art. 7 and Art. 11). The bases applicable to each type of data are as follows:"
        ],
        "items": [
          "Contact and request form data: performance of preliminary procedures relating to an eventual contract, at the request of the data subject (Art. 7, V); and the firm's legitimate interest in responding to inquiries, conducting initial screening, and managing its legal practice (Art. 7, IX, subject to Art. 10 of the LGPD). The regular exercise of rights in judicial, administrative, or arbitration proceedings (Art. 7, VI) may be invoked when the processing arises from a judicial or extrajudicial demand already initiated.",
          "Newsletter: the data subject's free, informed, unequivocal, and specific consent, provided through the double-confirmation process (Art. 7, I), revocable at any time.",
          "Measurement and advertising cookies (Google): the data subject's consent (Art. 7, I), which may be managed or revoked in the browser settings or through Google's opt-out tools.",
          "Sensitive data that may be voluntarily provided by the data subject in the form: the data subject's specific and highlighted consent (Art. 11, I); or, where the processing is indispensable for the firm's regular exercise of a right, the hypothesis of Art. 11, II, item 'd', of the LGPD.",
          "Compliance with legal and regulatory obligations, including those inherent to the practice of law (the OAB Statute, CFE/OAB regulations, and other applicable rules): legal obligation (Art. 7, II)."
        ]
      },
      {
        "heading": "4. Cookies and tracking technologies",
        "paragraphs": [
          "Our website uses two types of cookies:",
          "Strictly necessary cookies: indispensable to the basic functioning of the website, such as security, session control, and language preferences. They do not require consent, as they do not involve collection for marketing or profiling purposes.",
          "Measurement and advertising cookies: these are Google's cookies (Google Ads (gtag)), which collect information about your interactions with the website to measure the performance of campaigns and conversions. These cookies are activated upon your consent. You may manage, limit, or refuse them at any time in your browser's privacy settings or through the opt-out tools made available by Google (https://adssettings.google.com). Refusal of measurement cookies does not prevent the use of the website."
        ],
        "items": []
      },
      {
        "heading": "5. Data sharing with third parties",
        "paragraphs": [
          "The firm does not sell, assign, or share personal data for the commercial purposes of third parties. Sharing occurs exclusively with the processors listed below, to the extent strictly necessary for the provision of their services, and always under a contractual obligation of confidentiality and compliance with the applicable data protection legislation:"
        ],
        "items": [
          "Vercel: hosting and delivery of the website; it also provides aggregated, anonymized usage metrics (Vercel Analytics) without personal-identification cookies.",
          "Cloudflare: security, protection against attacks, and content delivery (CDN). Cloudflare acts as a sub-processor in handling the website's traffic, including visitors' IP addresses, with servers located outside Brazil.",
          "Google: measurement of campaigns and conversions through Google Ads.",
          "Supabase: storage of the data originating from the contact form.",
          "Resend: platform for sending the newsletter emails.",
          "Meta Platforms / WhatsApp: when the visitor chooses to initiate a conversation through the WhatsApp button available on the website, the conversation data becomes subject to Meta Platforms' policies."
        ]
      },
      {
        "heading": "6. International data transfers",
        "paragraphs": [
          "The processors listed in the previous section may process personal data on servers located outside Brazil, including the United States of America. These international transfers are carried out on the basis of the safeguards provided for in Art. 33 of the LGPD, notably through standard contractual clauses and/or based on the adequacy of the level of protection recognized by the National Data Protection Authority (ANPD).",
          "The firm exercises due diligence in selecting its processors and contractually requires that the data be processed with a level of protection equivalent to that required by Brazilian legislation."
        ],
        "items": []
      },
      {
        "heading": "7. Data retention and deletion",
        "paragraphs": [
          "Personal data is retained for as long as necessary to fulfill the purposes for which it was collected, subject to the applicable legal time limits, including the document retention obligations inherent to the practice of law.",
          "Contact form data that does not result in the engagement of services is deleted or anonymized when it is no longer necessary for the described purposes. Newsletter data is retained until the data subject unsubscribes. Browsing data and cookies are subject to the retention policies of the respective processors (Google, Cloudflare, and Vercel)."
        ],
        "items": []
      },
      {
        "heading": "8. Rights of the data subject (Art. 18 of the LGPD)",
        "paragraphs": [
          "You, as a personal data subject, have the following rights, which may be exercised at any time by submitting a request to contato@fustinoni.adv.br:"
        ],
        "items": [
          "Confirmation of the existence of processing of your personal data.",
          "Access to the personal data we hold about you.",
          "Correction of incomplete, inaccurate, or outdated data.",
          "Anonymization, blocking, or deletion of unnecessary or excessive data or data processed in non-compliance with the LGPD.",
          "Portability of your data to another service or product provider, upon express request and subject to the regulations of the ANPD.",
          "Deletion of data processed on the basis of your consent.",
          "Information about the public and private entities with which we share your data.",
          "Information about the possibility of not providing consent and about the consequences of such refusal.",
          "Revocation of consent at any time, without prejudice to the lawfulness of the processing previously carried out on that same legal basis.",
          "The right to file a complaint with the National Data Protection Authority (ANPD) in the event of non-compliance with data protection legislation."
        ]
      },
      {
        "heading": "9. How to exercise your rights",
        "paragraphs": [
          "To exercise any of the rights listed above, send a request to contato@fustinoni.adv.br, identifying yourself and describing the right you wish to exercise. We will respond within up to 15 (fifteen) days, as provided for in Art. 18, § 3, of the LGPD.",
          "We may request additional information to confirm your identity before processing the request, as a security measure and for the protection of the data subject."
        ],
        "items": []
      },
      {
        "heading": "10. Information security",
        "paragraphs": [
          "We adopt appropriate technical and administrative measures to protect personal data against unauthorized access and accidental or unlawful destruction, loss, alteration, communication, or dissemination, in compliance with Art. 46 of the LGPD.",
          "In the event of a security incident that may result in significant risk or harm to data subjects, we will report the matter to the ANPD and to the affected data subjects within the legal time limit, in accordance with Art. 48 of the LGPD and ANPD Board Resolution No. 15/2024, with the necessary information regarding the nature of the data involved, the related risks, and the measures adopted for mitigation."
        ],
        "items": []
      },
      {
        "heading": "11. Applicable law and jurisdiction",
        "paragraphs": [
          "This Privacy Policy is governed by the LGPD (Law No. 13.709/2018), the Brazilian Internet Civil Framework (Law No. 12.965/2014) and, where applicable, the Consumer Protection Code (Law No. 8.078/1990), without prejudice to other relevant regulatory rules, including the resolutions and guidelines of the ANPD.",
          "Any disputes will be submitted to the jurisdiction of the judicial district of the domicile of the law firm FUSTINONI ADVOCACIA, unless otherwise provided by law."
        ],
        "items": []
      },
      {
        "heading": "12. Changes to this Policy",
        "paragraphs": [
          "This Privacy Policy may be updated periodically to reflect changes in the services offered, in the applicable legislation, or in data processing practices. The version in force is always the one published on this page, identified by the date of last update indicated at the beginning of the document.",
          "We recommend that you review this Policy regularly. Significant changes will be communicated in an appropriate manner, including to newsletter subscribers when the processing related to that data is affected."
        ],
        "items": []
      }
    ]
  },
  "es": {
    "metaTitle": "Política de Privacidad | FUSTINONI ADVOCACIA",
    "metaDescription": "Conozca cómo el despacho FUSTINONI ADVOCACIA trata sus datos personales, cuáles son sus derechos y cómo ejercerlos, en los términos de la LGPD.",
    "eyebrow": "Privacidad y protección de datos",
    "title": "Política de Privacidad",
    "lastUpdated": "Última actualización: 17 de junio de 2026",
    "intro": [
      "El despacho FUSTINONI ADVOCACIA valora la privacidad y la protección de los datos personales de sus visitantes, potenciales clientes y suscriptores del boletín informativo. Esta Política de Privacidad describe, de forma clara y transparente, qué datos personales recopilamos a través del sitio web www.escritoriofustinoni.com.br, para qué finalidades los utilizamos, con quién los compartimos y qué derechos posee usted, de conformidad con la Lei Geral de Proteção de Dados Pessoais (Ley General de Protección de Datos Personales (LGPD), Ley n.º 13.709/2018), el Marco Civil de Internet (Ley n.º 12.965/2014) y, cuando corresponda, el Código de Defensa del Consumidor (Ley n.º 8.078/1990).",
      "Al utilizar nuestro sitio web, usted reconoce que ha leído y comprendido las condiciones aquí descritas. En caso de tener dudas o desear ejercer sus derechos, póngase en contacto a través del correo electrónico contato@fustinoni.adv.br."
    ],
    "sections": [
      {
        "heading": "1. Responsable y encargado del tratamiento de datos",
        "paragraphs": [
          "El responsable del tratamiento de sus datos personales es T. S. FUSTINONI SOCIEDADE INDIVIDUAL DE ADVOCACIA (FUSTINONI ADVOCACIA), inscrita en el CNPJ bajo el n.º 54.489.975/0001-54, con sede en Rua Amaro de Morais, 233, anexo 231, Vila Sabrina, São Paulo/SP, CEP 02138-070.",
          "El encargado del tratamiento de datos (DPO) es el responsable de la atención a los titulares y del cumplimiento de las obligaciones previstas en la LGPD. Para ejercer sus derechos o aclarar dudas sobre el tratamiento de sus datos, póngase en contacto a través del correo electrónico: contato@fustinoni.adv.br."
        ],
        "items": []
      },
      {
        "heading": "2. Datos personales tratados y sus finalidades",
        "paragraphs": [
          "Tratamos únicamente los datos necesarios para las finalidades específicas indicadas a continuación. No recopilamos datos más allá de lo descrito en esta Política."
        ],
        "items": [
          "Formulario de contacto y solicitud: recopilamos nombre, teléfono, correo electrónico, breve descripción del caso (campo de texto libre), idioma de navegación y origen de la visita (campaña o anuncio). Estos datos se utilizan para responder al contacto, realizar una evaluación inicial y llevar a cabo procedimientos preliminares para una eventual prestación de servicios jurídicos. El titular no debe incluir más información que la estrictamente necesaria; en caso de incluir datos sensibles de forma voluntaria, estos serán tratados con el mismo cuidado y confidencialidad, con fundamento en los artículos 7.º, V y IX, y 11 de la LGPD.",
          "Boletín jurídico: recopilamos correo electrónico, nombre (opcional), áreas del Derecho de interés y el registro del consentimiento. La finalidad es el envío periódico de contenido jurídico informativo exclusivamente a quienes optaron por recibirlo, mediante doble confirmación (double opt-in). La baja puede solicitarse en cualquier momento a través del enlace presente en todos los correos electrónicos.",
          "Navegación y cookies: a través de las herramientas Google Ads (gtag), recopilamos cookies, identificadores de sesión y conversión, dirección IP y datos técnicos del dispositivo y del navegador. La finalidad es exclusivamente medir la eficacia de campañas y conversiones. El despacho no realiza remarketing ni dirige anuncios con base en características personales o situaciones sensibles del usuario.",
          "Botones de WhatsApp: al hacer clic en los botones de WhatsApp presentes en el sitio web, usted es redirigido a la aplicación de Meta Platforms. A partir de esa redirección, la comunicación pasa a regirse también por la Política de Privacidad de WhatsApp, y los datos intercambiados en ese canal están sujetos al control de Meta Platforms, fuera del ámbito de control directo de este despacho."
        ]
      },
      {
        "heading": "3. Bases legales del tratamiento (LGPD)",
        "paragraphs": [
          "Todo tratamiento de datos realizado por este despacho se fundamenta en una de las bases legales previstas en la LGPD (art. 7.º y art. 11). Las bases aplicables a cada tipo de dato son las siguientes:"
        ],
        "items": [
          "Datos del formulario de contacto y solicitud: ejecución de procedimientos preliminares relacionados con un eventual contrato, a petición del propio titular (art. 7.º, V); e interés legítimo del despacho para responder a consultas, realizar la evaluación inicial y gestionar su actividad jurídica (art. 7.º, IX, observado el art. 10 de la LGPD). El ejercicio regular de derechos en proceso judicial, administrativo o arbitral (art. 7.º, VI) puede invocarse cuando el tratamiento derive de una demanda judicial o extrajudicial ya iniciada.",
          "Boletín informativo: consentimiento libre, informado, inequívoco y específico del titular, otorgado mediante el proceso de doble confirmación (art. 7.º, I), revocable en cualquier momento.",
          "Cookies de medición y publicidad (Google): consentimiento del titular (art. 7.º, I), que puede gestionarse o revocarse en la configuración del navegador o mediante las herramientas de exclusión (opt-out) de Google.",
          "Datos sensibles eventualmente informados de forma voluntaria por el titular en el formulario: consentimiento específico y destacado del titular (art. 11, I); o, cuando el tratamiento sea indispensable para el ejercicio regular de un derecho por parte del despacho, el supuesto del art. 11, II, letra 'd', de la LGPD.",
          "Cumplimiento de obligaciones legales y regulatorias, incluidas las inherentes al ejercicio de la abogacía (Estatuto de la OAB, reglamentos del CFE/OAB y demás normas aplicables): obligación legal (art. 7.º, II)."
        ]
      },
      {
        "heading": "4. Cookies y tecnologías de seguimiento",
        "paragraphs": [
          "Nuestro sitio web utiliza dos tipos de cookies:",
          "Cookies estrictamente necesarias: indispensables para el funcionamiento básico del sitio, como seguridad, control de sesión y preferencias de idioma. No requieren consentimiento, ya que no implican recopilación con fines de marketing o elaboración de perfiles.",
          "Cookies de medición y publicidad: son las cookies de Google (Google Ads (gtag)), que recopilan información sobre sus interacciones con el sitio web para medir el rendimiento de campañas y conversiones. Estas cookies se activan mediante su consentimiento. Usted puede gestionarlas, limitarlas o rechazarlas en cualquier momento en la configuración de privacidad de su navegador o mediante las herramientas de exclusión (opt-out) facilitadas por Google (https://adssettings.google.com). El rechazo de las cookies de medición no impide el uso del sitio web."
        ],
        "items": []
      },
      {
        "heading": "5. Compartición de datos con terceros",
        "paragraphs": [
          "El despacho no vende, no cede y no comparte datos personales con fines comerciales de terceros. La compartición se produce exclusivamente con los encargados del tratamiento enumerados a continuación, en la medida estrictamente necesaria para la prestación de sus servicios, y siempre bajo obligación contractual de confidencialidad y cumplimiento de la legislación de protección de datos aplicable:"
        ],
        "items": [
          "Vercel: alojamiento y entrega del sitio web; tambien proporciona metricas de uso agregadas y anonimizadas (Vercel Analytics), sin cookies de identificacion personal.",
          "Cloudflare: seguridad, protección contra ataques y entrega de contenido (CDN). Cloudflare actúa como subencargada del tratamiento del tráfico del sitio web, incluida la dirección IP de los visitantes, con servidores ubicados fuera de Brasil.",
          "Google: medición de campañas y conversiones a través de Google Ads.",
          "Supabase: almacenamiento de los datos provenientes del formulario de contacto.",
          "Resend: plataforma de envío de los correos electrónicos del boletín informativo.",
          "Meta Platforms / WhatsApp: cuando el visitante opta por iniciar una conversación a través del botón de WhatsApp disponible en el sitio web, los datos de la conversación quedan sujetos a las políticas de Meta Platforms."
        ]
      },
      {
        "heading": "6. Transferencia internacional de datos",
        "paragraphs": [
          "Los encargados del tratamiento enumerados en la sección anterior pueden procesar datos personales en servidores ubicados fuera de Brasil, incluidos los Estados Unidos de América. Estas transferencias internacionales se realizan con fundamento en las salvaguardas previstas en el art. 33 de la LGPD, en particular mediante cláusulas contractuales estándar o con base en la adecuación del nivel de protección reconocida por la Autoridad Nacional de Protección de Datos (ANPD).",
          "El despacho aplica diligencia en la selección de sus encargados del tratamiento y exige, contractualmente, que los datos sean tratados con un nivel de protección equivalente al exigido por la legislación brasileña."
        ],
        "items": []
      },
      {
        "heading": "7. Conservación y eliminación de los datos",
        "paragraphs": [
          "Los datos personales se conservan durante el tiempo necesario para el cumplimiento de las finalidades para las que fueron recopilados, observados los plazos legales aplicables, incluidas las obligaciones de conservación documental inherentes al ejercicio de la abogacía.",
          "Los datos del formulario de contacto que no resulten en la contratación de servicios se eliminan o anonimizan cuando dejan de ser necesarios para las finalidades descritas. Los datos del boletín informativo se conservan hasta la baja por parte del titular. Los datos de navegación y cookies obedecen a las políticas de conservación de los respectivos encargados del tratamiento (Google, Cloudflare y Vercel)."
        ],
        "items": []
      },
      {
        "heading": "8. Derechos del titular de datos (art. 18 de la LGPD)",
        "paragraphs": [
          "Usted, como titular de datos personales, posee los siguientes derechos, que pueden ejercerse en cualquier momento mediante solicitud al correo electrónico contato@fustinoni.adv.br:"
        ],
        "items": [
          "Confirmación de la existencia de tratamiento de sus datos personales.",
          "Acceso a los datos personales que mantenemos sobre usted.",
          "Rectificación de datos incompletos, inexactos o desactualizados.",
          "Anonimización, bloqueo o eliminación de datos innecesarios, excesivos o tratados en disconformidad con la LGPD.",
          "Portabilidad de sus datos a otro proveedor de servicio o producto, mediante solicitud expresa y observada la reglamentación de la ANPD.",
          "Eliminación de los datos tratados con base en su consentimiento.",
          "Información sobre con qué entidades públicas y privadas compartimos sus datos.",
          "Información sobre la posibilidad de no otorgar el consentimiento y sobre las consecuencias de dicha negativa.",
          "Revocación del consentimiento en cualquier momento, sin perjuicio de la licitud del tratamiento realizado anteriormente con base en esa misma base legal.",
          "Derecho a presentar una reclamación ante la Autoridad Nacional de Protección de Datos (ANPD) en caso de incumplimiento de la legislación de protección de datos."
        ]
      },
      {
        "heading": "9. Cómo ejercer sus derechos",
        "paragraphs": [
          "Para ejercer cualquiera de los derechos enumerados anteriormente, envíe una solicitud a contato@fustinoni.adv.br, identificándose y describiendo el derecho que desea ejercer. Responderemos en un plazo máximo de 15 (quince) días, conforme a lo previsto en el art. 18, § 3.º, de la LGPD.",
          "Podemos solicitar información adicional para confirmar su identidad antes de procesar la solicitud, como medida de seguridad y para protección del propio titular."
        ],
        "items": []
      },
      {
        "heading": "10. Seguridad de la información",
        "paragraphs": [
          "Adoptamos medidas técnicas y administrativas adecuadas para proteger los datos personales contra accesos no autorizados, situaciones accidentales o ilícitas de destrucción, pérdida, alteración, comunicación o difusión, de conformidad con el art. 46 de la LGPD.",
          "En caso de incidente de seguridad que pueda acarrear riesgo o daño relevante a los titulares, comunicaremos el hecho a la ANPD y a los titulares afectados en el plazo legal, conforme al art. 48 de la LGPD y a la Resolución CD/ANPD n.º 15/2024, con la información necesaria sobre la naturaleza de los datos involucrados, los riesgos relacionados y las medidas adoptadas para su mitigación."
        ],
        "items": []
      },
      {
        "heading": "11. Legislación aplicable y fuero",
        "paragraphs": [
          "Esta Política de Privacidad se rige por la LGPD (Ley n.º 13.709/2018), por el Marco Civil de Internet (Ley n.º 12.965/2014) y, cuando corresponda, por el Código de Defensa del Consumidor (Ley n.º 8.078/1990), sin perjuicio de otras normas regulatorias pertinentes, incluidas las resoluciones y orientaciones de la ANPD.",
          "Las eventuales controversias se someterán al fuero de la comarca del domicilio del despacho FUSTINONI ADVOCACIA, salvo disposición legal en contrario."
        ],
        "items": []
      },
      {
        "heading": "12. Modificaciones en esta Política",
        "paragraphs": [
          "Esta Política de Privacidad puede actualizarse periódicamente para reflejar cambios en los servicios ofrecidos, en la legislación aplicable o en las prácticas de tratamiento de datos. La versión vigente es siempre la publicada en esta página, identificada por la fecha de última actualización indicada al inicio del documento.",
          "Le recomendamos consultar esta Política con regularidad. Las modificaciones relevantes se comunicarán de forma adecuada, incluso a los suscriptores del boletín informativo cuando el tratamiento relacionado con esos datos se vea afectado."
        ],
        "items": []
      }
    ]
  },
  "it": {
    "metaTitle": "Informativa sulla Privacy | FUSTINONI ADVOCACIA",
    "metaDescription": "Scopri come lo studio FUSTINONI ADVOCACIA tratta i tuoi dati personali, quali sono i tuoi diritti e come esercitarli, ai sensi della LGPD.",
    "eyebrow": "Privacy e protezione dei dati",
    "title": "Informativa sulla Privacy",
    "lastUpdated": "Ultimo aggiornamento: 17 giugno 2026",
    "intro": [
      "Lo studio FUSTINONI ADVOCACIA dà valore alla privacy e alla protezione dei dati personali dei suoi visitatori, potenziali clienti e abbonati alla newsletter. La presente Informativa sulla Privacy descrive, in modo chiaro e trasparente, quali dati personali raccogliamo attraverso il sito www.escritoriofustinoni.com.br, per quali finalità li utilizziamo, con chi li condividiamo e quali diritti hai, in conformità con la Legge Generale sulla Protezione dei Dati Personali (LGPD, Lei n.º 13.709/2018), il Quadro Civile di Internet (Lei n.º 12.965/2014) e, ove applicabile, il Codice di Difesa del Consumatore (Lei n.º 8.078/1990).",
      "Utilizzando il nostro sito, riconosci di aver letto e compreso le condizioni qui descritte. In caso di dubbi o se desideri esercitare i tuoi diritti, contattaci all'indirizzo e-mail contato@fustinoni.adv.br."
    ],
    "sections": [
      {
        "heading": "1. Titolare e responsabile del trattamento dei dati",
        "paragraphs": [
          "Il titolare responsabile del trattamento dei tuoi dati personali è la T. S. FUSTINONI SOCIEDADE INDIVIDUAL DE ADVOCACIA (FUSTINONI ADVOCACIA), iscritta al CNPJ con il n.º 54.489.975/0001-54, con sede in Rua Amaro de Morais, 233, anexo 231, Vila Sabrina, São Paulo/SP, CEP 02138-070.",
          "Il responsabile del trattamento dei dati (DPO) è incaricato dell'assistenza agli interessati e dell'adempimento degli obblighi previsti dalla LGPD. Per esercitare i tuoi diritti o chiarire dubbi sul trattamento dei tuoi dati, contattaci all'indirizzo e-mail: contato@fustinoni.adv.br."
        ],
        "items": []
      },
      {
        "heading": "2. Dati personali trattati e relative finalità",
        "paragraphs": [
          "Trattiamo solo i dati necessari per le finalità specifiche indicate di seguito. Non raccogliamo dati ulteriori rispetto a quanto descritto nella presente Informativa."
        ],
        "items": [
          "Modulo di contatto e richiesta: raccogliamo nome, telefono, e-mail, breve descrizione del caso (campo di testo libero), lingua di navigazione e origine della visita (campagna o annuncio). Tali dati sono utilizzati per rispondere al contatto, effettuare una valutazione iniziale e condurre le procedure preliminari per l'eventuale prestazione di servizi legali. L'interessato non deve includere più informazioni di quelle strettamente necessarie; qualora includa volontariamente dati sensibili, questi saranno trattati con la stessa cura e riservatezza, sulla base degli articoli 7.º, V e IX, e 11 della LGPD.",
          "Newsletter giuridica: raccogliamo e-mail, nome (facoltativo), aree del Diritto di interesse e la registrazione del consenso. La finalità è l'invio periodico di contenuti giuridici informativi esclusivamente a chi ha scelto di riceverli, mediante doppia conferma (double opt-in). La cancellazione può essere richiesta in qualsiasi momento tramite il link presente in tutte le e-mail.",
          "Navigazione e cookie: tramite gli strumenti Google Ads (gtag), raccogliamo cookie, identificatori di sessione e conversione, indirizzo IP e dati tecnici del dispositivo e del browser. La finalità è esclusivamente misurare l'efficacia delle campagne e delle conversioni. Lo studio non effettua remarketing né indirizza annunci sulla base di caratteristiche personali o situazioni sensibili dell'utente.",
          "Pulsanti di WhatsApp: cliccando sui pulsanti di WhatsApp presenti sul sito, vieni reindirizzato all'applicazione di Meta Platforms. A partire da tale reindirizzamento, la comunicazione è disciplinata anche dall'Informativa sulla Privacy di WhatsApp, e i dati scambiati su tale canale sono soggetti al controllo di Meta Platforms, al di fuori dell'ambito di controllo diretto del presente studio."
        ]
      },
      {
        "heading": "3. Basi giuridiche del trattamento (LGPD)",
        "paragraphs": [
          "Ogni trattamento di dati effettuato dal presente studio si fonda su una delle basi giuridiche previste dalla LGPD (art. 7.º e art. 11). Le basi applicabili a ciascun tipo di dato sono le seguenti:"
        ],
        "items": [
          "Dati del modulo di contatto e richiesta: esecuzione di procedure preliminari relative a un eventuale contratto, su richiesta dell'interessato stesso (art. 7.º, V); e legittimo interesse dello studio a rispondere alle richieste, condurre la valutazione iniziale e gestire la propria attività legale (art. 7.º, IX, fermo restando l'art. 10 della LGPD). L'esercizio regolare di diritti in un procedimento giudiziale, amministrativo o arbitrale (art. 7.º, VI) può essere invocato quando il trattamento derivi da una controversia giudiziale o stragiudiziale già instaurata.",
          "Newsletter: consenso libero, informato, inequivocabile e specifico dell'interessato, prestato mediante il processo di doppia conferma (art. 7.º, I), revocabile in qualsiasi momento.",
          "Cookie di misurazione e pubblicità (Google): consenso dell'interessato (art. 7.º, I), che può essere gestito o revocato nelle impostazioni del browser o tramite gli strumenti di opt-out di Google.",
          "Dati sensibili eventualmente forniti volontariamente dall'interessato nel modulo: consenso specifico ed evidenziato dell'interessato (art. 11, I); oppure, quando il trattamento sia indispensabile per l'esercizio regolare di un diritto da parte dello studio, l'ipotesi dell'art. 11, II, lettera 'd', della LGPD.",
          "Adempimento di obblighi legali e regolamentari, compresi quelli inerenti all'esercizio dell'avvocatura (Statuto dell'OAB, regolamenti del CFE/OAB e altre norme applicabili): obbligo legale (art. 7.º, II)."
        ]
      },
      {
        "heading": "4. Cookie e tecnologie di tracciamento",
        "paragraphs": [
          "Il nostro sito utilizza due tipi di cookie:",
          "Cookie strettamente necessari: indispensabili al funzionamento di base del sito, come sicurezza, controllo della sessione e preferenze di lingua. Non richiedono consenso, poiché non comportano raccolta a fini di marketing o profilazione.",
          "Cookie di misurazione e pubblicità: sono i cookie di Google (Google Ads (gtag)), che raccolgono informazioni sulle tue interazioni con il sito per misurare le prestazioni delle campagne e delle conversioni. Tali cookie sono attivati mediante il tuo consenso. Puoi gestirli, limitarli o rifiutarli in qualsiasi momento nelle impostazioni di privacy del tuo browser o tramite gli strumenti di opt-out messi a disposizione da Google (https://adssettings.google.com). Il rifiuto dei cookie di misurazione non impedisce l'utilizzo del sito."
        ],
        "items": []
      },
      {
        "heading": "5. Condivisione dei dati con terzi",
        "paragraphs": [
          "Lo studio non vende, non cede e non condivide dati personali a fini commerciali di terzi. La condivisione avviene esclusivamente con i responsabili del trattamento elencati di seguito, nella misura strettamente necessaria alla prestazione dei loro servizi, e sempre nel rispetto di un obbligo contrattuale di riservatezza e di conformità alla normativa applicabile in materia di protezione dei dati:"
        ],
        "items": [
          "Vercel: hosting e distribuzione del sito; fornisce inoltre metriche di utilizzo aggregate e anonimizzate (Vercel Analytics), senza cookie di identificazione personale.",
          "Cloudflare: sicurezza, protezione contro attacchi e distribuzione dei contenuti (CDN). Cloudflare agisce come sub-responsabile nel trattamento del traffico del sito, compreso l'indirizzo IP dei visitatori, con server situati al di fuori del Brasile.",
          "Google: misurazione delle campagne e delle conversioni tramite Google Ads.",
          "Supabase: archiviazione dei dati provenienti dal modulo di contatto.",
          "Resend: piattaforma di invio delle e-mail della newsletter.",
          "Meta Platforms / WhatsApp: quando il visitatore sceglie di avviare una conversazione tramite il pulsante di WhatsApp disponibile sul sito, i dati della conversazione sono soggetti alle politiche di Meta Platforms."
        ]
      },
      {
        "heading": "6. Trasferimento internazionale dei dati",
        "paragraphs": [
          "I responsabili del trattamento elencati nella sezione precedente possono trattare dati personali su server situati al di fuori del Brasile, compresi gli Stati Uniti d'America. Tali trasferimenti internazionali sono effettuati sulla base delle garanzie previste dall'art. 33 della LGPD, in particolare mediante clausole contrattuali tipo e/o sulla base dell'adeguatezza del livello di protezione riconosciuta dall'Autorità Nazionale per la Protezione dei Dati (ANPD).",
          "Lo studio adotta la dovuta diligenza nella selezione dei propri responsabili del trattamento ed esige, contrattualmente, che i dati siano trattati con un livello di protezione equivalente a quello richiesto dalla normativa brasiliana."
        ],
        "items": []
      },
      {
        "heading": "7. Conservazione ed eliminazione dei dati",
        "paragraphs": [
          "I dati personali sono conservati per il tempo necessario all'adempimento delle finalità per le quali sono stati raccolti, fermi restando i termini di legge applicabili, compresi gli obblighi di conservazione documentale inerenti all'esercizio dell'avvocatura.",
          "I dati del modulo di contatto che non si traducono nell'affidamento di servizi sono eliminati o anonimizzati quando cessano di essere necessari per le finalità descritte. I dati della newsletter sono conservati fino alla cancellazione da parte dell'interessato. I dati di navigazione e i cookie seguono le politiche di conservazione dei rispettivi responsabili del trattamento (Google, Cloudflare e Vercel)."
        ],
        "items": []
      },
      {
        "heading": "8. Diritti dell'interessato (art. 18 della LGPD)",
        "paragraphs": [
          "In qualità di interessato dei dati personali, hai i seguenti diritti, che possono essere esercitati in qualsiasi momento mediante richiesta all'indirizzo e-mail contato@fustinoni.adv.br:"
        ],
        "items": [
          "Conferma dell'esistenza di un trattamento dei tuoi dati personali.",
          "Accesso ai dati personali che conserviamo su di te.",
          "Rettifica di dati incompleti, inesatti o non aggiornati.",
          "Anonimizzazione, blocco o eliminazione di dati superflui, eccessivi o trattati in difformità dalla LGPD.",
          "Portabilità dei tuoi dati verso un altro fornitore di servizi o prodotti, mediante richiesta espressa e nel rispetto della regolamentazione dell'ANPD.",
          "Eliminazione dei dati trattati sulla base del tuo consenso.",
          "Informazione su con quali enti pubblici e privati condividiamo i tuoi dati.",
          "Informazione sulla possibilità di non prestare il consenso e sulle conseguenze di tale rifiuto.",
          "Revoca del consenso in qualsiasi momento, fatta salva la liceità del trattamento effettuato in precedenza sulla base della medesima base giuridica.",
          "Diritto di presentare reclamo all'Autorità Nazionale per la Protezione dei Dati (ANPD) in caso di inosservanza della normativa in materia di protezione dei dati."
        ]
      },
      {
        "heading": "9. Come esercitare i tuoi diritti",
        "paragraphs": [
          "Per esercitare uno qualsiasi dei diritti sopra elencati, invia una richiesta a contato@fustinoni.adv.br, identificandoti e descrivendo il diritto che desideri esercitare. Risponderemo entro un termine massimo di 15 (quindici) giorni, come previsto dall'art. 18, § 3.º, della LGPD.",
          "Possiamo richiedere informazioni aggiuntive per confermare la tua identità prima di elaborare la richiesta, quale misura di sicurezza e a tutela dell'interessato stesso."
        ],
        "items": []
      },
      {
        "heading": "10. Sicurezza delle informazioni",
        "paragraphs": [
          "Adottiamo misure tecniche e organizzative adeguate a proteggere i dati personali da accessi non autorizzati, situazioni accidentali o illecite di distruzione, perdita, alterazione, comunicazione o diffusione, in conformità con l'art. 46 della LGPD.",
          "In caso di incidente di sicurezza che possa comportare un rischio o un danno rilevante per gli interessati, comunicheremo il fatto all'ANPD e agli interessati coinvolti entro il termine di legge, ai sensi dell'art. 48 della LGPD e della Resolução CD/ANPD n.º 15/2024, con le informazioni necessarie sulla natura dei dati coinvolti, sui rischi correlati e sulle misure adottate per la mitigazione."
        ],
        "items": []
      },
      {
        "heading": "11. Normativa applicabile e foro competente",
        "paragraphs": [
          "La presente Informativa sulla Privacy è disciplinata dalla LGPD (Lei n.º 13.709/2018), dal Quadro Civile di Internet (Lei n.º 12.965/2014) e, ove applicabile, dal Codice di Difesa del Consumatore (Lei n.º 8.078/1990), fatte salve le altre norme regolamentari pertinenti, comprese le risoluzioni e gli orientamenti dell'ANPD.",
          "Eventuali controversie saranno sottoposte al foro della circoscrizione del domicilio dello studio FUSTINONI ADVOCACIA, salvo diversa disposizione di legge."
        ],
        "items": []
      },
      {
        "heading": "12. Modifiche alla presente Informativa",
        "paragraphs": [
          "La presente Informativa sulla Privacy può essere aggiornata periodicamente per riflettere modifiche ai servizi offerti, alla normativa applicabile o alle pratiche di trattamento dei dati. La versione vigente è sempre quella pubblicata in questa pagina, identificata dalla data dell'ultimo aggiornamento indicata all'inizio del documento.",
          "Ti consigliamo di consultare regolarmente la presente Informativa. Le modifiche rilevanti saranno comunicate in modo adeguato, anche agli abbonati alla newsletter qualora il trattamento relativo a tali dati ne risulti interessato."
        ],
        "items": []
      }
    ]
  }
};

type PageProps = { params: Promise<{ locale: AppLocale }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const c = CONTENT[locale] ?? CONTENT.pt;
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: {
      canonical: getLocalizedUrl(pagePath, locale),
      languages: getAlternatesLanguages(pagePath),
    },
    openGraph: {
      type: "website",
      url: getLocalizedUrl(pagePath, locale),
      title: c.metaTitle,
      description: c.metaDescription,
      siteName: SITE_NAME,
      locale: OG_LOCALE_BY_APP_LOCALE[locale],
      images: [{ url: SITE_OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
    },
  };
}

export default async function PrivacidadePage({ params }: PageProps) {
  const { locale } = await params;
  const c = CONTENT[locale] ?? CONTENT.pt;

  return (
    <>
      <section className="border-b border-black/15 px-4 py-14 sm:px-6 sm:py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-black/40" />
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-black/60">
              {c.eyebrow}
            </span>
          </div>
          <h1 className="font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            {c.title}
          </h1>
          <p className="mt-5 text-xs uppercase tracking-wider text-black/45">{c.lastUpdated}</p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 md:px-10 md:py-16">
        <div className="mx-auto max-w-3xl">
          {c.intro.map((p, i) => (
            <p key={i} className="mb-4 text-sm leading-7 text-black/70 sm:text-base">
              {p}
            </p>
          ))}

          <div className="mt-12 space-y-12">
            {c.sections.map((s, i) => (
              <div key={i} className="border-t border-black/15 pt-8">
                <h2 className="mb-4 font-serif text-2xl leading-tight tracking-tight sm:text-3xl">
                  {s.heading}
                </h2>
                {s.paragraphs.map((p, j) => (
                  <p key={j} className="mb-4 text-sm leading-7 text-black/70 sm:text-base">
                    {p}
                  </p>
                ))}
                {s.items && s.items.length > 0 ? (
                  <ul className="mt-3 space-y-3">
                    {s.items.map((it, k) => (
                      <li
                        key={k}
                        className="flex gap-3 text-sm leading-7 text-black/70 sm:text-base"
                      >
                        <span className="mt-3 h-1 w-1 shrink-0 rounded-full bg-black/40" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
