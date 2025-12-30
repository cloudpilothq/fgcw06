// lib/queries.ts
export async function getWordPressData(query: string) {
  const res = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_API_URL as string, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
    next: { revalidate: 60 } // Refresh data every 60 seconds
  });

  const json = await res.json();
  return json.data;
}