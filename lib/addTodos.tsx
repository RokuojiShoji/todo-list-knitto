'use-client';

import React from "react";

const [newTask, setNewTask] = React.useState('');

  const handleAddTask = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: newTask, // Use the input value as the task title
          completed: false, // Set completion status (you can adjust this as needed)
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('New task added:', data);
        // Handle success (e.g., update UI, show a success message)
      } else {
        console.error('Error adding task');
        // Handle error (e.g., show an error message)
      }
    } catch (error) {
      console.error('Network error:', error);
      // Handle network error (e.g., show an error message)
    }
  };