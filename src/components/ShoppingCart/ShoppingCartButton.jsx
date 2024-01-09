import styles from './ShoppingCartButton.module.scss';

export default function ShoppingCartButton({ children }) {
  return (
    <button
      type='button'
      className={styles.button}
    >
      {children}
    </button>
  );
}