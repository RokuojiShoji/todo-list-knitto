export default async function getTodos({
  page = 1,
  limit = 10,
}: {
  page?: number;
  limit?: number;
}) {
  const start = (page - 1) * limit;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos?_start=${start}&_limit=${limit}`,
    { next: { revalidate: 1 } }
  );
  const data = await res.json();
  return data;
}
