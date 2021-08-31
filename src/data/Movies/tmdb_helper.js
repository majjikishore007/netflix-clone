export const getMovies = async () => {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_APP}&language=en-US&page=1`
  );
  const response = await data.json();

  return response.results;
};

export const getTrending = async () => {
  const data = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_TMDB_APP}`
  );
  const response = await data.json();

  return response.results;
};
export const getUpComing = async () => {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_APP}&language=en-US&page=1`
  );
  const response = await data.json();

  return response.results;
};

export const getVedioKey = async (id) => {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_TMDB_APP}&language=en-US`
  );
  const response = await data.json();
  return response.results;
};

export const getMovieById = async (id) => {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_APP}&language=en-US`
  );
  const response = await data.json();
  console.log(response);
  return response;
};