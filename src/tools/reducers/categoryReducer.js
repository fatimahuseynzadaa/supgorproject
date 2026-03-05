
const initialState = {
  all: JSON.parse(localStorage.getItem("categories")) || []
};

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {

    case "ADD_CATEGORY":
      const updatedCategories = [...state.all, action.payload];
      localStorage.setItem("categories", JSON.stringify(updatedCategories));
      return {
        ...state,
        all: updatedCategories
      };

    case "DELETE_CATEGORY":
      const filteredCategories = state.all.filter(
        cat => cat.value !== action.payload
      );
      localStorage.setItem("categories", JSON.stringify(filteredCategories));
      return {
        ...state,
        all: filteredCategories
      };

    default:
      return state;
  }
};