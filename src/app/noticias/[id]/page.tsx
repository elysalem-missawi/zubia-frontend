import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { fetchFromStrapi } from "@/lib/strapi";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";
export const revalidate = 0;

interface ArticlePageProps {
  params: Promise<{ id: string }>;
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const resolvedParams = await params;
  const articleId = resolvedParams.id;
  let article: any = null;

  try {
    // 1. محاولة جلب الخبر عبر الفلترة بالـ documentId أو id لجدول news-posts
    const responseNews = await fetchFromStrapi(`news-posts?filters[documentId][$eq]=${articleId}`);
    const newsData = responseNews?.data || [];
    
    if (Array.isArray(newsData) && newsData.length > 0) {
      article = newsData[0];
    } else {
      // 2. إذا لم يعثر عليه، نحاول الفلترة في جدول articles
      const responseArticles = await fetchFromStrapi(`articles?filters[documentId][$eq]=${articleId}`);
      const articlesData = responseArticles?.data || [];
      if (Array.isArray(articlesData) && articlesData.length > 0) {
        article = articlesData[0];
      }
    }
  } catch (error) {
    console.error("Error fetching article detail:", error);
  }

  // 3. توجيه لصفحة Not Found إذا لم يتم العثور على أي مقالة
  if (!article || (typeof article === "object" && Object.keys(article).length === 0)) {
    notFound();
  }

  // استخراج البيانات لدعم Strapi v4 و v5
  const data = article.attributes || article;
  const title = data.title || data.titulo || "Sin título";
  const content =
    data.content ||
    data.contenido ||
    data.description ||
    data.descripcion ||
    "Sin contenido disponible.";
  const date = data.publishedAt || data.createdAt || data.date || "";

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Header />
      <main className="flex-1 mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <Link
          href="/noticias"
          className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 mb-8"
        >
          <ArrowLeft className="h-4 w-4" /> Volver a Noticias
        </Link>

        <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          {date && (
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-4">
              <Calendar className="h-4 w-4" />
              <time>
                {typeof date === "string" && date.includes("T")
                  ? date.split("T")[0]
                  : new Date(date).toLocaleDateString()}
              </time>
            </div>
          )}
          <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            {title}
          </h1>

          <div className="mt-8 border-t border-slate-100 pt-8 text-slate-700 leading-relaxed whitespace-pre-line">
            {content}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}