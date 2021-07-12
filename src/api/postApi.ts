import axiosClient from "./axiosClient";

const postApi = {
  getAllPost: () => {
    const queryString = "/posts";
    return axiosClient.get(queryString);
  },
};

export default postApi;
