import styles from './ProductItemButton.module.scss';

export default function ProductItemButton({ children, onClick }) {
  return (
    <button
      type="button"
      className={styles.button}
      onClick={onClick}
    >
      {children}
    </button>
  )
}