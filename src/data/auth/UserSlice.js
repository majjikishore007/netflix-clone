import { createSlice } from "@reduxjs/toolkit";
import { isAuthenticated } from '../../components/helper';
const { displayName, email, photoURL } = isAuthenticated();

const initialState = {
  name: displayName,
  email: email,
  photo: photoURL,
};

console.log('getting the detalis -----', email);
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserLogin: (state, action) => {
      state.name = displayName;
      state.email = email;
      state.photo = photoURL;
    },
    setUserSignout: (state, action) => {
      state.name = '';
      state.email = '';
      state.photo = '';
    },
  },
});
export const { setUserLogin, setUserSignout } = userSlice.actions;
export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;

export default userSlice.reducer;
