import { ref } from "vue";
import { defineStore } from "pinia";

import { getToDoDetails } from "@/services/todoService";

export const useTodoDetailsStore = defineStore("todoDetails", () => {
  const todoId = ref<string>("");
  const loading = ref<Boolean>(true);
  const tags = ref<string[]>([]);

  //Actions
  const loadTodoDetails = async (id: string): Promise<void> => {
    todoId.value = id;
    loading.value = true;

    const details = await getToDoDetails(id);
    if (details.id != todoId.value) return;

    loading.value = false;

    tags.value = details.tags;
  };

  return { loadTodoDetails, tags, loading };
});
