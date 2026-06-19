import { getProducts } from "./get-products.js";

export const productsFilter = async () => {
  const categoriesSelect = document.querySelector("#filter");

  if (!categoriesSelect) {
    return;
  }

  const products = await getProducts();

  const allUniqueCategories = [
    ...new Set(products.map((product) => product.category)),
  ];

  categoriesSelect.innerHTML = "";

  // default filter
  const defaultFilter = "Pokaż wszystkie";
  const defaultOption = document.createElement("option");

  defaultOption.value = defaultFilter;
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
};
