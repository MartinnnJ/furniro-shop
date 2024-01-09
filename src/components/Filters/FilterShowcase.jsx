import styles from "./FilterShowcase.module.scss";

export default function FilterShowCase({ label, value }) {
  return (
    <div className={styles.showcase}>
      <p className={styles.showcase__label}>
        {label}
      </p>
      <div className={styles.showcase__box}>
        {value}
      </div>
    </div>
  )
}