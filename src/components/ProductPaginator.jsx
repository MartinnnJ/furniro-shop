import { useDispatch, useSelector } from 'react-redux';
import { paginatorActions } from '../store/slices/paginator-slice';
import { scrollUp } from '../helpers';
import styles from './ProductPaginator.module.scss';

export default function ProductPaginator({ productsCount }) {
  const pageSelected = useSelector(state => state.paginator.pageSelected);
  const pageResults = useSelector(state => state.paginator.pageResults);
  const dispatch = useDispatch();

  const maxPaginatorValue = Math.ceil(productsCount / pageResults);
  const paginatorArr = new Array(maxPaginatorValue).fill().map((_, i) => i + 1);

  const paginatorClickHandler = pageNumber => {
    if (pageNumber !== pageSelected) {
      if (pageNumber === null) {
        const nextPage = ((pageSelected + 1) <= maxPaginatorValue) ? pageSelected + 1 : undefined;
        if (nextPage) {
          dispatch(paginatorActions.changeSelectedPage(nextPage));
          scrollUp();
        }
      } else {
        dispatch(paginatorActions.changeSelectedPage(pageNumber));
        scrollUp();
      }
    }
  };

  return (
    <div className={styles.paginator}>
      {paginatorArr.length > 1 && paginatorArr.map(num => {
        const isActive = num === pageSelected;
        const classes = `
          ${styles.paginator__button}
          ${isActive ? styles['paginator__button--active'] : undefined}
        `;

        return (
          <div
            key={num}
            className={classes}
            onClick={() => paginatorClickHandler(num)}
          >
            {num}
          </div>
        )
      })}
      {paginatorArr.length > 1 && (
        <div
          className={`${styles.paginator__button} ${styles['paginator__button--next']}`}
          onClick={() => paginatorClickHandler(null)}
        >
          Next
        </div>
      )}
    </div>
  )
}