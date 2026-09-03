import Link from "next/link";

const footerLinks = [
  { href: "/sobre-nosotros", label: "Sobre Nosotros" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/noticias", label: "Noticias" },
  { href: "/donar", label: "Donaciones" },
];

const contactItems = [
  { type: "text", value: "Vitoria-Gasteiz, Araba/Álava" },
  { type: "text", value: "País Vasco / Euskadi" },
  { type: "mailto", value: "hola@zubiasocial.org", href: "mailto:hola@zubiasocial.org" },
  { type: "tel", value: "+34 945 000 000", href: "tel:+34945000000" },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-slate-900 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4 md:col-span-2">
            <h3 className="text-lg font-bold text-white">
              Asociación Zubia Social Euskadi
            </h3>

            <p className="max-w-md text-sm leading-relaxed text-slate-400">
              Asociación Sociocultural de Apoyo a las Personas Migrantes en Vitoria-Gasteiz (Araba/Álava).
            </p>

            <p className="text-xs text-slate-500">
              Registro N°: AS/A/26945/2026
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Enlaces Rápidos</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Contacto</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              {contactItems.map((item) => {
                if (item.type === "mailto" || item.type === "tel") {
                  return (
                    <li key={item.value}>
                      <a
                        href={item.href}
                        className="transition-colors hover:text-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                      >
                        {item.value}
                      </a>
                    </li>
                  );
                }

                return <li key={item.value}>{item.value}</li>;
              })}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Asociación Zubia Social Euskadi. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}