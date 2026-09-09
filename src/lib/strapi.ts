const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL ||
  (process.env.NODE_ENV === "development"
    ? "http://localhost:1337"
    : "https://zubia-backend.onrender.com");

/**
 * دالة جلب البيانات من Strapi مع دعم اللغة والكاش
 * @param endpoint المسار المراد طلبه (مثال: "articles?populate=image")
 * @param locale اللغة الحالية من Next-intl (مثال: "es" أو "eu")
 */
export async function fetchFromStrapi(endpoint: string, locale?: string) {
  const baseUrl = STRAPI_URL
    .replace(/\/+$/, "")
    .replace(/\/api$/, "");

  // تنظيف المسار وإضافة اللغة إذا وجدت
  let cleanEndpoint = endpoint.replace(/^\/+/, "");
  
  // التحقق مما إذا كان المسار يحتوي بالفعل على معلمات Query
  const hasQuery = cleanEndpoint.includes("?");
  
  if (locale) {
    // إضافة معلمة اللغة لـ Strapi
    cleanEndpoint += `${hasQuery ? "&" : "?"}locale=${locale}`;
  }

  const url = `${baseUrl}/api/${cleanEndpoint}`;

  console.log("=================================");
  console.log("STRAPI REQUEST:", url);
  console.log("NODE_ENV:", process.env.NODE_ENV);
  console.log("=================================");

  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
      // تفعيل الكاش وإعادة التحقق كل 60 ثانية لمنع تكرار الطلبات
      cache: "force-cache", 
      next: { revalidate: 60 }, 
    });

    console.log("STRAPI STATUS:", res.status);

    if (!res.ok) {
      const text = await res.text();
      console.error("STRAPI ERROR:", text);
      throw new Error(`Strapi returned ${res.status}: ${text}`);
    }

    const json = await res.json();

    console.log(
      "STRAPI DATA COUNT:",
      Array.isArray(json?.data) ? json.data.length : "NOT ARRAY"
    );

    return json;
  } catch (error) {
    console.error("STRAPI FETCH FAILED:", error);
    throw error;
  }
}