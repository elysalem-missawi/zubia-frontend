// src/app/[locale]/noticias/page.tsx

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsCard from "@/components/NewsCard";
import { fetchFromStrapi } from "@/lib/strapi";
import { getTranslations } from "next-intl/server";
import { CalendarDays, Newspaper, Sparkles } from "lucide-react";
import { Link } from "@/i18n/routing";

// ملاحظة: بما أننا قمنا بتفعيل الكاش الذكي في src/lib/strapi.ts،
// لم نعد بحاجة لـ force-dynamic أو revalidate = 0 هنا،
// حيث سيتم تحديث الصفحة تلقائياً كل 60 ثانية.
// export const dynamic = "force-dynamic";
// export const revalidate = 0;

export interface StrapiItem {
  id: number | string;
  documentId?: string;
  attributes?: Record<string, any>;
  [key: string]: any;
}

interface NoticiasProps {
  params: { locale: string };
}

export default async function Noticias({ params: { locale } }: NoticiasProps) {
  // جلب الترجمات الخاصة بصفحة الأخبار بناءً على اللغة الحالية
  const t = await getTranslations("NewsPage");

  let newsList: StrapiItem[] = [];

  try {
    // تمرير اللغة الحالية (locale) لدالة الجلب لضمان الحصول على المحتوى المترجم من Strapi
    const response = await fetchFromStrapi("articles?populate=image", locale);

    console.log("NOTICIAS STRAPI RESPONSE:", response);

    // التعامل مع هيكلية بيانات Strapi المختلفة (v4 و v5)
    newsList = Array.isArray(response?.data)
      ? response.data
      : Array.isArray(response)
        ? response
        : [];
  } catch (error) {
    console.error("Failed to fetch news:", error);
  }

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-slate-950">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.18),transparent_35%)]" />

          <div className="absolute -left-24 top-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-300">
                <Sparkles className="h-4 w-4" />
                {t("hero.badge")}
              </div>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                {t("hero.title")}{" "}
                <span className="text-emerald-400">
                  {t("hero.titleHighlight")}
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                {t("hero.description")}
              </p>
            </div>
          </div>
        </section>

        {/* Intro Cards Section */}
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <Newspaper className="h-6 w-6" />
              </div>

              <h2 className="text-lg font-bold text-slate-900">
                {t("intro.current.title")}
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {t("intro.current.description")}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <CalendarDays className="h-6 w-6" />
              </div>

              <h2 className="text-lg font-bold text-slate-900">
                {t("intro.events.title")}
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {t("intro.events.description")}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <Sparkles className="h-6 w-6" />
              </div>

              <h2 className="text-lg font-bold text-slate-900">
                {t("intro.stories.title")}
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {t("intro.stories.description")}
              </p>
            </div>
          </div>
        </section>

        {/* News List Section */}
        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
          <div className="mb-8 flex flex-col gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-emerald-600">
                {t("latest.eyebrow")}
              </p>

              <h2 className="mt-2 text-3xl font-black text-slate-900">
                {t("latest.title")}
              </h2>

              <p className="mt-2 text-slate-600">
                {t("latest.description")}
              </p>
            </div>

            {/* عدّاد المقالات */}
            {newsList.length > 0 && (
              <div className="inline-flex w-fit items-center rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-600">
                {newsList.length}{" "}
                {newsList.length === 1
                  ? t("latest.publication")
                  : t("latest.publications")}
              </div>
            )}
          </div>

          {/* عرض الأخبار أو رسالة "لا توجد أخبار" */}
          {newsList.length > 0 ? (
            <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
              {newsList.map((item, index) => {
                // توحيد تنسيق البيانات لـ NewsCard (التعامل مع v4 attributes)
                const data = item.attributes
                  ? { id: item.id, ...item.attributes }
                  : item;

                const itemKey = item.documentId || item.id || index;

                return (
                  <NewsCard
                    key={itemKey}
                    news={data}
                    // تمرير الخصائص بشكل منفصل أيضاً إذا كان الكرت يحتاجها هكذا
                    {...data}
                  />
                );
              })}
            </div>
          ) : (
            // حالة القائمة الفارغة (Empty State)
            <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center shadow-sm">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                <Newspaper className="h-8 w-8" />
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {t("empty.title")}
              </h3>

              <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500">
                {t("empty.description")}
              </p>
            </div>
          )}
        </section>
 
      </main>

      <Footer />
    </div>
  );
}