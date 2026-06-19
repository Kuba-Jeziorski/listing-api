import { getProducts } from "./get-products.js";

export const displayProducts = async () => {
  const productsList = document.querySelector("#products-list");
  if (!productsList) {
    return;
  }

  const products = await getProducts();

  productsList.innerHTML = "";

  products.forEach((product) => {
    const { id, name, category, price } = product;

    const li = document.createElement("li");

    const productId = document.createElement("span");
    productId.textContent = id;

    const productName = document.createElement("h2");
    productName.textContent = name;

    const productCategory = document.createElement("h3");
    productCategory.textContent = category;

    const productPrice = document.createElement("p");
    productPrice.textContent = price;

    li.appendChild(productId);
    li.appendChild(productName);
    li.appendChild(productCategory);
    li.appendChild(productPrice);

    productsList.appendChild(li);
  });
};
