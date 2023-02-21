import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import TodoItem from "../TodoItem.vue";

describe("TodoItem", () => {
  it("renders properly", () => {
    const wrapper = mount(TodoItem, {
      props: {
        todo: {
          id: "1",
          title: "test1",
        },
      },
    });
    expect(wrapper.text()).toContain("test1");
  });
});
