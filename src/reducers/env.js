import * as ACTION_TYPES from "../constants/action-types";
import * as API_URL from "../constants/apis";

const initialState = {
  appointmentUrl: API_URL.AUTHENTICATION_API_URL,
  cmeUrl: API_URL.CME_API_URL,
  prefix: "PROD"
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPES.SWITCH_ENVIRONMENT:
      let { env } = payload;
      return {
        appointmentUrl: env === "STAGING" ? API_URL.AUTHENTICATION_STAGING_API_URL : API_URL.AUTHENTICATION_API_URL,
        cmeUrl: env === "STAGING" ? API_URL.CME_STAGING_API_URL : API_URL.CME_API_URL,
        prefix: env === "STAGING" ? "STAGING" : "PROD"
      };
    case ACTION_TYPES.SWITCH_BUNDLE:
      let { appointmentUrl, cmeUrl, prefix } = payload.env;
      return {
        appointmentUrl: appointmentUrl,
        cmeUrl: cmeUrl,
        prefix: prefix
      };
    default:
      return state;
  }
};
