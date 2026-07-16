const baseUrl = "https://api.themoviedb.org/3/";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NzYzYWVlZjc2MTQxMDFmYTNiMGE2OTExNTdmMWM3NSIsIm5iZiI6MTc4NDAwMDEyNS40MzcsInN1YiI6IjZhNTVhZTdkM2Y0NzhjOGEyZWUxMTZhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8UfpfBgcP_2gllvk6mZ6wws81BkCwFioQGHEpTnQIoQ`,
  },
};

const fetchMovie = async (endpoint) => {
  const url = `${baseUrl}${endpoint}?language=ko-KR&page=1`;

  const res = await fetch(url, options);
  const data = await res.json();

  return {
    response: {
      result: data.results,
      page: data.page,
      total_pages: data.total_pages,
      total_results: data.total_results,
      dates: data.dates,
    },
  };
};

export const getNowPlaying = () => fetchMovie("movie/now_playing");
export const getPopular = () => fetchMovie("movie/popular");
export const getRated = () => fetchMovie("movie/top_rated");
export const getUpcoming = () => fetchMovie("movie/upcoming");
