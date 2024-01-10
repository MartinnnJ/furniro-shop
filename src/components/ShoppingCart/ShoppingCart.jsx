import { useSelector } from 'react-redux';
import useCurrency from '../../hooks/useCurrency';
import LoadingSpinner from '../LoadingSpinner';
import ShoppingCartItem from './ShoppingCartItem';
import ShoppingCartIcon from '@assets/shopping-cart-icon.svg';
import ShoppingCartButton from './ShoppingCartButton';
import styles from './ShoppingCart.module.scss';

export default function ShoppingCart() {
  const cartItems = useSelector(state => state.cart.items);
  const { productId, status: cartInitFetching } = useSelector(state => state.cart.isCurrentlyUpdating);
  const totalAmount = useSelector(state => state.cart.totalAmount);

  const [formattedTotalAmount, currencyOutput] = useCurrency(totalAmount);

  const noCartItemsOutput = !productId && cartInitFetching ?
    <LoadingSpinner inline /> :
    <p className={styles.cart__msg}>Your Cart Is Empty :-/</p>;
  
  const cartItemsRendered = [...cartItems]
    .sort((a, b) => a.productTitle.localeCompare(b.productTitle))
    .map(item => {
      return (
        <ShoppingCartItem
          key={item.id}
          id={item.id}
          image={item.productImageId}
          name={item.productTitle}
          count={item.id.length}
          price={item.productPrice}
        />
      )
    });

  return (
    <div className={styles.cart}>
      <div className={styles.cart__header}>
        <h2 className={styles.cart__title}>
          Shopping Cart
        </h2>
        <img src={ShoppingCartIcon} alt="icon" />
      </div>
      <div className={styles.cart__content}>
        {cartItems.length > 0 ? cartItemsRendered : noCartItemsOutput}
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