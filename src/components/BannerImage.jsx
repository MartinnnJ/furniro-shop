import Banner from '@assets/banner-image.jpg';
import styles from "./BannerImage.module.scss";

export default function BannerImage() {
  const bgStyles = {
    backgroundImage: `url(${Banner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className={styles.container}>
      <div style={bgStyles} className={styles.overlay}></div>
      <div className={styles.banner}>
        <div className={styles.banner__content}>
          <h1 className={styles.banner__heading}>
            Shop
          </h1>
          <p className={styles.banner__route}>
            <span>Home</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M6 15L11 10L6 5L7 3L14 10L7 17L6 15Z" fill="black"/>
              </svg>
            Shop
          </p>
        </div>
      </div>
    </div>
  );
}