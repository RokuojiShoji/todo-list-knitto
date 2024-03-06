'use client'
import updateTodoCompleted from "@/lib/updateTodos";
import { FunctionComponent } from "react";

interface CompletedButtonProps {
  id: number;
}

const CompletedButton: FunctionComponent<CompletedButtonProps> = ({ id }) => {
  return (
    <button
      className="btn join-item h-full w-full shadow-none rounded-sm"
      onClick={() => updateTodoCompleted(id)}
    >
      Selesai
    </button>
  );
};

export default CompletedButton;