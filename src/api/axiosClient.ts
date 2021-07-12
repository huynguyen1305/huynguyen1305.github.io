import axios, { AxiosResponse } from "axios";
import queryString from "query-string";
// Set up default config for http requests here

// Please have a look at here `https://github.com/axios/axios#request-config` for the full list of configs

const baseURL: string = "https://jsonplaceholder.typicode.com/";

const axiosClient = axios.create({
  baseURL: baseURL,
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  // Handle Authenticate token  ...
  return config;
});

axiosClient.interceptors.response.use(
  (response: AxiosResponse) => {
    //Transform data
    return response;
  },
  (error) => {
    // Handle errors
    throw error;
  }
);
export default axiosClient;
