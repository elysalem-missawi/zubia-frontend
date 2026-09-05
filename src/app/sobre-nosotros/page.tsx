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

import Link from "next/link";

export default function SobreNosotros() {
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
                Zubia Social · Vitoria-Gasteiz
              </div>

              <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                Sobre
                <span className="text-emerald-400"> Nosotros</span>
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-300 sm:text-xl">
                Asociación Sociocultural de Apoyo a las Personas Migrantes
                en Vitoria-Gasteiz.
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
                  Quiénes somos
                </span>

                <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                  Construimos puentes hacia una sociedad más inclusiva
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-slate-600">
                  Somos una asociación sociocultural comprometida con el
                  acompañamiento y apoyo a las personas migrantes en
                  Vitoria-Gasteiz y el Territorio Histórico de Álava.
                </p>

                <p className="mt-4 leading-relaxed text-slate-600">
                  Nuestro trabajo busca favorecer la inclusión social,
                  la convivencia intercultural y la igualdad de derechos
                  y oportunidades.
                </p>

                <div className="mt-8 space-y-4">

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />

                    <p className="text-slate-700">
                      Promoción de la inclusión social.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />

                    <p className="text-slate-700">
                      Fomento de la convivencia intercultural.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />

                    <p className="text-slate-700">
                      Igualdad de derechos y oportunidades.
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
                        Nuestra visión
                      </p>

                      <p className="mt-4 text-2xl font-bold leading-snug text-white sm:text-3xl">
                        Una comunidad donde todas las personas puedan
                        participar, crecer y sentirse parte.
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
                Nuestra esencia
              </span>

              <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
                Misión y valores
              </h2>

              <p className="mt-4 text-slate-600">
                Los principios que orientan nuestra labor y nuestra relación
                con las personas y la comunidad.
              </p>

            </div>


            <div className="grid gap-8 md:grid-cols-2">

              {/* Misión */}
              <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-10">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 transition group-hover:bg-emerald-600 group-hover:text-white">
                  <Target className="h-7 w-7" />
                </div>

                <h3 className="mt-7 text-2xl font-black text-slate-900">
                  Nuestra Misión
                </h3>

                <p className="mt-4 leading-relaxed text-slate-600">
                  Promover la inclusión social, la convivencia intercultural
                  y el acompañamiento integral de las personas migrantes en
                  Vitoria-Gasteiz y el Territorio Histórico de Álava,
                  garantizando la igualdad de derechos y oportunidades.
                </p>

              </div>


              {/* Valores */}
              <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-10">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 transition group-hover:bg-emerald-600 group-hover:text-white">
                  <Heart className="h-7 w-7" />
                </div>

                <h3 className="mt-7 text-2xl font-black text-slate-900">
                  Nuestros Valores
                </h3>

                <p className="mt-4 leading-relaxed text-slate-600">
                  Basamos nuestra labor en la solidaridad, la diversidad,
                  la empatía y la transparencia. Trabajamos para crear
                  espacios seguros y comunidades inclusivas libres de
                  discriminación.
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
                Lo que nos define
              </span>

              <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
                Nuestros principios
              </h2>

            </div>


            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 text-center transition hover:-translate-y-1 hover:bg-white hover:shadow-lg">

                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <HandHeart className="h-6 w-6" />
                </div>

                <h3 className="mt-5 font-bold text-slate-900">
                  Solidaridad
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Apoyo y acompañamiento desde la cercanía y el respeto.
                </p>

              </div>


              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 text-center transition hover:-translate-y-1 hover:bg-white hover:shadow-lg">

                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <Globe2 className="h-6 w-6" />
                </div>

                <h3 className="mt-5 font-bold text-slate-900">
                  Diversidad
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Valoramos las diferentes culturas, experiencias y
                  perspectivas.
                </p>

              </div>


              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 text-center transition hover:-translate-y-1 hover:bg-white hover:shadow-lg">

                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <Users className="h-6 w-6" />
                </div>

                <h3 className="mt-5 font-bold text-slate-900">
                  Empatía
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Escuchamos y acompañamos teniendo en cuenta las necesidades
                  de cada persona.
                </p>

              </div>


              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 text-center transition hover:-translate-y-1 hover:bg-white hover:shadow-lg">

                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <ShieldCheck className="h-6 w-6" />
                </div>

                <h3 className="mt-5 font-bold text-slate-900">
                  Transparencia
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Trabajamos con responsabilidad, claridad y compromiso.
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
                    Nuestro compromiso
                  </span>

                  <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                    Compromiso con Vitoria-Gasteiz
                  </h2>

                  <p className="mt-4 leading-relaxed text-emerald-50">
                    Nuestro trabajo está orientado a generar espacios de
                    apoyo, participación e inclusión para las personas
                    migrantes y para el conjunto de la comunidad.
                  </p>

                </div>


                <div className="mx-auto mt-12 grid max-w-4xl gap-px overflow-hidden rounded-2xl bg-white/20 sm:grid-cols-3">

                  <div className="bg-emerald-700/60 p-8 text-center backdrop-blur">
                    <p className="text-4xl font-black">
                      +100
                    </p>

                    <p className="mt-2 text-sm text-emerald-100">
                      Personas atendidas
                    </p>
                  </div>


                  <div className="bg-emerald-700/60 p-8 text-center backdrop-blur">
                    <p className="text-3xl font-black">
                      Multilingüe
                    </p>

                    <p className="mt-2 text-sm text-emerald-100">
                      Atención accesible
                    </p>
                  </div>


                  <div className="bg-emerald-700/60 p-8 text-center backdrop-blur">
                    <p className="text-4xl font-black">
                      100%
                    </p>

                    <p className="mt-2 text-sm text-emerald-100">
                      Compromiso social
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
              Formemos una comunidad más inclusiva
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
              Conoce nuestros proyectos, descubre nuestras actividades
              o ponte en contacto con nosotros.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">

              <Link
                href="/proyectos"
                className="group inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 font-bold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700"
              >
                Ver nuestros proyectos

                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-bold text-slate-800 transition hover:border-emerald-300 hover:text-emerald-700"
              >
                Contacta con nosotros
              </Link>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </div>
  );
}