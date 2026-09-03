import { fetchFromStrapi } from "@/lib/strapi";
import ProjectCard from "@/components/ProjectCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function ProyectosPage() {
  let projects: any[] = [];

  try {
    const response = await fetchFromStrapi("projects");
    projects = Array.isArray(response?.data)
      ? response.data
      : Array.isArray(response)
      ? response
      : [];
  } catch (error) {
    console.error("Failed to fetch projects:", error);
  }

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Header />
      <main className="flex-1 mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="mb-8 border-b border-slate-200 pb-4">
          <h1 className="text-3xl font-bold text-slate-900">Proyectos</h1>
          <p className="mt-2 text-slate-600">
            Iniciativas y programas comunitarios
          </p>
        </header>

        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((item, index) => {
              const projectData = item.attributes
                ? { id: item.id, ...item.attributes }
                : item;
              const itemKey = item.documentId || item.id || index;

              return (
                <ProjectCard
                  key={itemKey}
                  project={projectData}
                  {...projectData}
                />
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-300 shadow-sm">
            <p className="text-slate-600 text-lg font-medium">
              No hay proyectos disponibles actualmente.
            </p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}