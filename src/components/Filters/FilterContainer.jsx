import { useState } from "react";
import FilterNavigation from "./FilterNavigation";
import FilterInputs from "./FilterInputs";
import styles from './FilterContainer.module.scss';

export default function FilterContainer({ productsRange, productsCount, sortType, productsPerPage }) {
  const [isOpen, setIsOpen] = useState(false);

  const firstPageProduct = productsRange[0] + 1;
  const lastPageProduct = productsRange[1] > productsCount ? productsCount : productsRange[1];

  return (
    <div className={styles['filter-container']}>
      <FilterNavigation
        firstIndex={firstPageProduct}
        lastIndex={lastPageProduct}
        totalCount={productsCount}
        productsPerPage={productsPerPage}
        sortType={sortType}
        onFilterClick={() => setIsOpen(prevState => !prevState)}
      />
      {isOpen && <FilterInputs />}
    </div>
  );
}