import {
  getModal,
  getModalCloseButton,
  getModalWrapper,
  getProductsList,
} from "./dom-elements.js";
import { getProducts } from "./get-products.js";
import { productCardExtended } from "./product-card-extended.js";

export const modalWindow = async () => {
  const modalElement = getModal();
  const modalCloseButton = getModalCloseButton();
  const modalWrapper = getModalWrapper();
  const productsList = getProductsList();

  const products = (await getProducts()) ?? [];

  if (!modalElement || !productsList) {
    return;
  }

  const closeModal = () => {
    modalElement.classList.remove("active");
  };

  modalCloseButton?.addEventListener("click", closeModal);

  modalElement.addEventListener("click", (e) => {
    if (e.target === modalElement) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalElement.classList.contains("active")) {
      closeModal();
    }
  });

  productsList.addEventListener("click", (e) => {
    const { target } = e;

    const parent = target.closest("li");

    if (parent.tagName !== "LI") {
      return;
    }

    modalWrapper
      ?.querySelectorAll(".extended-card")
      .forEach((card) => card.remove());

    modalElement.classList.add("active");

    const index = Number(parent.getAttribute("data-index")) ?? 0;

    const selectedProduct =
      products.filter((prod) => prod.id === index)[0] ?? {};

    productCardExtended(selectedProduct);
  });
};
