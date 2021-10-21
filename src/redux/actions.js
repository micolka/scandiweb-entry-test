import { CHANGE_CURRENCY, SET_CATEGORIES, SET_CURRENT_CATEGORY } from "./actionTypes";

export const changeCurrency = currency => ({ type: CHANGE_CURRENCY, payload: { currency }});

export const setCategories = categories => ({ type: SET_CATEGORIES, payload: { categories }});
export const setCurrentCategory = category => ({ type: SET_CURRENT_CATEGORY, payload: { category }});
