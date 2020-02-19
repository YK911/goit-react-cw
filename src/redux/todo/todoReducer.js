import Type from "../type";

const handlers = {
  [Type.TODO_ADD]: (state, { payload: { todo } }) => [...state, todo],
  [Type.TODO_DELETE]: (state, { payload: { id } }) =>
    state.filter(elem => elem.id !== id),
  DEFAULT: state => state
};

export const todo = (state = [], action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;

  return handler(state, action);
};
