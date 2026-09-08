import { Calendar } from "lucide-react";
import { Link } from "@/i18n/routing";

export interface NewsProps {
  id?: string | number;
  documentId?: string;
  title?: string;
  excerpt?: string;
  date?: string;
  news?: any;
  [key: string]: any;
}

export default function NewsCard(props: NewsProps) {
  // دمج الخواص سواء مرت كـ news={...} أو مباشرة كـ props
  const data = props.news || props;

  // إعطاء الأولوية لـ documentId ليتوافق مع Strapi v5
  const articleId = data.documentId || data.id;

  const title =
    data.title ||
    data.titulo ||
    "Sin título";

  const excerpt =
    data.excerpt ||
    data.summary ||
    data.contenido ||
    data.descripcion ||
    "";

  const date =
    data.publishedAt ||
    data.date ||
    data.fecha ||
    "Reciente";

  const formattedDate =
    typeof date === "string" && date.includes("T")
      ? date.split("T")[0]
      : date;

  return (
    <article
      className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 text-right shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-500 hover:shadow-md"
      dir="auto"
    >
      <div>
        <div className="flex items-center justify-end gap-2 text-xs font-semibold text-slate-500">
          <time dateTime={typeof date === "string" ? date : undefined}>
            {formattedDate}
          </time>

          <Calendar className="h-3.5 w-3.5" />
        </div>

        <h3 className="mt-3 line-clamp-2 text-right text-lg font-bold text-slate-900">
          {title}
        </h3>

        {excerpt && (
          <p className="mt-2 line-clamp-3 text-right text-sm leading-relaxed text-slate-600">
            {excerpt}
          </p>
        )}
      </div>

      <div className="mt-6 text-right">
        {articleId ? (
          <Link
            href={`/noticias/${articleId}`}
            className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 transition hover:text-emerald-700 hover:underline"
          >
            <span>Leer noticia completa</span>
            <span aria-hidden="true">←</span>
          </Link>
        ) : (
          <span className="text-sm font-bold text-slate-400">
            Leer noticia completa ←
          </span>
        )}
      </div>
    </article>
  );
}