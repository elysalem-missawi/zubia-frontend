"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function RegistroPage() {
  const router = useRouter();

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setError("");
    setSuccess("");

    // التحقق من البيانات
    if (!nombre || !email || !password || !confirmPassword) {
      setError("Por favor, completa todos los campos.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    try {
      setLoading(true);

      const baseUrl =
        process.env.NEXT_PUBLIC_STRAPI_URL ||
        "http://localhost:1337";

      const response = await fetch(
        `${baseUrl.replace(/\/$/, "")}/api/auth/local/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: nombre,
            email: email,
            password: password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.error?.message ||
            "No se ha podido crear la cuenta."
        );
      }

      // حفظ الجلسة في LocalStorage
      localStorage.setItem("zubia_jwt", data.jwt);
      localStorage.setItem(
        "zubia_user",
        JSON.stringify(data.user)
      );

      // إشعار التطبيق بتحديث الجلسة
      window.dispatchEvent(new Event("storage"));

      setSuccess("¡Cuenta creada correctamente!");

      // التوجيه إلى صفحة الحساب
      setTimeout(() => {
        router.push("/mi-cuenta");
        router.refresh();
      }, 800);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Ha ocurrido un error inesperado."
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
            Crear una cuenta
          </h1>

          <p className="mt-4 text-slate-400">
            Únete a nuestra comunidad.
          </p>
        </div>

        {/* Formulario */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl sm:p-8">

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Nombre */}
            <div>
              <label
                htmlFor="nombre"
                className="mb-2 block text-sm font-medium"
              >
                Nombre de usuario
              </label>

              <input
                id="nombre"
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Tu nombre"
                autoComplete="username"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-emerald-500"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium"
              >
                Correo electrónico
              </label>

              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                autoComplete="email"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-emerald-500"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium"
              >
                Contraseña
              </label>

              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Mínimo 6 caracteres"
                autoComplete="new-password"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-emerald-500"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-2 block text-sm font-medium"
              >
                Confirmar contraseña
              </label>

              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) =>
                  setConfirmPassword(e.target.value)
                }
                placeholder="Repite tu contraseña"
                autoComplete="new-password"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-emerald-500"
              />
            </div>

            {/* Error */}
            {error && (
              <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                {error}
              </div>
            )}

            {/* Success */}
            {success && (
              <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
                {success}
              </div>
            )}

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-emerald-600 px-5 py-3.5 font-semibold transition hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading
                ? "Creando cuenta..."
                : "Crear cuenta"}
            </button>
          </form>

          {/* Login */}
          <div className="mt-8 border-t border-slate-800 pt-6 text-center">
            <p className="text-sm text-slate-400">
              ¿Ya tienes una cuenta?
            </p>

            <a
              href="/login"
              className="mt-2 inline-block font-semibold text-emerald-400 hover:text-emerald-300"
            >
              Iniciar sesión
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}