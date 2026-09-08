"use client";

import { FormEvent, useState } from "react";
import { useRouter, Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function LoginPage() {
  const router = useRouter();
  const t = useTranslations("LoginPage");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError(t("errors.required"));
      return;
    }

    try {
      setLoading(true);

      const baseUrl =
        process.env.NEXT_PUBLIC_STRAPI_URL ||
        "http://localhost:1337";

      const response = await fetch(
        `${baseUrl.replace(/\/$/, "")}/api/auth/local`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            identifier: email,
            password: password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.error?.message || t("errors.invalidCredentials")
        );
      }

      // Guardar sesión
      localStorage.setItem("zubia_jwt", data.jwt);

      localStorage.setItem(
        "zubia_user",
        JSON.stringify(data.user)
      );

      // Actualizar inmediatamente el estado del header
      window.dispatchEvent(new Event("zubia-auth-change"));

      // Ir a la cuenta
      router.push("/mi-cuenta");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : t("errors.unexpected")
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-xl">
        {/* Título */}
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-emerald-400">
            Zubia Social Euskadi
          </p>

          <h1 className="text-4xl font-bold">
            {t("hero.title")}
          </h1>

          <p className="mt-4 text-slate-400">
            {t("hero.description")}
          </p>
        </div>

        {/* Formulario */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium"
              >
                {t("form.email")}
              </label>

              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("form.emailPlaceholder")}
                autoComplete="email"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-emerald-500"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium"
              >
                {t("form.password")}
              </label>

              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={t("form.passwordPlaceholder")}
                autoComplete="current-password"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-emerald-500"
              />
            </div>

            {/* Error */}
            {error && (
              <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                {error}
              </div>
            )}

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-emerald-600 px-5 py-3.5 font-semibold transition hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading
                ? t("form.loading")
                : t("form.submit")}
            </button>
          </form>

          {/* Registro */}
          <div className="mt-8 border-t border-slate-800 pt-6 text-center">
            <p className="text-sm text-slate-400">
              {t("register.question")}
            </p>

            <Link
              href="/registro"
              className="mt-2 inline-block font-semibold text-emerald-400 hover:text-emerald-300"
            >
              {t("register.button")}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}