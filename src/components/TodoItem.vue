<script setup lang="ts">
import { useTodosStore } from "@/stores";
import { computed } from "vue";

const props = defineProps<{
  todoId: string;
}>();

const { getTodoById } = useTodosStore();

const todo = computed(() => getTodoById(props.todoId));
</script>

<template>
  <b>{{ todo?.title }}</b>
</template>
