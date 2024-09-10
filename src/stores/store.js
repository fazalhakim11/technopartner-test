import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./slices/profileSlice";
import menuReducer from "./slices/menuSlice";

const store = configureStore({
  reducer: {
    profile: profileReducer,
    menu: menuReducer,
  },
});

export default store;
