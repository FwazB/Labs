import axios from "axios";
import { Product } from "../models/Product";

const baseURL = process.env.REACT_APP_MONGO_BASE_URL || "";

export const getProducts = async (
  maxPrice: number | null,
  includes: string | null,
  limit: number | null
): Promise<Product[]> => {
  const params: Record<string, string | number> = {};
  if (maxPrice !== null) {
    params["max-price"] = maxPrice.toString();
  }
  if (includes !== null) {
    params.includes = includes;
  }
  if (limit !== null) {
    params.limit = limit.toString();
  }

  return (await axios.get(`${baseURL}/products`, { params })).data;
};
