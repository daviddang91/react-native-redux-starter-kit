import * as ACTION_TYPES from "../constants/action-types";

export const scanQRCode = ({ attend_code }) => ({
  types: [
    ACTION_TYPES.USER_SCAN_REQUESTED,
    ACTION_TYPES.USER_SCAN_SUCCESS,
    ACTION_TYPES.USER_SCAN_FAILED
  ],
  payload: {
    client: "cme",
    request: {
      method: "POST",
      url: "/scanqrcode/",
      data: {
        attend_code
      }
    }
  }
});
