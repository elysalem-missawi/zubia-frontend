import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Proyectos() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Header />
      <main className="flex-1 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-black text-slate-900">Nuestros Proyectos</h1>
        <p className="mt-4 text-slate-600">Proyectos e iniciativas de integración comunitaria.</p>
      </main>
      <Footer />
    </div>
  );
}