import * as ACTION_TYPES from "../constants/action-types";
import moment from "moment";
import _ from "lodash";

const initialState = {
  data: [],
  error: undefined,
  pagination: undefined,
  isLoading: false
};

const processData = (data) => {
  return _(data)
    .groupBy(x => moment(x.createdAt).startOf("day").format())
    .map((value, key) => ({ date: key, data: value }))
    .value();
};

export default (state = initialState, action) => {
  const { type, payload, error, meta} = action;

  switch (type) {
    case ACTION_TYPES.SCAN_HISTORY_REQUESTED:
      return {
        ...state,
        error: undefined,
        pagination: undefined,
        isLoading: true
      };
    case ACTION_TYPES.SCAN_HISTORY_SUCCESS:
      let isReset = meta.previousAction.payload.meta.isReset;
      let pagination = payload.data.meta.pagination;
      let data = payload.data.data;
      let newData = [];
      if (isReset){
        newData = processData(data);
      } else {
        newData = [...state.data, ...processData(data)];
      }
      return {
        error: undefined,
        data: newData,
        pagination: pagination,
        isLoading: false
      };
    case ACTION_TYPES.SCAN_HISTORY_FAILED:
      let newError = {
        message: error.data
      };
      if ("response" in error) {
        newError = error.response.data;
      }
      return {
        ...state,
        error: newError,
        isLoading: false
      };
    default:
      return state;
  }
};
