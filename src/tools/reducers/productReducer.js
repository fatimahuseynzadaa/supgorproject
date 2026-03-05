const initialState = {
  all: JSON.parse(localStorage.getItem("products")) || [],
  filtered: [],
  basket: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        all: action.payload,
        filtered: action.payload,
      };

    case "FILTER_PRODUCT":
      return {
        ...state,
        filtered:
          action.payload === null
            ? state.all
            : state.all.filter((p) => p.category === action.payload),
      };

    case "DELETE_PRODUCT":
      const productsAfterDelete = state.all.filter(
        (p) => p.id !== action.payload,
      );
      localStorage.setItem("products", JSON.stringify(productsAfterDelete));
      return {
        ...state,
        all: productsAfterDelete,
        filtered: state.filtered.filter((p) => p.id !== action.payload),
      };

    case "ADD_PRODUCT":
      const newProduct = { ...action.payload, id: Date.now() };
      const updatedProducts = [...state.all, newProduct];
      localStorage.setItem("products", JSON.stringify(updatedProducts));
      return { ...state, all: updatedProducts, filtered: updatedProducts };

    case "DELETE_PRODUCTS_BY_CATEGORY":
      const productsAfterCategoryDelete = state.all.filter(
        (p) => p.category !== action.payload,
      );
      localStorage.setItem(
        "products",
        JSON.stringify(productsAfterCategoryDelete),
      );
      return {
        ...state,
        all: productsAfterCategoryDelete,
        filtered: productsAfterCategoryDelete,
      };

    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.product],
      };

    case "DELETE_FROM_BASKET":
      return {
        ...state,
        basket: state.basket.filter((p) => p.id !== action.payload),
      };
    case "UPDATE_PRODUCT":
      return {
        ...state,
        all: state.all.map((p) =>
          p.id === action.payload.id ? action.payload : p,
        ),
      };

    default:
      return state;
  }
};

export default productReducer;
