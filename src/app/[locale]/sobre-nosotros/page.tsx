import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Target,
  Heart,
  Users,
  ShieldCheck,
  HandHeart,
  Globe2,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";

export default async function SobreNosotros() {
  const t = await getTranslations("AboutPage");

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
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
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
            INTRODUCTION
        ====================================================== */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <span className="text-sm font-bold uppercase tracking-widest text-emerald-600">
                  {t("introduction.eyebrow")}
                </span>

                <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                  {t("introduction.title")}
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-slate-600">
                  {t("introduction.description")}
                </p>

                <p className="mt-4 leading-relaxed text-slate-600">
                  {t("introduction.description2")}
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
                    <p className="text-slate-700">
                      {t("introduction.points.inclusion")}
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
                    <p className="text-slate-700">
                      {t("introduction.points.coexistence")}
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
                    <p className="text-slate-700">
                      {t("introduction.points.equality")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Visual card */}
              <div className="relative">
                <div className="absolute -inset-4 rounded-[2rem] bg-emerald-100/60 blur-2xl" />

                <div className="relative overflow-hidden rounded-3xl bg-slate-900 p-8 shadow-2xl sm:p-10">
                  <div className="flex h-full min-h-[350px] flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-400/15">
                        <Heart className="h-7 w-7 text-emerald-400" />
                      </div>

                      <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-300">
                        Euskadi
                      </span>
                    </div>

                    <div className="mt-12">
                      <p className="text-sm font-bold uppercase tracking-widest text-emerald-400">
                        {t("introduction.visionLabel")}
                      </p>

                      <p className="mt-4 text-2xl font-bold leading-snug text-white sm:text-3xl">
                        {t("introduction.vision")}
                      </p>
                    </div>

                    <div className="mt-10 flex gap-2">
                      <span className="h-2 w-20 rounded-full bg-emerald-400" />
                      <span className="h-2 w-10 rounded-full bg-emerald-400/40" />
                      <span className="h-2 w-5 rounded-full bg-emerald-400/20" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            MISSION & VALUES
        ====================================================== */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <span className="text-sm font-bold uppercase tracking-widest text-emerald-600">
                {t("missionValues.eyebrow")}
              </span>

              <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
                {t("missionValues.title")}
              </h2>

              <p className="mt-4 text-slate-600">
                {t("missionValues.description")}
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Misión */}
              <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 transition group-hover:bg-emerald-600 group-hover:text-white">
                  <Target className="h-7 w-7" />
                </div>

                <h3 className="mt-7 text-2xl font-black text-slate-900">
                  {t("missionValues.mission.title")}
                </h3>

                <p className="mt-4 leading-relaxed text-slate-600">
                  {t("missionValues.mission.description")}
                </p>
              </div>

              {/* Valores */}
              <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 transition group-hover:bg-emerald-600 group-hover:text-white">
                  <Heart className="h-7 w-7" />
                </div>

                <h3 className="mt-7 text-2xl font-black text-slate-900">
                  {t("missionValues.values.title")}
                </h3>

                <p className="mt-4 leading-relaxed text-slate-600">
                  {t("missionValues.values.description")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            VALUES GRID
        ====================================================== */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <span className="text-sm font-bold uppercase tracking-widest text-emerald-600">
                {t("principles.eyebrow")}
              </span>

              <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
                {t("principles.title")}
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {/* Solidaridad */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 text-center transition hover:-translate-y-1 hover:bg-white hover:shadow-lg">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <HandHeart className="h-6 w-6" />
                </div>

                <h3 className="mt-5 font-bold text-slate-900">
                  {t("principles.solidarity.title")}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {t("principles.solidarity.description")}
                </p>
              </div>

              {/* Diversidad */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 text-center transition hover:-translate-y-1 hover:bg-white hover:shadow-lg">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <Globe2 className="h-6 w-6" />
                </div>

                <h3 className="mt-5 font-bold text-slate-900">
                  {t("principles.diversity.title")}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {t("principles.diversity.description")}
                </p>
              </div>

              {/* Empatía */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 text-center transition hover:-translate-y-1 hover:bg-white hover:shadow-lg">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <Users className="h-6 w-6" />
                </div>

                <h3 className="mt-5 font-bold text-slate-900">
                  {t("principles.empathy.title")}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {t("principles.empathy.description")}
                </p>
              </div>

              {/* Transparencia */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 text-center transition hover:-translate-y-1 hover:bg-white hover:shadow-lg">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 p-7 text-center transition hover:-translate-y-1 hover:bg-white hover:shadow-lg">
                  <ShieldCheck className="h-6 w-6" />
                </div>

                <h3 className="mt-5 font-bold text-slate-900">
                  {t("principles.transparency.title")}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {t("principles.transparency.description")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            IMPACT
        ====================================================== */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-emerald-600 to-teal-700 text-white shadow-2xl">
              <div className="px-6 py-14 sm:px-12 sm:py-16">
                <div className="mx-auto max-w-3xl text-center">
                  <span className="text-sm font-bold uppercase tracking-widest text-emerald-100">
                    {t("commitment.eyebrow")}
                  </span>

                  <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                    {t("commitment.title")}
                  </h2>

                  <p className="mt-4 leading-relaxed text-emerald-50">
                    {t("commitment.description")}
                  </p>
                </div>

                <div className="mx-auto mt-12 grid max-w-4xl gap-px overflow-hidden rounded-2xl bg-white/20 sm:grid-cols-3">
                  <div className="bg-emerald-700/60 p-8 text-center backdrop-blur">
                    <p className="text-4xl font-black">+100</p>

                    <p className="mt-2 text-sm text-emerald-100">
                      {t("commitment.stats.people")}
                    </p>
                  </div>

                  <div className="bg-emerald-700/60 p-8 text-center backdrop-blur">
                    <p className="text-3xl font-black">
                      {t("commitment.stats.multilingualValue")}
                    </p>

                    <p className="mt-2 text-sm text-emerald-100">
                      {t("commitment.stats.multilingualLabel")}
                    </p>
                  </div>

                  <div className="bg-emerald-700/60 p-8 text-center backdrop-blur">
                    <p className="text-4xl font-black">100%</p>

                    <p className="mt-2 text-sm text-emerald-100">
                      {t("commitment.stats.commitment")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CTA
        ====================================================== */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
              <Heart className="h-7 w-7" />
            </div>

            <h2 className="mt-6 text-3xl font-black text-slate-900 sm:text-4xl">
              {t("cta.title")}
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
              {t("cta.description")}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/proyectos"
                className="group inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 font-bold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700"
              >
                {t("cta.projectsButton")}

                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-bold text-slate-800 transition hover:border-emerald-300 hover:text-emerald-700"
              >
                {t("cta.contactButton")}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}