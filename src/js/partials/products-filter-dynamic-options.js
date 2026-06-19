import { getProducts } from "./get-products.js";
import { getParams } from "./get-params.js";

export const productsFilterDynamicOptions = async () => {
  const categoriesSelect = document.querySelector("#filter");

  if (!categoriesSelect) {
    return;
  }

  const { category } = getParams();

  const products = await getProducts();

  const allUniqueCategories = [
    ...new Set(products.map((product) => product.category)),
  ];

  categoriesSelect.innerHTML = "";

  // default filter
  const defaultFilter = "Pokaż wszystkie";
  const defaultOption = document.createElement("option");

  defaultOption.value = "Wszystkie";
  defaultOption.textContent = defaultFilter;

  categoriesSelect.appendChild(defaultOption);

  allUniqueCategories.forEach((category) => {
    const option = document.createElement("option");

    option.value = category;
    option.textContent = category;

    categoriesSelect.appendChild(option);
  });

  // extra filter
  const extraFilterOption = "Dodatkowy filtr";
  const extraOption = document.createElement("option");

  extraOption.value = extraFilterOption;
  extraOption.textContent = extraFilterOption;

  categoriesSelect.appendChild(extraOption);

  // sync with url
  if (category.toLowerCase() === "wszystkie") {
    categoriesSelect.value = "Wszystkie";
  } else {
    categoriesSelect.value = category;
  }
};
