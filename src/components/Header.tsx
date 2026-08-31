"use client";

import { useState } from "react";
import Link from "next/link";
import { HeartHandshake, Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600 text-white shadow-md">
            <HeartHandshake className="h-6 w-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tight text-slate-900">
              Zubia Social
            </span>
            <span className="text-xs font-semibold text-emerald-600">
              Euskadi · Vitoria-Gasteiz
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/sobre-nosotros" className="text-sm font-semibold text-slate-700 transition hover:text-emerald-600">
            Sobre Nosotros
          </Link>
          <Link href="/proyectos" className="text-sm font-semibold text-slate-700 transition hover:text-emerald-600">
            Proyectos
          </Link>
          <Link href="/noticias" className="text-sm font-semibold text-slate-700 transition hover:text-emerald-600">
            Noticias
          </Link>
          <Link href="/contacto" className="text-sm font-semibold text-slate-700 transition hover:text-emerald-600">
            Contacto
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/donar"
            className="hidden rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-bold text-white shadow transition hover:bg-emerald-700 sm:block"
          >
            Donar
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 md:hidden"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="border-b border-slate-200 bg-white px-4 pt-2 pb-6 md:hidden">
          <nav className="flex flex-col gap-4">
            <Link
              href="/sobre-nosotros"
              onClick={() => setIsOpen(false)}
              className="text-base font-semibold text-slate-700 hover:text-emerald-600"
            >
              Sobre Nosotros
            </Link>
            <Link
              href="/proyectos"
              onClick={() => setIsOpen(false)}
              className="text-base font-semibold text-slate-700 hover:text-emerald-600"
            >
              Proyectos
            </Link>
            <Link
              href="/noticias"
              onClick={() => setIsOpen(false)}
              className="text-base font-semibold text-slate-700 hover:text-emerald-600"
            >
              Noticias
            </Link>
            <Link
              href="/contacto"
              onClick={() => setIsOpen(false)}
              className="text-base font-semibold text-slate-700 hover:text-emerald-600"
            >
              Contacto
            </Link>
            <Link
              href="/donar"
              onClick={() => setIsOpen(false)}
              className="mt-2 text-center rounded-lg bg-emerald-600 py-3 text-base font-bold text-white shadow"
            >
              Donar
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}