import { combineReducers } from "redux";

import employees from "./employees";
import uiStyles from "./uiStyles";


export default combineReducers({
  employees,
  uiStyles
});
