import { configureStore, Tuple } from "@reduxjs/toolkit";
import cocktailSlice from "./slices/cocktailSlice";

const reducers = {
  [cocktailSlice.name]: cocktailSlice,
};

const store = configureStore({
  reducer: {
    cocktails: cocktailSlice,
  },
});

export default store;
