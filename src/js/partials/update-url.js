export const updateUrl = (category, page) => {
  const params = new URLSearchParams();

  if (category && category.toLowerCase() !== "wszystkie") {
    params.set("category", category);
  }

  params.set("page", page);

  window.history.pushState({}, "", `?${params.toString()}`);
};
