import * as ACTION_TYPES from "../constants/action-types";

const initialState = {
  token: undefined,
  isAuthenticating: false,
  data: undefined,
  error: undefined,
  isFailed: false
};

export default (state = initialState, action) => {
  const { type, payload, error } = action;

  switch (type) {
    case ACTION_TYPES.USER_LOGIN_REQUESTED:
      return {
        ...state,
        isAuthenticating: true,
        isFailed: false
      };
    case ACTION_TYPES.USER_LOGIN_SUCCESS:
      return {
        data: payload.data,
        token: payload.data.jwt,
        isAuthenticating: false,
        isFailed: false
      };
    case ACTION_TYPES.USER_LOGIN_FAILED:
      let newError = {
        errorMessage: error.data
      };
      if ("response" in error){
        newError = error.response.data;
      }
      return {
        error: newError,
        isAuthenticating: false,
        isFailed: true
      };
    case ACTION_TYPES.USER_LOGOUT_REQUESTED:
      return {
        ...initialState
      };
    default:
      return state;
  }
};
