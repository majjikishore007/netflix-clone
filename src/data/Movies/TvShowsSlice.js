import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  tvPopular: [],
  topRated: [],
};
const tvshowSlice = createSlice({
  name: "TVshows",
  initialState,
  reducers: {
    setTvShows: (state, action) => {
      console.log("payload", action.payload);
      state.tvPopular = action.payload;
      console.log("payload2", state.tvPopular);
    },
    setTopRated: (state, action) => {
      state.topRated = action.payload;
    },
  },
});
export const { setTvShows, setTopRated, setLatest } = tvshowSlice.actions;
export const selectTvShow = (state) => state.tvshow.tvPopular;
export const selectTopRated = (state) => state.tvshow.topRated;
export default tvshowSlice.reducer;
