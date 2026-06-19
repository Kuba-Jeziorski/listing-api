import { categoryChange } from "./partials/category-change.js";
import { historyChange } from "./partials/history-change.js";
import { modalWindow } from "./partials/modal-window.js";
import { pageChange, pagination } from "./partials/pagination.js";
import { productsFilterDynamicOptions } from "./partials/products-filter-dynamic-options.js";

document.addEventListener("DOMContentLoaded", async () => {
  await productsFilterDynamicOptions();
  await pagination();
  categoryChange();
  pageChange();
  historyChange();
  modalWindow();
});
