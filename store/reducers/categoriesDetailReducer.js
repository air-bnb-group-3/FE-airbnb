const initialState = { listAllCategories: [], isLoading: true };

const categoriesDetailReducer = (state = initialState, action) => {
  if (action.type === "SET_LIST_CATEGORIES") {
    return {
      ...state,
      listAllCategories: action.payload,
    };
  }
  return state;
};
export default categoriesDetailReducer;
