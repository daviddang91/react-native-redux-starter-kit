import * as ACTION_TYPES from "../constants/action-types";

export const userLoginSuccess = ({ email, password }) => ({
  types: [
    ACTION_TYPES.USER_LOGIN_REQUESTED,
    ACTION_TYPES.USER_LOGIN_SUCCESS,
    ACTION_TYPES.USER_LOGIN_FAILED
  ],
  payload: {
    client: "default",
    request: {
      method: "POST",
      url: "/login-success",
      data: {
        email,
        password
      }
    }
  }
});

export const userLoginFail = ({ email, password }) => ({
  types: [
    ACTION_TYPES.USER_LOGIN_REQUESTED,
    ACTION_TYPES.USER_LOGIN_SUCCESS,
    ACTION_TYPES.USER_LOGIN_FAILED
  ],
  payload: {
    client: "default",
    request: {
      method: "POST",
      url: "/login-fail",
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
