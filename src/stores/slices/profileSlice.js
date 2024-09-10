import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: { profile: [] },
  reducers: {
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
  },
});

export const getData = (token, token_type) => async (dispatch) => {
  try {
    const res = await axios.get("https://soal.staging.id/api/home", {
      headers: {
        Authorization:
          `${token_type} ${token}`,
      },
    });
    dispatch(setProfile(res.data.result));
  } catch (error) {
    console.log(error);
  }
};

export const { setProfile } = profileSlice.actions;
export default profileSlice.reducer;
