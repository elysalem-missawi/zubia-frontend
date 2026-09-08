import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import NewsCard from "@/components/NewsCard";
import Hero from "@/components/Hero";
import CollaborationSection from "@/components/CollaborationSection";

import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";

import {
  ArrowRight,
  Heart,
  Users,
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
  const t = await getTranslations("Home");

  let projects: StrapiItem[] = [];
  let newsList: StrapiItem[] = [];

  try {
    const [projectsRes, newsRes] = await Promise.all([
      fetchFromStrapi("projects"),
      fetchFromStrapi("articles?populate=image"),
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
        <Hero />

        {/* =====================================================
            VALUES
        ====================================================== */}
        <section className="border-b border-slate-200 bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-600">
                {t("values.eyebrow")}
              </span>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                {t("values.title")}
              </h2>

              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                {t("values.description")}
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">

              {/* Acompañamiento */}
              <article className="group rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:bg-white hover:shadow-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 transition-colors duration-300 group-hover:bg-emerald-600 group-hover:text-white">
                  <Users className="h-7 w-7" />
                </div>

                <h3 className="mt-6 text-xl font-extrabold text-slate-950">
                  {t("values.accompaniment.title")}
                </h3>

                <p className="mt-3 leading-relaxed text-slate-600">
                  {t("values.accompaniment.description")}
                </p>
              </article>

              {/* Comunidad */}
              <article className="group rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:bg-white hover:shadow-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 transition-colors duration-300 group-hover:bg-emerald-600 group-hover:text-white">
                  <Heart className="h-7 w-7" />
                </div>

                <h3 className="mt-6 text-xl font-extrabold text-slate-950">
                  {t("values.community.title")}
                </h3>

                <p className="mt-3 leading-relaxed text-slate-600">
                  {t("values.community.description")}
                </p>
              </article>

              {/* Actividades */}
              <article className="group rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:bg-white hover:shadow-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 transition-colors duration-300 group-hover:bg-emerald-600 group-hover:text-white">
                  <Award className="h-7 w-7" />
                </div>

                <h3 className="mt-6 text-xl font-extrabold text-slate-950">
                  {t("values.activities.title")}
                </h3>

                <p className="mt-3 leading-relaxed text-slate-600">
                  {t("values.activities.description")}
                </p>
              </article>

            </div>
          </div>
        </section>

        {/* =====================================================
            ABOUT
        ====================================================== */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="grid items-center gap-12 lg:grid-cols-2">

              {/* Text */}
              <div>
                <span className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-600">
                  {t("about.eyebrow")}
                </span>

                <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                  {t("about.title")}
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-slate-600">
                  {t("about.description")}
                </p>

                <p className="mt-4 leading-relaxed text-slate-600">
                  {t("about.description2")}
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">

                  <div className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm">
                    <div className="rounded-full bg-emerald-100 p-2 text-emerald-700">
                      <Target className="h-5 w-5" />
                    </div>

                    <span className="text-sm font-bold text-slate-700">
                      {t("about.empowerment")}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm">
                    <div className="rounded-full bg-emerald-100 p-2 text-emerald-700">
                      <UserCheck className="h-5 w-5" />
                    </div>

                    <span className="text-sm font-bold text-slate-700">
                      {t("about.personalSupport")}
                    </span>
                  </div>

                </div>

                <Link
                  href="/sobre-nosotros"
                  className="mt-8 inline-flex items-center gap-2 font-bold text-emerald-700 transition hover:text-emerald-800"
                >
                  {t("about.history")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Impact */}
              <div className="overflow-hidden rounded-3xl bg-slate-900 shadow-2xl">
                <div className="p-8 sm:p-10">

                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-400">
                    {t("about.impact")}
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-white">
                    {t("about.impactTitle")}
                  </h3>

                  <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/10">

                    <div className="bg-slate-900 p-6 text-center">
                      <Calendar className="mx-auto h-7 w-7 text-emerald-400" />

                      <p className="mt-3 text-3xl font-black text-white">
                        4+
                      </p>

                      <p className="mt-1 text-sm text-slate-400">
                        {t("about.years")}
                      </p>
                    </div>

                    <div className="bg-slate-900 p-6 text-center">
                      <Users className="mx-auto h-7 w-7 text-emerald-400" />

                      <p className="mt-3 text-3xl font-black text-white">
                        200+
                      </p>

                      <p className="mt-1 text-sm text-slate-400">
                        {t("about.people")}
                      </p>
                    </div>

                    <div className="bg-slate-900 p-6 text-center">
                      <Heart className="mx-auto h-7 w-7 text-emerald-400" />

                      <p className="mt-3 text-3xl font-black text-white">
                        30+
                      </p>

                      <p className="mt-1 text-sm text-slate-400">
                        {t("about.volunteers")}
                      </p>
                    </div>

                    <div className="bg-slate-900 p-6 text-center">
                      <Award className="mx-auto h-7 w-7 text-emerald-400" />

                      <p className="mt-3 text-3xl font-black text-white">
                        12
                      </p>

                      <p className="mt-1 text-sm text-slate-400">
                        {t("about.projectsCompleted")}
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
                  <span className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-600">
                    {t("projects.eyebrow")}
                  </span>

                  <h2 className="mt-2 text-3xl font-black text-slate-950 sm:text-4xl">
                    {t("projects.title")}
                  </h2>

                  <p className="mt-3 max-w-2xl text-slate-600">
                    {t("projects.description")}
                  </p>
                </div>

                <Link
                  href="/proyectos"
                  className="inline-flex shrink-0 items-center gap-2 font-bold text-emerald-700 transition hover:text-emerald-800"
                >
                  {t("projects.viewAll")}
                  <ArrowRight className="h-4 w-4" />
                </Link>

              </div>

              <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
                {projects.slice(0, 3).map((item, index) => {
                  const data = item.attributes || item;

                  const itemKey =
                    item.documentId || item.id || index;

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
                  <span className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-600">
                    {t("news.eyebrow")}
                  </span>

                  <h2 className="mt-2 text-3xl font-black text-slate-950 sm:text-4xl">
                    {t("news.title")}
                  </h2>

                  <p className="mt-3 text-slate-600">
                    {t("news.description")}
                  </p>
                </div>

                <Link
                  href="/noticias"
                  className="inline-flex shrink-0 items-center gap-2 font-bold text-emerald-700 transition hover:text-emerald-800"
                >
                  {t("news.viewAll")}
                  <ArrowRight className="h-4 w-4" />
                </Link>

              </div>

              <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
                {newsList.slice(0, 3).map((item, index) => {
                  const data = item.attributes || item;

                  const itemKey =
                    item.documentId || item.id || index;

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
            COMMUNITY / COLLABORATION
        ====================================================== */}
        <CollaborationSection />

      </main>

      <Footer />
    </div>
  );
}