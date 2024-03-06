import { Dispatch, SetStateAction } from "react";

const postTodos = async (
  newTask: string,
  setNewTask: Dispatch<SetStateAction<string>>
) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: newTask,
        completed: false,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("New task added:", data);
      setNewTask("");
    } else {
      console.error("Error adding task");
    }
  } catch (error) {
    console.error("Network error:", error);
  }
};

export default postTodos;
