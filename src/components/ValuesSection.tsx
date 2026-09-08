import {
  HeartHandshake,
  Users,
  Sparkles,
} from "lucide-react";

import { getTranslations } from "next-intl/server";

export default async function ValuesSection() {
  const t = await getTranslations("Home");

  const values = [
    {
      icon: HeartHandshake,
      title: t("values.accompaniment.title"),
      description: t("values.accompaniment.description"),
    },
    {
      icon: Users,
      title: t("values.community.title"),
      description: t("values.community.description"),
    },
    {
      icon: Sparkles,
      title: t("values.activities.title"),
      description: t("values.activities.description"),
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-600">
            {t("values.eyebrow")}
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            {t("values.title")}
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            {t("values.description")}
          </p>
        </div>

        {/* Value cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <article
                key={value.title}
                className="group rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 transition-colors duration-300 group-hover:bg-emerald-600 group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="mt-6 text-xl font-extrabold text-slate-950">
                  {value.title}
                </h3>

                <p className="mt-3 leading-relaxed text-slate-600">
                  {value.description}
                </p>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}