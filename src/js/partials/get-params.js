export const getParams = () => {
  const params = new URLSearchParams(window.location.search);

  return {
    category: params.get("category") || "wszystkie",
    page: parseInt(params.get("page")) || 1,
  };
};
