import { displayProducts } from "./partials/display-products.js";
import { getProducts } from "./partials/get-products.js";
import { productsFilter } from "./partials/products-filter.js";

document.addEventListener("DOMContentLoaded", () => {
  displayProducts();
  productsFilter();
});
