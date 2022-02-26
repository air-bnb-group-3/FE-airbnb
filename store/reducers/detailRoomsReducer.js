const initialState = { listAllRooms: [], isLoading: true };

const detailRoomsReducer = (state = initialState, action) => {
  if (action.type === "SET_LIST_PRODUCT") {
    return {
      ...state,
      listAllRooms: action.payload,
    };
  }
  return state;
};

export default detailRoomsReducer;
