import axios from "axios";
import qs from "qs";
import { BASE_URL } from "./config";
import { API_KEY } from "./config";

export const getMovies = async (MovieSelection) => {
  const url = `${BASE_URL}/movie/${MovieSelection}/?api_key=${API_KEY}&language=en-US&page=1`;
  const response = await axios.get(url);
  return response.data;
};

export const getTvShows = async (TVSelection) => {
  const url = `${BASE_URL}/tv/${TVSelection}/?api_key=${API_KEY}&language=en-US&page=1`;
  const response = await axios.get(url);
  return response.data;
};

export const getSearch = async (searchField, searchType) => {
  const url = `${BASE_URL}/search/${searchType}?api_key=${API_KEY}&language=en-US&query=${searchField}&page=1&include_adult=false`;
  const response = await axios.get(url);
  return response.data;
};
