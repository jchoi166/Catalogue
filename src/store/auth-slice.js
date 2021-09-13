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

const FirebaseAPI ='AIzaSyC6rsYpDeS0JX18D5cqfumdrQx_g72FpvY'
let url

const addUserToDatabase = (userId) => {

   const sendRequest = async () => {
      const response = await fetch(`https://catalogue-6cbbf-default-rtdb.firebaseio.com/users/${userId}`,
      {
         method: "PUT",
         body: JSON.stringify({
           name: 'Jin'
         }),
         headers: {
           "Content-Type": "application/json",
         }
       },)
      
       if (!response.ok) {
         throw new Error("Sending cart data failed");
       }
   }

   try {
      console.log('new user has been added!')
      await sendRequest()
   }
   catch (error) {
      console.log(error)
   }
}

export const sendFetch = (loginInfo) => {
   return async (dispatch) => {
      if (loginInfo.isLogin) {
         url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FirebaseAPI}`
      } else {
         url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FirebaseAPI}`
      }

      const fetchData = async () => {
         const response = await fetch(url, 
         {
            method: 'POST',
            body:  JSON.stringify({
               email: loginInfo.enteredEmail,
               password: loginInfo.enteredPassword,
               returnSecureToken: true,
             }),
             headers: {
               "Content-Type": "application/json",
             }
         })

         if (!response.ok) throw new Error("Could not fetch article data");

         const data = await response.json()

         return data
      }

      try {
         const loginData = fetchData()
         dispatch(authActions.login({
            token: loginData.idToken, 
            uId: loginData.localId
         }))
         addUserToDatabase(loginData.idToken)
      }
      catch (error) {
         console.log(error)
      }
   }
}

