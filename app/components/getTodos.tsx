'use client';
import { useGetTodosByTitleQuery } from "@/redux/slice/api";

export default function getTodos () {
  const { data } = useGetTodosByTitleQuery("")

  return data;
}