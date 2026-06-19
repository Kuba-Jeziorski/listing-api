const API_LINK = "https://s5.cosibella.pl/api/test/products";

export const getProducts = async () => {
  try {
    const response = await fetch(API_LINK);

    if (!response.ok) {
      throw new Error("Problem z pobieraniem danych");
      // TODO: Update the UI
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    // TODO: Update the UI
  }
};
