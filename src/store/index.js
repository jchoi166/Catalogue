import { configureStore } from "@reduxjs/toolkit";
import exploreSlice from "./explore-slice";


const store = configureStore({
   reducer: {
      exploreSlice: exploreSlice.reducer
   }
})

export default store