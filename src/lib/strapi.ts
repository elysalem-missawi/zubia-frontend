const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

export async function fetchFromStrapi(endpoint: string) {
  try {
    const response = await fetch(`${STRAPI_URL}/api/${endpoint}`, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Strapi Fetch Error:', error);
    return null;
  }
}