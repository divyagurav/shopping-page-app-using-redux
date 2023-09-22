import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./uI-slice";

const store = configureStore({
  reducer: { ui: uiSlice.reducer },
});

export default store;
