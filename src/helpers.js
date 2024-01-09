export const BASE_URL = 'http://127.0.0.1:3000';

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
  if (defaultCurr === targetCurr) return amount.toLocaleString("de-DE");
  let rate;
  for (const currKey in rates) {
    if (currKey === targetCurr.toUpperCase()) {
      rate = rates[currKey];
      break;
    }
  }
  return Math.floor((amount * rate)).toLocaleString("de-DE");
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