import SyltherineProductImage from '@assets/product-item-images/syltherine.png';
import LeviosaProductImage from '@assets/product-item-images/leviosa.png';
import LolitoProductImage from '@assets/product-item-images/lolito.png';
import RespiraProductImage from '@assets/product-item-images/respira.jpg';

import QualityBenefitIcon from "@assets/benefit-item-icons/benefit-icon-01.svg";
import WarrantyBenefitIcon from "@assets/benefit-item-icons/benefit-icon-02.svg";
import ShippingBenefitIcon from "@assets/benefit-item-icons/benefit-icon-03.svg";
import SupportBenefitIcon from "@assets/benefit-item-icons/benefit-icon-04.svg";

export const PRODUCT_LIST = [
  {
    productId: 1,
    productImage: SyltherineProductImage,
    productTitle: 'Syltherine',
    productDescription: 'Stylish cafe chair',
    productPrice: {
      currentPrice: 2500,
      originalPrice: 2800,
      baseCurrency: 'EUR',
    },
    isNew: false,
    isFavorite: false,
  },
  {
    productId: 2,
    productImage: LeviosaProductImage,
    productTitle: 'Leviosa',
    productDescription: 'Stylish cafe chair',
    productPrice: {
      currentPrice: 1500,
      originalPrice: 1500,
      baseCurrency: 'EUR',
    },
    isNew: false,
    isFavorite: false,
  },
  {
    productId: 3,
    productImage: LolitoProductImage,
    productTitle: 'Lolito',
    productDescription: 'Luxury big sofa',
    productPrice: {
      currentPrice: 7000,
      originalPrice: 9500,
      baseCurrency: 'EUR',
    },
    isNew: true,
    isFavorite: false,
  },
  {
    productId: 4,
    productImage: RespiraProductImage,
    productTitle: 'Respira',
    productDescription: 'Outdoor bar table and stool',
    productPrice: {
      currentPrice: 1200,
      originalPrice: 1200,
      baseCurrency: 'EUR',
    },
    isNew: true,
    isFavorite: false,
  },
];

export const BENEFITS_LIST = [
  {
    benefitId: 1,
    benefitIcon: QualityBenefitIcon,
    benefitTitle: 'High Quality',
    benefitDescription: 'Crafted from top materials',
  },
  {
    benefitId: 2,
    benefitIcon: WarrantyBenefitIcon,
    benefitTitle: 'Warranty Protection',
    benefitDescription: 'Over 2 years',
  },
  {
    benefitId: 3,
    benefitIcon: ShippingBenefitIcon,
    benefitTitle: 'Free Shipping',
    benefitDescription: 'Order over 150 $',
  },
  {
    benefitId: 4,
    benefitIcon: SupportBenefitIcon,
    benefitTitle: '24 / 7 Support',
    benefitDescription: 'Dedicated support',
  },
];

export const FOOTER_NAVIGATION_DATA = [
  {
    navigationId: 0,
    navigationHeading: 'Links',
    navigationLinkNames: ['Home', 'Shop', 'About', 'Contact'],
  },
  {
    navigationId: 1,
    navigationHeading: 'Help',
    navigationLinkNames: ['Payment Options', 'Returns', 'Privacy Policies'],
  },
];