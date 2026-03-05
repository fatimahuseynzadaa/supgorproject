
export const setCategoryProducts = (categories) => ({
  type: "SET_CATEGORY",
  payload: categories
});

export const addCategory = (category) => ({
  type: "ADD_CATEGORY",
  payload: category
});

export const deleteCategory = (value) => ({
  type: "DELETE_CATEGORY",
  payload: value
});