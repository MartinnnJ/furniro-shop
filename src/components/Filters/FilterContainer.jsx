import FilterShowCase from "./FilterShowcase";
import FilterIcon from "@assets/filter-icons/filter-icon-01.svg";
import GridIcon from "@assets/filter-icons/filter-icon-02.svg";
import ViewIcon from "@assets/filter-icons/filter-icon-03.svg";
import styles from './FilterContainer.module.scss';

export default function FilterContainer() {
  return (
    <div className={styles['filter-container']}>
      <div className={styles['filter-container__settings']}>
        <div className={styles['filter-container__filter']}>
          <img className={styles['filter-container__icon']} src={FilterIcon} alt="icon" />
          <p className={styles['filter-container__text']}>Filter</p>
        </div>
        <img className={styles['filter-container__icon']} src={GridIcon} alt="icon" />
        <img className={styles['filter-container__icon']} src={ViewIcon} alt="icon" />
        <div className={styles.line}></div>
        <p className={styles['filter-container__results']}>
          Showing 1–16 of 32 results
        </p>
      </div>
      <div className={styles['filter-container__showcases']}>
        <FilterShowCase label="Show" value={16} />
        <FilterShowCase label="Short by" value="Default" />
      </div>
    </div>
  );
}