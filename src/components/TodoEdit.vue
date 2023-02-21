<script setup lang="ts">
import { ref, watch } from "vue";
import type ToDo from "@/model/ToDo";

import { useTodosStore } from "@/stores";

const todosStore = useTodosStore();

let editingTitle = ref<string>("");

let saveTodo = () => {
  if (props.todo) {
    todosStore.updateTodo(props.todo.id, { title: editingTitle.value });
  }
};

const props = defineProps<{
  todo?: ToDo;
}>();

watch(
  () => props.todo,
  (newTodo, oldTodo) => {
    if (newTodo) {
      editingTitle.value = newTodo?.title;
    }
  },
  { immediate: true }
);
</script>

<template>
  <b>{{ props.todo?.title }}</b>
  <br />
  <input type="text" v-model="editingTitle" />
  <button @click="saveTodo">Update</button>
</template>

<style scoped>
input[type="text"] {
  background: #333;
  border: 2px solid #555;
  border-radius: 10px;
  padding: 1rem;
  width: 100%;
  color: #fff;
}
button {
  width: 100%;
  background-color: #ffffff44;
  border-radius: 10px;
  padding: 1rem;
  margin-top: 1rem;
  border: none;
  color: #fff;
}
</style>