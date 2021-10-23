import { TOGGLE_MINI_CART_STATUS, CLOSE_MINI_CART } from "../actionTypes";

const initialState = {
  isMiniCartOpened: false,
};

const settings = function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MINI_CART_STATUS: {
      return {
        ...state,
        isMiniCartOpened: !state.isMiniCartOpened,
      };
    }
    case CLOSE_MINI_CART: {
      return {
        ...state,
        isMiniCartOpened: false,
      };
    }
    default:
      return state;
  }
}

export default settings;
