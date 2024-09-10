import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: { menu: [] },
  reducers: {
    setMenu: (state, action) => {
      state.menu = action.payload;
    },
  },
});

export const getMenu = (token, token_type) => async (dispatch) => {
  try {
    const res = await axios.post(
      "https://soal.staging.id/api/menu",
      { show_all: "1" },
      {
        headers: {
          Authorization:
            `${token_type} ${token}`,
        },
      }
    );
    dispatch(setMenu(res.data.result));
  } catch (error) {
    console.log(error);
  }
};

export const { setMenu } = menuSlice.actions;
export default menuSlice.reducer;
