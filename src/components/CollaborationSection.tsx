import {
  ArrowRight,
  BriefcaseBusiness,
  GraduationCap,
  HandHeart,
  HeartHandshake,
  Users,
} from "lucide-react";

import { Link } from "@/i18n/routing";

export default function CollaborationSection() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">

          <div className="flex justify-center">
            <HeartHandshake className="h-12 w-12 text-emerald-600" />
          </div>

          <div className="mt-5 text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
            COLABORACIÓN
          </div>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Juntos construimos un futuro mejor
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-500">
            En Zubia creemos en el poder de la comunidad. Colabora con
            nosotros y forma parte del cambio social en Euskadi.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {/* Donation */}
          <article className="group flex min-h-[345px] flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl">

            <div className="flex h-18 w-18 items-center justify-center rounded-full bg-emerald-50">
              <HandHeart className="h-9 w-9 text-emerald-600" />
            </div>

            <h3 className="mt-7 text-xl font-extrabold text-slate-900">
              Haz una Donación
            </h3>

            <p className="mt-4 flex-1 text-sm leading-7 text-slate-500">
              Tu apoyo nos permite seguir ofreciendo programas de
              acompañamiento, formación e integración comunitaria en Euskadi.
            </p>

            <Link
              href="/contacto"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-emerald-600 transition-colors hover:text-emerald-700"
            >
              Donar ahora
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </article>

          {/* Volunteer */}
          <article className="group flex min-h-[345px] flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl">

            <div className="flex h-18 w-18 items-center justify-center rounded-full bg-emerald-50">
              <Users className="h-9 w-9 text-emerald-600" />
            </div>

            <h3 className="mt-7 text-xl font-extrabold text-slate-900">
              Hazte Voluntario/a
            </h3>

            <p className="mt-4 flex-1 text-sm leading-7 text-slate-500">
              Comparte tu tiempo, tus habilidades y tu experiencia. Tu
              compromiso marca la diferencia en la vida de muchas personas.
            </p>

            <Link
              href="/contacto"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-emerald-600 transition-colors hover:text-emerald-700"
            >
              Únete al equipo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </article>

          {/* Collaboration */}
          <article className="group flex min-h-[345px] flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl">

            <div className="flex h-18 w-18 items-center justify-center rounded-full bg-emerald-50">
              <BriefcaseBusiness className="h-9 w-9 text-emerald-600" />
            </div>

            <h3 className="mt-7 text-xl font-extrabold text-slate-900">
              Colabora con Nosotros
            </h3>

            <p className="mt-4 flex-1 text-sm leading-7 text-slate-500">
              Empresas, instituciones y entidades pueden sumarse a nuestro
              proyecto de inclusión y cohesión social.
            </p>

            <Link
              href="/contacto"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-emerald-600 transition-colors hover:text-emerald-700"
            >
              Más información
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </article>

          {/* Projects */}
          <article className="group flex min-h-[345px] flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl">

            <div className="flex h-18 w-18 items-center justify-center rounded-full bg-emerald-50">
              <GraduationCap className="h-9 w-9 text-emerald-600" />
            </div>

            <h3 className="mt-7 text-xl font-extrabold text-slate-900">
              Apoya nuestros Proyectos
            </h3>

            <p className="mt-4 flex-1 text-sm leading-7 text-slate-500">
              Contribuye al desarrollo de iniciativas educativas, sociales y
              culturales que generan oportunidades reales.
            </p>

            <Link
              href="/proyectos"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-emerald-600 transition-colors hover:text-emerald-700"
            >
              Conoce nuestros proyectos
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </article>

        </div>
      </div>
    </section>
  );
}