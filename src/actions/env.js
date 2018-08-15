import * as ACTION_TYPES from "../constants/action-types";

export function switchEnv(env) {
  return {
    type: ACTION_TYPES.SWITCH_ENVIRONMENT,
    payload: {
      env
    },
  };
}

export function switchBundle(env) {
  return {
    type: ACTION_TYPES.SWITCH_BUNDLE,
    payload: {
      env
    },
  };
}
