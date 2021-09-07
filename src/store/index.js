import { configureStore } from "@reduxjs/toolkit";
import exploreSlice from "./explore-slice";
import searchSlice from "./search-slice";


const store = configureStore({
   reducer: {
      exploreSlice: exploreSlice.reducer,
      searchSlice: searchSlice.reducer
   }
})

export default store