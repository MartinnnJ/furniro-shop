import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadAllProducts, getLatestCurrencyRates } from "./store/slices/products-slice";
import { loadAllShoppingCartItems, shoppingCartActions } from "./store/slices/shopping-cart-slice";
import { paginatorSliceValues } from "./helpers";
import { BENEFITS_LIST, FOOTER_NAVIGATION_DATA } from "./store/static-data";
import HeaderNavigation from "./components/HeaderNavigation/HeaderNavigation";
import BannerImage from "./components/BannerImage";
import FilterContainer from "./components/Filters/FilterContainer";
import LoadingSpinner from "./components/LoadingSpinner";
import ProductItemList from "./components/ProductItem/ProductItemList";
import ProductItem from "@components/ProductItem/ProductItem";
import ProductPaginator from "./components/ProductPaginator";
import BenefitItemList from "./components/BenefitItem/BenefitItemList";
import BenefitItem from "./components/BenefitItem/BenefitItem";
import FooterContainer from "./components/Footer/FooterContainer";
import FooterMarketAddress from "./components/Footer/FooterMarketAddress";
import FooterNavigation from "./components/Footer/FooterNavigation";
// import FooterNewsletter from "./components/Footer/FooterNewsletter";
import CurrencySetter from "./components/Footer/CurrencySetter";

export default function App() {
  const paginatorPageSelected = useSelector(state => state.paginator.pageSelected);
  const productsPerPage = useSelector(state => state.paginator.pageResults);
  const products = useSelector(state => state.products.items);
  const dispatch = useDispatch();

  const [start, end] = paginatorSliceValues(paginatorPageSelected, productsPerPage);
  const paginatedProducts = products.slice(start, end);

  useEffect(() => {
    dispatch(loadAllProducts());
    dispatch(shoppingCartActions.setUpdatingStatus({ productId: null, status: true }));
    dispatch(loadAllShoppingCartItems());
    dispatch(getLatestCurrencyRates());
  }, [dispatch]);

  const renderedProducts = (
    paginatedProducts.map(product => {
      return (
        <ProductItem
          key={product.productId}
          id={product.productId}
          bgImageName={product.productImageId}
          title={product.productTitle}
          description={product.productDescription}
          price={product.productPrice}
          isNew={product.isNew}
        />
      )
    })
  )

  const renderedBenefitItems = (
    BENEFITS_LIST.map(benefit => {
      return (
        <BenefitItem
          key={benefit.benefitId}
          icon={benefit.benefitIcon}
          title={benefit.benefitTitle}
          description={benefit.benefitDescription}
        />
      )
    })
  )

  return (
    <>
      <HeaderNavigation />
      <BannerImage />
      <FilterContainer />
      {products.length === 0 ? (
        <LoadingSpinner />
      ) : (
        <ProductItemList>
          {renderedProducts}
        </ProductItemList>
      )}
      <ProductPaginator productsCount={products.length} />
      <BenefitItemList>
        {renderedBenefitItems}
      </BenefitItemList>
      <FooterContainer>
        <FooterMarketAddress />
        <FooterNavigation data={FOOTER_NAVIGATION_DATA[0]} />
        <FooterNavigation data={FOOTER_NAVIGATION_DATA[1]} />
        <CurrencySetter />
      </FooterContainer>
    </>
  )
}