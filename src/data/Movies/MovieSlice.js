import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  movies: [],
  trending: [],
  upcoming: [],
};
const movieSlice = createSlice({
  //actions
  name: "movie",
  initialState,
  //reducers
  reducers: {
    setMovies: (state, action) => {
      console.log(action.payload);
      state.movies = action.payload;
    },
    setTrending: (state, action) => {
      state.trending = action.payload;
    },
    setUpcoming: (state, action) => {
      state.upcoming = action.payload;
    },
  },
});
export const { setMovies, setTrending, setUpcoming } = movieSlice.actions;
export const selectMovie = (state) => state.movie.movies;
export const selectUpComingMovies = (state) => state.movie.upcoming;
export const selectTrendingMovies = (state) => state.movie.trending;
export default movieSlice.reducer;
