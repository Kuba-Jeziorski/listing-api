import { getModalWrapper } from "./dom-elements.js";

export const productCardExtended = (product) => {
  const modalWrapper = getModalWrapper();

  if (!modalWrapper) {
    return;
  }

  const { id, name, category, price, stock, tags, description } = product;

  const card = document.createElement("div");
  card.classList.add("extended-card");

  const leftRow = document.createElement("div");
  leftRow.classList.add("left-row");

  const leftRowInfo = document.createElement("div");
  leftRowInfo.classList.add("info");

  const rightRow = document.createElement("div");
  rightRow.classList.add("right-row");

  const productId = document.createElement("span");
  productId.textContent = id;

  const productName = document.createElement("h2");
  productName.textContent = name;

  const productCategory = document.createElement("h3");
  productCategory.textContent = category;

  const productStock = document.createElement("p");
  productStock.classList.add("stock");
  productStock.textContent = "Stan: ";

  const stockValue = document.createElement("span");
  stockValue.classList.add(stock ? "available" : "unavailable");
  stockValue.textContent = stock ? "Dostępny" : "Niedostępny";
  productStock.appendChild(stockValue);

  const productPrice = document.createElement("p");
  productPrice.classList.add("price");
  productPrice.textContent = `${price} PLN`;

  const productTags = document.createElement("ul");
  productTags.classList.add("tags");

  (tags ?? []).forEach((tag) => {
    const li = document.createElement("li");
    li.textContent = tag.toUpperCase();
    productTags.appendChild(li);
  });

  const productDescription = document.createElement("p");
  productDescription.classList.add("description");
  productDescription.textContent = description;

  leftRowInfo.appendChild(productName);
  leftRowInfo.appendChild(productCategory);
  leftRowInfo.appendChild(productStock);

  leftRow.appendChild(productId);
  leftRow.appendChild(leftRowInfo);

  rightRow.appendChild(productPrice);

  card.appendChild(leftRow);
  card.appendChild(rightRow);

  card.appendChild(productDescription);

  if (productTags.children.length > 0) {
    card.appendChild(productTags);
  }

  modalWrapper.appendChild(card);
};
