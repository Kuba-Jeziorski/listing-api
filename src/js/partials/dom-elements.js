export const getProductsList = () => document.querySelector("#products-list");

export const getPagination = () => document.querySelector("#pagination");

export const getFilter = () => document.querySelector("#filter");

export const getNoProductsDiv = () =>
  document.querySelector("[data-error=no-products]");

export const getErrorTryDiv = () => document.querySelector("[data-error=try]");

export const getErrorCatchDiv = () =>
  document.querySelector("[data-error=catch]");
