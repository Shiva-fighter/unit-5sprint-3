import { ADD_TODO } from "./actionTypes";
import { DEL_TODO } from "./actionTypes";

//action creator

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const delTodo = (payload) => {
  return {
    type: DEL_TODO,
    payload,
  };
};
