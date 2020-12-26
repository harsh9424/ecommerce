import { GET_PRODUCT_LIST , GET_PRODUCT_LIST_SUCCESS,
GET_PRODUCT_LIST_FAILURE} from '../constants/constant'

export function getProductList() {
    return {
      type: GET_PRODUCT_LIST
    };
  }
  
  export function getProductListSuccess(payload) {
    return {
      type: GET_PRODUCT_LIST_SUCCESS,
      payload: payload
    };
  }
  
  export function getProductListFailure(payload) {
    return {
      type: GET_PRODUCT_LIST_FAILURE,
      payload: payload
    };
  }