import { getNoProductsDiv, getPagination, getProductsList } from "./dom-elements.js";
import { filteredProducts } from "./filtered-products.js";
import { getParams } from "./get-params.js";
import { productCard } from "./product-card.js";
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

  paginated.forEach((product) => productCard(product));

  // PAGINATION
  paginationElement.innerHTML = `
    <div class="pagination">
      ${Array.from({ length: totalPages }, (_, i) => i + 1)
        .map(
          (p) => `
            <button class="${p === page ? "active" : ""}" data-page="${p}">
              ${p}
            </button>
          `,
        )
        .join("")}
    </div>
  `;
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
