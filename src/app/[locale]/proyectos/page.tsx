import { fetchFromStrapi } from "@/lib/strapi";
import ProjectCard from "@/components/ProjectCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Heart,
  Users,
  HandHeart,
  Sparkles,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";

export const dynamic = "force-dynamic";
export const revalidate = 0;

interface Project {
  id: number | string;
  documentId?: string;
  attributes?: Record<string, any>;
  [key: string]: any;
}

export default async function ProyectosPage() {
  const t = await getTranslations("ProjectsPage");

  let projects: Project[] = [];

  try {
    const response = await fetchFromStrapi("projects");

    projects = Array.isArray(response?.data)
      ? response.data
      : Array.isArray(response)
        ? response
        : [];
  } catch (error) {
    console.error("Failed to fetch projects:", error);
  }

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Header />

      <main className="flex-1">
        {/* =====================================================
            HERO
        ====================================================== */}
        <section className="relative overflow-hidden bg-slate-950 text-white">
          <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-300">
                <Sparkles className="h-4 w-4" />
                {t("hero.badge")}
              </div>

              <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                {t("hero.title")}
                <span className="text-emerald-400">
                  {" "}
                  {t("hero.titleHighlight")}
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-300 sm:text-xl">
                {t("hero.description")}
              </p>

              <div className="mx-auto mt-8 h-1 w-20 rounded-full bg-emerald-400" />
            </div>
          </div>
        </section>

        {/* =====================================================
            INTRO
        ====================================================== */}
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Personas */}
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <Users className="h-6 w-6" />
                </div>

                <h2 className="mt-6 text-xl font-black text-slate-900">
                  {t("intro.people.title")}
                </h2>

                <p className="mt-3 leading-relaxed text-slate-600">
                  {t("intro.people.description")}
                </p>
              </div>

              {/* Comunidad */}
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <HandHeart className="h-6 w-6" />
                </div>

                <h2 className="mt-6 text-xl font-black text-slate-900">
                  {t("intro.community.title")}
                </h2>

                <p className="mt-3 leading-relaxed text-slate-600">
                  {t("intro.community.description")}
                </p>
              </div>

              {/* Inclusión */}
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <Heart className="h-6 w-6" />
                </div>

                <h2 className="mt-6 text-xl font-black text-slate-900">
                  {t("intro.inclusion.title")}
                </h2>

                <p className="mt-3 leading-relaxed text-slate-600">
                  {t("intro.inclusion.description")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            PROJECTS
        ====================================================== */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <span className="text-sm font-bold uppercase tracking-widest text-emerald-600">
                {t("projects.eyebrow")}
              </span>

              <div className="mt-2 flex flex-col justify-between gap-4 md:flex-row md:items-end">
                <div>
                  <h2 className="text-3xl font-black text-slate-900 sm:text-4xl">
                    {t("projects.title")}
                  </h2>

                  <p className="mt-3 max-w-2xl text-slate-600">
                    {t("projects.description")}
                  </p>
                </div>

                {projects.length > 0 && (
                  <span className="text-sm font-semibold text-slate-500">
                    {projects.length}{" "}
                    {projects.length === 1
                      ? t("projects.countSingular")
                      : t("projects.countPlural")}
                  </span>
                )}
              </div>
            </div>

            {projects.length > 0 ? (
              <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((item, index) => {
                  const projectData = item.attributes
                    ? {
                        id: item.id,
                        ...item.attributes,
                      }
                    : item;

                  const itemKey =
                    item.documentId ||
                    item.id ||
                    index;

                  return (
                    <ProjectCard
                      key={itemKey}
                      project={projectData}
                      {...projectData}
                    />
                  );
                })}
              </div>
            ) : (
              /* =================================================
                 EMPTY STATE
              ================================================== */
              <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-20 text-center shadow-sm">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                  <Sparkles className="h-7 w-7" />
                </div>

                <h3 className="mt-6 text-xl font-black text-slate-900">
                  {t("empty.title")}
                </h3>

                <p className="mx-auto mt-3 max-w-lg text-slate-500">
                  {t("empty.description")}
                </p>
              </div>
            )}
          </div>
        </section>

        
      </main>

      <Footer />
    </div>
  );
}