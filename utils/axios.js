import axios from "axios";

const axiosInstance = axios.create({
  method: "GET",
  url: `https://api.themoviedb.org/3/`,
  params: { append_to_response: "videos", language: "en" },
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OGUzMTNjYWU1NzkxYjdjMjc1ZDM1YWJmMGRjOWQ1YiIsInN1YiI6IjY1MDQ2MGExZTBjYTdmMDEyZWJhN2I1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KdiSZiCctQm9k7XkHEbNL-612lCJGJgDg4MPdQ_7fOc",
  },
});

export default axiosInstance;
