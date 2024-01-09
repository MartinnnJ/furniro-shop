import { CgSpinner } from "react-icons/cg";
import styles from "./LoadingSpinner.module.scss";

export default function LoadingSpinner({ inline = false }) {
  const spinnerTypeOutput = inline ? (
    <div className={styles.spinner__inline}>
      <CgSpinner />
    </div>
  ) : (
    <div className={styles.spinner__block}>
      <CgSpinner />
    </div>
  );

  return (
    <>{spinnerTypeOutput}</>
  );
}