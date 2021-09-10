import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
   name: 'authentication',
   initialState: { isLoggedIn: false, token: '', uId: ''},
   reducers: {
      login(state, action){
         state.token = action.payload.token
         state.uId = action.payload.uId
         state.isLoggedIn = true
      },
      logout(state){
         state.isLoggedIn = false
      },
   }
})

export const authActions = authSlice.actions

export default authSlice