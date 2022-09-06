import { Item } from "../interface/Item";
import axiosClient from "./axiosConfig";

export const docAPI = {
  getAll: (): Promise<Item[]> => {
    return axiosClient.get("/doc");
  },
  create: (payload: Item) => {
    return axiosClient.post("/doc", payload);
  },
  delete: (id: number) => axiosClient.delete(`/doc/${id}`),
};
