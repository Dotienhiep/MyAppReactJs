import axios from "axios";

const getListProduct = async (api) => {
  try {
    const response = axios.get(api);
    return response;
  } catch (err) {}
};
const getListProductHome = async () => {
  try {
    const response = axios.get("https://api-nodejs-backend.onrender.com/home");
    return response;
  } catch (err) {}
};
const createOrder = async (order) => {
  try {
    const response = axios.post(
      "https://api-nodejs-backend.onrender.com/order",
      order
    );
    return response;
  } catch (err) {}
};

export { getListProduct, getListProductHome, createOrder };
