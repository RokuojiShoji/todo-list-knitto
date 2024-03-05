'use client';
import { useGetTodosByTitleQuery } from "@/redux/slice/api";
import { todoData } from "../types";
import { start } from "repl";

export default function getTodos (start: number, limit: number): todoData[] {
  const {data = [] as todoData[]} = useGetTodosByTitleQuery({start, limit})

  return data;
}