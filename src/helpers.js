export const BASE_URL = 'http://127.0.0.1:3000';

export const sortTypeMapper = new Map([
  [-1, "Default"],
  [0, "A - Z"],
  [1, "Z - A"],
  [2, "Most Expensive"],
  [3, "Cheapest"],
]);

export const sortFn = (items, type) => {
  const temp = [...items];
  if (type === -1) {
    return items;
  } else if (type === 0) {
    return temp.sort((a, b) => a.productTitle.localeCompare(b.productTitle))
  } else if (type === 1) {
    return temp.sort((a, b) => b.productTitle.localeCompare(a.productTitle))
  } else if (type === 2) {
    return temp.sort((a, b) => b.productPrice.currentPrice - a.productPrice.currentPrice);
  } else {
    return temp.sort((a, b) => a.productPrice.currentPrice - b.productPrice.currentPrice);
  }
}

export const kindTypeMapper = new Map([
  [-1, "All"],
  [0, "Living room"],
  [1, "Kitchen"],
  [2, "Bedroom"],
]);

export const filterFn = (items, type) => {
  if (type === -1) return items;
  
  const filtered = items.filter(item => {
    if (item.kind.includes(type)) {
      return true; // returned
    } else {
      return false; // filtered
    }
  });
  return filtered;
};

export const setBgImageInline = imageName => {
  return {
    // ./ refers to the public folder
    backgroundImage: `url(./images/${imageName}.png)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }
}

export const convertCurrency = (amount, defaultCurr, targetCurr, rates) => {
  if (defaultCurr === targetCurr) return amount?.toLocaleString("de-DE");
  let rate;
  for (const currKey in rates) {
    if (currKey === targetCurr.toUpperCase()) {
      rate = rates[currKey];
      break;
    }
  }
  return Math.floor((amount * rate))?.toLocaleString("de-DE");
};

export const scrollUp = () => {
  const el = document.querySelector('[class^="_filter-container"]');
  el.scrollIntoView();
};

export const paginatorSliceValues = (pageNum, maxItemsPerPage) => {
  const endingIndex = maxItemsPerPage * pageNum;
  const startingIndex = endingIndex - maxItemsPerPage;
  return [startingIndex, endingIndex];
};