import axios from "axios";
import { BASE_URL } from "../../helpers";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalAmount: undefined,
  isCurrentlyUpdating: false,
};

const shoppingCartSlice = createSlice({
  name: 'shoppingCartSlice',
  initialState,
  reducers: {
    setUpdatingStatus(state, action) {
      state.isCurrentlyUpdating = action.payload;
    },
    addProductsToCart(state, action) {
      const reducedItems = [];
      for (const product of action.payload) {
        const exist = reducedItems.find(item => item.productId === product.productId);
        if (exist?.productId) {
          const index = reducedItems.findIndex(item => item.productId === exist.productId);
          reducedItems[index].productCount = reducedItems[index].productCount + 1;
        } else {
          reducedItems.push(product);
        }
      }
      state.items = reducedItems;
      state.totalAmount = action.payload
        .map(item => item.productPrice)
        .reduce((a, b) => a + b, 0);
    },
  },
});

export const loadAllShoppingCartItems = () => {
  return async (dispatch) => {
    const response = await axios.get(`${BASE_URL}/cart`);
    if (response.status === 200) {
      dispatch(shoppingCartActions.addProductsToCart(response.data));
    }
  }
};

export const updateShoppingCart = data => {
  return async (dispatch) => {
    const response = await axios.post(`${BASE_URL}/cart`, data);
    if (response.status === 201) {
      dispatch(loadAllShoppingCartItems());
      dispatch(shoppingCartActions.setUpdatingStatus(false));
    }
  }
}

export const shoppingCartActions = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;