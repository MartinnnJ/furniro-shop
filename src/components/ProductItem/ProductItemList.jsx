import styles from './ProductItemList.module.scss';

export default function ProductItemList({ children }) {
  return (
    <div className={styles.list}>
      {children}
    </div>
  )
}