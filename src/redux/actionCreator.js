import { ADD_GOOD_TO_CARD, DELETE_GOOD_FROM_CARD } from "./type";

const addGood = id => ({
  type: ADD_GOOD_TO_CARD,
  payload: id
});

const delGood = id => ({
  type: DELETE_GOOD_FROM_CARD,
  payload: id
});

export { addGood, delGood };
