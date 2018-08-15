import * as ACTION_TYPES from "../constants/action-types";

export const userRequestLogin = ({ email, password }) => ({
  types: [
    ACTION_TYPES.USER_LOGIN_REQUESTED,
    ACTION_TYPES.USER_LOGIN_SUCCESS,
    ACTION_TYPES.USER_LOGIN_FAILED
  ],
  payload: {
    client: "appointment",
    request: {
      method: "POST",
      url: "/auth/organizer",
      data: {
        email,
        password
      }
    }
  }
});

export function userRequestLogout() {
  return {
    type: ACTION_TYPES.USER_LOGOUT_REQUESTED,
    payload: {},
  };
}
