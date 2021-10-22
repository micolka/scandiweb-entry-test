import { 
    ADD_PRODUCT_TO_CART, 
    CHANGE_CURRENCY, 
    CLEAR_ATTRIBUTES, 
    SET_ATTRIBUTE, 
    SET_CATEGORIES, 
    SET_CURRENT_CATEGORY,
    SET_ALL_ATTRIBUTES,
    INCREASE_PRODUCT_COUNT,
    DECREASE_PRODUCT_COUNT,
    DELETE_PRODUCT,
    TOGGLE_MINI_CART_STATUS,
} from "./actionTypes";

export const changeCurrency = currency => ({ type: CHANGE_CURRENCY, payload: { currency }});

export const setCategories = categories => ({ type: SET_CATEGORIES, payload: { categories }});
export const setCurrentCategory = category => ({ type: SET_CURRENT_CATEGORY, payload: { category }});

export const clearAttributes = () => ({ type: CLEAR_ATTRIBUTES });
export const setAttribute = attribute => ({ type: SET_ATTRIBUTE, payload: { attribute }});
export const setAllAttributes = attributes => ({ type: SET_ALL_ATTRIBUTES, payload: { attributes }});

export const addProductToCart = (product, count = 1) => ({ type: ADD_PRODUCT_TO_CART, payload: { product, count }});
export const increaseProductCount = (productId) => ({ type: INCREASE_PRODUCT_COUNT, payload: { productId }});
export const decreaseProductCount = (productId) => ({ type: DECREASE_PRODUCT_COUNT, payload: { productId }});
export const deleteProductFromCart = (productId) => ({ type: DELETE_PRODUCT, payload: { productId }});

export const toggleMiniCart = () => ({ type: TOGGLE_MINI_CART_STATUS });
