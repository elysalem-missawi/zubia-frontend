import Link from "next/link";
import { Calendar } from "lucide-react";

interface NewsProps {
  id: string | number;
  title: string;
  excerpt: string;
  date: string;
}

export default function NewsCard({ id, title, excerpt, date }: NewsProps) {
  return (
    <article className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-emerald-500">
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Calendar className="h-3.5 w-3.5" />
          <time>{date}</time>
        </div>
        <h3 className="mt-3 text-lg font-bold text-slate-900 line-clamp-2">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 line-clamp-3">{excerpt}</p>
      </div>
      <div className="mt-6">
        <Link href={`/noticias/${id}`} className="text-sm font-bold text-emerald-600 hover:underline">
          Leer noticia completa →
        </Link>
      </div>
    </article>
  );
}