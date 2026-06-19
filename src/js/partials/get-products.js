import { getErrorCatchDiv, getErrorTryDiv } from "./dom-elements.js";

const API_LINK = "https://s5.cosibella.pl/api/test/products";

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

  try {
    const response = await fetch(API_LINK);

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

    return data;
  } catch (error) {
    console.error(error);
    if (noProductsDivCatch) {
      noProductsDivCatch.classList.add("active");
    }
    return [];
  }
};
