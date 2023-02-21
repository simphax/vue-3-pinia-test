import type ToDo from "@/model/ToDo";

export const getToDos = async (): Promise<ToDo[]> => {
  return [
    {
      id: "1",
      title: "test1",
    },
    {
      id: "2",
      title: "test2",
    },
  ];
};
