import { GET_PRODUCT_LIST, GET_PRODUCT_LIST_SUCCESS, GET_PRODUCT_LIST_FAILURE } from '../constants/constant';
import { put, takeLatest } from "redux-saga/effects";
import  * as ProductListService from '../../services/ProductListService';

function* getProducts(action) {
    try {
        var response = yield ProductListService.getProducts();
        if (response && response.responseType === "SUCCESS") {
          yield put({ type: GET_PRODUCT_LIST_SUCCESS, payload : response.data });
        } else {
          yield put({ type: GET_PRODUCT_LIST_FAILURE, payload : response.message || "error" });
        }
    } catch (error) {
        yield put({ type: GET_PRODUCT_LIST_FAILURE, payload : response.message || "error" });
    }
}



export function* handleProductList() {
    yield takeLatest(GET_PRODUCT_LIST, getProducts);
  }