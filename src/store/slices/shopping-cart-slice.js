import axios from "axios";
import { BASE_URL } from "../../helpers";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalAmount: undefined,
  isCurrentlyUpdating: { productId: null, status: false }, // used by product item buttons and shopping card cmp
};

const shoppingCartSlice = createSlice({
  name: 'shoppingCartSlice',
  initialState,
  reducers: {
    setUpdatingStatus(state, action) {
      state.isCurrentlyUpdating.productId = action.payload.productId;
      state.isCurrentlyUpdating.status = action.payload.status;
    },
    addProductsToCart(state, action) {
      const reducedItems = [];
      const arr = action.payload.map(item => {
        return { ...item, id: [item.id] }
      })
      for (const obj of arr) {
        const exist = reducedItems.find(item => item.product === obj.product);
        if (exist?.product) {
          const index = reducedItems.findIndex(item => item.product === exist.product);
          reducedItems[index].id = [...reducedItems[index].id, ...obj.id];
        } else {
          reducedItems.push(obj);
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
      dispatch(shoppingCartActions.setUpdatingStatus({ productId: null, status: false }));
    }
  }
};

export const updateShoppingCart = data => {
  return async (dispatch) => {
    const response = await axios.post(`${BASE_URL}/cart`, data);
    if (response.status === 201) {
      dispatch(loadAllShoppingCartItems());
      dispatch(shoppingCartActions.setUpdatingStatus({ productId: null, status: false }));
    }
  }
};

export const deleteFromCart = id => {
  return async (dispatch) => {
    const response = await axios.delete(`${BASE_URL}/cart/${id}`);
    if (response.status === 200) {
      dispatch(loadAllShoppingCartItems());
    }
  }
};

export const shoppingCartActions = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;