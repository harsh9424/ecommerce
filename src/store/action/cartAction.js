import { ADD_PRODUCT_TO_CART, ADD_PRODUCT_TO_CART_SUCCESS,
ADD_PRODUCT_TO_CART_FAILURE } from '../constants/constant'
    
    export function addProduct(payload) {
        return {
          type: ADD_PRODUCT_TO_CART,
          payload: payload
        };
      }
      
      export function addProductSuccess() {
        return {
          type: ADD_PRODUCT_TO_CART_SUCCESS
        };
      }
      
      export function addProductFailure(payload) {
        return {
          type: ADD_PRODUCT_TO_CART_FAILURE,
        };
      }