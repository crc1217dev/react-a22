import { API_URL } from "../app/(home)/page";

async function getBook(title: string) {
  console.log(`Fetching movies: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(`${API_URL}?name=${title}`);
  return response.json();
}

export default async function BookInfo({ id }: { id: string }) {
  const movie = await getBook(id);
  return <h6>{JSON.stringify(movie)}</h6>;
}
