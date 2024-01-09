import styles from './ProductItemLink.module.scss';

export default function ProductItemLink({ icon, text }) {
  return (
    <div className={styles['product-link']}>
      <img
        className={styles['product-link__icon']}
        src={icon}
        alt="icon"
      />
      <p className={styles['product-link__text']}>
        {text}
      </p>
    </div>
  )
}