import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import NewsCard from "@/components/NewsCard";
import CtaSection from "@/components/CtaSection";
import Link from "next/link";
import { ArrowRight, Heart, Users, Newspaper, Quote, Calendar, Award, Target, UserCheck } from "lucide-react"; // تم إضافة أيقونات جديدة
import { fetchFromStrapi } from "@/lib/strapi";

// تعريف أنواع البيانات لتفادي أخطاء TypeScript
interface StrapiItem {
  id: number | string;
  documentId?: string;
  attributes?: Record<string, any>;
  [key: string]: any;
}

export default async function Home() {
  // جلب البيانات بشكل آمن لمنع انهيار الصفحة في حال وجود خطأ في الـ API
  let projects: StrapiItem[] = [];
  let newsList: StrapiItem[] = [];

  try {
    const [projectsRes, newsRes] = await Promise.all([
      fetchFromStrapi("projects"),
      fetchFromStrapi("articles"),
    ]);

    projects = projectsRes?.data || [];
    newsList = newsRes?.data || [];
  } catch (error) {
    console.error("Error loading home page data:", error);
  }

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 text-white">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
            <div className="max-w-3xl space-y-6">
              <span className="inline-block rounded-full bg-emerald-500/20 px-4 py-1.5 text-sm font-semibold text-emerald-300 backdrop-blur-sm">
                Vitoria-Gasteiz · Euskadi
              </span>
              <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
                Apoyo e Integración Social para Personas Migrantes
              </h1>
              <p className="text-lg leading-relaxed text-slate-300 sm:text-xl">
                Promovemos la inclusión sociocultural, la orientación y el acompañamiento comunitario en Euskadi.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/proyectos" className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3.5 text-base font-bold text-white shadow-lg transition hover:bg-emerald-500">
                  Conoce nuestros proyectos <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Pillars Section */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate-900">Acompañamiento</h3>
                <p className="mt-2 text-slate-600 leading-relaxed">Orientación e información social y cultural para la integración en la comunidad.</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate-900">Solidaridad</h3>
                <p className="mt-2 text-slate-600 leading-relaxed">Creación de redes comunitarias y espacios de encuentro e intercambio cultural.</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <Newspaper className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate-900">Actividades</h3>
                <p className="mt-2 text-slate-600 leading-relaxed">Talleres, eventos culturales y jornadas divulgativas abiertas a toda la ciudadanía.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ========== NEW SECTION 1: SOBRE NOSOTROS + STATS ========== */}
        <section className="bg-white py-16 border-t border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              {/* Texto y misión */}
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-emerald-600">Quiénes somos</span>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Construyendo puentes hacia una sociedad inclusiva
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-slate-600">
                  Somos una asociación sin ánimo de lucro fundada en Vitoria-Gasteiz con el firme propósito de 
                  derribar barreras y fomentar la convivencia intercultural. Creemos en el poder de la comunidad 
                  para transformar vidas, ofreciendo herramientas, acompañamiento y calidez humana a quienes 
                  inician un nuevo camino en Euskadi.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-emerald-100 p-2 text-emerald-700">
                      <Target className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-medium text-slate-700">Empoderamiento social</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-emerald-100 p-2 text-emerald-700">
                      <UserCheck className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-medium text-slate-700">Acompañamiento personal</span>
                  </div>
                </div>
              </div>

              {/* Stats / Números de impacto */}
              <div className="grid grid-cols-2 gap-6 rounded-2xl bg-slate-900 p-8 text-white shadow-xl">
                <div className="text-center">
                  <div className="flex justify-center text-emerald-400">
                    <Calendar className="h-8 w-8" />
                  </div>
                  <p className="mt-2 text-3xl font-black">4+</p>
                  <p className="text-sm text-slate-400">Años de impacto</p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center text-emerald-400">
                    <Users className="h-8 w-8" />
                  </div>
                  <p className="mt-2 text-3xl font-black">200+</p>
                  <p className="text-sm text-slate-400">Personas atendidas</p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center text-emerald-400">
                    <Heart className="h-8 w-8" />
                  </div>
                  <p className="mt-2 text-3xl font-black">30+</p>
                  <p className="text-sm text-slate-400">Voluntarios activos</p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center text-emerald-400">
                    <Award className="h-8 w-8" />
                  </div>
                  <p className="mt-2 text-3xl font-black">12</p>
                  <p className="text-sm text-slate-400">Proyectos realizados</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Preview Section */}
        {projects.length > 0 && (
          <section className="py-12 bg-white border-t border-slate-200">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-end mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900">Proyectos Destacados</h2>
                  <p className="text-slate-600 mt-2">Iniciativas para fortalecer nuestra comunidad</p>
                </div>
                <Link href="/proyectos" className="text-emerald-600 hover:text-emerald-700 font-semibold flex items-center gap-1">
                  Ver todos <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projects.slice(0, 3).map((item, index) => {
                  const data = item.attributes || item;
                  const itemKey = item.id || item.documentId || index;
                  return <ProjectCard key={itemKey} project={data} />;
                })}
              </div>
            </div>
          </section>
        )}

        {/* News Preview Section */}
        {newsList.length > 0 && (
          <section className="py-12 bg-slate-50 border-t border-slate-200">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-end mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900">Últimas Noticias</h2>
                  <p className="text-slate-600 mt-2">Novedades y actividades recientes</p>
                </div>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {newsList.slice(0, 3).map((item, index) => {
                  const data = item.attributes || item;
                  const itemKey = item.id || item.documentId || index;
                  return <NewsCard key={itemKey} news={data} />;
                })}
              </div>
            </div>
          </section>
        )}

        {/* ========== NEW SECTION 2: TESTIMONIALS (Historias de éxito) ========== */}
        <section className="py-16 bg-white border-t border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-sm font-semibold uppercase tracking-wider text-emerald-600">Testimonios</span>
              <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
                Voces que inspiran
              </h2>
              <p className="mt-3 text-lg text-slate-600">
                Historias reales de personas que han encontrado en nuestra comunidad un nuevo hogar.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {/* Testimonio 1 */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 transition hover:shadow-md">
                <Quote className="h-8 w-8 text-emerald-500 opacity-50" />
                <p className="mt-4 text-slate-700 leading-relaxed">
                  “Gracias a la asociación pude entender el sistema de salud y encontrar mi primer trabajo. 
                  Me sentí acompañada en cada paso.”
                </p>
                <div className="mt-6 border-t border-slate-200 pt-4">
                  <p className="font-bold text-slate-900">María C.</p>
                  <p className="text-sm text-slate-500">Venezuela · Residente en Vitoria</p>
                </div>
              </div>

              {/* Testimonio 2 */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 transition hover:shadow-md">
                <Quote className="h-8 w-8 text-emerald-500 opacity-50" />
                <p className="mt-4 text-slate-700 leading-relaxed">
                  “Los talleres de idiomas y las excursiones culturales me ayudaron a perder el miedo y 
                  conocer gente maravillosa.”
                </p>
                <div className="mt-6 border-t border-slate-200 pt-4">
                  <p className="font-bold text-slate-900">Ahmed S.</p>
                  <p className="text-sm text-slate-500">Marruecos · Estudiante</p>
                </div>
              </div>

              {/* Testimonio 3 */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 transition hover:shadow-md">
                <Quote className="h-8 w-8 text-emerald-500 opacity-50" />
                <p className="mt-4 text-slate-700 leading-relaxed">
                  “Ser voluntaria aquí me ha cambiado la vida. Ver cómo una pequeña ayuda puede transformar 
                  el día a día de alguien no tiene precio.”
                </p>
                <div className="mt-6 border-t border-slate-200 pt-4">
                  <p className="font-bold text-slate-900">Elena R.</p>
                  <p className="text-sm text-slate-500">España · Voluntaria</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <CtaSection />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}