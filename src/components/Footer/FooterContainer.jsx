import styles from './FooterContainer.module.scss';

export default function FooterContainer({ children }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className={styles.container}>
        {children}
      </div>
      <div className={styles.line}></div>
      <small className={styles.copyrights}>
        {`${currentYear} furniro. All rights reverved`}
      </small>
    </footer>
  )
}