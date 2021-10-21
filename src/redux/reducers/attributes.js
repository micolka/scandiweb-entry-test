import { SET_ATTRIBUTE, CLEAR_ATTRIBUTES } from "../actionTypes";

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
