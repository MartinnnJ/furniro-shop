import styles from './BenefitItem.module.scss';

export default function BenefitItem({ icon, title, description }) {
  return (
    <div className={styles['benefit-item']}>
      <img className={styles['benefit-item__icon']} src={icon} alt="icon" />
      <div className={styles['benefit-item__content']}>
        <h2 className={styles['benefit-item__title']}>
          {title}
        </h2>
        <small className={styles['benefit-item__description']}>
          {description}
        </small>
      </div>
    </div>
  )
}