const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL ||
  (process.env.NODE_ENV === "development"
    ? "http://localhost:1337"
    : "https://zubia-backend.onrender.com");

export async function fetchFromStrapi(endpoint: string) {
  const baseUrl = STRAPI_URL
    .replace(/\/+$/, "")
    .replace(/\/api$/, "");

  const cleanEndpoint = endpoint.replace(/^\/+/, "");

  const url = `${baseUrl}/api/${cleanEndpoint}`;

  console.log("=================================");
  console.log("STRAPI REQUEST:", url);
  console.log("NODE_ENV:", process.env.NODE_ENV);
  console.log("STRAPI_URL:", STRAPI_URL);
  console.log("=================================");

  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json"
      },
      cache: "no-store"
    });

    console.log("STRAPI STATUS:", res.status);

    if (!res.ok) {
      const text = await res.text();

      console.error("STRAPI ERROR:", text);

      throw new Error(
        `Strapi returned ${res.status}: ${text}`
      );
    }

    const json = await res.json();

    console.log(
      "STRAPI DATA COUNT:",
      Array.isArray(json?.data)
        ? json.data.length
        : "NOT ARRAY"
    );

    return json;
  } catch (error) {
    console.error("STRAPI FETCH FAILED:", error);

    // مهم: لا نخفي الخطأ أثناء التشخيص
    throw error;
  }
}