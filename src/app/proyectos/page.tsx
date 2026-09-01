import { fetchFromStrapi } from '@/lib/strapi';
import ProjectCard from '@/components/ProjectCard';

export default async function ProyectosPage() {
  let projects: any[] = [];

  try {
    const response = await fetchFromStrapi('projects');
    // دعم Strapi v4 (response.data) و Strapi v5
    projects = Array.isArray(response?.data) ? response.data : (Array.isArray(response) ? response : []);
  } catch (error) {
    console.error('Failed to fetch projects:', error);
  }

  return (
    <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <header className="mb-8 border-b border-slate-200 pb-4">
        <h1 className="text-3xl font-bold text-slate-900">Proyectos</h1>
        <p className="text-slate-600 mt-2">Iniciativas y programas comunitarios</p>
      </header>

      {projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((item, index) => {
            // استخراج البيانات سواء كانت محتواة في attributes أم لا
            const projectData = item.attributes ? { id: item.id, ...item.attributes } : item;
            const itemKey = item.documentId || item.id || index;

            return <ProjectCard key={itemKey} project={projectData} {...projectData} />;
          })}
        </div>
      ) : (
        <div className="text-center py-16 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
          <p className="text-slate-600 text-lg font-medium">No hay proyectos disponibles actualmente.</p>
          <p className="text-sm text-slate-400 mt-1">
            تأكد من وجود عناصر مضافة ومفعلة (Published) في Strapi محلياً.
          </p>
        </div>
      )}
    </main>
  );
}