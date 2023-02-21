import { ref, computed } from "vue";
import { defineStore } from "pinia";

import { getToDos } from "@/services/todoService";

import type ToDo from "@/model/ToDo";

export const useTodosStore = defineStore("todos", () => {
  const loading = ref<Boolean>(true);
  const todos = ref<ToDo[]>([]);

  //Getters
  const getTodoById = (id: string): ToDo | undefined => {
    return todos.value.find((todo) => todo.id === id);
  };

  //Actions
  const fetchToDos = async (): Promise<void> => {
    const remoteTodos = await getToDos();
    todos.value = remoteTodos;
    loading.value = false;
  };

  const addTodo = ({ title }: { title: string }): void => {
    todos.value.unshift({
      id: crypto.randomUUID(),
      title: title,
    });
  };

  const updateTodo = (id: string, { title }: { title: string }): void => {
    const todo = todos.value.find((todo) => todo.id === id);
    if (todo) {
      todo.title = title;
    }
  };

  return { loading, todos, fetchToDos, addTodo, getTodoById, updateTodo };
});
