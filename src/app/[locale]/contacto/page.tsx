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
  CheckCircle2,
} from "lucide-react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function Contacto() {
  const t = useTranslations("ContactPage");
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
        {/* HERO */}
        <section className="relative overflow-hidden bg-slate-950 text-white">
          <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-3xl">
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

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
                {t("hero.description")}
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT CONTENT */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-5">
              {/* CONTACT INFORMATION */}
              <aside className="lg:col-span-2">
                <div className="relative h-full overflow-hidden rounded-3xl bg-slate-900 p-8 text-white shadow-xl sm:p-10">
                  <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-emerald-500/10 blur-3xl" />

                  <div className="relative">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-400/15">
                      <MessageCircle className="h-7 w-7 text-emerald-400" />
                    </div>

                    <h2 className="mt-7 text-2xl font-black">
                      {t("info.title")}
                    </h2>

                    <p className="mt-4 leading-relaxed text-slate-300">
                      {t("info.description")}
                    </p>

                    {/* Email */}
                    <div className="mt-10 flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5">
                        <Mail className="h-5 w-5 text-emerald-400" />
                      </div>

                      <div>
                        <p className="text-sm font-bold text-white">
                          {t("info.emailLabel")}
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
                          {t("info.locationLabel")}
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
                          {t("info.attentionLabel")}
                        </p>

                        <p className="mt-1 text-sm text-slate-300">
                          {t("info.attentionDescription")}
                        </p>
                      </div>
                    </div>

                    <div className="mt-12 border-t border-white/10 pt-6">
                      <div className="flex items-center gap-2 text-sm text-slate-400">
                        <Heart className="h-4 w-4 text-emerald-400" />

                        <span>{t("info.association")}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>

              {/* FORM */}
              <div className="lg:col-span-3">
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
                  {!sent ? (
                    <>
                      <div className="mb-8">
                        <span className="text-sm font-bold uppercase tracking-widest text-emerald-600">
                          {t("form.eyebrow")}
                        </span>

                        <h2 className="mt-2 text-3xl font-black text-slate-900">
                          {t("form.title")}
                        </h2>

                        <p className="mt-3 text-slate-600">
                          {t("form.description")}
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
                              {t("form.nameLabel")}
                            </label>

                            <input
                              id="name"
                              name="name"
                              type="text"
                              required
                              autoComplete="name"
                              placeholder={t("form.namePlaceholder")}
                              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="email"
                              className="mb-2 block text-sm font-bold text-slate-700"
                            >
                              {t("form.emailLabel")}
                            </label>

                            <input
                              id="email"
                              name="email"
                              type="email"
                              required
                              autoComplete="email"
                              placeholder={t("form.emailPlaceholder")}
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
                            {t("form.subjectLabel")}
                          </label>

                          <input
                            id="subject"
                            name="subject"
                            type="text"
                            required
                            placeholder={t("form.subjectPlaceholder")}
                            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
                          />
                        </div>

                        {/* Message */}
                        <div>
                          <label
                            htmlFor="message"
                            className="mb-2 block text-sm font-bold text-slate-700"
                          >
                            {t("form.messageLabel")}
                          </label>

                          <textarea
                            id="message"
                            name="message"
                            required
                            rows={7}
                            placeholder={t("form.messagePlaceholder")}
                            className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
                          />
                        </div>

                        {/* Privacy */}
                        <div className="rounded-xl bg-slate-50 p-4">
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />

                            <p className="text-xs leading-relaxed text-slate-500">
                              {t("form.privacy")}
                            </p>
                          </div>
                        </div>

                        {/* Submit */}
                        <button
                          type="submit"
                          className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-4 font-bold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-500/20"
                        >
                          {t("form.submit")}

                          <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </button>
                      </form>
                    </>
                  ) : (
                    /* SUCCESS */
                    <div className="flex min-h-[520px] flex-col items-center justify-center text-center">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                        <CheckCircle2 className="h-10 w-10" />
                      </div>

                      <h2 className="mt-7 text-3xl font-black text-slate-900">
                        {t("success.title")}
                      </h2>

                      <p className="mt-4 max-w-md leading-relaxed text-slate-600">
                        {t("success.description")}
                      </p>

                      <button
                        onClick={() => setSent(false)}
                        className="mt-8 rounded-xl border border-slate-300 bg-white px-6 py-3 font-bold text-slate-700 transition hover:border-emerald-300 hover:text-emerald-700"
                      >
                        {t("success.button")}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
 
      </main>

      <Footer />
    </div>
  );
}