<script setup lang="ts">
import ToDoItem from "./TodoItem.vue";
import { storeToRefs } from "pinia";

import { useTodosStore } from "@/stores";

const todosStore = useTodosStore();
const { loading, todos } = storeToRefs(todosStore);
</script>

<template>
  <div v-if="loading">Loading...</div>
  <TransitionGroup v-else tag="ul" name="fade" class="container">
    <li class="item" v-for="todo in todos" :key="todo.id">
      <RouterLink :to="`/${todo.id}`">
        <ToDoItem :todoId="todo.id" />
      </RouterLink>
    </li>
  </TransitionGroup>
</template>

<style scoped>
ul {
  margin: 0;
  margin-top: 4rem;
  padding: 0;
  display: flex;
  flex-direction: column;
}
li {
  list-style: none;
}
.item {
  box-sizing: border-box;
  height: 3.5em;
  margin: 0;
  margin-bottom: 1em;
  padding: 1em;
  background: #333;
  border-radius: 10px;
}

.fade-move,
.fade-enter-active,
.fade-leave-active {
}

.fade-enter-active {
  animation: 0.3s cubic-bezier(0.4, 0, 0.2, 1) appear1,
    0.4s cubic-bezier(0, 0, 0.2, 1) 0.2s appear2, 0.3s linear 0.5s dummy;
}

.fade-enter-active a {
  animation: 0.2s linear 0.4s backwards appear3;
}

.fade-enter-from,
.fade-leave-to {
}
@keyframes appear1 {
  from {
    opacity: 0;
    height: 0em;
    margin-bottom: 0em;
    padding: 0;
  }

  to {
    opacity: 0;
    height: 3.5em;
    margin-bottom: 1em;
    padding: 1em;
  }
}
@keyframes appear2 {
  from {
    opacity: 0;
    transform: translate(0, -2rem);
  }
  to {
    opacity: 1;
  }
}
@keyframes appear3 {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes dummy {
  from {
  }
  to {
  }
}

.fade-leave-active {
  position: absolute;
}
</style>
