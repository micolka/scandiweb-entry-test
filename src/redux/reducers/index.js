import { combineReducers } from "redux";

import checkedAttributes from "./attributes";
import categories from "./categories";
import currency from "./currency";

export default combineReducers({ checkedAttributes, categories, currency });
