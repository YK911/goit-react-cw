import Type from "../type";

export const counter = (state = 0, { type, payload }) => {
  switch (type) {
    case Type.COUNTER_INCREMENT:
      return state + payload;

    case Type.COUNTER_DECREMENT:
      return state - payload;
    default:
      return state;
  }
};
