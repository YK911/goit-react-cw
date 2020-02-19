import Type from "../type";

// export const counter = (state = 0, { type, payload }) => {
//   switch (type) {
//     case Type.COUNTER_INCREMENT:
//       return state + payload;

//     case Type.COUNTER_DECREMENT:
//       return state - payload;
//     default:
//       return state;
//   }
// };

const handlers = {
  [Type.COUNTER_INCREMENT]: (state, { payload: { value } }) => state + value,
  [Type.COUNTER_DECREMENT]: (state, { payload }) => state - payload.value,
  DEFAULT: state => state
};

export const counter = (state = 0, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;

  return handler(state, action);
};
