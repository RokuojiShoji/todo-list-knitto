'use client';
import getTodos from "./components/getTodos";
import { todoData } from "./types";

export default function Home() {
  const data = getTodos()
  if (!data) {
    return <div>Loading...</div>
  }

  console.log(data)
  return (
    
    <main>
      <div className="join text-gray-400">
          
          <input
            type="text"
            placeholder="Cari Todo List"
            className="join-item input input-bordered w-full max-w-xs rounded-xl"
          />
          <select className="select select-bordered join-item">
            <option>Any</option>
            <option>Finished</option>
            <option>Unfinished</option>
          </select>
          <button className="btn join-item rounded-xl">Search</button>
      </div>

    </main>
  );
}
