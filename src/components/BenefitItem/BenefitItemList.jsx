import styles from './BenefitItemList.module.scss';

export default function BenefitItemList({ children }) {
  return (
    <div className={styles.list}>
      {children}
    </div>
  )
}