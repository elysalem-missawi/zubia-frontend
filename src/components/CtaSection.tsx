import Link from "next/link";
import { HeartHandshake } from "lucide-react";


export default function CtaSection() {
  return (
    <section className="my-12 rounded-3xl bg-emerald-600 px-6 py-12 text-white sm:px-12 sm:py-16">
      <div className="mx-auto max-w-4xl text-center">
        <HeartHandshake className="mx-auto h-12 w-12 text-emerald-200" />
        <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
          ¿Quieres colaborar con nosotros?
        </h2>
        <p className="mt-4 text-emerald-100 leading-relaxed sm:text-lg">
          Tu apoyo nos permite seguir ofreciendo programas de acompañamiento, formación e integración comunitaria en Euskadi.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link href="/donar" className="rounded-xl bg-white px-6 py-3.5 text-base font-bold text-emerald-900 shadow transition hover:bg-emerald-50">
            Hacer una Donación
          </Link>
          <Link href="/contacto" className="rounded-xl border border-white/30 bg-emerald-700/50 px-6 py-3.5 text-base font-bold text-white transition hover:bg-emerald-700">
            Hazte Voluntario/a
          </Link>
        </div>
      </div>
    </section>
  );
}