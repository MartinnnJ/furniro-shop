import styles from './MarketLogo.module.scss';

export default function MarketLogo({ icon, text }) {
  return (
    <div className={styles.logo}>
      <img className={styles.logo__image} src={icon} alt="icon" />
      <h2 className={styles.logo__text}>{text}</h2>
    </div>
  )
}