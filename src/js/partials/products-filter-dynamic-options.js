import { getFilter } from "./dom-elements.js";
import { getProducts } from "./get-products.js";
import { getParams } from "./get-params.js";

export const syncFilterFromUrl = () => {
  const categoriesSelect = getFilter();

  if (!categoriesSelect) {
    return;
  }

  const { category } = getParams();

  if (category.toLowerCase() === "wszystkie") {
    categoriesSelect.value = "Wszystkie";
  } else {
    categoriesSelect.value = category;
  }
};

export const productsFilterDynamicOptions = async () => {
  const categoriesSelect = getFilter();

  if (!categoriesSelect) {
    return;
  }

  const products = (await getProducts()) ?? [];

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

  allUniqueCategories.forEach((cat) => {
    const option = document.createElement("option");

    option.value = cat;
    option.textContent = cat;

    categoriesSelect.appendChild(option);
  });

  // extra filter
  const extraFilterOption = "Dodatkowy filtr";
  const extraOption = document.createElement("option");

  extraOption.value = extraFilterOption;
  extraOption.textContent = extraFilterOption;

  categoriesSelect.appendChild(extraOption);

  syncFilterFromUrl();
};
