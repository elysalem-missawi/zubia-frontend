"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { HeartHandshake, Menu, X, Sparkles } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // تأثير تغيير الخلفية عند التمرير (scrolling)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-xl shadow-slate-900/5"
          : "bg-white/60 backdrop-blur-md border-b border-white/30"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo - مع تأثير توهج خفيف */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/25 transition-all duration-300 group-hover:scale-105 group-hover:shadow-emerald-500/50">
            <HeartHandshake className="h-6 w-6" />
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-400 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-50"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tight text-slate-900 transition-colors group-hover:text-emerald-700">
              Zubia Social
            </span>
            <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600">
              <Sparkles className="h-3 w-3 text-amber-400" />
              Euskadi · Vitoria-Gasteiz
            </span>
          </div>
        </Link>

        {/* Desktop Navigation - روابط بأسلوب أنيق */}
        <nav className="hidden items-center gap-1 md:flex">
          {[
            { href: "/sobre-nosotros", label: "Sobre Nosotros" },
            { href: "/proyectos", label: "Proyectos" },
            { href: "/noticias", label: "Noticias" },
            { href: "/contacto", label: "Contacto" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition-all duration-300 hover:text-emerald-700 hover:bg-emerald-50/80"
            >
              {item.label}
              {/* شريط سفلي متحرك عند التمرير */}
              <span className="absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 transition-all duration-300 group-hover:w-1/2"></span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* زر التبرع - بتصميم متوهج */}
          <Link
            href="/donar"
            className="group relative hidden overflow-hidden rounded-xl bg-gradient-to-r from-emerald-600 to-cyan-600 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-emerald-500/30 transition-all hover:scale-105 hover:shadow-emerald-500/50 sm:block"
          >
            <span className="relative z-10">🤝 Donar</span>
            <span className="absolute inset-0 -z-10 bg-gradient-to-r from-emerald-700 to-cyan-700 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
            <span className="absolute inset-0 -z-10 animate-pulse-glow rounded-xl bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 blur-2xl"></span>
          </Link>

          {/* زر القائمة (للجوال) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative rounded-xl p-2.5 text-slate-700 transition-all hover:bg-emerald-50/80 hover:text-emerald-600 md:hidden"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 transition-transform duration-300 rotate-90" />
            ) : (
              <Menu className="h-6 w-6 transition-transform duration-300" />
            )}
          </button>
        </div>
      </div>

      {/* القائمة المنسدلة للجوال - بتأثير زجاجي وحواف ناعمة */}
      {isOpen && (
        <div className="mx-4 mb-4 rounded-2xl border border-white/20 bg-white/90 backdrop-blur-xl shadow-2xl shadow-slate-900/10 md:hidden">
          <nav className="flex flex-col gap-1 p-4">
            {[
              { href: "/sobre-nosotros", label: "Sobre Nosotros" },
              { href: "/proyectos", label: "Proyectos" },
              { href: "/noticias", label: "Noticias" },
              { href: "/contacto", label: "Contacto" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-semibold text-slate-700 transition-all hover:bg-gradient-to-r hover:from-emerald-50/50 hover:to-cyan-50/50 hover:text-emerald-700"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/donar"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-xl bg-gradient-to-r from-emerald-600 to-cyan-600 py-3.5 text-center text-base font-bold text-white shadow-lg shadow-emerald-500/30 transition-all hover:scale-[1.02]"
            >
              🤝 Donar ahora
            </Link>
          </nav>
        </div>
      )}

      {/* تحسين CSS للحركات المخصصة */}
      <style jsx>{`
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
      `}</style>
    </header>
  );
}