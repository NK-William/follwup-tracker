import axios from "axios";
import { baseURL } from "../constants/apis";

const getClient = () => {
  const instance = axios.create({
    baseURL: baseURL,
    timeout: 12000,
  });

  instance.defaults.headers.put["Content-Type"] = "application/json";

  return instance;
};

export default getClient;
