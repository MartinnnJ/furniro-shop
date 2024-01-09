import styles from './FooterNavigation.module.scss';

export default function FooterNavigation({ data }) {
  const heading = data.navigationHeading;
  const navigationData = data.navigationLinkNames;

  return (
    <ul className={styles.list}>
      <li className={`${styles.list__item} ${styles['list__item--heading']}`}>
        {heading}
      </li>
      {navigationData.map((text, i) => {
        return (
          <li
            key={i}
            className={styles.list__item}
          >
            {text}
          </li>
        )
      })}
    </ul>
  )
}