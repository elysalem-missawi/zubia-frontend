import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ProjectProps {
  id: string | number;
  title: string;
  description: string;
  category: string;
  imageUrl?: string;
}

export default function ProjectCard({ id, title, description, category, imageUrl }: ProjectProps) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="relative h-48 w-full bg-slate-100">
        {imageUrl ? (
          <Image src={imageUrl} alt={title} fill className="object-cover transition duration-300 group-hover:scale-105" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-slate-400">Sin Imagen</div>
        )}
        <span className="absolute top-3 left-3 rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold text-white shadow">
          {category}
        </span>
      </div>
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition">{title}</h3>
          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-600">{description}</p>
        </div>
        <div className="mt-6 pt-4 border-t border-slate-100">
          <Link href={`/proyectos/${id}`} className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-600 hover:text-emerald-700">
            Ver proyecto <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}