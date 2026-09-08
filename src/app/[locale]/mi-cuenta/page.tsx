"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  User,
  Mail,
  LogOut,
  ArrowRight,
  Loader2,
} from "lucide-react";

type UserData = {
  id?: number;
  username?: string;
  email?: string;
};

export default function MiCuentaPage() {
  const router = useRouter();

  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("zubia_jwt");
    const savedUser = localStorage.getItem("zubia_user");

    if (!token || !savedUser) {
      router.replace("/login");
      return;
    }

    try {
      setUser(JSON.parse(savedUser));
    } catch {
      localStorage.removeItem("zubia_jwt");
      localStorage.removeItem("zubia_user");
      window.dispatchEvent(new Event("zubia-auth-change"));
      router.replace("/login");
      return;
    }

    setLoading(false);
  }, [router]);

  function handleLogout() {
    localStorage.removeItem("zubia_jwt");
    localStorage.removeItem("zubia_user");

    window.dispatchEvent(new Event("zubia-auth-change"));

    router.push("/login");
  }

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <Loader2
          size={32}
          className="animate-spin text-emerald-400"
        />
      </main>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.18),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20">
              <User size={38} />
            </div>

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
              Zubia Social Euskadi
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Mi cuenta
            </h1>

            <p className="mt-4 text-lg text-slate-300">
              Bienvenido/a, {user.username || "usuario"} 👋
            </p>
          </div>
        </div>
      </section>

      {/* Contenido */}
      <section className="px-6 pb-20 lg:px-8">
        <div className="mx-auto max-w-3xl">

          {/* Datos */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl sm:p-8">

            <h2 className="mb-6 text-2xl font-bold">
              Datos de tu cuenta
            </h2>

            <div className="space-y-4">

              {/* Username */}
              <div className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-950 p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                  <User size={21} />
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Nombre de usuario
                  </p>

                  <p className="font-medium text-white">
                    {user.username || "No disponible"}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-950 p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                  <Mail size={21} />
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Correo electrónico
                  </p>

                  <p className="break-all font-medium text-white">
                    {user.email || "No disponible"}
                  </p>
                </div>
              </div>
            </div>

            {/* Acciones */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">

              <Link
                href="/proyectos"
                className="flex items-center justify-center gap-2 rounded-xl border border-slate-700 px-5 py-3.5 font-semibold text-slate-200 transition hover:border-emerald-500 hover:text-emerald-400"
              >
                Ver proyectos
                <ArrowRight size={19} />
              </Link>

              <button
                type="button"
                onClick={handleLogout}
                className="flex items-center justify-center gap-2 rounded-xl bg-red-500/10 px-5 py-3.5 font-semibold text-red-300 transition hover:bg-red-500/20"
              >
                <LogOut size={19} />
                Cerrar sesión
              </button>

            </div>
          </div>

          {/* Información */}
          <div className="mt-6 rounded-2xl border border-emerald-500/10 bg-emerald-500/5 p-6">
            <h3 className="font-semibold text-emerald-400">
              Gracias por formar parte de nuestra comunidad.
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Desde tu cuenta podrás acceder a las próximas
              funcionalidades de Zubia Social Euskadi.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}