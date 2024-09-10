import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./slices/profileSlice";
import menuReducer from "./slices/menuSlice";
import loginReducer from "./slices/loginSlice";

const store = configureStore({
  reducer: {
    profile: profileReducer,
    menu: menuReducer,
    login: loginReducer
  },
});

export default store;
