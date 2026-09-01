import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Target, Heart, Award } from "lucide-react";

export default function SobreNosotros() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Header />
      
      <main className="flex-1">
        {/* Header Hero Section */}
        <section className="bg-white border-b border-slate-200 py-16 px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-black text-slate-900 sm:text-5xl">
              Sobre Nosotros
            </h1>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Asociación Sociocultural de Apoyo a las Personas Migrantes en Vitoria-Gasteiz.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 space-y-16">
          {/* Misión y Visión */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Nuestra Misión</h2>
              <p className="text-slate-600 leading-relaxed">
                Promover la inclusión social, la convivencia intercultural y el acompañamiento integral de las personas migrantes en Vitoria-Gasteiz y el Territorio Histórico de Álava, garantizando la igualdad de derechos y oportunidades.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Nuestros Valores</h2>
              <p className="text-slate-600 leading-relaxed">
                Basamos nuestra labor en la solidaridad, la diversidad, la empatía y la transparencia. Trabamos para crear espacios seguros y comunidades inclusivas libres de discriminación.
              </p>
            </div>
          </div>

          {/* Estadísticas / Impacto */}
          <div className="bg-emerald-600 text-white rounded-3xl p-8 sm:p-12 shadow-md">
            <h2 className="text-2xl font-bold mb-8 text-center">Compromiso en Vitoria-Gasteiz</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-4xl font-black mb-2">+100</p>
                <p className="text-emerald-100 text-sm">Personas atendidas</p>
              </div>
              <div>
                <p className="text-4xl font-black mb-2">Multilingüe</p>
                <p className="text-emerald-100 text-sm">Atención accesible</p>
              </div>
              <div>
                <p className="text-4xl font-black mb-2">100%</p>
                <p className="text-emerald-100 text-sm">Compromiso social</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}