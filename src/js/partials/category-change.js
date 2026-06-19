import { getFilter } from "./dom-elements.js";
import { pagination } from "./pagination.js";
import { updateUrl } from "./update-url.js";

export const categoryChange = () => {
  const categoriesSelect = getFilter();

  if (!categoriesSelect) {
    return;
  }

  categoriesSelect.addEventListener("change", async (e) => {
    const category = e.target.value;

    updateUrl(category, 1);
    await pagination();
  });
};
