import Link from "next/link";
import {
  HeartHandshake,
  MapPin,
  Mail,
  Phone,
  ArrowRight,
} from "lucide-react";

const footerLinks = [
  { href: "/sobre-nosotros", label: "Sobre Nosotros" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/noticias", label: "Noticias" },
  { href: "/donar", label: "Donaciones" },
  { href: "/contacto", label: "Contacto" },
];

const contactItems = [
  {
    type: "location",
    value: "Vitoria-Gasteiz, Araba/Álava",
  },
  {
    type: "location",
    value: "País Vasco / Euskadi",
  },
  {
    type: "mailto",
    value: "hola@zubiasocial.org",
    href: "mailto:hola@zubiasocial.org",
  },
  {
    type: "tel",
    value: "+34 945 000 000",
    href: "tel:+34945000000",
  },
];

export default function Footer() {
  return (
    <footer className="mt-auto bg-slate-950 text-slate-400">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="group inline-flex items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/20 transition-transform duration-300 group-hover:scale-105">
                <HeartHandshake className="h-6 w-6" />
              </div>

              <div>
                <div className="text-lg font-black text-white">
                  Zubia Social
                </div>

                <div className="text-xs font-semibold text-emerald-400">
                  Euskadi · Vitoria-Gasteiz
                </div>
              </div>
            </Link>

            <p className="mt-6 max-w-lg text-sm leading-7 text-slate-400">
              Asociación Sociocultural de Apoyo a las Personas Migrantes en
              Vitoria-Gasteiz (Araba/Álava).
            </p>

            <div className="mt-5 inline-flex rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-xs text-slate-500">
              Registro N°: AS/A/26945/2026
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Enlaces rápidos
            </h3>

            <ul className="mt-5 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm transition-colors duration-200 hover:text-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                  >
                    <ArrowRight className="h-3.5 w-3.5 opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Contacto
            </h3>

            <ul className="mt-5 space-y-4 text-sm">
              {contactItems.map((item) => {
                if (item.type === "mailto") {
                  return (
                    <li key={item.value}>
                      <a
                        href={item.href}
                        className="group flex items-start gap-3 transition-colors hover:text-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                      >
                        <Mail className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                        <span>{item.value}</span>
                      </a>
                    </li>
                  );
                }

                if (item.type === "tel") {
                  return (
                    <li key={item.value}>
                      <a
                        href={item.href}
                        className="group flex items-start gap-3 transition-colors hover:text-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                      >
                        <Phone className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                        <span>{item.value}</span>
                      </a>
                    </li>
                  );
                }

                return (
                  <li
                    key={item.value}
                    className="flex items-start gap-3"
                  >
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                    <span>{item.value}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-emerald-500/10 bg-gradient-to-r from-emerald-950/70 to-slate-900 px-6 py-6 sm:px-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="font-bold text-white">
                ¿Quieres apoyar nuestro trabajo?
              </h3>

              <p className="mt-1 text-sm text-slate-400">
                Tu colaboración puede contribuir a construir una comunidad
                más inclusiva.
              </p>
            </div>

            <Link
              href="/donar"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-600/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-500 hover:shadow-emerald-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              <HeartHandshake className="h-4 w-4" />
              Donar ahora
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-3 border-t border-slate-800 pt-6 text-center text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>
            © {new Date().getFullYear()} Asociación Zubia Social Euskadi.
          </p>

          <p>Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}