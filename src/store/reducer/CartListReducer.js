import {
    ADD_PRODUCT_TO_CART, ADD_PRODUCT_TO_CART_SUCCESS, ADD_PRODUCT_TO_CART_FAILURE
 } from "../constants/constant";
 
 const initialState = {
   isLoading: false,
   cartList: [],
 };
 
 export default function CartListReducer(state = initialState, action) {
   switch (action.type) {
     case ADD_PRODUCT_TO_CART:{
       console.log('triggered')
       return {
         ...state,
         isLoading: true,
         cartList: [...state.cartList, action.payload]
       };}
     case ADD_PRODUCT_TO_CART_SUCCESS:
       return {
         ...state,
         isLoading: false,
       };
       case ADD_PRODUCT_TO_CART_FAILURE:
       return {
         ...state,
         isLoading: false,
       };
     default:
       return state;
   }
 }
 