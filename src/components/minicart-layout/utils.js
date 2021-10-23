export const calcFullPrice = (selectedProducts, currency) => {
    return selectedProducts.reduce((acc, el) => {
        const price = el.prices.find(type => type.currency === currency).amount;
        return acc + price * 100 * el.productsCount;
      }, 0) / 100;
};
