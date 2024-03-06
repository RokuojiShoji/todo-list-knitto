'use client'
import React, { FC, useState } from "react";
import postTodos from "@/lib/postTodos";

const AddTodos: FC = () => {
  const [newTask, setNewTask] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    postTodos(newTask, setNewTask);
  };

  return (
    <div>
      <form
        className="join w-full shadow-md mb-2 rounded-md"
        onSubmit={handleSubmit}
      >
        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          type="text"
          placeholder="Masukkan tugas baru..."
          className="join-item input input-bordered w-full rounded-md"
        />
        <button className="btn join-item rounded-md shadow-none">Tambah</button>
      </form>
    </div>
  );
};

export default AddTodos;
