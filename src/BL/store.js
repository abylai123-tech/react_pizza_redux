import { configureStore } from "@reduxjs/toolkit";

import catalogSlice from "./slices/catalogSlice";

export const store = configureStore({
  reducer: {
    catalogSlice,
    // userSlice,
    // basketSlice,
  },
});
