const baseUrl = "https://api.themoviedb.org/3/";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer
eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NzYzYWVlZjc2MTQxMDFmYTNiMGE2OTExNTdmMWM3NSIsIm5iZiI6MTc4NDAwMDEyNS40MzcsInN1YiI6IjZhNTVhZTdkM2Y0NzhjOGEyZWUxMTZhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8UfpfBgcP_2gllvk6mZ6wws81BkCwFioQGHEpTnQIoQ`,
  },
};

const fetchMovie = async (endpoint) => {
  const url = `${baseUrl}${endpoint}?language=ko-KR&page=1`;

  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};

export const getNowPlaying = () => fetchMovie("movie/now_playing");

export const getPopular = () => fetchMovie("movie/popular");

export const getRated = () => fetchMovie("movie/top_rated");

export const getUpcoming = () => fetchMovie("movie/upcoming");
