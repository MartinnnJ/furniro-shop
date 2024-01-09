import { useState } from "react";
import { useSelector } from "react-redux";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import MarketLogo from "./MarketLogo";
import Logo from "@assets/logo.png";
import AccountAlertIcon from "@assets/header-navigation-icons/account-alert-icon.svg";
import SearchIcon from "@assets/header-navigation-icons/search-icon.svg";
import LikeIcon from "@assets/header-navigation-icons/like-icon.svg";
import CartIcon from "@assets/header-navigation-icons/cart-icon.svg";
import styles from "./HeaderNavigation.module.scss";

export default function HeaderNavigation() {
  const [shoppingCartOpen, setShoppingCartOpen] = useState(false);
  const cartItems = useSelector(state => state.cart.items);
  const cartItemsNotificationCount = cartItems.map(item => item.productCount).reduce((a, b) => a + b, 0);

  return (
    <nav className={styles.navigation}>
      <MarketLogo icon={Logo} text="Furniro" />
      <ul className={styles['navigation__link-list']}>
        <li className={styles.navigation__link}>
          Home
        </li>
        <li className={styles.navigation__link}>
          Shop
        </li>
        <li className={styles.navigation__link}>
          About
        </li>
        <li className={styles.navigation__link}>
          Contact
        </li>
      </ul>
      <ul className={styles['navigation__icon-list']}>
        <li className={styles['navigation__icon-list-item']}>
          <img className={styles.navigation__icon} src={AccountAlertIcon} alt="icon" />
        </li>
        <li className={styles['navigation__icon-list-item']}>
          <img className={styles.navigation__icon} src={SearchIcon} alt="icon" />
        </li>
        <li className={styles['navigation__icon-list-item']}>
          <img className={styles.navigation__icon} src={LikeIcon} alt="icon" />
        </li>
        <li className={styles['navigation__icon-list-item']}>
          <img
            className={styles.navigation__icon}
            src={CartIcon}
            alt="icon"
            onClick={() => setShoppingCartOpen(prevState => !prevState)}
          />
          {cartItemsNotificationCount > 0 && (
            <div className={styles['navigation__icon-notification']}>
              {cartItemsNotificationCount}
            </div>
          )}
        </li>
        {shoppingCartOpen && <ShoppingCart />}
      </ul>
    </nav>
  );
}