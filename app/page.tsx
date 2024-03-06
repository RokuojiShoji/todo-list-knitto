import { todoData } from "./types";
import getTodos from "../lib/getTodos";
import dynamic from "next/dynamic";
import PaginationControl from "./components/Pagination";

const AddTodos = dynamic(() => import("./components/addTodos"), { ssr: false });


export default async function Home({
  searchParams,
}: {
  searchParams: {[key: string]: string | string[] | undefined}
}) {

  
  const page = searchParams['page'] ?? '1'
  const limit = 10
  
  const start = (Number(page) - 1) * Number(limit)
  const end = start + Number(limit)

  const data = await getTodos({ page: Number(page), limit: limit });
  
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <main className="w-screen mt-5">
      <div className=" w-5/12 m-auto">
        <AddTodos />
        <div>
          {data.map((item: todoData) => (
            <div
              className="flex-row my-1 p-0 border-solid border-2 rounded-md join w-full shadow-md"
              key={item.id}
            >
              <div className=" py-2 px-3 join-item w-10/12">{item.title}</div>
              <div className=" flex-row-reverse w-2/12 m-0 rounded-md">
                <button className="btn join-item h-full w-full shadow-none rounded-sm">
                  Selesai
                </button>
              </div>
            </div>
          ))}
        </div>
       <PaginationControl hasNextPage={end < 200} hasPrevPage={start > 0} />
      </div>
    </main>
  );
}
