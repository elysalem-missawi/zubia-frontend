import { fetchFromStrapi } from '@/lib/strapi';

export default async function ProyectosPage() {
  // جلب البيانات من مسار 'projects' في Strapi
  const response = await fetchFromStrapi('projects');
  const projects = response?.data || [];

  return (
    <main className="max-w-5xl mx-auto px-4 py-12" dir="rtl">
      <header className="mb-8 border-b pb-4">
        <h1 className="text-3xl font-bold text-gray-900">المشاريع (Projects)</h1>
        <p className="text-gray-600 mt-2">قائمة المشاريع المسترجعة مباشرة من خادم Strapi.</p>
      </header>

      {projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((item: any) => {
            // التعامل مع هيكلية البيانات لـ Strapi v4 / v5
            const attrs = item.attributes || item;

            return (
              <article
                key={item.id}
                className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col justify-between"
              >
                <div>
                  <h2 className="text-xl font-bold text-gray-800 mb-2">
                    {attrs.title || 'بدون عنوان'}
                  </h2>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {attrs.description || 'لا يوجد وصف للمشروع.'}
                  </p>
                </div>
                {attrs.slug && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <span className="text-xs font-mono text-indigo-600 bg-indigo-50 px-2 py-1 rounded">
                      /{attrs.slug}
                    </span>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16 bg-gray-50 rounded-xl border border-dashed border-gray-300">
          <p className="text-gray-500 text-lg">لا توجد مشاريع مضافة حالياً.</p>
          <p className="text-sm text-gray-400 mt-1">تأكد من إضافة عناصر في Content Manager والضغط على Publish.</p>
        </div>
      )}
    </main>
  );
}