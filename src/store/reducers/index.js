import { combineReducers } from "redux";
import { reducer as toastrReducer } from "react-redux-toastr";
import { connectRouter } from "connected-react-router";

import authReducer from "./auth";
import acReducer from "./account";
import uiReducer from "./UIReducer";
const reducer = (history) => combineReducers({
  router: connectRouter(history),
  toastr: toastrReducer,
  ui: uiReducer,
  auth: authReducer,
  account: acReducer,
});

export default reducer;