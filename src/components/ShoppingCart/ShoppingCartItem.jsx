import useCurrency from '../../hooks/useCurrency';
import { setBgImageInline } from '../../helpers';
import DeleteIcon from '@assets/shopping-cart-delete-icon.svg';
import styles from './ShoppingCartItem.module.scss';

export default function ShoppingCartItem({ name, image, count, price }) {
  const [formattedPrice, currencyOutput] = useCurrency(price);
  const bgImageStyles = setBgImageInline(image);

  return (
    <div className={styles['cart-item']}>
      <figure
        style={bgImageStyles}
        className={styles['cart-item__image']}
      ></figure>
      <div className={styles['cart-item__content']}>
        <h3 className={styles['cart-item__name']}>
          {name}
        </h3>
        <p className={styles['cart-item__description']}>
          <span className={styles['cart-item__count']}>
            {count}
          </span>
          X
          <span className={styles['cart-item__price']}>
            {currencyOutput} {formattedPrice}
          </span>
        </p>
      </div>
      <img className={styles['cart-item__button']} src={DeleteIcon} alt="icon" />
    </div>
  );
}