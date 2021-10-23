import { CHANGE_CURRENCY } from "../actionTypes";

const initialState = {
  currency: '',
};

const currency = function(state = initialState, action) {
  switch (action.type) {
    case CHANGE_CURRENCY: {
      return {
        ...state,
        currency: action.payload.currency,
      };
    }
    default:
      return state;
  }
}

export default currency;
