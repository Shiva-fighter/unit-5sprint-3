import { LOGIN_STAT } from "./actionType";
const initState = {
  authstate: JSON.parse(localStorage.getItem("login_status")) || false,
};
const Login_reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_STAT:
      localStorage.setItem("login_status", JSON.stringify(payload));

      return {
        ...state,
        authstate: payload,
      };
    default:
      return state;
  }
};

export { Login_reducer };
