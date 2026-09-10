import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { ShieldCheck, Lock, Eye, FileText, UserCheck, Mail } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "PrivacyPolicy" });

  return {
    title: `${t("title")} | Zubia Social`,
    description: t("description"),
  };
}

export default function PrivacyPolicyPage() {
  const t = useTranslations("PrivacyPolicy");

  return (
    <div className="bg-slate-50/50 py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 shadow-sm">
            <ShieldCheck className="h-8 w-8" />
          </div>
          <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            {t("title")}
          </h1>
          <p className="mt-3 text-sm font-medium text-slate-500">
            {t("lastUpdated")}
          </p>
        </div>

        {/* Main Content Box */}
        <div className="space-y-8 rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-10">
          {/* Section 1 */}
          <section className="space-y-3">
            <div className="flex items-center gap-3 text-emerald-700">
              <UserCheck className="h-5 w-5 shrink-0" />
              <h2 className="text-xl font-bold text-slate-900">
                {t("section1.title")}
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
              {t("section1.content")}
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* Section 2 */}
          <section className="space-y-3">
            <div className="flex items-center gap-3 text-emerald-700">
              <Eye className="h-5 w-5 shrink-0" />
              <h2 className="text-xl font-bold text-slate-900">
                {t("section2.title")}
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
              {t("section2.content")}
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* Section 3 */}
          <section className="space-y-3">
            <div className="flex items-center gap-3 text-emerald-700">
              <FileText className="h-5 w-5 shrink-0" />
              <h2 className="text-xl font-bold text-slate-900">
                {t("section3.title")}
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
              {t("section3.content")}
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* Section 4 */}
          <section className="space-y-3">
            <div className="flex items-center gap-3 text-emerald-700">
              <Lock className="h-5 w-5 shrink-0" />
              <h2 className="text-xl font-bold text-slate-900">
                {t("section4.title")}
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
              {t("section4.content")}
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* Contact Box */}
          <section className="rounded-2xl bg-emerald-50/60 p-6 text-emerald-950 sm:p-8">
            <div className="flex items-center gap-3 text-emerald-800">
              <Mail className="h-6 w-6 shrink-0" />
              <h2 className="text-lg font-bold">{t("contact.title")}</h2>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-emerald-900/80 sm:text-base">
              {t("contact.content")}
            </p>
          </section>
        </div>
      </div>

    </div>
    
  );
}