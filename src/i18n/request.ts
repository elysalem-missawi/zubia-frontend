import { getRequestConfig } from "next-intl/server";

import es from "../../messages/es.json";
import eu from "../../messages/eu.json";
import ar from "../../messages/ar.json";
import en from "../../messages/en.json";

const allMessages = {
  es,
  eu,
  ar,
  en,
} as const;

export default getRequestConfig(async ({ requestLocale }) => {
  const requestedLocale = await requestLocale;

  const locale =
    requestedLocale === "es" ||
    requestedLocale === "eu" ||
    requestedLocale === "ar" ||
    requestedLocale === "en"
      ? requestedLocale
      : "es";

  const selectedMessages = allMessages[locale];

  console.log("NEXT-INTL LOCALE:", locale);
  console.log("NEXT-INTL HAS FOOTER:", Boolean(selectedMessages.Footer));
  console.log(
    "NEXT-INTL MESSAGE KEYS:",
    Object.keys(selectedMessages)
  );

  return {
    locale,
    messages: selectedMessages,
  };
});