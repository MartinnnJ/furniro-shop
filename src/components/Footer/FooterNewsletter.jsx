import styles from './FooterNewsletter.module.scss';

export default function FooterNewsletter() {
  return (
    <form className={styles.form}>
      <h2 className={styles.form__heading}>
        Newsletter
      </h2>
      <div className={styles['form__input-container']}>
        <input
          className={styles.form__input}
          type="email"
          placeholder="Enter Your Email Address"
        />
        <button className={styles.form__subscribe}>
          SUBSCRIBE
        </button>
      </div>
    </form>
  )
}