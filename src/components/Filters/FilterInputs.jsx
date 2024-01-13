import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { paginatorActions } from "../../store/slices/paginator-slice";
import { productsActions } from "../../store/slices/products-slice";
import { sortTypeMapper, kindTypeMapper } from "../../helpers";
import styles from './FilterInputs.module.scss';

export default function FilterInputs() {
  const pageResults = useSelector(state => state.paginator.pageResults);
  const sortTypeSelected = useSelector(state => state.products.sort);
  const kindTypeSelected = useSelector(state => state.products.kind);
  const dispatch = useDispatch();

  const [filterValues, setFilterValues] = useState({
    grid: pageResults,
    sort: sortTypeSelected,
    kind: kindTypeSelected,
  });

  const onFormSubmitHandler = e => {
    e.preventDefault();
    dispatch(paginatorActions.setGridLayout(filterValues['grid']));
    dispatch(productsActions.setSortType(filterValues['sort']));
  }

  const gridChangeHandler = value => {
    const supportedGridLayout = [8, 12, 16, 20, 24];

    if (supportedGridLayout.includes(+value)) {
      setFilterValues(prevState => {
        return { ...prevState, grid: +value }
      });
    }
  };

  const sortChangeHandler = value => {
    setFilterValues(prevState => {
      return { ...prevState, sort: +value }
    });
  }

  const kindChangeHandler = value => {
    setFilterValues(prevState => {
      return { ...prevState, kind: +value }
    });
  }

  return (
    <form className={styles['filter-inputs']} onSubmit={onFormSubmitHandler}>

      <div className={styles['filter-inputs__container']}>
        <label className={styles['filter-inputs__label']} htmlFor="grid">Grid</label>
        <input
          className={styles['filter-inputs__input']}
          type="number"
          name="grid"
          id="grid"
          step={4}
          min={8}
          max={24}
          value={filterValues['grid']}
          onChange={e => gridChangeHandler(e.target.value)}
        />
      </div>

      <div className={styles['filter-inputs__container']}>
        <label className={styles['filter-inputs__label']} htmlFor="sort">Sort</label>
        <select
          className={styles['filter-inputs__input']}
          name="sort"
          id="sort"
          value={filterValues['sort']}
          onChange={e => sortChangeHandler(e.target.value)}
        >
          {Array.from(sortTypeMapper).map(([key, value], index) => {
            return (
              <option
                key={index}
                value={key}
              >
                {value}
              </option>
            )
          })}
        </select>
      </div>

      <div className={styles['filter-inputs__container']}>
        <label className={styles['filter-inputs__label']} htmlFor="kind">Kind</label>
        <select
          className={styles['filter-inputs__input']}
          name="kind"
          id="kind"
          value={filterValues['kind']}
          onChange={e => kindChangeHandler(e.target.value)}
        >
          {Array.from(kindTypeMapper).map(([key, value], index) => {
            return (
              <option
                key={index}
                value={key}
              >
                {value}
              </option>
            )
          })}
        </select>
      </div>

      <button className={styles['filter-inputs__submit']}>Apply</button>

    </form>
  )
}