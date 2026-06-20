export const getProductsList = () => document.querySelector("#products-list");

export const getPagination = () => document.querySelector("#pagination");

export const getFilter = () => document.querySelector("#filter");

export const getFiltering = () => document.querySelector("#filtering");

export const getNoProductsDiv = () =>
  document.querySelector("[data-error=no-products]");

export const getErrorTryDiv = () => document.querySelector("[data-error=try]");

export const getErrorCatchDiv = () =>
  document.querySelector("[data-error=catch]");

export const getModal = () => document.querySelector("#modal");

export const getModalWrapper = () => document.querySelector("#modal .wrapper");

export const getModalCloseButton = () =>
  document.querySelector("#modal .close");

export const getLoader = () => document.querySelector("#loader");
