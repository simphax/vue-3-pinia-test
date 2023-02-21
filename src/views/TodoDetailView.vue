<script setup lang="ts">
import TodoEdit from "../components/TodoEdit.vue";

import { type ComputedRef, computed } from "vue";
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";

import { useTodosStore } from "@/stores";
import { useTodoDetailsStore } from "@/stores";

import type ToDo from "@/model/ToDo";

const route = useRoute();
const todosStore = useTodosStore();
const todoDetailsStore = useTodoDetailsStore();

const { loading, tags } = storeToRefs(todoDetailsStore);

let todoId = route.params.id as string;

todoDetailsStore.loadTodoDetails(todoId);

const editingTodo: ComputedRef<ToDo | undefined> = computed(() => {
  if (!todoId) return undefined;
  return todosStore.getTodoById(todoId);
});
</script>

<template>
  <div>
    <h2>Todo details:</h2><br />
    <TodoEdit :todo="editingTodo" />
    <br /><br />
    {{ loading ? "Loading details..." : "Tags: " }}
    {{ loading ? "" : tags }}
  </div>
</template>

<style scoped>
div {
  padding: 0 5rem;
}
</style>
