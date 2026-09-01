"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, MapPin, Send } from "lucide-react";

export default function Contacto() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // هنا يمكنك إضافة منطق إرسال البيانات مستقبلاً
  };

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Header />

      <main className="flex-1">
        {/* Header Hero */}
        <section className="bg-white border-b border-slate-200 py-12 px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-black text-slate-900 sm:text-5xl">Contacto</h1>
            <p className="mt-4 text-lg text-slate-600">
              Formulario de contacto y ubicación en Vitoria-Gasteiz.
            </p>
          </div>
        </section>

        {/* Form and Info Section */}
        <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Details Card */}
            <div className="bg-slate-900 text-white p-8 rounded-2xl flex flex-col justify-between shadow-lg">
              <div>
                <h2 className="text-2xl font-bold mb-6">Información de contacto</h2>
                <p className="text-slate-300 text-sm leading-relaxed mb-8">
                  ¿Tienes alguna pregunta o deseas colaborar con la asociación? Ponte en contacto con nosotros.
                </p>

                <div className="space-y-6 text-sm">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Ubicación</p>
                      <p className="text-slate-300">Vitoria-Gasteiz, Araba/Álava</p>
                      <p className="text-slate-400 text-xs">País Vasco / Euskadi</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <Mail className="w-5 h-5 text-emerald-400 shrink-0" />
                    <div>
                      <p className="font-semibold">Correo Electrónico</p>
                      <p className="text-slate-300">contacto@zubiasocial.org</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-6 border-t border-slate-800 text-xs text-slate-400">
                Asociación Zubia Social Euskadi
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Envíanos un mensaje</h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Nombre completo</label>
                    <input
                      type="text"
                      placeholder="Tu nombre"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Correo electrónico</label>
                    <input
                      type="email"
                      placeholder="tu@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Asunto</label>
                  <input
                    type="text"
                    placeholder="Consulta sobre..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Mensaje</label>
                  <textarea
                    rows={5}
                    placeholder="Escribe tu mensaje aquí..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-sm transition"
                >
                  <Send className="w-4 h-4" /> Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}