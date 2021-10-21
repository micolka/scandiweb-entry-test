import { combineReducers } from "redux";

import checkedAttributes from "./attributes";
import cart from "./cart";
import categories from "./categories";
import currency from "./currency";

export default combineReducers({ checkedAttributes, cart, categories, currency });
