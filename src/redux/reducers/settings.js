import { TOGGLE_MINI_CART_STATUS } from "../actionTypes";

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
    default:
      return state;
  }
}

export default settings;
