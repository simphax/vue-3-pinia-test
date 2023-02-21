<script setup lang="ts">
import TodoList from "../components/TodoList.vue";
import { useTodosStore } from "@/stores";
import TodoCreate from "@/components/TodoCreate.vue";
import { RouterView } from "vue-router";

const todosStore = useTodosStore();
todosStore.fetchToDos();
</script>

<template>
  <div class="columns">
    <div class="columns__column1">
      <TodoCreate />
      <TodoList />
    </div>
    <div class="columns__column2">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.columns {
  display: flex;
}
.columns__column1 {
  width: 60%;
}
</style>
