import { createSlice } from "@reduxjs/toolkit";
import { isAuthenticated, signout } from '../../components/helper';
const { displayName, email, photoURL } = isAuthenticated();

const initialState = {
  name: displayName,
  email: email,
  photo: photoURL,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserLogin: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },
    setUserSignout: (state, action) => {
      state.name = '';
      state.email = '';
      state.photo = '';
      signout();
    },
  },
});
export const { setUserLogin, setUserSignout } = userSlice.actions;
export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;

export default userSlice.reducer;
