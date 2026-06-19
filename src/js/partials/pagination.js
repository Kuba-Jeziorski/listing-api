import { filteredProducts } from "./filtered-products.js";
import { getParams } from "./get-params.js";
import { productCard } from "./product-card.js";
import { updateUrl } from "./update-url.js";

const PER_PAGE = 6;
const paginationElement = document.querySelector("#pagination");
const productsList = document.querySelector("#products-list");
const noProductsDiv = document.querySelector("[data-error=no-products]");

export const pagination = async () => {
  const { page, category } = getParams();
  const products = await filteredProducts();

  if (!paginationElement) {
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
  paginationElement.addEventListener("click", async (e) => {
    if (e.target.tagName !== "BUTTON") {
      return;
    }

    const { category } = getParams();

    const page = Number(e.target.dataset.page);

    updateUrl(category, page);
    await pagination();
  });
};
