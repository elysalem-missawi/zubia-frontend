"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import {
  Mail,
  MapPin,
  Send,
  Heart,
  Clock3,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import Link from "next/link";
import { useState } from "react";

export default function Contacto() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Preparado para conectar posteriormente con una API de correo.
    setSent(true);
  };

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

          <div className="relative mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-24">

            <div className="mx-auto max-w-3xl">

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Estamos aquí para ayudarte
              </div>

              <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                Contacta con
                <span className="text-emerald-400"> nosotros</span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
                ¿Tienes alguna pregunta, necesitas orientación o quieres
                colaborar con Zubia Social? Escríbenos.
              </p>

            </div>

          </div>
        </section>


        {/* =====================================================
            CONTACT CONTENT
        ====================================================== */}
        <section className="py-16 sm:py-20">

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="grid gap-8 lg:grid-cols-5">

              {/* =================================================
                  CONTACT INFORMATION
              ================================================== */}
              <aside className="lg:col-span-2">

                <div className="relative h-full overflow-hidden rounded-3xl bg-slate-900 p-8 text-white shadow-xl sm:p-10">

                  <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-emerald-500/10 blur-3xl" />

                  <div className="relative">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-400/15">
                      <MessageCircle className="h-7 w-7 text-emerald-400" />
                    </div>

                    <h2 className="mt-7 text-2xl font-black">
                      Estamos para escucharte
                    </h2>

                    <p className="mt-4 leading-relaxed text-slate-300">
                      Puedes ponerte en contacto con nosotros para resolver
                      tus dudas, conocer nuestros proyectos o explorar formas
                      de colaborar con la asociación.
                    </p>


                    {/* Email */}
                    <div className="mt-10 flex items-start gap-4">

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5">
                        <Mail className="h-5 w-5 text-emerald-400" />
                      </div>

                      <div>
                        <p className="text-sm font-bold text-white">
                          Correo electrónico
                        </p>

                        <a
                          href="mailto:contacto@zubiasocial.org"
                          className="mt-1 block break-all text-sm text-slate-300 transition hover:text-emerald-400"
                        >
                          contacto@zubiasocial.org
                        </a>
                      </div>

                    </div>


                    {/* Location */}
                    <div className="mt-7 flex items-start gap-4">

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5">
                        <MapPin className="h-5 w-5 text-emerald-400" />
                      </div>

                      <div>
                        <p className="text-sm font-bold text-white">
                          Ubicación
                        </p>

                        <p className="mt-1 text-sm text-slate-300">
                          Vitoria-Gasteiz, Araba/Álava
                        </p>

                        <p className="text-xs text-slate-500">
                          País Vasco / Euskadi
                        </p>
                      </div>

                    </div>


                    {/* Availability */}
                    <div className="mt-7 flex items-start gap-4">

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5">
                        <Clock3 className="h-5 w-5 text-emerald-400" />
                      </div>

                      <div>
                        <p className="text-sm font-bold text-white">
                          Atención
                        </p>

                        <p className="mt-1 text-sm text-slate-300">
                          Responderemos a tu mensaje lo antes posible.
                        </p>
                      </div>

                    </div>


                    <div className="mt-12 border-t border-white/10 pt-6">

                      <div className="flex items-center gap-2 text-sm text-slate-400">
                        <Heart className="h-4 w-4 text-emerald-400" />
                        <span>
                          Asociación Zubia Social Euskadi
                        </span>
                      </div>

                    </div>

                  </div>

                </div>

              </aside>


              {/* =================================================
                  FORM
              ================================================== */}
              <div className="lg:col-span-3">

                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">

                  {!sent ? (
                    <>
                      <div className="mb-8">

                        <span className="text-sm font-bold uppercase tracking-widest text-emerald-600">
                          Escríbenos
                        </span>

                        <h2 className="mt-2 text-3xl font-black text-slate-900">
                          Envíanos un mensaje
                        </h2>

                        <p className="mt-3 text-slate-600">
                          Completa el formulario y cuéntanos cómo podemos
                          ayudarte.
                        </p>

                      </div>


                      <form
                        className="space-y-6"
                        onSubmit={handleSubmit}
                      >

                        {/* Name + Email */}
                        <div className="grid gap-6 sm:grid-cols-2">

                          <div>
                            <label
                              htmlFor="name"
                              className="mb-2 block text-sm font-bold text-slate-700"
                            >
                              Nombre completo
                            </label>

                            <input
                              id="name"
                              name="name"
                              type="text"
                              required
                              autoComplete="name"
                              placeholder="Tu nombre"
                              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
                            />
                          </div>


                          <div>
                            <label
                              htmlFor="email"
                              className="mb-2 block text-sm font-bold text-slate-700"
                            >
                              Correo electrónico
                            </label>

                            <input
                              id="email"
                              name="email"
                              type="email"
                              required
                              autoComplete="email"
                              placeholder="tu@email.com"
                              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
                            />
                          </div>

                        </div>


                        {/* Subject */}
                        <div>

                          <label
                            htmlFor="subject"
                            className="mb-2 block text-sm font-bold text-slate-700"
                          >
                            Asunto
                          </label>

                          <input
                            id="subject"
                            name="subject"
                            type="text"
                            required
                            placeholder="¿En qué podemos ayudarte?"
                            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
                          />

                        </div>


                        {/* Message */}
                        <div>

                          <label
                            htmlFor="message"
                            className="mb-2 block text-sm font-bold text-slate-700"
                          >
                            Mensaje
                          </label>

                          <textarea
                            id="message"
                            name="message"
                            required
                            rows={7}
                            placeholder="Escribe tu mensaje aquí..."
                            className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
                          />

                        </div>


                        {/* Privacy */}
                        <div className="rounded-xl bg-slate-50 p-4">

                          <div className="flex items-start gap-3">

                            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />

                            <p className="text-xs leading-relaxed text-slate-500">
                              Utilizaremos la información que nos facilites
                              únicamente para responder a tu consulta.
                            </p>

                          </div>

                        </div>


                        {/* Submit */}
                        <button
                          type="submit"
                          className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-4 font-bold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-500/20"
                        >
                          Enviar mensaje

                          <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </button>

                      </form>
                    </>
                  ) : (

                    /* =============================================
                       SUCCESS
                    ============================================== */
                    <div className="flex min-h-[520px] flex-col items-center justify-center text-center">

                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">

                        <CheckCircle2 className="h-10 w-10" />

                      </div>

                      <h2 className="mt-7 text-3xl font-black text-slate-900">
                        ¡Gracias por escribirnos!
                      </h2>

                      <p className="mt-4 max-w-md leading-relaxed text-slate-600">
                        Hemos recibido tu mensaje. Nos pondremos en contacto
                        contigo lo antes posible.
                      </p>

                      <button
                        onClick={() => setSent(false)}
                        className="mt-8 rounded-xl border border-slate-300 bg-white px-6 py-3 font-bold text-slate-700 transition hover:border-emerald-300 hover:text-emerald-700"
                      >
                        Enviar otro mensaje
                      </button>

                    </div>

                  )}

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}
        <section className="border-t border-slate-200 bg-white py-16">

          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
              <Heart className="h-7 w-7" />
            </div>

            <h2 className="mt-6 text-2xl font-black text-slate-900 sm:text-3xl">
              ¿Quieres conocer nuestro trabajo?
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-slate-600">
              Descubre nuestros proyectos y las iniciativas que desarrollamos
              para fomentar la inclusión y la convivencia.
            </p>

            <Link
              href="/proyectos"
              className="group mt-7 inline-flex items-center gap-2 font-bold text-emerald-700 transition hover:text-emerald-800"
            >
              Ver nuestros proyectos

              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>

          </div>

        </section>

      </main>

      <Footer />
    </div>
  );
}