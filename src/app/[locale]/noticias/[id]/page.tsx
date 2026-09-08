import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { fetchFromStrapi } from "@/lib/strapi";
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import { ArrowLeft, Calendar, Newspaper } from "lucide-react";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";
export const revalidate = 0;

interface ArticlePageProps {
  params: Promise<{
    locale: string;
    id: string;
  }>;
}

export default async function ArticleDetailPage({
  params,
}: ArticlePageProps) {
  const { locale, id: articleId } = await params;

  const t = await getTranslations("ArticlePage");

  let article: any = null;

  try {
    const response = await fetchFromStrapi(
      `articles?filters[documentId][$eq]=${encodeURIComponent(articleId)}`
    );

    const articlesData = response?.data || [];

    if (Array.isArray(articlesData) && articlesData.length > 0) {
      article = articlesData[0];
    }
  } catch (error) {
    console.error("Error fetching article detail:", error);
  }

  if (
    !article ||
    (typeof article === "object" && Object.keys(article).length === 0)
  ) {
    notFound();
  }

  const data = article.attributes || article;

  const title = data.title || data.titulo || t("fallback.title");

  const content =
    data.content ||
    data.contenido ||
    data.description ||
    data.descripcion ||
    t("fallback.content");

  const date =
    data.publishedAt ||
    data.createdAt ||
    data.date ||
    "";

 const formattedDate = date
  ? new Date(date).toLocaleDateString(locale, {
      day: "2-digit",
      month: "long",
      year: "numeric",
    })
  : "";

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-slate-950">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.18),transparent_35%)]" />

          <div className="relative mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <Link
              href="/noticias"
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:bg-white/10 hover:text-emerald-300"
            >
              <ArrowLeft className="h-4 w-4" />
              {t("hero.back")}
            </Link>

            <div className="flex items-center gap-2 text-sm font-semibold text-emerald-400">
              <Newspaper className="h-4 w-4" />
              {t("hero.category")}
            </div>

            <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              {title}
            </h1>

            {formattedDate && (
              <div className="mt-6 flex items-center gap-2 text-sm text-slate-400">
                <Calendar className="h-4 w-4 text-emerald-400" />

                <time dateTime={date}>
                  {formattedDate}
                </time>
              </div>
            )}
          </div>
        </section>

        {/* Article */}
        <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="p-6 sm:p-8 lg:p-12">
              <div className="mb-8 h-1 w-16 rounded-full bg-emerald-500" />

              <div className="whitespace-pre-line text-base leading-8 text-slate-700 sm:text-lg">
                {content}
              </div>
            </div>

            <div className="border-t border-slate-100 bg-slate-50 px-6 py-6 sm:px-8 lg:px-12">
              <Link
                href="/noticias"
                className="inline-flex items-center gap-2 font-bold text-emerald-600 transition hover:text-emerald-700"
              >
                <ArrowLeft className="h-5 w-5" />
                {t("article.backToNews")}
              </Link>
            </div>
          </article>
        </section>
 
      </main>

      <Footer />
    </div>
  );
}