import { categoryChange } from "./partials/category-change.js";
import { pageChange, pagination } from "./partials/pagination.js";
import { productsFilterDynamicOptions } from "./partials/products-filter-dynamic-options.js";

document.addEventListener("DOMContentLoaded", async () => {
  await productsFilterDynamicOptions();
  await pagination();
  categoryChange();
  pageChange();
});
