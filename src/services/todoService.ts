import { sleep } from "@/helpers/asyncHelpers";
import type ToDo from "@/model/ToDo";

export const getToDos = async (): Promise<ToDo[]> => {
  await sleep(2000);
  return [
    {
      id: "1",
      title: "Buy milk",
    },
  ];
};

export const getToDoDetails = async (id: string): Promise<Void> => {
  await sleep(2000);
  return {
    id: id,
    tags: ["#mys", "#kodsnack"],
  };
};
