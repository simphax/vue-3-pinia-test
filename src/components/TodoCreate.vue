<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useTodosStore } from "@/stores";
import { ref } from "vue";

const todosStore = useTodosStore();
const { loading, todos } = storeToRefs(todosStore);

let newTodoInputText = ref("");

const addTodo = () => {
  todosStore.addTodo({ title: newTodoInputText.value });
  newTodoInputText.value = "";
};
</script>

<template>
  <form @submit.prevent="addTodo">
    <input type="text" v-model="newTodoInputText" aria-label="Search Term" />
    <button type="submit" class="sr-only">Add todo</button>
  </form>
</template>

<style scoped>
input[type="text"] {
  background: #333;
  border: 2px solid #555;
  border-radius: 10px;
  padding: 1rem;
  width: 40%;
  color: #fff;
}

button[type="submit"] {
  
}
</style>
