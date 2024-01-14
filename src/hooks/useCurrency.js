import { useSelector } from "react-redux";
import { convertCurrency } from "../helpers";

export default function useCurrency(amount) {
  const latestCurrencyRates = useSelector(state => state.products.latestCurrencyRates);
  const defaultCurrency = useSelector(state => state.products.defaultCurrency);
  const selectedCurrency = useSelector(state => state.products.selectedCurrency);

  const currencyOutput = selectedCurrency?.toUpperCase();
  let formattedAmount = convertCurrency(amount, defaultCurrency, selectedCurrency, latestCurrencyRates);
  formattedAmount = +formattedAmount === 0 ? "0.00" : formattedAmount;

  return [formattedAmount, currencyOutput];
}