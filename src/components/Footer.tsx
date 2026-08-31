import Link from "next/link";

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
              <li><Link href="/sobre-nosotros" className="hover:text-emerald-400">Sobre Nosotros</Link></li>
              <li><Link href="/proyectos" className="hover:text-emerald-400">Proyectos</Link></li>
              <li><Link href="/noticias" className="hover:text-emerald-400">Noticias</Link></li>
              <li><Link href="/donar" className="hover:text-emerald-400">Donaciones</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Contacto</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>Vitoria-Gasteiz, Araba/Álava</li>
              <li>País Vasco / Euskadi</li>
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