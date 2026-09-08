import { ArrowRight, CalendarDays, Newspaper } from "lucide-react";
import { Link } from "@/i18n/routing";

export interface NewsProps {
  id?: string | number;
  documentId?: string;
  title?: string;
  excerpt?: string;
  date?: string;
  news?: any;
  image?: any;
  [key: string]: any;
}

function getImageUrl(data: any) {
  const image =
    data.image ||
    data.cover ||
    data.featuredImage ||
    data.imagen ||
    data.portada;

  if (!image) {
    return null;
  }

  const url =
    image?.url ||
    image?.data?.attributes?.url ||
    image?.data?.url ||
    image?.formats?.large?.url ||
    image?.formats?.medium?.url ||
    image?.formats?.small?.url;

  if (!url) {
    return null;
  }

  // إذا كان Strapi يعيد رابطًا كاملًا
  if (url.startsWith("http")) {
    return url;
  }

  // إذا كان الرابط نسبيًا مثل /uploads/...
  const baseUrl =
    process.env.NEXT_PUBLIC_STRAPI_URL ||
    (process.env.NODE_ENV === "development"
      ? "http://localhost:1337"
      : "https://zubia-backend.onrender.com");

  return `${baseUrl.replace(/\/+$/, "")}${url}`;
}

export default function NewsCard(props: NewsProps) {
  const data = props.news || props;

  const articleId = data.documentId || data.id;

  const title =
    data.title ||
    data.titulo ||
    "Sin título";

  const excerpt =
    data.excerpt ||
    data.summary ||
    data.description ||
    data.descripcion ||
    data.contenido ||
    "";

  const date =
    data.publishedAt ||
    data.date ||
    data.fecha ||
    "";

  const imageUrl = getImageUrl(data);

  const formattedDate =
    typeof date === "string" && date.includes("T")
      ? new Date(date).toLocaleDateString("es-ES", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        })
      : date || "Reciente";

  return (
    <article
      dir="auto"
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-slate-100">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100">
              <Newspaper className="h-8 w-8 text-emerald-600" />
            </div>
          </div>
        )}

        {/* Image overlay */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6 sm:p-7">

        {/* Meta */}
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
            Noticias
          </span>

          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <CalendarDays className="h-4 w-4" />

            <time dateTime={typeof date === "string" ? date : undefined}>
              {formattedDate}
            </time>
          </div>
        </div>

        {/* Title */}
        <h3 className="mt-5 line-clamp-2 text-xl font-extrabold leading-tight text-slate-950">
          {title}
        </h3>

        {/* Description */}
        {excerpt && (
          <p className="mt-4 line-clamp-3 text-sm leading-7 text-slate-600">
            {excerpt}
          </p>
        )}

        {/* Link */}
        <div className="mt-auto pt-6">
          {articleId ? (
            <Link
              href={`/noticias/${articleId}`}
              className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 transition-colors hover:text-emerald-700"
            >
              Leer más

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          ) : (
            <span className="text-sm font-bold text-slate-400">
              Leer más
            </span>
          )}
        </div>

      </div>
    </article>
  );
}