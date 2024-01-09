import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productsActions } from '../../store/slices/products-slice';
import { supportedCurrencies } from '../../store/slices/products-slice';
import { scrollUp } from '../../helpers';
import styles from './CurrencySetter.module.scss';

export default function CurrencySetter() {
  const selectedCurrency = useSelector(state => state.products.selectedCurrency); // market currency state in redux store
  const dispatch = useDispatch();
  const [selectValue, setSelectValue] = useState(undefined); // local state

  useEffect(() => {
    setSelectValue(selectedCurrency);
  }, [selectedCurrency]);

  const renderedOptions = supportedCurrencies.map((currency, i) => {
    const capitalizedCurrencyName = currency.toUpperCase();

    return (
      <option
        key={i}
        value={currency}
      >
        {capitalizedCurrencyName}
      </option>
    );
  });

  const currencySubmitHandler = e => {
    e.preventDefault();
    if (selectValue !== selectedCurrency) {
      dispatch(productsActions.setCurrency(selectValue));
      scrollUp();
    }
  };

  return (
    <form className={styles.form} onSubmit={e => currencySubmitHandler(e)}>
      <h2 className={styles.form__heading}>
        Currency Settings
      </h2>
      <div className={styles['form__input-container']}>
        <select
          className={styles.form__input}
          onChange={e => setSelectValue(e.target.value)}
          value={selectValue}
        >
          {renderedOptions}
        </select>
        <button className={styles.form__subscribe}>
          CHANGE
        </button>
      </div>
    </form>
  );
}