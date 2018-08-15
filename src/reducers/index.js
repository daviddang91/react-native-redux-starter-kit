import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { reducer as modalReducer } from "redux-modal";
import drawerReducers from "./drawer";
import authReducers from "./auth";
import scannerReducers from "./scanner";
import historyReducers from "./history";
import envReducers from "./env";

export default combineReducers({
  form: formReducer,
  modal: modalReducer,
  drawer: drawerReducers,
  auth: authReducers,
  scanner: scannerReducers,
  history: historyReducers,
  env: envReducers
});
