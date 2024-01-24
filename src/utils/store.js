import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import chatSlice from "./chatSlice";
import counterSlice from "./counterSlice";

const store = configureStore({
  reducer: {
    chat: chatSlice,
    app: appSlice,
    counter: counterSlice,
  },
});

export default store;
