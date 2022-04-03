import { ADD_TODO } from "./actionTypes";
import { DEL_TODO } from "./actionTypes";

const initState = {
  todos: [],
};

const Reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todos: payload,
      };
    case DEL_TODO:
      return {
        ...state,
        todos: payload,
      };
    default:
      return state;
  }
};

export { Reducer };
