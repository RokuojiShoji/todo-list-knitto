import { todoData } from "./types";
import getTodos from "../lib/getTodos";

export default async function Home() {

  const data = await getTodos({page: 2, limit: 10});

  if (!data) {
    return <div>Loading...</div>;
  }

  console.log(data);
  return (
    <main className="w-screen mt-5">
      <div className=" w-5/12 m-auto">
        <div className="join w-full shadow-md mb-2 rounded-md">
          <input
            type="text"
            placeholder="Masukkan tugas baru..."
            className="join-item input input-bordered w-full rounded-md"
          />
          <button className="btn join-item rounded-md shadow-none">
            Tambah
          </button>
        </div>
        <div>
          {data.map((item: todoData) => (
            <div className="flex-row my-1 p-0 border-solid border-2 rounded-md join w-full shadow-md" key={item.id}>
              <div className=" py-2 px-3 join-item w-10/12">{item.title}</div>
              <div className=" flex-row-reverse w-2/12 m-0 rounded-md">
                <button className="btn join-item h-full w-full shadow-none rounded-sm">
                  Selesai
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
