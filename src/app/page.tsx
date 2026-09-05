import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import NewsCard from "@/components/NewsCard";
import CtaSection from "@/components/CtaSection";
import Link from "next/link";

import {
  ArrowRight,
  Heart,
  Users,
  Newspaper,
  Calendar,
  Award,
  Target,
  UserCheck,
} from "lucide-react";

import { fetchFromStrapi } from "@/lib/strapi";

interface StrapiItem {
  id: number | string;
  documentId?: string;
  attributes?: Record<string, any>;
  [key: string]: any;
}

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function Home() {
  let projects: StrapiItem[] = [];
  let newsList: StrapiItem[] = [];

  try {
    const [projectsRes, newsRes] = await Promise.all([
      fetchFromStrapi("projects"),
      fetchFromStrapi("articles"),
    ]);

    projects = Array.isArray(projectsRes?.data)
      ? projectsRes.data
      : [];

    newsList = Array.isArray(newsRes?.data)
      ? newsRes.data
      : [];
  } catch (error) {
    console.error("Error loading home page data:", error);
  }

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Header />

      <main className="flex-1">

        {/* =====================================================
            HERO
        ====================================================== */}
        <section className="relative overflow-hidden bg-slate-950 text-white">

          {/* Decorative background */}
          <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">

            <div className="grid items-center gap-14 lg:grid-cols-2">

              {/* Hero text */}
              <div className="max-w-2xl">

                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Vitoria-Gasteiz · Euskadi
                </div>

                <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                  Construimos
                  <span className="block text-emerald-400">
                    puentes, no barreras.
                  </span>
                </h1>

                <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300 sm:text-xl">
                  Acompañamos a personas migrantes en Euskadi,
                  promoviendo la inclusión, la autonomía y una
                  convivencia intercultural basada en la solidaridad.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">

                  <Link
                    href="/proyectos"
                    className="group inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 font-bold text-white shadow-lg shadow-emerald-900/30 transition hover:bg-emerald-400"
                  >
                    Conoce nuestros proyectos
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <Link
                    href="/contacto"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 font-bold text-white backdrop-blur transition hover:bg-white/10"
                  >
                    Contacta con nosotros
                  </Link>

                </div>

              </div>

              {/* Hero visual */}
              <div className="relative hidden lg:block">

                <div className="relative mx-auto max-w-md">

                  <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-emerald-400/20 to-teal-500/5 blur-2xl" />

                  <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-emerald-500/20 via-slate-800 to-slate-900 p-8 shadow-2xl">

                    <div className="flex h-72 flex-col justify-between">

                      <div className="flex items-center justify-between">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-400/20">
                          <Heart className="h-7 w-7 text-emerald-300" />
                        </div>

                        <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-slate-300">
                          Zubia Social
                        </span>
                      </div>

                      <div>
                        <p className="text-sm font-medium text-emerald-300">
                          Nuestra misión
                        </p>

                        <p className="mt-2 text-2xl font-bold leading-snug">
                          Una comunidad donde todas las personas tengan
                          oportunidades para crecer.
                        </p>
                      </div>

                      <div className="flex gap-2">
                        <span className="h-2 w-16 rounded-full bg-emerald-400" />
                        <span className="h-2 w-8 rounded-full bg-emerald-400/40" />
                        <span className="h-2 w-4 rounded-full bg-emerald-400/20" />
                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>
          </div>
        </section>


        {/* =====================================================
            VALUES
        ====================================================== */}
        <section className="border-b border-slate-200 bg-white py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="mx-auto mb-10 max-w-2xl text-center">
              <span className="text-sm font-bold uppercase tracking-widest text-emerald-600">
                Lo que hacemos
              </span>

              <h2 className="mt-2 text-3xl font-black text-slate-900 sm:text-4xl">
                Acompañamos. Conectamos. Transformamos.
              </h2>

              <p className="mt-4 text-slate-600">
                Trabajamos junto a las personas y la comunidad para
                construir una sociedad más abierta e inclusiva.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">

              <div className="group rounded-2xl border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <Users className="h-6 w-6" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  Acompañamiento
                </h3>

                <p className="mt-3 leading-relaxed text-slate-600">
                  Orientación e información social y cultural para
                  facilitar la integración y la autonomía.
                </p>
              </div>


              <div className="group rounded-2xl border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <Heart className="h-6 w-6" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  Comunidad
                </h3>

                <p className="mt-3 leading-relaxed text-slate-600">
                  Creamos redes de apoyo y espacios donde compartir,
                  participar y sentirse parte de la comunidad.
                </p>
              </div>


              <div className="group rounded-2xl border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <Newspaper className="h-6 w-6" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  Actividades
                </h3>

                <p className="mt-3 leading-relaxed text-slate-600">
                  Talleres, encuentros culturales y actividades abiertas
                  para toda la ciudadanía.
                </p>
              </div>

            </div>
          </div>
        </section>


        {/* =====================================================
            ABOUT
        ====================================================== */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="grid items-center gap-12 lg:grid-cols-2">

              <div>

                <span className="text-sm font-bold uppercase tracking-widest text-emerald-600">
                  Quiénes somos
                </span>

                <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                  Construyendo puentes hacia una sociedad inclusiva
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-slate-600">
                  Somos una asociación sin ánimo de lucro fundada en
                  Vitoria-Gasteiz con el propósito de derribar barreras
                  y fomentar la convivencia intercultural.
                </p>

                <p className="mt-4 leading-relaxed text-slate-600">
                  Creemos en el poder de la comunidad para transformar
                  vidas, ofreciendo herramientas, acompañamiento y
                  oportunidades a quienes comienzan un nuevo camino
                  en Euskadi.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">

                  <div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm">
                    <div className="rounded-full bg-emerald-100 p-2 text-emerald-700">
                      <Target className="h-5 w-5" />
                    </div>

                    <span className="text-sm font-bold text-slate-700">
                      Empoderamiento social
                    </span>
                  </div>

                  <div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm">
                    <div className="rounded-full bg-emerald-100 p-2 text-emerald-700">
                      <UserCheck className="h-5 w-5" />
                    </div>

                    <span className="text-sm font-bold text-slate-700">
                      Acompañamiento personal
                    </span>
                  </div>

                </div>

                <Link
                  href="/sobre-nosotros"
                  className="mt-8 inline-flex items-center gap-2 font-bold text-emerald-700 transition hover:text-emerald-800"
                >
                  Conoce nuestra historia
                  <ArrowRight className="h-4 w-4" />
                </Link>

              </div>


              {/* Impact stats */}
              <div className="overflow-hidden rounded-3xl bg-slate-900 shadow-2xl">

                <div className="p-8 sm:p-10">

                  <p className="text-sm font-bold uppercase tracking-widest text-emerald-400">
                    Nuestro impacto
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-white">
                    Juntos conseguimos más
                  </h3>

                  <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/10">

                    <div className="bg-slate-900 p-6 text-center">
                      <Calendar className="mx-auto h-7 w-7 text-emerald-400" />
                      <p className="mt-3 text-3xl font-black text-white">
                        4+
                      </p>
                      <p className="mt-1 text-sm text-slate-400">
                        Años de impacto
                      </p>
                    </div>

                    <div className="bg-slate-900 p-6 text-center">
                      <Users className="mx-auto h-7 w-7 text-emerald-400" />
                      <p className="mt-3 text-3xl font-black text-white">
                        200+
                      </p>
                      <p className="mt-1 text-sm text-slate-400">
                        Personas atendidas
                      </p>
                    </div>

                    <div className="bg-slate-900 p-6 text-center">
                      <Heart className="mx-auto h-7 w-7 text-emerald-400" />
                      <p className="mt-3 text-3xl font-black text-white">
                        30+
                      </p>
                      <p className="mt-1 text-sm text-slate-400">
                        Voluntarios activos
                      </p>
                    </div>

                    <div className="bg-slate-900 p-6 text-center">
                      <Award className="mx-auto h-7 w-7 text-emerald-400" />
                      <p className="mt-3 text-3xl font-black text-white">
                        12
                      </p>
                      <p className="mt-1 text-sm text-slate-400">
                        Proyectos realizados
                      </p>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* =====================================================
            PROJECTS
        ====================================================== */}
        {projects.length > 0 && (
          <section className="border-t border-slate-200 bg-white py-20">

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

              <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

                <div>
                  <span className="text-sm font-bold uppercase tracking-widest text-emerald-600">
                    Nuestro trabajo
                  </span>

                  <h2 className="mt-2 text-3xl font-black text-slate-900 sm:text-4xl">
                    Proyectos que generan impacto
                  </h2>

                  <p className="mt-3 max-w-2xl text-slate-600">
                    Iniciativas pensadas para fortalecer la autonomía,
                    la participación y la convivencia.
                  </p>
                </div>

                <Link
                  href="/proyectos"
                  className="inline-flex shrink-0 items-center gap-2 font-bold text-emerald-700 hover:text-emerald-800"
                >
                  Ver todos
                  <ArrowRight className="h-4 w-4" />
                </Link>

              </div>

              <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">

                {projects.slice(0, 3).map((item, index) => {

                  const data = item.attributes || item;

                  const itemKey =
                    item.documentId ||
                    item.id ||
                    index;

                  return (
                    <ProjectCard
                      key={itemKey}
                      project={data}
                    />
                  );
                })}

              </div>

            </div>
          </section>
        )}


        {/* =====================================================
            NEWS
        ====================================================== */}
        {newsList.length > 0 && (
          <section className="border-t border-slate-200 bg-slate-50 py-20">

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

              <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

                <div>
                  <span className="text-sm font-bold uppercase tracking-widest text-emerald-600">
                    Actualidad
                  </span>

                  <h2 className="mt-2 text-3xl font-black text-slate-900 sm:text-4xl">
                    Últimas noticias
                  </h2>

                  <p className="mt-3 text-slate-600">
                    Descubre nuestras últimas actividades y novedades.
                  </p>
                </div>

                <Link
                  href="/noticias"
                  className="inline-flex shrink-0 items-center gap-2 font-bold text-emerald-700 hover:text-emerald-800"
                >
                  Ver todas
                  <ArrowRight className="h-4 w-4" />
                </Link>

              </div>

              <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">

                {newsList.slice(0, 3).map((item, index) => {

                  const data = item.attributes || item;

                  const itemKey =
                    item.documentId ||
                    item.id ||
                    index;

                  return (
                    <NewsCard
                      key={itemKey}
                      news={data}
                    />
                  );
                })}

              </div>

            </div>
          </section>
        )}


        {/* =====================================================
            COMMUNITY CTA
        ====================================================== */}
        <section className="bg-white py-20">

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-700 px-6 py-14 text-center text-white shadow-2xl sm:px-12">

              <div className="mx-auto max-w-3xl">

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                  <Heart className="h-7 w-7" />
                </div>

                <h2 className="mt-6 text-3xl font-black sm:text-4xl">
                  Tú también puedes formar parte
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-emerald-50">
                  Una sociedad inclusiva se construye entre todas las
                  personas. Conoce nuestro trabajo, colabora con nosotros
                  o simplemente ponte en contacto.
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-4">

                  <Link
                    href="/contacto"
                    className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-emerald-700 shadow-lg transition hover:bg-emerald-50"
                  >
                    Contacta con nosotros
                    <ArrowRight className="h-5 w-5" />
                  </Link>

                  <Link
                    href="/proyectos"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 font-bold text-white transition hover:bg-white/20"
                  >
                    Conoce nuestros proyectos
                  </Link>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            EXISTING CTA
        ====================================================== */}
        <section className="bg-slate-50 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <CtaSection />
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}