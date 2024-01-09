import styles from './FooterMarketAddress.module.scss';

export default function FooterMarketAddress() {
  return (
    <div className={styles.container}>
      <h2 className={styles.container__name}>
        Furniro
      </h2>
      <p className={styles.container__address}>
        400 University Drive Suite 200 Coral Gables,
        <span>FL 33134 USA</span>
      </p>
    </div>
  )
}