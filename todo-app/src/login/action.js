import { LOGIN_STAT } from "./actionType";

export const login_state = (payload) => {
  return {
    type: LOGIN_STAT,
    payload,
  };
};
