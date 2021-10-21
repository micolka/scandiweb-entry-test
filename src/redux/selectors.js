export const getCurrency = store => 
  store && store.currency ? store.currency : '';

export const getCategories = store => 
  store && store.categories ? store.categories : '';
