import {
   GET_PRODUCT_LIST, GET_PRODUCT_LIST_SUCCESS, GET_PRODUCT_LIST_FAILURE
} from "../constants/constant";

const initialState = {
  isLoading: false,
  productList: [],
};

export default function ProductListReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCT_LIST:{
      console.log('triggered')
      return {
        ...state,
        isLoading: true,
      };}
    case GET_PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        productList: action.payload
      };
      case GET_PRODUCT_LIST_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}
