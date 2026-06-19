const API_LINK = "https://s5.cosibella.pl/api/test/products";

export const getProducts = async () => {
  const noProductsDivTry = document.querySelector("[data-error=try]");
  const noProductsDivCatch = document.querySelector("[data-error=catch]");

  try {
    const response = await fetch(API_LINK);

    if (!response.ok) {
      throw new Error("Problem z pobieraniem danych");
      if (noProductsDivTry) {
        noProductsDivTry.classList.add("active");
      }
    }

    const data = await response.json();

    noProductsDivTry.classList.remove("active");
    noProductsDivCatch.classList.remove("active");

    return data;
  } catch (error) {
    console.error(error);
    if (noProductsDivCatch) {
      noProductsDivCatch.classList.add("active");
    }
  }
};
