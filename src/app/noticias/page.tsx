import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsCard from "@/components/NewsCard";
import { fetchFromStrapi } from "@/lib/strapi";
import {
  ArrowRight,
  CalendarDays,
  Newspaper,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

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

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-slate-950">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.18),transparent_35%)]" />
          <div className="absolute -left-24 top-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-300">
                <Sparkles className="h-4 w-4" />
                Actualidad de Zubia Social
              </div>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Noticias y{" "}
                <span className="text-emerald-400">Eventos</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Descubre las últimas novedades, actividades y acontecimientos
                de Asociación Zubia Social Euskadi.
              </p>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <Newspaper className="h-6 w-6" />
              </div>

              <h2 className="text-lg font-bold text-slate-900">
                Actualidad
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Mantente informado sobre las novedades y acciones de la
                asociación.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <CalendarDays className="h-6 w-6" />
              </div>

              <h2 className="text-lg font-bold text-slate-900">
                Eventos
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Conoce las actividades y eventos en los que participa Zubia
                Social.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <Sparkles className="h-6 w-6" />
              </div>

              <h2 className="text-lg font-bold text-slate-900">
                Historias
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Compartimos experiencias e historias relacionadas con nuestro
                trabajo comunitario.
              </p>
            </div>
          </div>
        </section>

        {/* Noticias */}
        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
          <div className="mb-8 flex flex-col gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-emerald-600">
                Últimas publicaciones
              </p>

              <h2 className="mt-2 text-3xl font-black text-slate-900">
                Noticias de la asociación
              </h2>

              <p className="mt-2 text-slate-600">
                Información y novedades de nuestra actividad.
              </p>
            </div>

            {newsList.length > 0 && (
              <div className="inline-flex w-fit items-center rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-600">
                {newsList.length}{" "}
                {newsList.length === 1 ? "publicación" : "publicaciones"}
              </div>
            )}
          </div>

          {newsList.length > 0 ? (
            <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
              {newsList.map((item, index) => {
                const data = item.attributes
                  ? { id: item.id, ...item.attributes }
                  : item;

                const itemKey = item.documentId || item.id || index;

                return (
                  <NewsCard
                    key={itemKey}
                    news={data}
                    {...data}
                  />
                );
              })}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center shadow-sm">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                <Newspaper className="h-8 w-8" />
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                No hay noticias disponibles actualmente.
              </h3>

              <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500">
                Si acabas de añadir una noticia en Strapi, asegúrate de
                publicarla y de comprobar que el permiso{" "}
                <strong>find</strong> de Article está habilitado para el rol
                Public.
              </p>
            </div>
          )}
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-emerald-700 px-6 py-12 sm:px-10 lg:px-14">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-bold uppercase tracking-wider text-emerald-200">
                  ¿Quieres saber más?
                </p>

                <h2 className="mt-2 text-3xl font-black text-white sm:text-4xl">
                  Forma parte de nuestra comunidad
                </h2>

                <p className="mt-4 leading-7 text-emerald-50">
                  Conoce nuestros proyectos y descubre cómo puedes colaborar
                  con Zubia Social Euskadi.
                </p>
              </div>

              <Link
                href="/contacto"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-emerald-700 shadow-sm transition hover:bg-emerald-50"
              >
                Contacta con nosotros
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}