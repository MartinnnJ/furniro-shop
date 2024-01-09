import styles from './ProductItemFlag.module.scss';

const calcDiscountPer = (newPrice, oldPrice) => {
  const discountPercentage = ((oldPrice - newPrice) / oldPrice) * 100;
  return Math.round(discountPercentage);
};

export default function ProductItemFlag({ data }) {
  const discountValue = data?.currentPrice ? calcDiscountPer(data.currentPrice, data.originalPrice) : null;
  const textOutput = discountValue ? `-${discountValue}%` : 'New';
  const flagType = `
    ${styles.flag}
    ${discountValue ? styles['flag--discount'] : styles['flag--new']}
  `;

  return (
    <div className={flagType}>
      <small className={styles.flag__text}>
        {textOutput}
      </small>
    </div>
  )
}