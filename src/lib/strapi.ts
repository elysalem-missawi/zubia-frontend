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

  console.log("Fetching Strapi:", url);

  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json"
      },
      cache: "no-store"
    });

    if (!res.ok) {
      const errorText = await res.text();

      console.error(
        `Strapi error ${res.status}: ${url}`,
        errorText
      );

      return { data: [] };
    }

    const json = await res.json();

    console.log(
      "Strapi data:",
      Array.isArray(json?.data) ? json.data.length : 0
    );

    return json;
  } catch (error) {
    console.error(`Failed to reach Strapi: ${url}`, error);

    return { data: [] };
  }
}