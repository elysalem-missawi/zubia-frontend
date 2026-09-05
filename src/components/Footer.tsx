"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  HeartHandshake,
  Menu,
  Sparkles,
  X,
  UserPlus,
  LogIn,
  User,
} from "lucide-react";

const navItems = [
  { href: "/sobre-nosotros", label: "Sobre Nosotros" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/noticias", label: "Noticias" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Detectar si el usuario está autenticado
  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("zubia_jwt");
      setIsLoggedIn(Boolean(token));
    };

    checkAuth();

    // Detectar cambios de autenticación dentro de la misma pestaña
    window.addEventListener("zubia-auth-change", checkAuth);

    // Detectar cambios desde otra pestaña
    window.addEventListener("storage", checkAuth);

    return () => {
      window.removeEventListener("zubia-auth-change", checkAuth);
      window.removeEventListener("storage", checkAuth);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200/80 bg-white/90 shadow-lg shadow-slate-900/5 backdrop-blur-xl"
          : "border-b border-slate-200/60 bg-white/80 backdrop-blur-lg"
      }`}
    >
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
          aria-label="Zubia Social - Inicio"
        >
          <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/20 transition-transform duration-300 group-hover:scale-105">
            <HeartHandshake className="h-6 w-6" />

            <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>

          <div className="hidden flex-col sm:flex">
            <span className="text-xl font-black tracking-tight text-slate-900 transition-colors group-hover:text-emerald-700">
              Zubia Social
            </span>

            <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600">
              <Sparkles className="h-3 w-3 text-amber-400" />
              Euskadi · Vitoria-Gasteiz
            </span>
          </div>
        </Link>

        {/* Desktop navigation */}
        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Navegación principal"
        >
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`group relative rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 ${
                  isActive
                    ? "bg-emerald-50 text-emerald-700"
                    : "text-slate-700 hover:bg-emerald-50/70 hover:text-emerald-700"
                }`}
              >
                {item.label}

                <span
                  className={`absolute bottom-1.5 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 transition-all duration-200 ${
                    isActive ? "w-1/2" : "w-0 group-hover:w-1/2"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Desktop account actions */}
        <div className="hidden items-center gap-2 md:flex">
          {isLoggedIn ? (
            <Link
              href="/mi-cuenta"
              className="flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-emerald-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-500 hover:shadow-xl"
            >
              <User className="h-4 w-4" />
              Mi cuenta
            </Link>
          ) : (
            <>
              <Link
                href="/login"
                className="flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 hover:text-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
              >
                <LogIn className="h-4 w-4" />
                Iniciar sesión
              </Link>

              <Link
                href="/registro"
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-cyan-600 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-emerald-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-emerald-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
              >
                <UserPlus className="h-4 w-4" />
                Crear una cuenta
              </Link>
            </>
          )}
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center">
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="rounded-xl p-2.5 text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 md:hidden"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="border-t border-slate-200/80 bg-white/95 px-4 pb-5 pt-3 shadow-xl backdrop-blur-xl md:hidden"
        >
          <nav
            className="mx-auto flex max-w-7xl flex-col gap-1"
            aria-label="Menú móvil"
          >
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-xl px-4 py-3.5 text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                    isActive
                      ? "bg-emerald-50 text-emerald-700"
                      : "text-slate-700 hover:bg-slate-50 hover:text-emerald-700"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* Account buttons */}
            <div className="mt-3 grid gap-2 border-t border-slate-200 pt-4">
              {isLoggedIn ? (
                <Link
                  href="/mi-cuenta"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3.5 text-base font-bold text-white transition hover:bg-emerald-500"
                >
                  <User className="h-5 w-5" />
                  Mi cuenta
                </Link>
              ) : (
                <>
                  <Link
                    href="/login"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 py-3.5 text-base font-semibold text-slate-700 transition-colors hover:border-emerald-500 hover:text-emerald-700"
                  >
                    <LogIn className="h-5 w-5" />
                    Iniciar sesión
                  </Link>

                  <Link
                    href="/registro"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-cyan-600 py-3.5 text-base font-bold text-white shadow-lg shadow-emerald-500/20 transition-all hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                  >
                    <UserPlus className="h-5 w-5" />
                    Crear una cuenta
                  </Link>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}