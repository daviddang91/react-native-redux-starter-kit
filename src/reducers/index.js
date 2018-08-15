import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { reducer as modalReducer } from "redux-modal";
import authReducers from "./auth";

export default combineReducers({
  form: formReducer,
  modal: modalReducer,
  auth: authReducers,
});
