import { ADD_GOOD_TO_CARD, DELETE_GOOD_FROM_CARD } from "./type";
import goods from "../goods.json";

const initialState = {
  card: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_GOOD_TO_CARD:
      return {
        ...state,
        card: [
          ...state.card,
          ...goods.filter(good => good.id === action.payload)
        ]
      };

    case DELETE_GOOD_FROM_CARD:
      return {
        ...state,
        card: [...state.card.filter(good => good.id !== action.payload)]
      };

    default:
      return state;
  }
};
