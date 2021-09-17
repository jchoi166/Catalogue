import { configureStore } from "@reduxjs/toolkit";
import exploreSlice from "./explore-slice";
import loaderSlice from "./loader-slice";
import searchSlice from "./search-slice";
import authSlice from "./auth-slice";
import savedSlice from "./saved-slice";

const store = configureStore({
   reducer: {
      exploreSlice: exploreSlice.reducer,
      searchSlice: searchSlice.reducer,
      loaderSlice: loaderSlice.reducer,
      authSlice: authSlice.reducer,
      savedSlice: savedSlice.reducer,
   }
})

export default store