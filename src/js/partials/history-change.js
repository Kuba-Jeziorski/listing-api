import { pagination } from "./pagination.js";
import { syncFilterFromUrl } from "./products-filter-dynamic-options.js";

export const historyChange = () => {
  window.addEventListener("popstate", async () => {
    syncFilterFromUrl();
    await pagination();
  });
};
