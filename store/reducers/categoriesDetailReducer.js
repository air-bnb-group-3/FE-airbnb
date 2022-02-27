const initialState = {
  listAllCategories: [],
  isLoading: true,
  listForFilter: [],
};

const categoriesDetailReducer = (state = initialState, action) => {
  if (action.type === "SET_LIST_CATEGORIES") {
    return {
      ...state,
      listAllCategories: action.payload,
      listForFilter: action.payload,
    };
  } else if (action.type === "SET_LIST_FILTER") {
    return {
      ...state,
      listAllCategories: action.payload,
    };
  }
  return state;
};
export default categoriesDetailReducer;
