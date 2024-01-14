import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

export const supportedCurrencies = ['eur', 'usd', 'czk'];

const initialState = {
  items: [],
  sort: -1,
  kind: -1,
  defaultCurrency: undefined,
  selectedCurrency: undefined,
  latestCurrencyRates: undefined,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProducts(state, action) {
      state.items = action.payload;
      state.defaultCurrency = action.payload[0].productPrice.baseCurrency;
      state.selectedCurrency = state.defaultCurrency;
    },
    setSortType(state, action) {
      state.sort = +action.payload;
    },
    setKindType(state, action) {
      state.kind = +action.payload;
    },
    setCurrency(state, action) {
      state.selectedCurrency = action.payload;
    },
    setLatestCurrencyRates(state, action) {
      state.latestCurrencyRates = action.payload.data;
    },
  },
});

export const loadAllProducts = () => {
  return async (dispatch) => {
    const response = await axios.get('http://127.0.0.1:3000/products');
    if (response.status === 200) {
      dispatch(productsActions.addProducts(response.data));
    }
  }
}

export const getLatestCurrencyRates = () => {
  return async (dispatch) => {
    // https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_WiqcsOTcOMv52QLVHEQKdPCmkgEZZy1PqBXTl32n&currencies=USD%2CCZK&base_currency=EUR
    const response = await axios.get('https://api.freecurrencyapi.com/v1/latest', {
      params: {
        apikey: 'fca_live_WiqcsOTcOMv52QLVHEQKdPCmkgEZZy1PqBXTl32n',
        base_currency: 'EUR',
        currencies: 'USD,CZK',
      }
    });
    if (response.status === 200) {
      dispatch(productsActions.setLatestCurrencyRates(response.data));
    }
  }
}

export const productsActions = productsSlice.actions;

export default productsSlice.reducer;