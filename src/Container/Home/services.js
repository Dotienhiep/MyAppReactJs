import axios from "axios";

export const getListProductHomeAPI = async () => {
  return axios.get("https://api-nodejs-backend.onrender.com/home");
};
