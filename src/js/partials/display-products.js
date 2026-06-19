import { filteredProducts } from "./filtered-products.js";

export const displayProducts = async () => {
  const productsList = document.querySelector("#products-list");
  const noProductsDiv = document.querySelector("[data-error=no-products]");

  if (!productsList) {
    return;
  }

  const products = await filteredProducts();

  productsList.innerHTML = "";

  if (products.length === 0 && noProductsDiv) {
    noProductsDiv.classList.add("active");
  } else {
    noProductsDiv.classList.remove("active");
  }

  products.forEach((product) => {
    const { id, name, category, price } = product;

    const li = document.createElement("li");
    const leftRow = document.createElement("div");
    const rightRow = document.createElement("div");

    leftRow.classList.add("left-row");
    rightRow.classList.add("right-row");

    const productId = document.createElement("span");
    productId.textContent = id;

    const productName = document.createElement("h2");
    productName.textContent = name;

    const productCategory = document.createElement("h3");
    productCategory.textContent = category;

    const productPrice = document.createElement("p");
    productPrice.textContent = `${price} PLN`;

    leftRow.appendChild(productId);
    leftRow.appendChild(productName);
    leftRow.appendChild(productCategory);
    rightRow.appendChild(productPrice);

    li.appendChild(leftRow);
    li.appendChild(rightRow);

    productsList.appendChild(li);
  });
};
