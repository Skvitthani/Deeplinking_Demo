export const getApiData = async () => {
  try {
    const response = await fetch(
      `https://dummyjson.com/products?skip=0&limit=20`,
    );
    const res = response.json();
    return res;
  } catch (error) {
    console.log('error', error);
  }
};

export const getSingleProduct = async productId => {
  try {
    const response = await fetch(`https://dummyjson.com/products/${productId}`);
    console.log('response', response);
    const res = response.json();
    return res;
  } catch (error) {
    console.log('Error:', error);
  }
};
