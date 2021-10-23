import { SET_ATTRIBUTE, CLEAR_ATTRIBUTES, SET_ALL_ATTRIBUTES } from "../actionTypes";

const initialState = {
  checkedAttributes: {},
};

const checkedAttributes = function(state = initialState, action) {
  switch (action.type) {
    case SET_ATTRIBUTE: {
      const { name, value } = action.payload.attribute;
      return {
        checkedAttributes: { ...state.checkedAttributes, [name]: value },
      };
    }
    case SET_ALL_ATTRIBUTES: {
      return {
        checkedAttributes: { ...state.checkedAttributes, ...action.payload.attributes },
      };
    }
    case CLEAR_ATTRIBUTES: {
      return {
        checkedAttributes: {},
      }
    }
    default:
      return state;
  }
}

export default checkedAttributes;
