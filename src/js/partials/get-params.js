export const getParams = () => {
  const params = new URLSearchParams(window.location.search);

  return {
    category: params.get("category") || "wszystkie",
  };
};
