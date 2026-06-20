import {
  getErrorCatchDiv,
  getErrorTryDiv,
  getFiltering,
  getLoader,
} from "./dom-elements.js";

const API_LINK = "https://s5.cosibella.pl/api/test/products";
const ARTIFICIAL_TIMEOUT = 3000;

let fetchedProducts = null;

export const getProducts = async () => {
  if (!fetchedProducts) {
    fetchedProducts = await fetchProducts();
  }
  return fetchedProducts;
};

const fetchProducts = async () => {
  const noProductsDivTry = getErrorTryDiv();
  const noProductsDivCatch = getErrorCatchDiv();
  const filteringElement = getFiltering();
  const loaderElement = getLoader();

  loaderElement.classList.add("active");

  try {
    const response = await fetch(API_LINK);

    // timeout to display a loader
    await new Promise((resolve) => {
      setTimeout(resolve, ARTIFICIAL_TIMEOUT);
    });

    if (!response.ok) {
      if (noProductsDivTry) {
        noProductsDivTry.classList.add("active");
      }
      throw new Error("Problem z pobieraniem danych");
    }

    const data = await response.json();

    if (noProductsDivTry) {
      noProductsDivTry.classList.remove("active");
    }
    if (noProductsDivCatch) {
      noProductsDivCatch.classList.remove("active");
    }

    if (loaderElement) {
      loaderElement.classList.add("active");
    }

    if (filteringElement) {
      filteringElement.classList.add("active");
    }

    return data;
  } catch (error) {
    console.error(error);
    if (noProductsDivCatch) {
      noProductsDivCatch.classList.add("active");
    }
    return [];
  } finally {
    loaderElement.classList.remove("active");
  }
};
