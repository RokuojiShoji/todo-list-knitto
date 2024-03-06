export default async function updateTodoCompleted(todoId: number) {
  const todo = {
    id: todoId,
    completed: true,
  };

  const requestOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  };

  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, requestOptions);
  
  if (!res.ok) {
    throw new Error(`Failed to update todo with ID ${todoId}`);
  } else {
    console.log(`update succeeded for todo with ID ${todoId}`)
  }
}