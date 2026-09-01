import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsCard from "@/components/NewsCard";
import { fetchFromStrapi } from "@/lib/strapi";

// إجبار Next.js على التقديم الديناميكي لمنع انتهاء وقت البناء (Timeout) على Vercel
export const dynamic = "force-dynamic";
export const revalidate = 0;

export interface StrapiItem {
  id: number | string;
  documentId?: string;
  attributes?: Record<string, any>;
  [key: string]: any;
}

export default async function Noticias() {
  let newsList: StrapiItem[] = [];

  try {
    const response = await fetchFromStrapi("articles");
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
      <main className="flex-1 mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="mb-8 border-b border-slate-200 pb-4">
          <h1 className="text-3xl font-black text-slate-900">Noticias y Eventos</h1>
          <p className="mt-2 text-slate-600">Últimas novedades de la asociación.</p>
        </header>

        {newsList.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsList.map((item, index) => {
              const data = item.attributes ? { id: item.id, ...item.attributes } : item;
              const itemKey = item.documentId || item.id || index;
              return <NewsCard key={itemKey} news={data} {...data} />;
            })}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-300 shadow-sm">
            <p className="text-slate-600 text-lg font-medium">
              No hay noticias disponibles actualmente.
            </p>
            <p className="text-sm text-slate-400 mt-1">
              Si acabas de añadir una مقالة في Strapi، تأكد من الضغط على Publish وتفعيل صلاحية find لـ Article في Public Roles.
            </p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}