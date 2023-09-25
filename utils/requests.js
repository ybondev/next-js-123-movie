import axios from "./axios";

const MovieBaseURL = "https://api.themoviedb.org/3/";

// GET MOVIES DISCOVER
export const getMovies = async (param) => {
  try {
    const response = await axios.request(`${MovieBaseURL}${param}`);
    return response.data;
  } catch (error) {
    console.error("Error Caught in Requests utils", error);
  }
};

// GET MOVIES TRENDING
export const getMoviesTrending = async (param) => {
  try {
    const response = await axios.request(`${MovieBaseURL}${param}`);
    return response.data;
  } catch (error) {
    console.error("Error Caught in Requests utils", error);
  }
};

// GET MOVIE BY ID
export const getMovieDetails = async (id) => {
  try {
    const response = await axios.request(`${MovieBaseURL}movie/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error Caught in Requests utils", error);
  }
};

// GET MOVIE SIMILAR BY ID
export const getMovieSimilarDetails = async (id) => {
  try {
    const response = await axios.request(`${MovieBaseURL}movie/${id}/similar`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// GET MOVIE BY QUERY
export const getMovieQuery = async (query) => {
  try {
    const response = await axios.request(
      `${MovieBaseURL}search/multi?query=${query}`
    );
    console.log("params", query);
    return response.data;
  } catch (error) {
    console.error("Error Caught in Requests utils", error);
  }
};

// GET MOVIE COLLECTION BY ID
export const getMovieCollection = async (id) => {
  try {
    const response = await axios.request(`${MovieBaseURL}collection/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error Caught in Requests utils", error);
  }
};

// GET MOVIE COLLECTION BY ID
export const getMovieRecommendation = async (id) => {
  try {
    const response = await axios.request(
      `${MovieBaseURL}/movie/${id}/recommendations`
    );
    return response.data;
  } catch (error) {
    console.error("Error Caught in Requests utils", error);
  }
};

export const getTVShowsRecommendation = async (id) => {
  try {
    const response = await axios.request(
      `${MovieBaseURL}/tv/${id}/recommendations`
    );
    return response.data;
  } catch (error) {
    console.error("Error Caught in Requests utils", error);
  }
};

// GET TV SHOWS
export const getTVShowsSeries = async (param) => {
  try {
    const response = await axios.request(`${MovieBaseURL}${param}`);
    return response.data;
  } catch (error) {
    console.error("Error Caught in Requests utils", error);
  }
};

// GET TVSHOWS DETAILS BY ID
export const getTVShows = async (id) => {
  try {
    const response = await axios.request(`${MovieBaseURL}${id}`);
    return response.data;
  } catch (error) {
    console.error("Error Caught in Requests utils", error);
  }
};

// GET TVSHOWS SIMILAR BY ID
export const getTVShowsSimilar = async (id) => {
  try {
    const response = await axios.request(`${MovieBaseURL}${id}`);
    return response.data;
  } catch (error) {
    console.error("Error Caught in Requests utils", error);
  }
};
