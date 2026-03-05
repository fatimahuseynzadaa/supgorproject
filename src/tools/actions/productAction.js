
export const setProducts = (products) => ({
  type: "SET_PRODUCTS",
  payload: products
});
export const addProduct = (product) => ({
  type: "ADD_PRODUCT",
  payload: product
});
export const filterProduct = (category) => ({
  type: "FILTER_PRODUCT",
  payload: category
});

export const deleteProduct = (id) => ({
  type: "DELETE_PRODUCT",
  payload: id
});

export const deleteProductsByCategory = (category) => ({
  type: "DELETE_PRODUCTS_BY_CATEGORY",
  payload: category
});

export const addToBasket = (product) => ({
  type: "ADD_TO_BASKET",
  product
});

export const deleteFromBasket = (id) => ({
  type: "DELETE_FROM_BASKET",
  id
});



// export const setProducts = (products) => ({
//   type: "SET_PRODUCTS",
//   payload: products
// });

// export const filterProducts = (category) => ({
//   type: "FILTER_PRODUCTS",
//   payload: category
// });

// export const addToBasket = (product) => ({
//   type: "ADD_TO_BASKET",
//   product
// });

// export const deleteFromBasket = (id) => ({
//   type: "DELETE_FROM_BASKET",
//   id
// });