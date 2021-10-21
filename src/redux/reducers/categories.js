import { SET_CATEGORIES, SET_CURRENT_CATEGORY } from "../actionTypes";

const initialState = {
  categories: ['all'],
  currentCategory: 'all',
};

const categories = function(state = initialState, action) {
  switch (action.type) {
    case SET_CATEGORIES: {
      return {
        ...state,
        categories: [...action.payload.categories],
      };
    }
    case SET_CURRENT_CATEGORY: {
      return {
        ...state,
        currentCategory: action.payload.category,
      };
    }
    default:
      return state;
  }
}

export default categories;
