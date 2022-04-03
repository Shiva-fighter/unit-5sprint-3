import { Reducer } from "../Todo/reducer";
import { Login_reducer } from "../login/reducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  login: Login_reducer,
  todos: Reducer,
});

export default rootReducer;
