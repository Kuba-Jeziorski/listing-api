import {
  getNoProductsDiv,
  getPagination,
  getProductsList,
} from "./dom-elements.js";
import { filteredProducts } from "./filtered-products.js";
import { getParams } from "./get-params.js";
import { productCardSimple } from "./product-card-simple.js";
import { updateUrl } from "./update-url.js";

const PER_PAGE = 6;

export const pagination = async () => {
  const paginationElement = getPagination();
  const productsList = getProductsList();
  const noProductsDiv = getNoProductsDiv();
  const { page, category } = getParams();
  const products = await filteredProducts();

  if (!paginationElement || !productsList) {
    return;
  }

  const totalPages = Math.ceil(products.length / PER_PAGE);
  const start = (page - 1) * PER_PAGE;
  const paginated = products.slice(start, start + PER_PAGE);

  productsList.innerHTML = "";

  if (products.length === 0 && noProductsDiv) {
    noProductsDiv.classList.add("active");
  } else {
    noProductsDiv.classList.remove("active");
  }

  // paginated listing
  paginated.forEach((product) => productCardSimple(product));

  // pagination navigation
  paginationElement.innerHTML = "";

  const pagination = document.createElement("div");
  pagination.classList.add("pagination");

  if (totalPages === 1) {
    pagination.classList.add("hidden");
  }

  Array.from({ length: totalPages }, (_, i) => i + 1).forEach((singlePage) => {
    const button = document.createElement("button");

    button.textContent = singlePage;
    button.dataset.page = singlePage;

    if (singlePage === page) {
      button.classList.add("active");
    }

    pagination.appendChild(button);
  });

  paginationElement.appendChild(pagination);
};

export const pageChange = () => {
  const paginationElement = getPagination();

  if (paginationElement) {
    paginationElement.addEventListener("click", async (e) => {
      if (e.target.tagName !== "BUTTON") {
        return;
      }

      const { category } = getParams();

      const page = Number(e.target.dataset.page);

      updateUrl(category, page);
      await pagination();
    });
  }
};
