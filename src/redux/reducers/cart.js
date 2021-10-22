import { 
  ADD_PRODUCT_TO_CART, INCREASE_PRODUCT_COUNT, DECREASE_PRODUCT_COUNT, DELETE_PRODUCT 
} from "../actionTypes";

const initialState = {
  selectedProducts: [],
};

const cart = function(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART: {
      const { product, count } = action.payload;
      let checkedAttributes = checkAttributes(product);
      let productId = calculateProductId(product.id, checkedAttributes);

      const sameProduct = state.selectedProducts.find( el => el.productId === productId);

      if ( sameProduct ) {
        const productsCount = sameProduct.productsCount + count;
        const newState = state.selectedProducts.map( el => {
          return el.productId=== sameProduct.productId ? {...el, productsCount} : el;
        });

        return {
          selectedProducts: [...newState],
        };
      } else {
        
        return {
          selectedProducts: [
            ...state.selectedProducts, 
            { ...product, productsCount: count, checkedAttributes, productId },
          ],
        };
      }
    }
    case INCREASE_PRODUCT_COUNT: {
      const { productId } = action.payload;
      const newState = state.selectedProducts.map( el => {
        return productId === el.productId ? {...el, productsCount: el.productsCount + 1} : el;
      });

      return {
        selectedProducts: [...newState],
      };
    }
    case DECREASE_PRODUCT_COUNT: {
      const { productId } = action.payload;
      const newState = state.selectedProducts.map( el => {
        if (productId === el.productId) {
          const productsCount = el.productsCount > 1 ? el.productsCount - 1 : 1;

          return {...el, productsCount}
        } else {
          
          return el;
        }
      });

      return {
        selectedProducts: [...newState],
      };
    }
    case DELETE_PRODUCT: {
      const { productId } = action.payload;
      const newState = [...state.selectedProducts].filter(el => el.productId !== productId)

      return {
        selectedProducts: [...newState],
      };
    }
    default:
      return state;
  }
}

export default cart;

const calculateProductId = (id, checkedAttributes) => {
  return id + Object.values(checkedAttributes).join('-');
}

const checkAttributes = (product) => {
  let checkedAttributes = {};

  if (!product.checkedAttributes) {
      product.attributes.forEach(el => checkedAttributes[el.name] = el.items[0].id);
  } else {
    checkedAttributes = product.checkedAttributes;
  }

  return checkedAttributes;
}