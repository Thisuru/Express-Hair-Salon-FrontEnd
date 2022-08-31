import axios, { AxiosInstance } from "axios";
import { BASE_URL } from "../utils/EndPoints";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.withCredentials = true;

// Create axios instance for api calls
var instance: AxiosInstance | null = null;

export const setAuth = () => {
  instance = axios.create({
    baseURL: "",
    timeout: 120000,

    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });

  instance.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      console.log(error);
      if (
        error.response &&
        error.response.status !== undefined &&
        error.response.status === 401
      ) {
        localStorage.clear();
        // window.location : = "/";
      }
      return Promise.reject(error);
    }
  );
};

const createPath = (action: string) => {
  const url = `${BASE_URL}${action}`;
  return url;
};

export default {
  Get: async (route: string, data: any) => {
    instance || (await setAuth());
    return instance && instance.get(createPath(route), data);
  },
  Post: async (route: string, data: any) => {
    instance || (await setAuth());
    return instance && instance.post(createPath(route), JSON.stringify(data));
  },
  Put: async (route: string, data: any) => {
    instance || (await setAuth());
    return instance && instance.put(createPath(route), JSON.stringify(data));
  },
  Delete: async (route: string, data: any) => {
    instance || (await setAuth());
    return instance && instance.delete(createPath(route), { data: data });
  },
  Patch: async (route: string, data: any) => {
    instance || (await setAuth());
    return instance && instance.patch(createPath(route), JSON.stringify(data));
  },
  // Download: async (route: string, data: any) => {
  //   return axios
  //     .create({
  //       baseURL: "",
  //       timeout: 30000,
  //       // headers: {
  //       //   authorization: `${localStorage.token}`,
  //       // },
  //     })
  //     .get(route, JSON.stringify(data));
  // },
  Upload: async (route: string, data: {}) => {
    console.log("route : ", route);
    console.log("data : ", data);
    // console.log("JSON.stringify(data) : ", JSON.stringify(data));

    return axios
      .create({
        baseURL: "",
        timeout: 300000,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .post(route, data === {} ? null : data);
  },
};