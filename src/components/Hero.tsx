import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";

export default function Hero() {
  return (
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
  );
}