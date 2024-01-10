import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { shoppingCartActions, updateShoppingCart } from '../../store/slices/shopping-cart-slice';
import { setBgImageInline } from '../../helpers';
import { v4 } from 'uuid';
import LoadingSpinner from '../LoadingSpinner';
import ProductItemButton from './ProductItemButton';
import ProductItemLink from './ProductItemLink';
import ProductItemFlag from './ProductItemFlag';
import ProductItemPrice from './ProductItemPrice';
import ShareIcon from '@assets/product-item-icons/share-icon.svg';
import CompareIcon from '@assets/product-item-icons/compare-icon.svg';
import LikeIcon from '@assets/product-item-icons/like-icon.svg';
import styles from './ProductItem.module.scss';

export default function ProductItem({ id, bgImageName, title, description, price, isNew }) {
  const [overlay, setOverlay] = useState(false);
  const dispatch = useDispatch();
  const {
    productId: updatingProductId,
    status: updatingStatus
  } = useSelector(state => state.cart.isCurrentlyUpdating);

  const isDiscount = price.currentPrice !== price.originalPrice;
  const bgImageStyles = setBgImageInline(bgImageName);

  const addToShoppingCartHandler = (id, bgId, title, price) => {
    dispatch(shoppingCartActions.setUpdatingStatus({ productId: id, status: true }));
    const newItem = {
      id: v4(),
      product: id,
      productImageId: bgId,
      productTitle: title,
      productPrice: price.currentPrice,
    };
    dispatch(updateShoppingCart(newItem));
  };

  return (
    <div
      className={styles['product-item']}
      onMouseEnter={() => setOverlay(true)}
      onMouseLeave={() => setOverlay(false)}
    >
      <figure
        style={bgImageStyles}
        className={styles['product-item__image']}
      >
        {isDiscount && <ProductItemFlag data={price} />}
        {isNew && <ProductItemFlag />}
      </figure>
      <div className={styles['product-item__content']}>
        <h2 className={styles['product-item__title']}>
          {title}
        </h2>
        <small className={styles['product-item__description']}>
          {description}
        </small>
        <ProductItemPrice data={price} />
      </div>

      {overlay && (
        <div className={styles['product-item__overlay']}>
          <ProductItemButton onClick={() => addToShoppingCartHandler(id, bgImageName, title, price)}>
            {(updatingProductId === id && updatingStatus) ? <LoadingSpinner inline={true} /> : 'Add to cart'}
          </ProductItemButton>
          <div className={styles['product-item__link-container']}>
            <ProductItemLink icon={ShareIcon} text="Share" />
            <ProductItemLink icon={CompareIcon} text="Compare" />
            <ProductItemLink icon={LikeIcon} text="Like" />
          </div>
        </div>
      )}

    </div>
  )
}