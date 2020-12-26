import { combineReducers } from "redux";
import ProductListReducer from "../reducer/ProductListReducer";
import CartListReducer from "./CartListReducer";

const rootReducer = combineReducers({
  productReducer: ProductListReducer,
  cartReducer: CartListReducer
});

export default rootReducer;
