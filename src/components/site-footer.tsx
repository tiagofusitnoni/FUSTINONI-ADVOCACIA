import { Mail } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { type AppLocale } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import { getLocalizedHash } from "@/lib/navigation";

type SiteFooterProps = {
  locale: AppLocale;
};

export async function SiteFooter({ locale }: SiteFooterProps) {
  const t = await getTranslations("siteFooter");

  const linkCls = "text-[#F6F3EE]/75 transition-colors hover:text-[#C9A86A]";
  return (
    <footer className="border-t border-[#B08D46]/25 bg-[#0B1A16] text-sm text-[#F6F3EE]">
      <div className="mx-auto grid w-full max-w-[min(88vw,96rem)] grid-cols-1 gap-14 px-6 py-20 sm:grid-cols-2 sm:px-10 lg:grid-cols-12 lg:gap-10 lg:py-24">
        <div className="sm:col-span-2 lg:col-span-5">
          <div className="marca marca-clara" aria-label="Fustinoni Advocacia">
            <span className="marca-f" aria-hidden="true">F</span>
            <span className="marca-sep" aria-hidden="true" />
            <span className="marca-txt">
              <span className="marca-nome">Fustinoni</span>
              <span className="marca-sub">ADVOCACIA</span>
            </span>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-[0.625rem] font-medium uppercase tracking-[0.24em] text-[#F6F3EE]/50">
            <span>{t("badges.confidential")}</span>
            <span>{t("badges.scheduled")}</span>
            <span>{t("badges.national")}</span>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="mb-7 text-[0.6875rem] font-medium uppercase tracking-[0.32em] text-[#C9A86A]">
            {t("navigationTitle")}
          </div>
          <ul className="space-y-4">
            <li>
              <Link href={{ pathname: "/", hash: getLocalizedHash("/", "services", locale) }} className={linkCls}>
                {t("links.team")}
              </Link>
            </li>
            <li>
              <Link href={{ pathname: "/", hash: getLocalizedHash("/", "process", locale) }} className={linkCls}>
                {t("links.workModels")}
              </Link>
            </li>
            <li>
              <Link href="/analise-credito" className={linkCls}>
                {t("links.creditReview")}
              </Link>
            </li>
            <li>
              <Link href={{ pathname: "/", hash: getLocalizedHash("/", "faq", locale) }} className={linkCls}>
                {t("links.faq")}
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-4">
          <div className="mb-7 text-[0.6875rem] font-medium uppercase tracking-[0.32em] text-[#C9A86A]">
            {t("contactTitle")}
          </div>
          <a href="mailto:contato@fustinoni.adv.br" className={`inline-flex items-center gap-3 ${linkCls}`}>
            <Mail className="h-4 w-4 text-[#B08D46]" strokeWidth={1.5} />
            contato@fustinoni.adv.br
          </a>
        </div>
      </div>

      <div className="border-t border-[#F6F3EE]/10">
        <div className="mx-auto flex w-full max-w-[min(88vw,96rem)] flex-col gap-3 px-6 py-6 text-[0.6875rem] text-[#F6F3EE]/45 sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <p>{t("rightsReserved")}</p>
          <Link
            href="/privacidade"
            className="uppercase tracking-[0.2em] transition-colors hover:text-[#C9A86A]"
          >
            {t("links.privacy")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
