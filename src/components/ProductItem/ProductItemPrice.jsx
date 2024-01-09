import useCurrency from '../../hooks/useCurrency';
import styles from './ProductItemPrice.module.scss';

export default function ProductItemPrice({ data }) {
  const [formattedCurrentPrice, currencyOutput] = useCurrency(data.currentPrice);
  const [formattedOriginalPrice] = useCurrency(data.originalPrice);

  const isDiscount = data.currentPrice !== data.originalPrice;

  return (
    <div className={styles['price-container']}>
      <p className={styles['price-container__current-price']}>
        <span>{currencyOutput}</span>
        {formattedCurrentPrice}
      </p>
      {isDiscount && (
        <p className={styles['price-container__original-price']}>
          <span className={styles['line-through']}></span>
          <span>{currencyOutput}</span>
          {formattedOriginalPrice}
        </p>
      )}
    </div>
  )
}