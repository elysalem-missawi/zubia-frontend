"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";

const languages = [
  { code: "es", label: "ES", name: "Español" },
  { code: "eu", label: "EU", name: "Euskera" },
  { code: "ar", label: "AR", name: "العربية" },
  { code: "en", label: "EN", name: "English" },
] as const;

type Locale = (typeof languages)[number]["code"];

export default function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();

  const handleLanguageChange = (newLocale: Locale) => {
    if (newLocale === locale) return;

    router.replace(pathname, {
      locale: newLocale,
    });
  };

  return (
    <div
      className="flex items-center gap-1 rounded-xl border border-slate-200 bg-slate-100 p-1"
      aria-label="Selector de idioma"
    >
      {languages.map((language) => {
        const active = locale === language.code;

        return (
          <button
            key={language.code}
            type="button"
            onClick={() => handleLanguageChange(language.code)}
            aria-label={`Cambiar idioma a ${language.name}`}
            aria-pressed={active}
            className={`rounded-lg px-2.5 py-1 text-xs font-bold transition-all ${
              active
                ? "bg-emerald-600 text-white shadow-sm"
                : "text-slate-600 hover:bg-white hover:text-emerald-700"
            }`}
          >
            {language.label}
          </button>
        );
      })}
    </div>
  );
}