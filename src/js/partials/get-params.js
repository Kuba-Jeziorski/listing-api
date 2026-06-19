const parsePage = (value) => {
  const page = parseInt(value, 10);
  if (Number.isNaN(page) || page < 1) {
    return 1;
  }
  return page;
};

export const getParams = () => {
  const params = new URLSearchParams(window.location.search);
  return {
    category: params.get("category") || "wszystkie",
    page: parsePage(params.get("page")),
  };
};
