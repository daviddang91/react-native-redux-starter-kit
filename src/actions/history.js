import * as ACTION_TYPES from "../constants/action-types";

export const scanHistory = (organizer_id, page, isReset) => ({
  types: [
    ACTION_TYPES.SCAN_HISTORY_REQUESTED,
    ACTION_TYPES.SCAN_HISTORY_SUCCESS,
    ACTION_TYPES.SCAN_HISTORY_FAILED
  ],
  payload: {
    client: "cme",
    request: {
      method: "get",
      url: `/organizers/${organizer_id}/scan-history/?page=${page}`,
    },
    meta: {
      isReset,
    },
  }
});
