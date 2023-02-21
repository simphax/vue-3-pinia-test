import { describe, it, beforeEach, expect, vi, beforeAll } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useTodosStore } from "../todos";

let todosStore: any;

vi.mock("@/services/todoService");
/*vi.mock("@/services/todoService", async () => {
  //const todoService = await import("@/services/todoService");

  return {
    //...todoService,
    getToDos: vi.fn().mockResolvedValue([
      {
        id: "id1",
        title: "title1",
      },
      {
        id: "id2",
        title: "title2",
      },
    ]),
  };
});*/

beforeAll(async () => {});

describe("Todos Store", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    todosStore = useTodosStore();
  });

  it("should update loading state", async () => {
    expect(todosStore.loading).toBe(true);
    await todosStore.fetchToDos();
    expect(todosStore.todos.length).toBe(2);
    expect(todosStore.loading).toBe(false);
  });

  it("should start with loading state", () => {
    expect(todosStore.loading).toBe(true);
  });
});
