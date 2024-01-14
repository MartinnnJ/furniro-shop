import styles from './ProductItemButton.module.scss';

export default function ProductItemButton({ children, onClick, disabled }) {
  return (
    <button
      type="button"
      className={styles.button}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}