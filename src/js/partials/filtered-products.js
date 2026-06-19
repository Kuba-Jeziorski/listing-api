import { getProductsList } from "./dom-elements.js";
import { getParams } from "./get-params.js";
import { getProducts } from "./get-products.js";

export const filteredProducts = async () => {
  const productsList = getProductsList();
  if (!productsList) {
    return [];
  }

  const { category } = getParams();

  const products = (await getProducts()) ?? [];

  const filteredProducts = products.filter((product) => {
    if (category.toLowerCase() === "wszystkie") {
      return true;
    }

    return product.category === category;
  });

  return filteredProducts;
};
