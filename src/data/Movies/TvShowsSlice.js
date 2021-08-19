import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  tvshows: [],
};
const tvshowSlice = createSlice({
  name: "TVshows",
  initialState,
  reducers: {
    setTvShows: (state, action) => {
      state = action.payload;
    },
  },
});
export const { setTvShows } = tvshowSlice.actions;
export const selectTvShow = (state) => state.tvshow.tvshows;
export default tvshowSlice.reducer;
