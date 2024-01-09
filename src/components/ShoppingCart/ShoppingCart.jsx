import { useSelector } from 'react-redux';
import useCurrency from '../../hooks/useCurrency';
import ShoppingCartItem from './ShoppingCartItem';
import ShoppingCartIcon from '@assets/shopping-cart-icon.svg';
import ShoppingCartButton from './ShoppingCartButton';
import styles from './ShoppingCart.module.scss';

export default function ShoppingCart() {
  const cartItems = useSelector(state => state.cart.items);
  const totalAmount = useSelector(state => state.cart.totalAmount);

  const [formattedTotalAmount, currencyOutput] = useCurrency(totalAmount);

  return (
    <div className={styles.cart}>
      <div className={styles.cart__header}>
        <h2 className={styles.cart__title}>
          Shopping Cart
        </h2>
        <img src={ShoppingCartIcon} alt="icon" />
      </div>
      <div className={styles.cart__content}>
        {cartItems.length === 0 ? (
          <p>Loading...</p>
        ) : (
          cartItems.map(item => {
            return (
              <ShoppingCartItem
                key={item.id}
                image={item.productImageId}
                name={item.productTitle}
                count={item.productCount}
                price={item.productPrice}
              />
            )
          })
        )}
      </div>
      <div className={styles.cart__result}>
        <p className={styles.cart__total}>
          Subtotal
          <span>
            {currencyOutput} {formattedTotalAmount}
          </span>
        </p>
      </div>
      <div className={styles.cart__footer}>
        <ShoppingCartButton>Cart</ShoppingCartButton>
        <ShoppingCartButton>Checkout</ShoppingCartButton>
        <ShoppingCartButton>Comparison</ShoppingCartButton>
      </div>
    </div>
  )
}