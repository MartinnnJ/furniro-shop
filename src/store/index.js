import { configureStore } from "@reduxjs/toolkit";
import productsReducer from './slices/products-slice';
import paginatorReducer from "./slices/paginator-slice";
import shoppingCartReducer from "./slices/shopping-cart-slice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    paginator: paginatorReducer,
    cart: shoppingCartReducer,
  }
});

export default store;