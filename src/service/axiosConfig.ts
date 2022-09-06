import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";

const createAppAxios = (contentType: string): AxiosInstance => {
  const appAxios = axios.create({
    baseURL: "https://63171b7082797be77ff3791e.mockapi.io/",
    headers: {
      "content-type": contentType,
    },
  });

  appAxios.interceptors.request.use(async (config: AxiosRequestConfig) => {
    return config;
  });

  appAxios.interceptors.response.use(
    (response: AxiosResponse) => {
      if (response && response.data) return response.data;
      return response;
    },
    async (errors: AxiosError<unknown>) => {
      return errors;
    }
  );

  return appAxios;
};

const axiosClient = createAppAxios("application/json");

export default axiosClient;
