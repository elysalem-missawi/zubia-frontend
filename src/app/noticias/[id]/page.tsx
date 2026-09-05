import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { fetchFromStrapi } from "@/lib/strapi";
import Link from "next/link";
import { ArrowLeft, Calendar, Newspaper } from "lucide-react";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";
export const revalidate = 0;

interface ArticlePageProps {
  params: Promise<{ id: string }>;
}

export default async function ArticleDetailPage({
  params,
}: ArticlePageProps) {
  const resolvedParams = await params;
  const articleId = resolvedParams.id;

  let article: any = null;

  try {
    // 1. Intentar buscar primero en news-posts
    const responseNews = await fetchFromStrapi(
      `news-posts?filters[documentId][$eq]=${encodeURIComponent(articleId)}`
    );

    const newsData = responseNews?.data || [];

    if (Array.isArray(newsData) && newsData.length > 0) {
      article = newsData[0];
    } else {
      // 2. Si no se encuentra, buscar en articles
      const responseArticles = await fetchFromStrapi(
        `articles?filters[documentId][$eq]=${encodeURIComponent(articleId)}`
      );

      const articlesData = responseArticles?.data || [];

      if (Array.isArray(articlesData) && articlesData.length > 0) {
        article = articlesData[0];
      }
    }
  } catch (error) {
    console.error("Error fetching article detail:", error);
  }

  // 3. Si no existe el artículo, mostrar 404
  if (
    !article ||
    (typeof article === "object" && Object.keys(article).length === 0)
  ) {
    notFound();
  }

  // Soporte para Strapi v4 y v5
  const data = article.attributes || article;

  const title =
    data.title ||
    data.titulo ||
    "Sin título";

  const content =
    data.content ||
    data.contenido ||
    data.description ||
    data.descripcion ||
    "Sin contenido disponible.";

  const date =
    data.publishedAt ||
    data.createdAt ||
    data.date ||
    "";

  const formattedDate = date
    ? new Date(date).toLocaleDateString("es-ES", {
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

          <div className="relative mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8 lg:py-18">
            <Link
              href="/noticias"
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:bg-white/10 hover:text-emerald-300"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver a Noticias
            </Link>

            <div className="flex items-center gap-2 text-sm font-semibold text-emerald-400">
              <Newspaper className="h-4 w-4" />
              Noticias y Eventos
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

            {/* Bottom navigation */}
            <div className="border-t border-slate-100 bg-slate-50 px-6 py-6 sm:px-8 lg:px-12">
              <Link
                href="/noticias"
                className="inline-flex items-center gap-2 font-bold text-emerald-600 transition hover:text-emerald-700"
              >
                <ArrowLeft className="h-5 w-5" />
                Ver todas las noticias
              </Link>
            </div>
          </article>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-emerald-700 px-6 py-10 sm:px-10 lg:px-12">
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

            <div className="relative">
              <h2 className="text-2xl font-black text-white sm:text-3xl">
                ¿Quieres conocer más sobre nuestro trabajo?
              </h2>

              <p className="mt-3 max-w-2xl leading-7 text-emerald-50">
                Descubre nuestros proyectos y las iniciativas que desarrollamos
                junto a la comunidad.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/proyectos"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-emerald-700 transition hover:bg-emerald-50"
                >
                  Ver proyectos
                  <ArrowLeft className="h-4 w-4 rotate-180" />
                </Link>

                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center rounded-xl border border-white/30 px-5 py-3 font-bold text-white transition hover:bg-white/10"
                >
                  Contacta con nosotros
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}