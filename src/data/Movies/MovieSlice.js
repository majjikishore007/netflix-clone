import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  movies: [],
};
const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
});
console.log("ACTIONS ", movieSlice.actions);
export const { setMovies } = movieSlice.actions;
export const selectMovie = (state) => state.movie.movies;
export default movieSlice.reducer;
