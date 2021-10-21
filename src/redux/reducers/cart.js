import { ADD_PRODUCT_TO_CART } from "../actionTypes";

const initialState = {
  selectedProducts: [],
};

const cart = function(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART: {
      const { product } = action.payload;
      const sameProduct = state.selectedProducts.find( el => el.id === product.id);
      if ( sameProduct ) {
        const productsCount = sameProduct.productsCount + 1;
        const newState = state.selectedProducts.map( el => {
          return el.id === sameProduct.id ? {...el, productsCount} : el;
        });
        return {
          selectedProducts: [...newState],
        };
      } else {
        return {
          selectedProducts: [...state.selectedProducts, {...product, productsCount: 1}],
        };
      }

    }
    default:
      return state;
  }
}

export default cart;
