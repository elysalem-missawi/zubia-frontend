"use client";

import { HeartHandshake, Mail, MapPin, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-slate-950 text-slate-300">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]">
          {/* Organization */}
          <div className="max-w-md">
            <Link
              href="/"
              className="group inline-flex items-center gap-3"
              aria-label="Zubia Social - Inicio"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-lg shadow-emerald-900/30 transition-transform duration-300 group-hover:scale-105">
                <HeartHandshake className="h-6 w-6" />
              </div>

              <div>
                <div className="text-xl font-black tracking-tight text-white">
                  Zubia Social
                </div>

                <div className="text-xs font-medium text-emerald-400">
                  Euskadi · Vitoria-Gasteiz
                </div>
              </div>
            </Link>

            <p className="mt-6 text-sm leading-7 text-slate-400">
              {t("description")}
            </p>

            <div className="mt-6 h-px w-20 bg-emerald-500/60" />
          </div>

          {/* Association */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              {t("association.title")}
            </h3>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link
                  href="/sobre-nosotros"
                  className="transition-colors hover:text-emerald-400"
                >
                  {t("association.about")}
                </Link>
              </li>

              <li>
                <Link
                  href="/proyectos"
                  className="transition-colors hover:text-emerald-400"
                >
                  {t("association.projects")}
                </Link>
              </li>

              <li>
                <Link
                  href="/noticias"
                  className="transition-colors hover:text-emerald-400"
                >
                  {t("association.news")}
                </Link>
              </li>

              <li>
                <Link
                  href="/contacto"
                  className="transition-colors hover:text-emerald-400"
                >
                  {t("association.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              {t("information.title")}
            </h3>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link
                  href="/politica-privacidad"
                  className="transition-colors hover:text-emerald-400"
                >
                  {t("information.privacy")}
                </Link>
              </li>

              <li>
                <Link
                  href="/aviso-legal"
                  className="transition-colors hover:text-emerald-400"
                >
                  {t("information.legal")}
                </Link>
              </li>

              <li>
                <Link
                  href="/politica-cookies"
                  className="transition-colors hover:text-emerald-400"
                >
                  {t("information.cookies")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              {t("contact.title")}
            </h3>

            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />

                <span>{t("contact.location")}</span>
              </li>

              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />

                <a
                  href="mailto:info@zubiasocial.eus"
                  className="transition-colors hover:text-emerald-400"
                >
                  info@zubiasocial.eus
                </a>
              </li>

              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />

                <a
                  href="tel:+34000000000"
                  className="transition-colors hover:text-emerald-400"
                >
                  {t("contact.phone")}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-xs text-slate-500 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>{t("copyright")}</p>

          <p className="text-slate-600">
            {t("rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}