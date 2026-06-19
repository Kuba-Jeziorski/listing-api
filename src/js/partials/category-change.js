import { displayProducts } from "./display-products.js";
import { updateUrl } from "./update-url.js";

export const categoryChange = () => {
  const categoriesSelect = document.querySelector("#filter");

  if (!categoriesSelect) {
    return;
  }

  categoriesSelect.addEventListener("change", async (e) => {
    const category = e.target.value;

    updateUrl(category);
    await displayProducts();
  });
};
