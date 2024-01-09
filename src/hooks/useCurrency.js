import { useSelector } from "react-redux";
import { convertCurrency } from "../helpers";

export default function useCurrency(amount) {
  const latestCurrencyRates = useSelector(state => state.products.latestCurrencyRates);
  const defaultCurrency = useSelector(state => state.products.defaultCurrency);
  const selectedCurrency = useSelector(state => state.products.selectedCurrency);

  const currencyOutput = selectedCurrency.toUpperCase();
  const formattedAmount = convertCurrency(amount, defaultCurrency, selectedCurrency, latestCurrencyRates);

  return [formattedAmount, currencyOutput];
}