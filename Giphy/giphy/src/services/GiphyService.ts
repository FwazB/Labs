import axios from "axios";
import { GiphyResponse } from "../models/GiphyResponse";
import SingleGifResponse from "../models/SingleGifResponse";

const apiUrl = process.env.REACT_APP_API_BASE_URL || "";
const apiKey = process.env.REACT_APP_API_KEY || "";

export const searchGif = async (searchTerm: string): Promise<GiphyResponse> => {
  if (!searchTerm) {
    throw new Error("Search term required!");
  }
  let response = await axios.get<GiphyResponse>(
    `${apiUrl}/search?api_key=${apiKey}&q=${searchTerm}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
  );

  return response.data;
};

export const getTrendingGifs = async (): Promise<GiphyResponse> => {
  let response = await axios.get<GiphyResponse>(
    `${apiUrl}/trending?api_key=${apiKey}`
  );
  return response.data;
};

export const getGifById = async (id: string): Promise<SingleGifResponse> => {
  if (!id) {
    throw new Error("ID not found!");
  }
  let response = await axios.get<SingleGifResponse>(
    `${apiUrl}/${encodeURIComponent(id)}?api_key=${apiKey}`
  );
  return response.data;
};
