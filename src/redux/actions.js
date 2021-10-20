import { CHANGE_CURRENCY } from "./actionTypes";

export const changeCurrency = currency => ({ type: CHANGE_CURRENCY, payload: { currency }});
