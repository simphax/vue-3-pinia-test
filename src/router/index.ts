import { sleep } from "@/helpers/asyncHelpers";
import { createRouter, createWebHistory } from "vue-router";
import TodosListView from "@/views/TodoListView.vue";
import TodoDetailView from "@/views/TodoDetailView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: TodosListView,
      children: [
        {
          path: ":id",
          component: TodoDetailView,
        },
      ],
    },
  ],
});

export default router;
