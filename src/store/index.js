import { configureStore } from "@reduxjs/toolkit";
import exploreSlice from "./explore-slice";
import loaderSlice from "./loader-slice";
import searchSlice from "./search-slice";
import authSlice from "./auth-slice";

const store = configureStore({
   reducer: {
      exploreSlice: exploreSlice.reducer,
      searchSlice: searchSlice.reducer,
      loaderSlice: loaderSlice.reducer,
      authSlice: authSlice.reducer,
   }
})

export default store