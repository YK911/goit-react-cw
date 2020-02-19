import Type from "../type";

export const addTodo = todo => ({
  type: Type.TODO_ADD,
  payload: { todo }
});
export const deleteTodo = id => ({
  type: Type.TODO_DELETE,
  payload: { id }
});
