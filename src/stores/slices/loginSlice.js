import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const loginSlice = createSlice({
  name: "login",
  initialState: { token: null, token_type: null },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setTokenType: (state, action) => {
      state.token_type = action.payload;
    },
  },
});

export const { setToken, setTokenType } = loginSlice.actions;

export const loginUser = (credentials, navigate) => async (dispatch) => {
  try {
    console.log("Start");
    const res = await axios.post(`https://soal.staging.id/oauth/token`, {
      ...credentials,
      grant_type: "password",
      client_secret: "0a40f69db4e5fd2f4ac65a090f31b823",
      client_id: "e78869f77986684a",
    });
    dispatch(setToken(res.data.access_token));
    dispatch(setTokenType(res.data.token_type));
    console.log("End");
    navigate("/home");
  } catch (error) {
    console.log(error);
  }
};

export default loginSlice.reducer;
