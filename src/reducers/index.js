import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import drawer from "./drawer";

export default combineReducers({
  form: formReducer,
  drawer
});
