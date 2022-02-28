import detailRoomsReducer from "./detailRoomsReducer";
import categoriesDetailReducer from "./categoriesDetailReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  detailRoomsReducer,
  categoriesDetailReducer,
});

export default rootReducer;
