export const updateUrl = (category) => {
  const params = new URLSearchParams();

  if (category && category.toLowerCase() !== "wszystkie") {
    params.set("category", category);
  }

  window.history.pushState({}, "", `?${params.toString()}`);
};
