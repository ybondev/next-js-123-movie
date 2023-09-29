import axios from "axios";

const API = process.env.NEXT_API_KEY;

const axiosInstance = axios.create({
  method: "GET",
  url: `https://api.themoviedb.org/3/`,
  params: { append_to_response: "videos", language: "en" },
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API}`,
  },
});

export default axiosInstance;
