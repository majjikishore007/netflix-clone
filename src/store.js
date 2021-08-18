import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./data/Movies/MovieSlice";
// 3a6ea45912e022a5d4fdac499fa4adc2
export const store = configureStore({
  reducer: {
    movie: movieReducer,
  },
});
