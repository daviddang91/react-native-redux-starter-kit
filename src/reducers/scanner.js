import * as ACTION_TYPES from "../constants/action-types";

const initialState = {
  data: undefined,
  error: undefined,
  isFinished: false,
};

export default (state = initialState, action) => {
  const { type, payload, error } = action;

  switch (type) {
    case ACTION_TYPES.USER_SCAN_REQUESTED:
      return {
        error: undefined,
        data: undefined,
        isFailed: false,
        isFinished: false,
      };
    case ACTION_TYPES.USER_SCAN_SUCCESS:
      return {
        error: undefined,
        data: payload.data,
        isFinished: true
      };
    case ACTION_TYPES.USER_SCAN_FAILED:
      let newError = {
        message: error.data
      };
      if ("response" in error){
        newError = error.response.data;
      }
      return {
        error: newError,
        data: undefined,
        isFinished: true
      };
    default:
      return state;
  }
};
