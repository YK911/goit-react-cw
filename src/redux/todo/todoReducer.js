import Type from "../type";

export const todo = (state = [], { type, payload }) => {
  switch (type) {
    case Type.TODO_ADD:
      return [...state, payload];
    case Type.TODO_DELETE:
      return state.filter(elem => elem.id !== payload);
    default:
      return state;
  }
};
