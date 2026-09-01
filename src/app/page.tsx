import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import NewsCard from "@/components/NewsCard";
import CtaSection from "@/components/CtaSection";
import Link from "next/link";
import { ArrowRight, Heart, Users, Newspaper } from "lucide-react";
import { fetchFromStrapi } from "@/lib/strapi";

// تعريف أنواع البيانات لتفادي أخطاء TypeScript
interface StrapiItem {
  id: number | string;
  documentId?: string;
  attributes?: Record<string, any>;
  [key: string]: any;
}

export default async function Home() {
  // جلب البيانات بشكل آمن لمنع انهيار الصفحة في حال وجود خطأ في الـ API
  let projects: StrapiItem[] = [];
  let newsList: StrapiItem[] = [];

  try {
    const [projectsRes, newsRes] = await Promise.all([
      fetchFromStrapi("projects"),
      fetchFromStrapi("articles"),
    ]);

    projects = projectsRes?.data || [];
    newsList = newsRes?.data || [];
  } catch (error) {
    console.error("Error loading home page data:", error);
  }

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 text-white">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
            <div className="max-w-3xl space-y-6">
              <span className="inline-block rounded-full bg-emerald-500/20 px-4 py-1.5 text-sm font-semibold text-emerald-300 backdrop-blur-sm">
                Vitoria-Gasteiz · Euskadi
              </span>
              <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
                Apoyo e Integración Social para Personas Migrantes
              </h1>
              <p className="text-lg leading-relaxed text-slate-300 sm:text-xl">
                Promovemos la inclusión sociocultural, la orientación y el acompañamiento comunitario en Euskadi.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/proyectos" className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3.5 text-base font-bold text-white shadow-lg transition hover:bg-emerald-500">
                  Conoce nuestros proyectos <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Pillars Section */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate-900">Acompañamiento</h3>
                <p className="mt-2 text-slate-600 leading-relaxed">Orientación e información social y cultural para la integración en la comunidad.</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate-900">Solidaridad</h3>
                <p className="mt-2 text-slate-600 leading-relaxed">Creación de redes comunitarias y espacios de encuentro e intercambio cultural.</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <Newspaper className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate-900">Actividades</h3>
                <p className="mt-2 text-slate-600 leading-relaxed">Talleres, eventos culturales y jornadas divulgativas abiertas a toda la ciudadanía.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Preview Section */}
        {projects.length > 0 && (
          <section className="py-12 bg-white border-t border-slate-200">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-end mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900">Proyectos Destacados</h2>
                  <p className="text-slate-600 mt-2">Iniciativas para fortalecer nuestra comunidad</p>
                </div>
                <Link href="/proyectos" className="text-emerald-600 hover:text-emerald-700 font-semibold flex items-center gap-1">
                  Ver todos <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projects.slice(0, 3).map((item, index) => {
                  const data = item.attributes || item;
                  const itemKey = item.id || item.documentId || index;
                  return <ProjectCard key={itemKey} project={data} />;
                })}
              </div>
            </div>
          </section>
        )}

        {/* News Preview Section */}
        {newsList.length > 0 && (
          <section className="py-12 bg-slate-50 border-t border-slate-200">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-end mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900">Últimas Noticias</h2>
                  <p className="text-slate-600 mt-2">Novedades y actividades recientes</p>
                </div>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {newsList.slice(0, 3).map((item, index) => {
                  const data = item.attributes || item;
                  const itemKey = item.id || item.documentId || index;
                  return <NewsCard key={itemKey} news={data} />;
                })}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <CtaSection />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}