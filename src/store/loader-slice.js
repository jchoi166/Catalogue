import { createSlice } from "@reduxjs/toolkit";


const loaderSlice = createSlice({
   name: 'loader',
   initialState: {notification: null},
   reducers: {
      setStatus(state, action) {
        state.notification = {
         status: action.payload.status,
         title: action.payload.title,
         message: action.payload.message,
        }
      }
   }
})

export const loaderActions = loaderSlice.actions

export default loaderSlice