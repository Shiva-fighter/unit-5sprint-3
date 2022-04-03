import { createStore } from "redux";
// import { Reducer } from "./reducer";
import rootReducer from "./rootReducer";
export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log("intial state", store.getState());
