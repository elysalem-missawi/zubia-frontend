const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL ||
  "https://zubia-backend.onrender.com";

export async function fetchFromStrapi(endpoint: string) {
  try {
    const res = await fetch(`${STRAPI_URL}/api/${endpoint}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error(
        `Build/Fetch error on [${endpoint}]: ${res.status}`
      );
      return { data: [] };
    }

    return await res.json();
  } catch (error) {
    console.error(
      `Failed to reach Strapi on [${endpoint}]:`,
      error
    );
    return { data: [] };
  }
}