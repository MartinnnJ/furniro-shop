import { sortTypeMapper } from "../../helpers";
import FilterShowCase from "./FilterShowcase";
import FilterIcon from "@assets/filter-icons/filter-icon-01.svg";
import GridIcon from "@assets/filter-icons/filter-icon-02.svg";
import ViewIcon from "@assets/filter-icons/filter-icon-03.svg";
import styles from "./FilterNavigation.module.scss";

export default function FilterNavigation({ firstIndex, lastIndex, totalCount, productsPerPage, sortType, onFilterClick }) {
  const sortTypeOutputText = sortTypeMapper.get(sortType);

  return (
    <div className={styles['filter-navigation']}>
      <div className={styles['filter-navigation__settings']}>
        <div className={styles['filter-navigation__filter']} onClick={onFilterClick}>
          <img className={styles['filter-navigation__icon']} src={FilterIcon} alt="icon" />
          <p className={styles['filter-navigation__text']}>Filter</p>
        </div>
        <img className={styles['filter-navigation__icon']} src={GridIcon} alt="icon" />
        <img className={styles['filter-navigation__icon']} src={ViewIcon} alt="icon" />
        <div className={styles.line}></div>
        <p className={styles['filter-navigation__results']}>
          Showing {firstIndex}–{lastIndex} of {totalCount} results
        </p>
      </div>
      <div className={styles['filter-navigation__showcases']}>
        <FilterShowCase label="Show" value={productsPerPage} />
        <FilterShowCase label="Short by" value={sortTypeOutputText} />
      </div>
    </div>
  );
}