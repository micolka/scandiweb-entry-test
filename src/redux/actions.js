import { 
    ADD_PRODUCT_TO_CART, 
    CHANGE_CURRENCY, 
    CLEAR_ATTRIBUTES, 
    SET_ATTRIBUTE, 
    SET_CATEGORIES, 
    SET_CURRENT_CATEGORY, 
} from "./actionTypes";

export const changeCurrency = currency => ({ type: CHANGE_CURRENCY, payload: { currency }});

export const setCategories = categories => ({ type: SET_CATEGORIES, payload: { categories }});
export const setCurrentCategory = category => ({ type: SET_CURRENT_CATEGORY, payload: { category }});

export const setAttribute = attribute => ({ type: SET_ATTRIBUTE, payload: { attribute }});
export const clearAttributes = () => ({ type: CLEAR_ATTRIBUTES });

export const addProductToCart = product => ({ type: ADD_PRODUCT_TO_CART, payload: { product }});
