import axios from "axios";
import { useContext } from "react";
import { SongsContext } from "../components/Store/context";
import { ISongs } from "../models";
const [songs] = useContext(SongsContext);
const instance = axios.create({
  baseURL: "http://localhost:3000",
});
export const getAll = async function () {
  const res = await instance.get("/songs");
  return res.data;
};
export const getbyId = async function (id: string) {
  const res = await instance.get(`/songs/${id}`);
  return res.data;
};
export const searchProducts = (keyword: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredProducts = songs.filter((product: ISongs) =>
        product.name.toLowerCase().includes(keyword.toLowerCase())
      );
      resolve(filteredProducts);
    }, 1000); // Giả định việc trả về dữ liệu mất 1 giây
  });
};
