const apiKey = process.env.NEXT_PUBLIC_IMAGE_API;
/*
export async function fetchImages(pageParam: number, search: string) {
  const perPage = 45;
  const url = `https://api.unsplash.com/search/photos?page=${
    pageParam || 1
  }&per_page=${perPage}&query=${search || "batman"}&client_id=${apiKey}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch images");
  }
  return response.json();
}*/
export async function fetchImages(pageParam: number, search: string) {
  const perPage = 45;

  // Lista de imágenes simuladas con el formato correcto
  const fakeImages = [
    { id: "1", urls: { regular: "https://picsum.photos/500/500?random=1" } },
    { id: "2", urls: { regular: "https://picsum.photos/500/500?random=2" } },
    { id: "3", urls: { regular: "https://picsum.photos/500/500?random=3" } },
    { id: "4", urls: { regular: "https://picsum.photos/500/500?random=4" } },
    { id: "5", urls: { regular: "https://picsum.photos/500/500?random=5" } },
    { id: "6", urls: { regular: "https://picsum.photos/500/500?random=6" } },
    { id: "7", urls: { regular: "https://picsum.photos/500/500?random=7" } },
    { id: "8", urls: { regular: "https://picsum.photos/500/500?random=8" } },
    { id: "9", urls: { regular: "https://picsum.photos/500/500?random=9" } },
    { id: "10", urls: { regular: "https://picsum.photos/500/500?random=10" } },
  ];

  // Simular paginación
  const start = (pageParam - 1) * perPage;
  const end = start + perPage;
  const results = fakeImages.slice(start, end);

  return {
    results,
    total: fakeImages.length,
    total_pages: Math.ceil(fakeImages.length / perPage),
  };
}
