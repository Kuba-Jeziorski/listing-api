import { categoryChange } from "./partials/category-change.js";
import { displayProducts } from "./partials/display-products.js";
import { productsFilterDynamicOptions } from "./partials/products-filter-dynamic-options.js";

document.addEventListener("DOMContentLoaded", () => {
  displayProducts();
  productsFilterDynamicOptions();
  categoryChange();
});
