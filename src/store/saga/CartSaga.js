import { ADD_PRODUCT_TO_CART, ADD_PRODUCT_TO_CART_SUCCESS, ADD_PRODUCT_TO_CART_FAILURE } from '../constants/constant';
import { put, takeLatest } from "redux-saga/effects";

function* addProducts(action) {
    try {
        
    } catch (error) {
        
    }
}



export function* handleCartList() {
    yield takeLatest(ADD_PRODUCT_TO_CART, addProducts);
  }