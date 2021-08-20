import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  movies: [],
  genres: [],
};
const movieSlice = createSlice({
  //actions
  name: "movie",
  initialState,
  //reducers
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    setMovieByGenre: (state, action) => {
      state.genres = action.payload;
    },
  },
});
export const { setMovies, setMovieByGenre } = movieSlice.actions;
export const selectMovie = (state) => state.movie.movies;
export default movieSlice.reducer;
